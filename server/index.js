const path = require('path');
const publicPath = path.join(__dirname, '../public');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'akshayveer',
    text: 'hello testing',
    createdAt: Date.now()
  });

  socket.on('createMessge', data => {
    console.log('data from client', data);
  });

  socket.on('disconnect', () => {
    console.log('client was disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
