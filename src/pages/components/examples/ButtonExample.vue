<script setup lang="ts">
import { BaseButton, type ButtonVariants } from '@/components/ui/button';

const buttonVariants: ButtonVariants['variant'][] = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link'
]
const buttonSizes: ButtonVariants['size'][] = ['sm', 'lg', 'icon']
</script>

<template>
  <div class="grid gap-2 overflow-x-auto">
    <div v-for="size in buttonSizes" :key="'button' + (size || '_')" class="flex gap-2 items-end">
      <div class="w-14">{{ size }}</div>
      <div v-for="variant in buttonVariants" :key="'button' + (variant || '_')">
        <BaseButton :variant="variant" :size="size">{{
          size === 'icon' ? 'icon' : variant
        }}</BaseButton>
      </div>
    </div>
  </div>
</template>
