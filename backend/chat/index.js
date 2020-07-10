let app = require('express')()
let fs = require('fs')
// 之後要做https的認證
let http = require('http').createServer(app)
let io = require('socket.io')(http)

// 存歷史訊息
let message=[
  {neme:'yude',message:'HELOO'}
]

// 接到網址
app.get('/', (req, res) => {
  // res.send('Hello')
  // res.sendFile('/宇德/Git/socialPlatform-Hearto/backend/chat/index.html')
  res.sendFile('http://localhost:3000')
})

// 有人進入網頁
io.on('connection', (socket) => {
  console.log('一個用戶已連接')
  // 一進入釋放歷史訊息
  socket.emit('allMessage',message)
  // 接收使用者傳送訊息
  socket.on('message', (msg) => {
    console.log('使用者說：' + msg)
  })
})

// 監聽
http.listen(3000, () => {
  console.log('listening on *:3000')
  console.log('http://localhost:3000')
})


// http.listen(8080, () => {
//   console.log('listening on *:8080')
//   console.log('http://localhost:8080')
// })

// var sever=require('http').createServer();
// var io=require('socket.io')(sever)
 
// io.on('connection', function (socket) {
//   console.log('連結進來了');
//   socket.on('login',function(data){ //接收连接中的login事件
//   console.log(data)
// io.emit('loginmsg','你发过来的数据是：'+data) //发送回去 事件名为loginmsg
// })
 
// })
// console.log('socket端口：8000');
// sever.listen(8000)
