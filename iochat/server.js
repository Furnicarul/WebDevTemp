const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

users = [];
connections = [];

const port = 3000;
server.listen(process.env.PORT || port);
console.log(`Server is running on port: ${port}`);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.sockets.on('connection', (socket) => {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  socket.on('disconnect', (data) => {
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  //Send message
  socket.on('send message', (data) => {
    console.log(data);
    io.sockets.emit('new message', {msg: data});
  });
});
