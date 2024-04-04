<template>
  <div>
    <p class="uppercase text-pink-700 text-heading5 font-bold">Community</p>
    <div class="mt-4 flex flex-col gap-3">
      <div v-for="activity in communities" :key="activity.id" class="text-heading6">
        <p class="text-neutral-800 font-semibold">
          {{ activity.name }}
        </p>
        <p class="mt-1 font-thin">{{ activity.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';

const communities = (store.getters['PROFILE/profile'] as Profile).communities;
</script>
