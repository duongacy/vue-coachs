<script setup lang="ts">
import { AlertDescription, BaseAlert } from '@/components/ui/alert';
import { ExclamationTriangleIcon, RocketIcon } from '@radix-icons/vue';
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <BaseAlert
      title="Default Alert!"
      class="w-[350px]"
    >
      <AlertDescription> You can add components to your app using the cli. </AlertDescription>
    </BaseAlert>
    <BaseAlert
      :icon="RocketIcon"
      title="Default Alert with icon!"
      class="w-[350px]"
    >
      <AlertDescription> You can add components to your app using the cli. </AlertDescription>
    </BaseAlert>
    <BaseAlert
      :icon="ExclamationTriangleIcon"
      variant="destructive"
      title="Destructive Alert with icon"
      class="w-[350px]"
    >
      <AlertDescription> You can add components to your app using the cli. </AlertDescription>
    </BaseAlert>
  </div>
</template>
