<script setup lang="ts">
import { BaseCheckbox } from '@/components/ui/checkbox'
import { BaseLabel } from '@/components/ui/label'
</script>

<template>
  <div class="flex items-center gap-2 ">
    <BaseCheckbox id="terms" />
    <BaseLabel for="terms">Accept terms and conditions</BaseLabel>
  </div>
</template>
