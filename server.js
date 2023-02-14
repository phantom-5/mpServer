const net = require('net');

const server = net.createServer((socket) => {
  console.log('Connected to the client');

  // Read the accelerometer data from the pipe
  socket.on('data', (data) => {
    console.log(`Received accelerometer data: ${data.toString().trim()}`);
  });
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server listening on port 3000');
});
