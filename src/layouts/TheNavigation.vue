<template>
  <div class="flex h-12 justify-between items-center shadow-md">
    <div>Find a Coach</div>
    <div class="flex space-x-4">
      <nav-link to="/common">Common</nav-link>
      <nav-link to="/examples">Examples</nav-link>
      <nav-link to="/coaches">Coachs</nav-link>
      <nav-link to="/requests-received" v-if="isAuthenticated">Requests received</nav-link>
      <nav-link to="/auth" v-if="!isAuthenticated">Login</nav-link>
      <button @click="logout" v-else>Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavLink from '@/components/common/NavLink.vue'
import { store } from '@/store'
import { computed } from 'vue'

const isAuthenticated = computed(() => store.getters['AUTHEN/isAuthenticated'])

const logout = async () => {
  try {
    await store.dispatch('AUTHEN/signout')
  } catch (error) {
    alert('Logout error')
  }
}
</script>
