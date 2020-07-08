var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile('/宇德/Git/socialPlatform-Hearto/backend/chat/index.html');
});

io.on('connection', (socket) => {
  console.log('一個用戶已連接');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
  console.log('http://localhost:3000');
});