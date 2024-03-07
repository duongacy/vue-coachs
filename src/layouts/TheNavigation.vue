<template>
  <div class="flex h-12 items-center gap-8">
    <BaseTypography variant="p" weight="bold">WTVue</BaseTypography>
    <div class="flex flex-grow gap-4 px-4">
      <router-link to="/coaches">Coaches</router-link>
      <router-link to="/requests-received">Requests received</router-link>
      <router-link to="/components">Components</router-link>
    </div>
    <div>
      <BaseButton variant="link" v-if="isAuthenticated" @click="logout">Logout</BaseButton>
      <BaseButton variant="link" v-else @click="loginHandler">Login</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from '@/components/ui/button'
import { BaseTypography } from '@/components/ui/typography'
import { store } from '@/store'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAuthenticated = computed(() => store.getters['AUTHEN/isAuthenticated'])
const logout = async () => {
  try {
    await store.dispatch('AUTHEN/signout')
  } catch (error) {
    alert('Logout error')
  }
}
const loginHandler = () => {
  router.push('/auth')
}
</script>
