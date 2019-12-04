import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import System from '@/pages/system/System'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/system',
      name: 'System',
      component: System
    },
  ]
})
