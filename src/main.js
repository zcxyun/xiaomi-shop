// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fix from './utils/fix'
// 使所有浏览器支持 promise
import 'babel-polyfill'
// 有些手机浏览器会出现 click 事件300毫秒延迟的问题，需要以下 fastclick 库
import fastClick from 'fastclick'
import Cube from 'cube-ui'
// 不同的浏览器会出现不同的问题，reset.css可以使其显示正常
import 'styles/reset.css'
// 1像素边框问题 需要 border.css
import 'styles/border.css'
// import 'styles/iconfont.css'
import 'animate.css'

Vue.use(Cube)

Vue.config.productionTip = false
fastClick.attach(document.body)
fix()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
