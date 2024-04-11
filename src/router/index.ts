import { store } from '@/store';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const TheAuthentication = () => import('@/pages/auth/TheAuthentication.vue');
const CoachDetails = () => import('@/pages/coaches/CoachDetails.vue');
const CoachAdd = () => import('@/pages/coaches/CoachAdd.vue');
const CoachesList = () => import('@/pages/coaches/CoachesList.vue');
const RequestForm = () => import('@/pages/requests/RequestForm.vue');
const RequestsReceived = () => import('@/pages/requests/RequestsReceived.vue');
const NotFound = () => import('@/pages/NotFound.vue');
const TheProfile = () => import('@/pages/profile/TheProfile.vue');
const TheComponents = () => import('@/pages/design-pattern/components/TheComponents.vue');
const TheContent = () => import('@/pages/design-pattern/content/TheContent.vue');
const TheForms = () => import('@/pages/design-pattern/forms/TheForms.vue');
const TheLayouts = () => import('@/pages/design-pattern/layouts/TheLayouts.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/coaches',
  },
  {
    path: '/design-pattern/content',
    name: 'designPatternContent',
    component: TheContent,
  },
  {
    path: '/design-pattern/forms',
    name: 'designPatternForm',
    component: TheForms,
  },
  {
    path: '/design-pattern/layouts',
    name: 'designPatternLayout',
    component: TheLayouts,
  },
  {
    path: '/design-pattern/components',
    name: 'designPatternComponents',
    component: TheComponents,
  },
  {
    path: '/profile',
    name: 'profile',
    component: TheProfile,
  },
  {
    path: '/coaches',
    name: 'coaches',
    component: CoachesList,
  },
  {
    path: '/coaches/:coachId',
    name: 'coachDetails',
    props: true,
    component: CoachDetails,
    children: [
      {
        path: '/coaches/:coachId/request',
        name: 'requestForm',
        props: true,
        component: RequestForm,
      },
    ],
  },
  {
    path: '/coaches/add',
    name: 'coachesAdd',
    component: CoachAdd,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/requests-received',
    name: 'requestsReceived',
    component: RequestsReceived,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/auth',
    name: 'authen',
    component: TheAuthentication,
    meta: {
      requireUnauth: true,
    },
  },
  {
    path: '/not-found',
    name: 'notFound',
    component: NotFound,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/not-found',
  },
];

export const getRoute = (
  name:
    | 'home'
    | 'designPatternContent'
    | 'designPatternForm'
    | 'designPatternLayout'
    | 'designPatternComponents'
    | 'profile'
    | 'coaches'
    | 'requestsReceived'
    | 'coachDetails'
    | 'requestForm'
    | 'coachesAdd'
    | 'authen'
    | 'notFound',
) => {
  return routes.find((item) => item.name === name) as RouteRecordRaw;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['AUTHEN/isAuthenticated'];
  if (to.meta.requireAuth && !isAuthenticated) {
    next('/auth');
  } else if (to.meta.requireUnauth && isAuthenticated) {
    next(from || '/coaches');
  } else {
    next();
  }
});

export default router;
