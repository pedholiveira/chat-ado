var net     = require('net');

var server  = require('http')
                .createServer();
var io      = require('socket.io')(server);

server.listen(80);
//client.setEncoding('utf8');

io.on('connection', socket => {
    var client  = net.connect(8080, '127.0.0.1');

    socket.on('data', data => {
        client.write(JSON.stringify(data) + '\n');
    });

    socket.on('disconnect', () => {
        client.write('null\n');
        client.destroy(); 
    });

    client.on('data', data => {
        //debugando charset
        //console.log(`data: ${data}`);
        socket.emit('data', JSON.parse(data));
    });
});