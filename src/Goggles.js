import logger from "node-color-log";
import {StreamProcess} from "./StreamProcess";

export class Goggles {
    static MAGIC = Buffer.from("524d5654", "hex");
    static QUEUESIZE = 3;
    static READSIZE = 512;

    _usb;
    _in;
    _out;
    _onCloseEvent;
    stream_process;

    constructor(usb, stream_process, onCloseEvent) {
        this._usb = usb;
        this.stream_process = stream_process;
        this._onCloseEvent = onCloseEvent;
        logger.debug("Creating Goggles on usb device " + usb.id);

        this._usb.open();
        if (!this._usb.interfaces) {
            logger.error("Couldn't open Goggles USB device")
            this.close();
        }

        let usb_interface = this._usb.interface(3);
        usb_interface.claim()
        if (!usb_interface.endpoints) {
            logger.error("Couldn't claim bulk interface")
            this.close();
        }

        this._in = usb_interface.endpoints[1]
        this._in.timeout = 100

        this._out = usb_interface.endpoints[0]
        this._out.transfer(Goggles.MAGIC, function (error) {
            if (error) {
                console.error(error)
            }
            logger.debug("send magic bytes")

        })

        this._in.addListener("data", data => this.onData(data));
        this._in.addListener("error", error => this.onError(error));
        this._in.startPoll(Goggles.QUEUESIZE, Goggles.READSIZE);
    }

    get usb() {
        return this._usb;
    }

    onData(data) {
        this.stream_process.sendData(data);
    }

    onError(error) {
        logger.info(error);
    }

    close() {
        logger.debug("Closing Goggle " + this.stream_process.port);
        this._in.removeListener("data", data => this.onData(data));
        this._in.removeListener("error", error => this.onError(error));
        this.stream_process.close();
        this._onCloseEvent(this);
    }

}

