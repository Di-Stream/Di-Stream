const cp = require('child_process');
const logger = require('node-color-log');

class StreamProcess {
    static URL = "127.0.0.1"

    _port;
    _proc;

    constructor(port) {
        this._port = port;
        logger.debug("Creating StreamProcess on port " + this.port)

        this._createProcess();
    }

    get port() {
        return this._port;
    }

    _createProcess() {
        let full_url = ("udp://" + StreamProcess.URL + ":" + this.port);
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
module.exports = StreamProcess;