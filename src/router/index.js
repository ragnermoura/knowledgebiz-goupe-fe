import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/dashboard/user/ProjectView.vue')
    },
    {
      path: '/you-project',
      name: 'you-project',
      component: () => import('../views/auth/ProjectView.vue')
    },
    {
      path: '/log',
      name: 'log',
      component: () => import('../views/dashboard/user/LogView.vue')
    },
    {
      path: '/all-project',
      name: 'all-projectt',
      component: () => import('../views/dashboard/user/AllProjectView.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/dashboard/user/ReportsView.vue')
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../views/auth/ForgotPasswordView.vue')
    },
    {
      path: '/dashboard-main-developer',
      name: 'dasboard-user',
      component: () => import('../views/dashboard/user/MainView.vue')
    },
    {
      path: '/dashboard-main-admin',
      name: 'dasboard-admin',
      component: () => import('../views/dashboard/admin/MainView.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/dashboard/user/CalendarView.vue')
    },
    {
      path: '/account-user',
      name: 'account-user',
      component: () => import('../views/dashboard/user/AccountView.vue')
    },
    {
      path: '/account-user-stacks',
      name: 'account-user-stacks',
      component: () => import('../views/dashboard/user/AccountStackView.vue')
    },
    {
      path: '/account-user-connections',
      name: 'account-user-connections',
      component: () => import('../views/dashboard/user/AccountConnView.vue')
    },
  ]
})

export default router
