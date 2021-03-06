import Vue from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import dotenv from 'dotenv'

import '@mdi/font/css/materialdesignicons.css'

import * as VueGoogleMaps from 'vue2-google-maps'
dotenv.config()

Vue.use(VueGoogleMaps, {
  load: { key: process.env.VUE_APP_API_KEY }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
