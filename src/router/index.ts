
import { store } from '@/store'
import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const NotFoundVue = defineAsyncComponent(() => import('@/pages/NotFound.vue'))
const UserAuth = defineAsyncComponent(() => import('@/pages/auth/UserAuth.vue'))
const CoachDetailsVue = defineAsyncComponent(() => import('@/pages/coaches/CoachDetails.vue'))
const CoachRegisterVue = defineAsyncComponent(() => import('@/pages/coaches/CoachRegister.vue'))
const CoachesListVue = defineAsyncComponent(() => import('@/pages/coaches/CoachesList.vue'))
const CommonPage = defineAsyncComponent(() => import('@/pages/common/CommonPage.vue'))
const RequestFormVue = defineAsyncComponent(() => import('@/pages/requests/RequestForm.vue'))
const RequestsReceivedVue = defineAsyncComponent(() => import('@/pages/requests/RequestsReceived.vue'))

export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/coaches'
  },
  {
    path: '/common',
    name: 'common',
    components: { default: CommonPage }
  },
  {
    path: '/coaches',
    name: 'coaches',
    components: { default: CoachesListVue }
  },
  {
    path: '/coaches/:coachId',
    name: 'coach-details',
    props: true,
    components: { default: CoachDetailsVue },
    children: [
      {
        path: 'request',
        name: 'request-form',
        props: true,
        components: {
          default: RequestFormVue
        },
      }
    ]
  },
  {
    path: '/coaches/register',
    name: 'coach-register',
    components: {
      default: CoachRegisterVue
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/requests-received',
    name: 'requests-received',
    components: {
      default: RequestsReceivedVue
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/auth',
    name: 'authen',
    components: {
      default: UserAuth
    },
    meta: {
      requireUnauth: true
    }
  },
  {
    path: '/not-found',
    name: 'not-found',
    components: {
      default: NotFoundVue
    }
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
