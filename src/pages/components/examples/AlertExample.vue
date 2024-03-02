<script setup lang="ts">
import { BaseAlert } from '@/components/ui/alert'
</script>

<template>
  <div class="grid gap-2">
    <BaseAlert
      variant="default"
      description=" You can add components to your app using the cli."
      title="Click here"
    >
    </BaseAlert>
    <BaseAlert
      variant="destructive"
      description=" You can add components to your app using the cli."
      title="Click here"
    >
    </BaseAlert>
  </div>
</template>
