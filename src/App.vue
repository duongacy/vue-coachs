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
