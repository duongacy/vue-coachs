<script setup lang="ts">
import { BaseLabel } from '@/components/ui/label'
import { BaseSwitch } from '@/components/ui/switch'
</script>

<template>
  <div class="grid gap-2 border p-2">
    <BaseSwitch id="airplane-mode" />
    <BaseLabel for="airplane-mode">Airplane Mode</BaseLabel>
  </div>
</template>
