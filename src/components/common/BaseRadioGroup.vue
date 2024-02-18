<template>
  <RadioGroup v-model="selectedValue" :class="cn('flex flex-col gap-2', props.class)">
    <RadioGroupOption
      v-slot="{ checked, active }"
      :value="option.value"
      v-for="option in props.options"
      :key="option.value"
      class="cursor-pointer flex gap-2 items-start"
    >
      <div class="w-6 h-6 grid place-items-center">
        <div
          :class="
            cn('h-4 w-4 rounded-full border border-gray-300', {
              ' border-indigo-600 border-[6px]': checked,
              ' ring-[2px] ring-offset-2 ring-indigo-600 border-indigo-600': active
            })
          "
        ></div>
      </div>
      <base-typography size="body" weight="medium" class="leading-[24px]">
        {{ option.name }}
      </base-typography>
    </RadioGroupOption>
  </RadioGroup>
</template>

<script setup lang="ts">
import BaseTypography from './BaseTypography.vue'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import cn from '@/utils/cn'
export type TBaseRadioGroupOption = { value: string; name: string }
const props = defineProps<{
  options: TBaseRadioGroupOption[]
  class?: string
}>()
const selectedValue = defineModel<string>()
</script>
