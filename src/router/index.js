import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/Views/LoginView.vue')
    },
    {
      path: '/Resigter',
      name: 'Resigter',
      component: () => import('@/Views/ResigterView.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: () => import('@/Views/PostView.vue')
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('@/Views/ProfileView.vue')
    }


    
  ]
})


export default router
