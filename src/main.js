import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store'
import router from './router'
import animate from 'animate.css'

Vue.use(animate)

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.baseUrl = 'https://www.yueqian.com.cn/zc/'

import './assets/style/reset.css'
import './assets/iconfont/iconfont.css'
import './assets/js/rem.js'

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
