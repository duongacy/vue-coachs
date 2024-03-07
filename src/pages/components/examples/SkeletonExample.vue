<script setup lang="ts">
import { BaseSkeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="grid gap-2">
    <BaseSkeleton class="h-12 w-[350px] rounded-full" />
    <div class="space-y-2">
      <BaseSkeleton class="h-4 w-[250px]" />
      <BaseSkeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>
