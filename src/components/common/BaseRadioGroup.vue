<template>
  <RadioGroup v-model="selectedValue" :class="cn('flex flex-col gap-2', props.class)">
    <RadioGroupOption
      v-slot="{ checked, active }"
      :value="option.value"
      v-for="option in props.options"
      :key="option.value"
      class="cursor-pointer flex gap-2 items-start select-none"
    >
      <div class="h-6 grid items-center flex-shrink-0">
        <div
          :class="
            cn('h-4 w-4 rounded-full border border-neutral-300', {
              'border-success-700 border-[6px]': checked,
              'ring-[2px] ring-offset-[1px] ring-success-700 border-success-700': active
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
