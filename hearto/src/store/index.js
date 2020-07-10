import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: []
  },
  mutations: {
    // socket範例
    // SOCKET_message: (state, data) => {
    //   state.message = data
    // }
    SOCKET_allmessage: (state, obj) => {
      state.messages = obj
    }
  },
  actions: {
  },
  getters: {
    history (state) {
      return state.message
    }
  },
  modules: {
  }
})
