import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      alias: '/index',
      component: Index,
      meta: { layout: 'CenterLayout' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: function () {
        return import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
      },
      meta: { layout: 'DashboardLayout' }
    }
  ]
})
