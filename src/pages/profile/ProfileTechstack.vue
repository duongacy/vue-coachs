<template>
  <div>
    <p class="uppercase text-heading5 font-bold text-pink-700">Techstack 2024</p>
    <div class="mt-4 flex flex-wrap gap-4">
      <p
        v-for="tech in techstack"
        :key="tech"
        class="border-[2px] text-heading6 font-bold border-neutral-300 text-foreground/80 px-6 py-4 hover:border-pink-300 hover:text-pink-700"
      >
        {{ tech }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';

const techstack = (store.getters['PROFILE/profile'] as Profile)?.techstack || [];
</script>
