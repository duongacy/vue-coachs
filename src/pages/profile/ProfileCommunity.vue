<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">Community</BaseText>
    <div class="mt-4 flex flex-col gap-3">
      <div v-for="activity in communities" :key="activity.id">
        <BaseText as="div" semibold heading6 class="flex gap-4 text-neutral-800">
          {{ activity.name }}
        </BaseText>
        <BaseText thin heading6 class="mt-1">{{ activity.description }}</BaseText>
      </div>
      <!-- <div>
        <BaseText as="div" semibold heading6 class="flex flex-col gap-1 text-neutral-800">
          Social Activities
        </BaseText>
        <BaseText thin heading6 class="mt-1"
          >Participating in picnics, football club, happy hours.</BaseText
        >
        <BaseText thin heading6 class="mt-1"
          >Research and join with some development communities.</BaseText
        >
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';

const communities = (store.getters['PROFILE/profile'] as Profile).communities;
</script>
