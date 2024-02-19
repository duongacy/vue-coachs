<template>
  <div>
    <base-typography size="heading5" weight="medium" class="bg-pink-100 py-2 px-10 text-neutral-900"
      >Listbox</base-typography
    >
    <div class="grid grid-cols-[auto_1fr] gap-4 items-end py-4 bg-warning-50">
      <base-listbox :options="options" class="min-w-[300px]" v-model="selectedValue"></base-listbox>
      Selected: {{ selectedName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseListbox, { type TBaseListboxOption } from '@/components/common/BaseListbox.vue'
import BaseTypography from '@/components/common/BaseTypography.vue'
import { computed, ref } from 'vue'
const options: TBaseListboxOption[] = [
  {
    name: 'Wade Cooper',
    value: 'Wade_Cooper'
  },
  {
    name: 'Le Van Nhu Y',
    value: 'YLVN1'
  }
]
const selectedValue = ref('YLVN1')

const selectedName = computed(
  () => options.find((option) => option.value === selectedValue.value)?.name || ''
)
</script>
