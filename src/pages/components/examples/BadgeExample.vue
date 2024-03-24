<script setup lang="ts">
import { BaseBadge } from '@/components/ui/badge';
const variants = ['default', 'destructive', 'outline', 'secondary'] as const;
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
