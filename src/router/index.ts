import NotFound from '@/pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CoachsList from '@/pages/coachs/coachs-list/CoachsList.vue'
import CoachDetails from '@/pages/coachs/coach-details/CoachDetails.vue'
import CoachRegistration from '@/pages/coachs/coach-registration/CoachRegistration.vue'
import CoachContact from '@/pages/requests/coach-contact/CoachContact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/coachs'
    },
    {
      path: '/coachs',
      name: 'coachs-list',
      components: {
        default: CoachsList
      }
    },
    {
      path: '/coachs/:coachId',
      name: 'coach-details',
      props: true,
      components: {
        default: CoachDetails
      },
      children: [
        {
          path: 'contact',
          name: 'coach-contact',
          components: {
            default: CoachContact
          }
        }
      ]
    },
    {
      path: '/register',
      name: 'coach-registration',
      components: {
        default: CoachRegistration
      }
    },
    {
      path: '/requests-received',
      name: 'requests-received',
      components: {
        default: CoachContact
      }
    },
    {
      path: '/notFound',
      components: {
        default: NotFound
      }
    },
    {
      path: '/:notFound(.*)',
      redirect: '/notFound'
    }
  ]
})

export default router
