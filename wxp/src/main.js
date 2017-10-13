// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'


Vue.config.productionTip = false

// 加载 css 文件资源

import './assets/css/main.css'
import './assets/css/common.css'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
