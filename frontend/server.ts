import appm = require('./app');
import http = require('http');
import * as exp from 'express';

var port = getPort(process.env.FE_PORT, 7777);

var _server: http.Server;

async function startServer() {
    var app = await appm.create();
    _server = http.createServer(app);
    _server.listen(port, onListening);
}

startServer();

function getPort(val: any, def: number) {
    var port = parseInt(val, 10);
    if (isNaN(port) || port <= 0) {
        return def;
    }

    return port;
}

function onListening() {
    var addr = _server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}