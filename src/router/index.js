import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',

      component: () => import('../views/auth/LoginPage.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/IndexPage.vue'),
      children: [
        {
          path: '',
          name: '',
          component: () => import('../views/admin/pages/DashbaordPage.vue'),
        },
        {
          path: '/posts',
          name: 'posts',
          component: () => import('../views/admin/pages/PostPage.vue'),
        },
        {
          path: '/single-post/:slug',
          name: 'single-post',
          component: () => import('../views/admin/pages/SinglePost.vue'),
        },

        {
          path: '/user-activities',
          name: 'user-activities',
          component: () => import('../views/admin/pages/UserActivities.vue'),
        }
        
      ],
    },
  ],
})

export default router
