<script setup lang="ts">
import { Terminal } from 'lucide-vue-next'
import { BaseAlert, AlertDescription, AlertTitle } from '@/components/ui/alert'
</script>

<template>
  <div class="grid gap-2 border p-2">
    <BaseAlert variant="default">
      <Terminal class="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription> You can add components to your app using the cli. </AlertDescription>
    </BaseAlert>
    <BaseAlert variant="destructive">
      <Terminal class="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription> You can add components to your app using the cli. </AlertDescription>
    </BaseAlert>
  </div>
</template>
