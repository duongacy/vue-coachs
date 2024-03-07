<template>
  <!-- <div class="min-h-screen flex flex-col">
    <the-navigation></the-navigation>
    <div class="h-12 flex items-center px-8">
      <BaseTypography variant="p" weight="bold">shadcn-vue</BaseTypography>
      <div class="flex gap-4 px-4">
        <NavLink to="/components">Components</NavLink>
        <NavLink to="/themes">Themes</NavLink>
      </div>
    </div>
    <div class="flex-grow flex flex-col">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
    <the-footer></the-footer>
  </div> -->
  <MainLayout v-if="!isAuthenTemplate">
    <template #header>
      <TheNavigation></TheNavigation>
    </template>
    <template #content>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </template>
    <template #footer?>
      <TheFooter></TheFooter>
    </template>
  </MainLayout>

  <router-view v-else></router-view>
</template>

<script setup lang="ts">
import { BaseTypography } from '@/components/ui/typography'
import TheFooter from '@/layouts/TheFooter.vue'
import TheNavigation from '@/layouts/TheNavigation.vue'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { store } from './store'
import { useRoute, useRouter } from 'vue-router'
import { buttonVariants } from './components/ui/button'
import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuContent
} from './components/ui/navigation-menu'
import { NavLink } from '@/components/ui/nav'
import { MainLayout } from './layouts'
const router = useRouter()
const route = useRoute()

const isAuthenTemplate = computed(() => route.name === 'authen')

const authenSuccessEventHandler = () => {
  if (route.redirectedFrom) {
    router.replace(route.redirectedFrom)
  } else {
    router.replace('/coaches')
  }
}

const removeAuthenSuccessEventHandler = () => {
  if (route.meta.requireAuth) {
    router.replace('/coaches')
  }
}

onMounted(() => {
  store.dispatch('AUTHEN/autoSignin')
  window.addEventListener('authenSuccess', authenSuccessEventHandler)
  window.addEventListener('removeAuthenSuccess', removeAuthenSuccessEventHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('authenSuccess', authenSuccessEventHandler)
  window.removeEventListener('removeAuthenSuccess', removeAuthenSuccessEventHandler)
})
</script>
<style>
.route-enter-active,
.route-leave-active {
  transition: opacity 0.5s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
</style>
