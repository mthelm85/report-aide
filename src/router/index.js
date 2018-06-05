import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        nav: Navbar,
        body: Home
      }
    }
  ]
})