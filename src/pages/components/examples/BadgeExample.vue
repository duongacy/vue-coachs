<script setup lang="ts">
import { BaseBadge } from '@/components/ui/badge';
const variants = ['primary', 'destructive', 'outline', 'secondary'] as const;
const sizes = ['sm', 'md', 'lg'] as const;
</script>

<template>
  <div class="grid gap-2">
    <div v-for="size in sizes" :key="'badge' + size" class="flex gap-2">
      <BaseBadge
        v-for="variant in variants"
        :key="'BaseBadge' + variant"
        class="w-fit"
        :variant="variant"
        :size="size"
        >{{ variant }}</BaseBadge
      >
    </div>
  </div>
</template>
