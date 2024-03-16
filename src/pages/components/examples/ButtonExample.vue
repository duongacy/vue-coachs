<script setup lang="ts">
import { BaseButton, buttonVariants, type ButtonProps } from '@/components/ui/button';

const variants: ButtonProps['variant'][] = [
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
        v-for="variant in variants"
        :key="'button' + (variant || '_')"
      >
        <BaseButton
          :variant="variant"
          :size="size"
          as="div"
          >{{ size === 'icon' ? variant?.substring(0, 3) : variant }}
        </BaseButton>
      </div>
    </div>
    <div>
      With buttonVariants:
      <div :class="buttonVariants({ class: 'inline-flex w-fit' })">Button</div>
    </div>
  </div>
</template>
