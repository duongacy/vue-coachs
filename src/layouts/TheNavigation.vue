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
import NavLink from '@/components/common/NavLink.vue'
import { routes } from '@/router'
import { store } from '@/store'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const coachesRoute = routes.find((item) => item.name === 'coaches')
const requestsReceivedRoute = routes.find((item) => item.name === 'requests-received')
const commonRoute = routes.find((item) => item.name === 'common')
const isAuthenticated = computed(() => store.getters['AUTHEN/isAuthenticate'])

const logout = () => {
  if (route.meta.requireAuth) router.replace('coaches')
  store.dispatch('AUTHEN/logout')
}
</script>
