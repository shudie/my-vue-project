import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import System from '@/pages/system/System'
import Questionnaire from '@/pages/questionnaire/Questionnaire'
import Adddata from '@/pages/adddata/Adddata'

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
    },{
      path: '/questionnaire',
      name: 'Questionnaire',
      component: Questionnaire
    },{
      path: '/adddata',
      name: 'Adddata',
      component: Adddata
    },
  ]
})
