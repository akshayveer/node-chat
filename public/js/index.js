let socket = io();
socket.on('connect', function() {
  console.log('connected to server');
  // socket.emit('createMessge', {
  //   from: 'akshayveer@example.com',
  //   text: 'hey whaats up!'
  // });
});
socket.on('disconnect', function() {
  console.log('disconnected from server');
});

socket.on('newMessage', function(data) {
  console.log('new message', data);
});
