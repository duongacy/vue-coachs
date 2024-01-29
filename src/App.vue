<template>
  <div class="min-h-screen flex flex-col">
    <the-navigation></the-navigation>
    <div class="flex-grow">
      <router-view></router-view>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/layouts/TheFooter.vue'
import TheNavigation from '@/layouts/TheNavigation.vue';
</script>