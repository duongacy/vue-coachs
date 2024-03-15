<template>
  <div class="grid gap-4 border p-4">
    <BaseTypography
      variant="h3"
      weight="bold"
      >{{ name }}</BaseTypography
    >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { BaseTypography } from '@/components/ui/typography';

defineProps<{ name: string }>();
</script>

<style scoped></style>
