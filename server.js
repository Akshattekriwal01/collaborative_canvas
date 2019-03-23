var express = require('express');
var app     = express();
var server  = app.listen(3001);
var socket = require('socket.io');
var io      = socket(server);

app.use(express.static('public'))

io.sockets.on('connection',newConnection);

function newConnection(socket){



    socket.on('mouse',mouseMsg);

    function mouseMsg(data){
        socket.broadcast.emit('mouse',data)


    }
}

console.log("server is running bitch")