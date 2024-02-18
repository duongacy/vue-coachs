<template>
  <div>
    <base-typography size="heading5" weight="medium" class="bg-green-100 py-2 px-10"
      >Checkbox</base-typography
    >
    <div class="grid grid-cols-[auto_1fr] gap-4 items-end mt-4">
      <BaseCheckbox></BaseCheckbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseCheckbox from '@/components/common/BaseCheckbox.vue'
import BaseTypography from '@/components/common/BaseTypography.vue'
</script>
