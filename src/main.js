import Vue from 'vue'
import App from './App.vue'
import router from './router'

window.liff.init(function (data) {})
Vue.prototype.$liff = window.liff
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
