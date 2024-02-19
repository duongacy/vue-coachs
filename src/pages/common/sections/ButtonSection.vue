<template>
  <div class="flex flex-col">
    <base-typography size="heading4" weight="bold" class="p-4 bg-green-500 text-white"
      >Button</base-typography
    >
    <div class="flex flex-col gap-4 bg-warning-50 p-4">
      <div class="flex gap-2 items-end" v-for="variant in buttonVariants" :key="variant">
        <base-button
          v-for="size in buttonSizes"
          :key="variant + size"
          :variant="variant"
          :size="size"
        >
          <span class="capitalize"> {{ variant }} </span>_
          <span> {{ size }} </span>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue'
import type { TBaseButtonSize, TBaseButtonVariant } from '@/components/common/BaseButton.vue'

const buttonSizes: TBaseButtonSize[] = ['extra-large', 'large', 'medium', 'small']
const buttonVariants: TBaseButtonVariant[] = ['primary', 'secondary', 'tertiary']
</script>

<style scoped></style>
