<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">Techstack 2024</BaseText>
    <div class="mt-4 flex flex-wrap gap-4">
      <BaseText
        v-for="tech in techstack"
        :key="tech"
        heading6
        bold
        class="border-[2px] border-neutral-300 text-foreground/80 px-6 py-4 hover:border-pink-300 hover:text-pink-700"
      >
        {{ tech }}
      </BaseText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';

const techstack = (store.getters['PROFILE/profile'] as Profile)?.techstack || [];
</script>
