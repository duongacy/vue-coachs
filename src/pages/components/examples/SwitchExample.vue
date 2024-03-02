<script setup lang="ts">
import { BaseLabel } from '@/components/ui/label'
import { BaseSwitch } from '@/components/ui/switch'
</script>

<template>
  <div class="flex items-center gap-2 ">
    <BaseSwitch id="airplane-mode" />
    <BaseLabel for="airplane-mode">Airplane Mode</BaseLabel>
  </div>
</template>
