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
import { store } from './store'
import { computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(() => {
  store.dispatch('AUTHEN/autoLogin')
})

const didAutoLogout = computed(() => {
  return store.getters['AUTHEN/isAutoLogout']
})

watch(didAutoLogout, () => {
  router.replace('/coaches')
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
