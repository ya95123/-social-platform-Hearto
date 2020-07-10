<template>
  <div id="initial">
    <h1 class="text-center">initial</h1>
      <input type="text" @keydown.enter="message">
      <button @click="message">送出</button>
      <ul>
        <li>歷史紀錄</li>
      </ul>
  </div>
</template>

<script>
// var socket = io('http://localhost:8080')
export default {
  data () {
    return {
      messages: []
    }
  },
  computed: {
    history () {
      return this.$store.getters.message
    }
  },
  methods: {
    message () {
      // 傳進 socket
      this.$socket.emit('message', '成功傳進來了！')
      // this.$socket.on('message',
      //   (obj) => {
      //     console.log(obj)
      //   }
      // )
    }
  },
  sockets: { // 在此接收又服務器發送過來的數據 ps：注意此處的方法名要與服務器的發送的事件保持一致才能接收到
    connection () { // 與ws:127.0.0.1:8000連接後回調
      console.log('連結 Socket.io 成功')
      this.emit('message', 'HELOOO')
    },
    disconnect () {
      console.log('Socket.io 連結斷開')
    },
    reconnect () {
      console.log('Socket.io 重新連結')
    },
    allmessage () {
      this.$socket.on('message',
        (obj) => {
          console.log(obj)
        })
    }
  },
  mounted () {
    this.$socket.on('allmessage', (obj) => {
      this.messages = obj
      alert('收到')
    })
  }
}
</script>
