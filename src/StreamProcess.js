import cp from "child_process";
import logger from "node-color-log";

export class StreamProcess {
    static URL = "udp://127.0.0.1"

    port;
    _proc;

    constructor(port) {
        this.port = port;
        logger.debug("Creating StreamProcess on port " + this.port)

        this._createProcess();
    }

    _createProcess() {
        let full_url = (StreamProcess.URL + ":" + this.port);
        logger.debug("Creating Process on url " + full_url);
        this._proc = cp.spawn('ffmpeg', [
            '-i', '-',
            '-fflags',
            '-nobuffer',
            '-f', 'mpegts',
            full_url
        ]);
        this._proc.stderr.setEncoding("utf8");
        // this._proc.stderr.pipe(process.stdout);
    }

    sendData(data) {
        // logger.debug("Sending Data")
        this._proc.stdin.write(Buffer.from(data));

    }

    close() {
        this._proc.kill();
    }
}