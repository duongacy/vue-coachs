<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">Community</BaseText>
    <div class="mt-4 flex flex-col gap-3">
      <div>
        <BaseText as="div" semibold heading6 class="flex gap-4 text-neutral-800">
          Knowledge Sharing
        </BaseText>
        <BaseText thin heading6 class="mt-1"
          >Sharing expertise, experiences, and information among members.</BaseText
        >
      </div>
      <div>
        <BaseText as="div" semibold heading6 class="flex flex-col gap-1 text-neutral-800">
          Social Activities
        </BaseText>
        <BaseText thin heading6 class="mt-1"
          >Participating in picnics, football club, happy hours.</BaseText
        >
        <BaseText thin heading6 class="mt-1"
          >Research and join with some development communities.</BaseText
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';
</script>
