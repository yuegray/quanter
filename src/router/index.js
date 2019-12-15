import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
