import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeView_2 from '@/views/HomeView_2.vue'

import test from '@/views/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // component: test,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/404notfound',
      name: '404notfound',
      component: () => import('@/views/404.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404notfound',
    },
  ],
})

export default router
