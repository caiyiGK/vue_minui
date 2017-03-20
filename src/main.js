import Vue from 'vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App'

sync(store, router)

Vue.config.productionTip = false


new Vue({
  el: '#App',
  router,
  store,
  template: '<App/>',
  components: { App }
})
