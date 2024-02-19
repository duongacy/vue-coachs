<template>
  <div>
    <base-typography size="heading5" weight="medium" class="bg-pink-100 py-2 px-10 text-neutral-900 "
      >Checkbox</base-typography
    >
    <div class="grid grid-cols-[auto_1fr] gap-4 items-end p-4 bg-warning-50">
      <BaseCheckboxGroup
        :options="options"
        v-model="selectedValues"
        class="flex-row"
      ></BaseCheckboxGroup>
      Selected: {{ selectedNames }}
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseCheckboxGroup, {
  type TBaseCheckboxGroupOption
} from '@/components/common/BaseCheckboxGroup.vue'
import BaseTypography from '@/components/common/BaseTypography.vue'
import { computed, ref } from 'vue'
const options: TBaseCheckboxGroupOption[] = [
  { value: 'OanhNT17', name: 'Nguyen Thuy Oanh' },
  { value: 'YLVN1', name: 'Le Van Nhu Y' }
]
const selectedValues = ref([])
const selectedNames = computed(() => {
  if (!selectedValues.value.length) {
    return 'Empty'
  }
  return selectedValues.value.join(', ')
})
</script>
