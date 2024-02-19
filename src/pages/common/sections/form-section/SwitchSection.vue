<template>
  <div>
    <base-typography size="heading5" weight="medium" class="bg-pink-100 py-2 px-10 text-neutral-900 "
      >Switch</base-typography
    >
    <div class="p-4 grid grid-cols-[auto_1fr] gap-4 bg-warning-50">
      <base-switch v-model="enabled" label="Enabled"></base-switch>
      <base-typography weight="medium">Result: {{ enabled ? 'On' : 'Off' }}</base-typography>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseSwitch from '@/components/common/BaseSwitch.vue'
import BaseTypography from '@/components/common/BaseTypography.vue'
import { ref } from 'vue'
const enabled = ref(false)
</script>
