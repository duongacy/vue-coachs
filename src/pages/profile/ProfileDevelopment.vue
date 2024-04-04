<template>
  <SectionTemplate title="Development" class="mt-4 flex flex-col gap-4">
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
  </SectionTemplate>
</template>

<script setup lang="ts">
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import SectionTemplate from './SectionTemplate.vue';

const developments = (store.getters['PROFILE/profile'] as Profile).skills;
</script>
