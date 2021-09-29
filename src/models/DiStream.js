const usb = require('usb');
const logger = require('node-color-log');
const { v4: uuidv4 } = require('uuid');
const Goggles = require('./Goggles');
const StreamProcess = require('./StreamProcess');
const WebServer = require("./WebServer");

/**
 * Represents the DiStream Object
 */
class DiStream {
    static DEFAULT_PORT = 1230;

    _goggles_list = [];
    _webServer;

    constructor() {
        // starts the interval for checking the connected usb devices
        setInterval(() => this._checkGoggles(), 3000);
        logger.color('green').log("Started looking for goggles.");
        this._webServer = new WebServer();
    }

    /**
     * Checks which ports are in use.
     * @returns {number} the next available port
     * @private
     */
    _getAvailablePort() {
        let used_ports = this._goggles_list.map(goggles => {return goggles.stream_process.port});
        for (let i = 0; i < 8; i++) {
            let port = DiStream.DEFAULT_PORT + i;
            if (used_ports.indexOf(port) === -1) {
                return port;
            }
        }
    }

    /**
     * Check all x seconds for a newly connected or disconnected goggles.
     * Initialises communication
     * @private
     */
    _checkGoggles() {
        // filters list by DJI Vendor and Product ID
        let devices = usb.getDeviceList().filter(device => device.deviceDescriptor.idVendor === 11427 && device.deviceDescriptor.idProduct === 31);

        // goes throw each device and checks if its new
        devices.forEach(device => {
            if (device.id === undefined && this._goggles_list.length < 8) {
                device.id = uuidv4();
                let port = this._getAvailablePort();

                logger.color('green').info("New Goggles found! Running on Port " + port + ". (" + (this._goggles_list.length + 1) + " connected)");
                this._webServer.emitSocketData('goggles_change', this._goggles_list.map(goggles => goggles.stream_process.fullUrl));

                let stream_process = new StreamProcess(port);
                let goggles = new Goggles(device, stream_process, (o) => {
                    this._goggles_list = this._goggles_list.filter(goggle => goggle.id !== o.id);

                    logger.color('green').info("Goggles on Port " + o.stream_process.port + " disconnected. (" + this._goggles_list.length + " connected)");
                    this._webServer.emitSocketData('goggles_change', this._goggles_list.map(goggles => goggles.stream_process.fullUrl));
                });
                this._goggles_list.push(goggles);

            }
        });

        // goes throw the list of connected devices and checks if they are still connected
        this._goggles_list.filter(g => (devices.filter(device => device.id === g.id).length === 0)).forEach(googles => {
            googles.close();
        });
    }
}
module.exports = DiStream;
