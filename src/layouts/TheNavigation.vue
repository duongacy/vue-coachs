<template>
  <div class="flex h-12 items-center gap-8">
    <p class="text-heading5 font-bold">WTVue</p>
    <div class="flex flex-grow gap-4 px-4">
      <router-link to="/coaches">Coaches</router-link>
      <router-link to="/requests-received">Requests received</router-link>
      <router-link to="/components">Components</router-link>
    </div>
    <div>
      <BaseButton
        v-if="isAuthenticated"
        variant="link"
        @click="logout"
        >Logout</BaseButton
      >
      <BaseButton
        v-else
        variant="link"
        @click="loginHandler"
        >Login</BaseButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { store } from '@/store';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isAuthenticated = computed(() => store.getters['AUTHEN/isAuthenticated']);
const logout = async () => {
  try {
    await store.dispatch('AUTHEN/signout');
  } catch (error) {
    alert('Logout error');
  }
};
const loginHandler = () => {
  router.push('/auth');
};
</script>
