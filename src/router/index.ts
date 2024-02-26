
import CommonPage from '@/pages/common/CommonPage.vue'
import ExamplesPage from '@/pages/examples/ExamplesPage.vue'
import ShadcnExamplesPage from '@/pages/examples/shadcn/ShadcnExamplesPage.vue'
import { store } from '@/store'
import { createRouter, createWebHistory } from 'vue-router'

const NotFound = () => import('@/pages/NotFound.vue')
const UserAuth = () => import('@/pages/auth/UserAuth.vue')
const CoachDetails = () => import('@/pages/coaches/CoachDetails.vue')
const AddCoach = () => import('@/pages/coaches/AddCoach.vue')
const CoachesList = () => import('@/pages/coaches/CoachesList.vue')
// const CommonPage = () => import('@/pages/common/CommonPage.vue')
const RequestForm = () => import('@/pages/requests/RequestForm.vue')
const RequestsReceived = () => import('@/pages/requests/RequestsReceived.vue')
const MouseClick = () => import('@/pages/examples/MouseClick.vue')
// const ExamplesPage = () => import('@/pages/examples/ExamplesPage.vue')

export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/coaches'
  },
  {
    path: '/common',
    name: 'common',
    component: CommonPage
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
    path: '/examples',
    component: ExamplesPage,
    children: [
      {
        path: 'mouse-click',
        component: MouseClick
      },
      {
        path: 'shadcn',
        component: ShadcnExamplesPage
      }
    ]
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
