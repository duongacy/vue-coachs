<template>
  <div class="min-h-screen flex flex-col">
    <the-navigation></the-navigation>
    <div class="flex-grow flex flex-col">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/layouts/TheFooter.vue'
import TheNavigation from '@/layouts/TheNavigation.vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { store } from './store'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

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
