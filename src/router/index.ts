
import { store } from '@/store'
import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const NotFound = defineAsyncComponent(() => import('@/pages/NotFound.vue'))
const UserAuth = defineAsyncComponent(() => import('@/pages/auth/UserAuth.vue'))
const CoachDetails = defineAsyncComponent(() => import('@/pages/coaches/CoachDetails.vue'))
const CoachRegister = defineAsyncComponent(() => import('@/pages/coaches/CoachRegister.vue'))
const CoachesList = defineAsyncComponent(() => import('@/pages/coaches/CoachesList.vue'))
const CommonPage = defineAsyncComponent(() => import('@/pages/common/CommonPage.vue'))
const RequestForm = defineAsyncComponent(() => import('@/pages/requests/RequestForm.vue'))
const RequestsReceived = defineAsyncComponent(() => import('@/pages/requests/RequestsReceived.vue'))

export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/coaches'
  },
  {
    path: '/common',
    name: 'common',
    components: CommonPage
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
    path: '/coaches/register',
    name: 'coach-register',
    component: CoachRegister,
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
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticate = store.getters['AUTHEN/isAuthenticate']
  if (to.meta.requireAuth && !isAuthenticate) {
    next('/auth')
  } else if (
    to.meta.requireUnauth && isAuthenticate
  ) {
    next(from || '/coaches')
  }
  else {
    next()
  }
})

export default router
