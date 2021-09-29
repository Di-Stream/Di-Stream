const logger = require('node-color-log');

/**
 * Represents the Goggles Object
 */
class Goggles {
    static MAGIC = Buffer.from("524d5654", "hex");
    static QUEUE_SIZE = 3;
    static READ_SIZE = 512;

    _usb;
    _in;
    _out;
    _onCloseEvent;
    stream_process;

    /**
     * Constructs a Goggles object.
     * @param usb is the usb device of the goggles
     * @param stream_process is the stream_process where all incoming data will be routed to.
     * @param onCloseEvent is the event which gets called when the goggles runs into an error or gets closed.
     */
    constructor(usb, stream_process, onCloseEvent) {
        this._usb = usb;
        this.stream_process = stream_process;
        this._onCloseEvent = onCloseEvent;
        logger.debug("Creating Goggles with usb device " + usb.id);

        // wait a second for the device to initialize before opening it
        setTimeout(() => this._openUsb(), 2000);
    }

    /**
     * Opens the usb device
     * @private
     */
    _openUsb() {
        try {
            // opens the usb device
            this._usb.open();
            if (!this._usb.interfaces) {
                logger.error("Couldn't open Goggles USB device")
                this.close();
            }
        } catch (e) {
            console.log(e);
            logger.error(e);
            logger.debug("Error while opening the usb device");
            this.close();
            return;
        }

        let usb_interface;
        try {
            // opens interface 3, which is used to transmit the data
            usb_interface = this._usb.interface(3);
            usb_interface.claim()
            if (!usb_interface.endpoints) {
                logger.error("Couldn't claim bulk interface")
                this.close();
            }
        } catch (e) {
            logger.error(e);
            logger.debug("Error while claiming the interface");
            this.close();
            return;
        }

        // assigns the endpoints for input and output
        this._in = usb_interface.endpoints[1]
        this._in.timeout = 100
        this._out = usb_interface.endpoints[0]

        // sends the magic bytes which tell dji to send the video data to this device
        this._out.transfer(Goggles.MAGIC, function (error) {
            if (error) {
                logger.error(error)
            }
            logger.debug("send magic bytes")
        });

        // sets the event listener for data and errors
        this._in.addListener("data", data => this.onData(data));
        this._in.addListener("error", error => this.onError(error));

        // starts the poll
        this._in.startPoll(Goggles.QUEUE_SIZE, Goggles.READ_SIZE);
    }

    /**
     * Provides a Getter for the Id (UUID) which is set on the usb device.
     * @returns {uuid} the uuid
     */
    get id() {
        return this._usb.id;
    }

    /**
     * Is the fuction which gets called by the event listener to send the incoming data to the stream_process
     * @param data
     */
    onData(data) {
        this.stream_process.sendData(data);
    }

    /**
     * Is the fuction which gets called by the event listener if the usb device sends an error
     * @param error
     */
    onError(error) {
        logger.debug(error);
    }

    /**
     * Closes the Goggles and its StreamProcess
     */
    close() {
        logger.debug("Closing Goggle " + this.stream_process.port);
        try {
            this._in.removeListener("data", data => this.onData(data));
            this._in.removeListener("error", error => this.onError(error));
        } catch (e) {
            logger.error(e);
        }
        this.stream_process.close();
        this._onCloseEvent(this);
    }
}

module
    .exports = Goggles;
