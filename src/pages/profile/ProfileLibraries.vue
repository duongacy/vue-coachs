<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">libraries/ frameworks</BaseText>
    <div class="mt-4 flex flex-wrap gap-4">
      <a
        v-for="library in libraries"
        :key="library.name"
        class="border text-body font-semibold border-neutral-300 text-foreground/80 px-6 py-3"
        :href="library.url"
        target="_blank"
      >
        {{ library.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
const libraries = (store.getters['PROFILE/profile'] as Profile).libraries;
</script>
