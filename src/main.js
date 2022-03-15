// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './common/server.js'
import store from'./store/index.js'
import api from './common/api.js'
import ElementUI from 'element-ui';
import navbar from './components/headerMsg/index'

Vue.prototype.$http=http
Vue.prototype.$store=store
Vue.prototype.$api=api

Vue.component("navbar",navbar)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
