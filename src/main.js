// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://47.107.53.207:8090/' // 本地环境 http://192.168.2.161
Vue.prototype.baseURL = 'http://47.107.53.207:8090/' // 本地环境
Vue.prototype.downloadURL = 'http://47.107.53.207:8090/download/group1' // 本地环境(下载路径)

// axios.defaults.baseURL = '' // 测试和正式环境
// Vue.prototype.baseURL = '' // 测试
// Vue.prototype.downloadURL = '/download/group1' // 测试环境(下载路径)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
