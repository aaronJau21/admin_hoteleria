import LoginView from '@/views/auth/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      component: LoginView,
    },
    {
      path: '/sistem/home',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue'),
    },
  ],
})

export default router
