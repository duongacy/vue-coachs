
import { store } from '@/store'
import { createRouter, createWebHistory } from 'vue-router'

const NotFound = () => import('@/pages/NotFound.vue')
const UserAuth = () => import('@/pages/auth/UserAuth.vue')
const CoachDetails = () => import('@/pages/coaches/CoachDetails.vue')
const AddCoach = () => import('@/pages/coaches/AddCoach.vue')
const CoachesList = () => import('@/pages/coaches/CoachesList.vue')
const RequestForm = () => import('@/pages/requests/RequestForm.vue')
const RequestsReceived = () => import('@/pages/requests/RequestsReceived.vue')
const ComponentsPage = () => import('@/pages/components')
const ThemesPage = () => import('@/pages/themes')


export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/coaches'
  },
  {
    path: '/coaches',
    name: 'coaches',
    component: CoachesList
  },
  {
    path: '/coaches/:coachId',
    name: 'coach-details',
    props: true,
    component: CoachDetails,
    children: [
      {
        path: 'request',
        name: 'request-form',
        props: true,
        component: RequestForm,
      }
    ]
  },
  {
    path: '/coaches/add',
    name: 'add-coach',
    component: AddCoach,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/requests-received',
    name: 'requests-received',
    component: RequestsReceived,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/auth',
    name: 'authen',
    component: UserAuth,
    meta: {
      requireUnauth: true
    }
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/not-found'
  },
  {
    path: '/components',
    component: ComponentsPage
  },
  {
    path: '/themes',
    component: ThemesPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['AUTHEN/isAuthenticated']
  if (to.meta.requireAuth && !isAuthenticated) {
    next('/auth')
  } else if (
    to.meta.requireUnauth && isAuthenticated
  ) {
    next(from || '/coaches')
  }
  else {
    next()
  }
})

export default router
