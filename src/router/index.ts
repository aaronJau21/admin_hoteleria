import { useAuthStore } from '@/stores/auth/useAuth.store'
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
      path: '/system',
      component: () => import('@/layouts/DefaultLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/HomeView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    },
  ],
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuthenticated()) {
    return { path: '/auth/login' }
  }

  if (to.path === '/auth/login' && auth.isAuthenticated()) {
    return { path: '/system/home' }
  }
  return true
})

export default router
