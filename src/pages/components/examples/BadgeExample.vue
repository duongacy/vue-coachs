<script setup lang="ts">
import { BaseBadge } from '@/components/ui/badge'
</script>

<template>
  <div class="flex gap-2">
    <BaseBadge class="w-fit">Default</BaseBadge>
    <BaseBadge class="w-fit" variant="destructive">Destructive</BaseBadge>
    <BaseBadge class="w-fit" variant="outline">Outline</BaseBadge>
    <BaseBadge class="w-fit" variant="secondary">Secondary</BaseBadge>
  </div>
</template>
