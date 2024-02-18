<template>
  <div>
    <base-typography size="heading5" weight="medium" class="bg-green-100 py-2 px-10"
      >Select</base-typography
    >
    <div class="grid grid-cols-[auto_1fr] gap-4 items-end mt-4">
      <base-select :options="options"></base-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseSelect, { type TSelectOption } from '@/components/common/BaseSelect.vue'
import BaseTypography from '@/components/common/BaseTypography.vue'

const options: TSelectOption[] = [
  {
    name: 'Wade Cooper',
    value: 'Wade Cooper'
  },
  {
    name: 'Le Van Nhu Y',
    value: 'YLVN1'
  }
]
</script>
