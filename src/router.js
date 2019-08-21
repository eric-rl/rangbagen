import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rängbågen',
      name: 'rängbågen',
      component: () => import('./views/Rängbågen.vue')
    },
    {
      path: '/historik',
      name: 'historik',
      component: () => import('./views/Historik.vue')
    },
    {
      path: '/köket',
      name: 'köket',
      component: () => import('./views/Köket.vue')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('./views/Kontakt.vue')
    },
  ]
})
