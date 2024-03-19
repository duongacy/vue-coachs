<script setup lang="ts">
import { BaseBadge, type BadgeVariants } from '@/components/ui/badge';
const variants: BadgeVariants['variant'][] = ['default', 'destructive', 'outline', 'secondary'];
</script>

<template>
  <div class="flex gap-2">
    <BaseBadge
      v-for="variant in variants"
      :key="'BaseBadge' + variant"
      class="w-fit"
      :variant="variant"
      >{{ variant }}</BaseBadge
    >
  </div>
</template>
