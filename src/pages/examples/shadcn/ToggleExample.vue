<script setup lang="ts">
import { Bold } from 'lucide-vue-next'

import { BaseToggle } from '@/components/ui/toggle'
</script>

<template>
  <div class="grid gap-2 border p-2">
    <BaseToggle aria-label="Toggle italic">
      <Bold class="h-4 w-4" />
    </BaseToggle>
  </div>
</template>
