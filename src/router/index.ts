import NotFoundVue from '@/pages/NotFound.vue'
import CoachDetailsVue from '@/pages/coaches/CoachDetails.vue'
import CoachRegisterVue from '@/pages/coaches/CoachRegister.vue'
import CoachesListVue from '@/pages/coaches/CoachesList.vue'
import CommonPage from '@/pages/common/CommonPage.vue'
import RequestFormVue from '@/pages/requests/RequestForm.vue'
import RequestsReceivedVue from '@/pages/requests/RequestsReceived.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
        path: 'contact',
        name: 'request-form',
        components: {
          default: RequestFormVue
        }
      }
    ]
  },
  {
    path: '/coaches/register',
    name: 'coach-register',
    components: {
      default: CoachRegisterVue
    }
  },
  {
    path: '/requests-received',
    name: 'requests-received',
    components: {
      default: RequestsReceivedVue
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

export default router
