<template>
  <div>
    <base-typography size="heading5" weight="medium" class="bg-green-100 py-2 px-10"
      >Radio group</base-typography
    >
    <div class="grid grid-cols-[auto_1fr] gap-4 items-end py-4">
      <base-radio-group
        :options="options"
        v-model="selectedValue"
        class="flex-row"
      ></base-radio-group>
      Selected: {{ selectedName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseRadioGroup, { type TBaseRadioGroupOption } from '@/components/common/BaseRadioGroup.vue'
import BaseTypography from '@/components/common/BaseTypography.vue'
import { computed, ref } from 'vue'

const options: TBaseRadioGroupOption[] = [
  {
    value: 'startup',
    name: 'Startup'
  },
  {
    value: 'business',
    name: 'Business'
  },
  {
    value: 'enterprise',
    name: 'Enterprise'
  }
]
const selectedValue = ref('startup')
const selectedName = computed(
  () => options.find((option) => option.value === selectedValue.value)?.name || ''
)
</script>
