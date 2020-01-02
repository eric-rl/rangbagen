import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
let router
export default router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/galleri',
      name: 'Galleri',
      component: () => import('./views/Galleri.vue')
    },
    {
      path: '/köket',
      name: 'Köket',
      component: () => import('./views/Köket.vue')
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: () => import('./views/Kontakt.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})
