<script setup lang="ts">
import { BaseLabel } from '@/components/ui/label';
import { BaseSwitch } from '@/components/ui/switch';
</script>

<template>
  <div class="flex items-center gap-2">
    <BaseLabel class="flex items-center gap-1">
      <BaseSwitch />
      <span> Airplane Mode </span>
    </BaseLabel>
    <BaseLabel class="flex items-center gap-1">
      <BaseSwitch disabled />
      <span> Airplane Mode </span>
    </BaseLabel>
  </div>
</template>
