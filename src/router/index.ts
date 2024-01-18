import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
    
      component: () => import('../views/AboutView.vue'),
      children:[
        {
          path: '/gzt',
          name: 'gzt',
          component: () => import('../views/gzt.vue')
        },
        {
          path: '/qygl',
          name: 'qygl',
          component: () => import('../views/qygl.vue')
        },
        {
          path: '/ykgl',
          name: 'ykgl',
          component: () => import('../views/ykgl.vue')
        },
      ]
    },
    {
      path: '/gzt',
      name: 'gzt',
      component: () => import('../views/gzt.vue')
    },
    {
      
        path: '/tj',
        name: 'tj',
        component: () => import('../views/tj.vue')
      
    }
  ]
})

export default router
