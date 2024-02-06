<template>
  <div class="flex h-12 justify-between items-center shadow-md">
    <div>Find a Coach</div>
    <div class="flex space-x-4">
      <nav-link :to="coachesRoute?.path!">Coachs</nav-link>
      <nav-link :to="requestsReceivedRoute?.path!">Requests received</nav-link>
      <nav-link :to="commonRoute?.path!">Common</nav-link>
      <nav-link to="/auth">Login</nav-link>

    </div>
  </div>
</template>

<script setup lang="ts">
import NavLink from '@/components/common/NavLink.vue'
import { routes } from '@/router'

const coachesRoute = routes.find((item) => item.name === 'coaches')
const requestsReceivedRoute = routes.find((item) => item.name === 'requests-received')
const commonRoute = routes.find((item) => item.name === 'common')
</script>
