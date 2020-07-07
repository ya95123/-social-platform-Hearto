import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5C4A72',
        secondary: '#A8586D',
        accent: '#FFFFFF',
        error: '#F46A4E',
        info: '#F4874B',
        success: '#41B883',
        warning: '#F4B15A'
      }
    }
  }
})
