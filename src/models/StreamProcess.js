const cp = require('child_process');
const logger = require('node-color-log');

/**
 * Represents the StreamProcess Object
 */
class StreamProcess {
    static URL = "127.0.0.1"

    _port;
    _proc;

    /**
     * Constructs the StreamProcess Object.
     * @param port is the Port on which the UDP Stream will be sent.
     */
    constructor(port) {
        this._port = port;
        logger.debug("Creating StreamProcess on port " + this.port)

        this._createProcess();
    }

    /**
     * Provides access to the port variable which gets initialized by the constructor.
     * @returns {number} the port.
     */
    get port() {
        return this._port;
    }

    /**
     * Constructs the full URL where the stream will be sent to
     * @returns {string}
     */
    get fullUrl() {
        return "udp://" + StreamProcess.URL + ":" + this.port;
    }

    /**
     * Creates the streaming process.
     * @private
     */
  _createProcess() {
        logger.debug("Creating Process on url " + this.fullUrl);
        this._proc = cp.spawn('ffmpeg', [
             '-fflags' ,'nobuffer',
            '-probesize', '32',
            '-re',
            '-i', '-',
            '-c:v', 'libx264',
            '-preset', 'ultrafast',
            '-vf','scale=720:576',
            '-f', 'mpegts',
             this.fullUrl


        ]);
        this._proc.stderr.setEncoding("utf8");

            /**
             * If you want to have ffmpeg logs
             */
        //this._proc.stderr.on('data', (data) => {
                        //console.log(data)})
    }

    /**
     * Is the endpoint where the Goggles sends its data to.
     * @param data
     */
    sendData(data) {
        //console.log(data)
        this._proc.stdin.write(Buffer.from(data));
    }

    /**
     * Closes the StreamProcess
     */
    close() {
        this._proc.kill();
    }
}
module.exports = StreamProcess;