<script setup lang="ts">
import { BaseCheckbox } from '@/components/ui/checkbox'
</script>

<template>
  <div class="flex items-center gap-2 select-none cursor-pointer">
    <BaseCheckbox id="terms" />
    <label
      for="terms"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </label>
  </div>
</template>
