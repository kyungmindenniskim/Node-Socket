var socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  socket.emit('createEmail', {
     to: 'jane@example.com'
    ,text: 'Hey. This is Andrew.'
    ,createAd: 123
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New Email', email);
});
