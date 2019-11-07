var io = require('socket.io')();


io.on('connection', function(socket){
    socket.on('enter-message', function(data){
        io.emit('enter-message', data);
    });


});
module.exports = io;