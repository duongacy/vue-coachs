<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">Development</BaseText>
    <div class="mt-4 flex flex-col gap-2">
      <BaseText
        v-for="{ name, description } in developments"
        :key="name"
        semibold
        heading6
        class="leading-7 text-foreground/80"
      >
        {{ name }}:
        <span class="font-extralight text-foreground/60">
          {{ description }}
        </span>
      </BaseText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';

const developments = (store.getters['PROFILE/profile'] as Profile).skills;
</script>
