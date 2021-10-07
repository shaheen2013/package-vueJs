import Vue from 'vue'
import "bootstrap";
import '../src/sass/app.scss'
import App from './App.vue'
import router from './router'
import store from './store'
window.axios = require('axios');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
