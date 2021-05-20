import Vue from 'vue'
import App from './App'
import store from './store/index'
import miniApp from './utils/mini.app.api'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$miniApp = miniApp

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
