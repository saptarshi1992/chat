const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io')
const app = express();
const server = http.createServer(app)
const io = socketio(server);



const PORT = 4000 || process.env.PORT;
app.use(express.static(path.join(__dirname, 'public')));
io.on('connection', socket => {
    //console.log('new web connection');
    socket.emit('message', 'Welcome to freechat');
    //user connects//
    socket.broadcast.emit('message', 'A user has Join the chat!');
    socket.on('disconnect', () => {
        io.emit('message', 'user has left the chat');
    })

})
server.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});