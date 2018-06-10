import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Coverage from '@/components/Coverage'
import Start from '@/components/Start'
import Report from '@/components/Report'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      components: {
        nav: Navbar,
        body: Start
      }
    },
    {
      path: '/coverage',
      name: 'Coverage',
      components: {
        nav: Navbar,
        body: Coverage
      }
    },
    {
      path: '/report',
      name: 'Report',
      components: {
        nav: Navbar,
        body: Report
      }
    }
  ]
})
