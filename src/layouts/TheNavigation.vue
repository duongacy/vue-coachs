<template>
  <div class="flex h-12 justify-between items-center shadow-md">
    <div>Find a Coach</div>
    <div class="flex space-x-4">
      <nav-link :to="coachesRoute?.path!">Coachs</nav-link>
      <nav-link :to="requestsReceivedRoute?.path!" v-if="isAuthenticated"
        >Requests received</nav-link
      >
      <nav-link :to="commonRoute?.path!">Common</nav-link>
      <nav-link to="/auth" v-if="!isAuthenticated">Login</nav-link>
      <button @click="logout" v-else>Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router';
import { store } from '@/store';
import { computed } from 'vue';

const coachesRoute = routes.find((item) => item.name === 'coaches')
const requestsReceivedRoute = routes.find((item) => item.name === 'requests-received')
const commonRoute = routes.find((item) => item.name === 'common')
const isAuthenticated = computed(() => store.getters['AUTHEN/isAuthenticated'])

const logout = async () => {
  try {
    await store.dispatch('AUTHEN/signout')
  } catch (error) {
    alert('Logout error')
  }
}
</script>
