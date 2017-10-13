import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import User from '@/views/user'
import ReportInfo from '@/views/reportInfo'
import Register from '@/views/register'

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/user',
      name: 'User',
      component: User
    }, {
      path: '/reportInfo',
      name: 'ReportInfo',
      component: ReportInfo
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
