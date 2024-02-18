<template>
  <div>
    <base-typography size="heading5" weight="medium" class="bg-green-100 py-2 px-10"
      >Switch</base-typography
    >
    <div class="py-4 grid grid-cols-[auto_1fr] gap-4">
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
