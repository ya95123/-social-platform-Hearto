<template>
  <div id="home">
    <h1 class="text-center">home</h1>
    <!-- <div>
      <input type="text" v-model="msg">
      <button @click='Login'>向8000端口发送数据</button>
      {{backdata}}
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      // msg: '',
      // backdata: ''
    }
  }
  // sockets: { // 在此接收又服务器发送过来的数据 ps：注意此处的方法名要与服务器的发送的事件保持一致才能接收到
  //   connect: function () { // 与ws:127.0.0.1:8000连接后回调
  //     console.log('连接成功')
  //   },
  //   loginmsg: function (data) {
  //     console.log(data)// 监听login(后端向前端emit login的回调)
  //     this.backdata = data
  //   }
  // },
  // methods: {
  //   Login () {
  //     this.$socket.emit('login', this.msg)
  //   }
  // }
}
</script>
