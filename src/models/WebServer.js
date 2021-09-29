const express = require('express');
const path = require('path');
const http = require('http');
const {Server} = require('socket.io');

class WebServer {
    static WS_PORT = 6969

    _app;
    _server;
    _socket_io;

    constructor() {
        this._app = express();
        this._server = http.createServer(this._app);
        this._socket_io = new Server(this._server, {path: "/ws"});


        this._initSocket();
        this._initApi();
        this._initStaticRoutes();
        this._server.listen(WebServer.WS_PORT, () => {
            console.log('listening on *:' + WebServer.WS_PORT);
        });
    }

    _initSocket() {
        this._socket_io.on('connection', (socket) => {
            console.log("socket " + socket.id + ": connection");
            // when the user disconnects.. perform this
            socket.on('disconnect', () => {

            });
        });
    }

    _initApi() {
        this._app.get('/api/test', function (req, res) {
            res.send('asdfsadf')
        })
    }

    _initStaticRoutes() {
        this._app.use(express.static('public'));
    }

    emitSocketData(eventName, value) {
        this._socket_io.emit(eventName, value);
    }
}

module.exports = WebServer;