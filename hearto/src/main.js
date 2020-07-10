import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '../dist/style.min.css'
// import '../../backend/chat/socket.io/socket.io'
// import VueSocketio from 'vue-socket.io'
// import socketio from 'socket.io-client'
// Vue.use(VueSocketio, socketio('ws://127.0.0.1:8000'))// 与websocket服务端链接
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

// 與websocket服務端鏈接
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:3000'),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
    // 可以分多個房間
    options: {
      useConnectionNamespace: true
    }
  }
})
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  // sockets: {
  //   connect: function () {
  //     console.log('socket connected')
  //   },
  //   customEmit: function (data) {
  //     console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
  //   }
  // },
  render: h => h(App)
}).$mount('#app')
