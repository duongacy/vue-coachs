<script setup lang="ts">
import { BaseSeparator } from '@/components/ui/separator';
</script>

<template>
  <div class="">
    <div class="w-[350px]">
      <div class="space-y-1">
        <h4 class="text-caption font-medium leading-none">Radix Primitives</h4>
        <p class="text-caption text-muted-foreground">An open-source UI component library.</p>
      </div>
      <BaseSeparator class="my-4" />
      <div class="flex h-5 items-center space-x-4 text-caption">
        <div>Blog</div>
        <BaseSeparator orientation="vertical" />
        <div>Docs</div>
        <BaseSeparator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  </div>
</template>
