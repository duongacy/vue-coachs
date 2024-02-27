<script setup lang="ts">
import { BaseButton } from '@/components/ui/button'
</script>

<template>
  <div class="grid gap-2 border p-2">
    <BaseButton variant="default">Button</BaseButton>
    <BaseButton variant="destructive">Button</BaseButton>
    <BaseButton variant="ghost">Button</BaseButton>
    <BaseButton variant="link">Button</BaseButton>
    <BaseButton variant="outline">Button</BaseButton>
    <BaseButton variant="secondary">Button</BaseButton>
  </div>
</template>
