<template>
  <div class="p-4 border grid gap-4">
    <BaseTypography variant="h3" weight="bold">{{ name }}</BaseTypography>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { BaseTypography } from '@/components/ui/typography'

defineProps<{ name: string }>()
</script>

<style scoped></style>
