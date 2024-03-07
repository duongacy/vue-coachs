<template>
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
import { MainLayout } from '@/layouts'
import TheFooter from '@/layouts/TheFooter.vue'
import TheNavigation from '@/layouts/TheNavigation.vue'
import { store } from '@/store'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
