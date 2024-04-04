<template>
  <div>
    <p heading5 bold class="uppercase text-pink-700">Development</p>
    <div class="mt-4 flex flex-col gap-2">
      <p
        v-for="{ name, description } in developments"
        :key="name"
        class="leading-7 text-foreground/80 font-semibold text-heading6"
      >
        {{ name }}:
        <span class="font-extralight text-foreground/60">
          {{ description }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';

const developments = (store.getters['PROFILE/profile'] as Profile).skills;
</script>
