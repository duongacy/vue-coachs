<template>
  <div>
    <label
      :class="
        cn(
          'bg-white flex rounded-[4px] text-[14px] border overflow-hidden text-neutral-900 placeholder:text-neutral-500 border-neutral-500 focus-within:border-primary-600',
          {
            'border-error-500': !!error,
            ' border-neutral-300 opacity-85 text-neutral-600': disabled,
            'text-error-600 focus-within:border-error-600': !!error
          }
        )
      "
    >
      <div v-if="leftIcon" class="grid place-items-center pl-[10px]">
        <component :is="leftIcon"></component>
      </div>
      <input
        v-bind="$attrs"
        v-model="value"
        :class="
          cn({
            'border-none flex-grow focus:border-none focus:ring-0 bg-transparent': true,
            'placeholder:text-neutral-300': disabled
          })
        "
        :disabled="disabled"
      />
      <div v-if="rightIcon" class="grid place-items-center pr-[10px]">
        <component :is="rightIcon"></component>
      </div>
    </label>
    <base-typography
      size="small"
      weight="regular"
      :class="
        cn('leading-[1] mt-[4px] text-neutral-900', {
          'text-neutral-500': disabled
        })
      "
      v-if="!!hint"
      >{{ hint }}</base-typography
    >
    <base-typography
      size="small"
      weight="regular"
      class="text-error-600 leading-[1] mt-[4px]"
      v-if="!!error"
      >{{ error }}</base-typography
    >
  </div>
</template>

<script lang="ts" setup>
type TInputState = 'default' | 'active' | 'typing' | 'filled' | 'disabled'

import { type Component, reactive } from 'vue'
import BaseTypography from './BaseTypography.vue'
import cn from '@/utils/cn'

const props = defineProps<{
  value?: string
  error?: string
  hint?: string
  state?: TInputState
  leftIcon?: Component
  rightIcon?: Component
  disabled?: boolean
}>()
const { value, error, hint, state = 'default', leftIcon, rightIcon, disabled } = reactive(props)
</script>
