const ws = require('ws');
const ConnectionHandler = require('./ConnectionHandler')

const server = new ws.Server({
    port: 3000,
    host: '0.0.0.0'
});

server.on('connection', ws => new ConnectionHandler(ws));

