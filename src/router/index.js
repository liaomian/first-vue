import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/index'
import user from '@/pages/user/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
