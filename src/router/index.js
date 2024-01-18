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
      component: () => import('../views/dashboard/ProjectView.vue')
    },
    {
      path: '/you-project',
      name: 'you-project',
      component: () => import('../views/auth/ProjectView.vue')
    },
    {
      path: '/log',
      name: 'log',
      component: () => import('../views/dashboard/LogView.vue')
    },
    {
      path: '/all-project',
      name: 'all-projectt',
      component: () => import('../views/dashboard/AllProjectView.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/dashboard/ReportsView.vue')
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../views/auth/ForgotPasswordView.vue')
    },
    {
      path: '/dashboard-main-developer',
      name: 'dasboard-user',
      component: () => import('../views/dashboard/MainView.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/dashboard/CalendarView.vue')
    },
    {
      path: '/account-user',
      name: 'account-user',
      component: () => import('../views/dashboard/AccountView.vue')
    },
    {
      path: '/you-profile',
      name: 'you-profile',
      component: () => import('../views/dashboard/ProfileView.vue')
    },
    {
      path: '/you-overview',
      name: 'you-overview',
      component: () => import('../views/dashboard/OverView.vue')
    },

    {
      path: '/overview-reports',
      name: 'overview-reports',
      component: () => import('../views/dashboard/OverViewReports.vue')
    },
  
  ]
})

export default router
