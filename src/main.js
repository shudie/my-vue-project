// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.prototype.vue = Vue
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios';
console.info(33,axios)
Vue.prototype.axios = axios;
import QS from 'qs'

import 'styles/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false


Vue.prototype.qs = QS;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
