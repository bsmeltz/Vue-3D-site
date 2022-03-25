import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './assets/print-data.js'

Vue.config.productionTip = false

let data = {
  prints: mock,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
