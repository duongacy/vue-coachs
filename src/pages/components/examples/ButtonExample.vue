<script setup lang="ts">
import { BaseButton, type ButtonProps } from '@/components/ui/button';

const buttonVariants: ButtonProps['variant'][] = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
];
const buttonSizes: ButtonProps['size'][] = ['sm', 'lg', 'default', 'icon'];
</script>

<template>
  <div class="grid gap-2 overflow-x-auto">
    <div
      v-for="size in buttonSizes"
      :key="'button' + (size || '_')"
      class="flex items-end gap-2"
    >
      <div class="w-14">{{ size }}</div>
      <div
        v-for="variant in buttonVariants"
        :key="'button' + (variant || '_')"
      >
        <BaseButton
          :variant="variant"
          :size="size"
          >{{ size === 'icon' ? variant?.substring(0, 3) : variant }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>
