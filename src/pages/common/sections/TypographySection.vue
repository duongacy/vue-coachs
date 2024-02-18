<template>
  <div class="flex flex-col">
    <base-typography size="heading4" weight="bold" class="p-4 bg-red-100"
      >Typography</base-typography
    >
    <div
      class="flex gap-2 items-baseline"
      v-for="weight in typographyWeights"
      :key="'typographyWeights' + weight"
    >
      <p class="min-w-[70px] uppercase">{{ weight }}</p>
      <base-typography
        v-for="size in typographySizes"
        :size="size"
        :weight="weight"
        :key="'typographySizes' + size + weight"
        class="capitalize"
        >{{ size }}</base-typography
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseTypography, {
  type TTypographySize,
  type TTypographyWeight
} from '@/components/common/BaseTypography.vue'

const typographyWeights: TTypographyWeight[] = ['heavy', 'bold', 'medium', 'regular', 'thin']
const typographySizes: TTypographySize[] = [
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'heading5',
  'heading6',
  'body',
  'caption',
  'small',
  'tiny'
]
</script>

<style scoped></style>
