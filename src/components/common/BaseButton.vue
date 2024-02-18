<template>
  <router-link :to="to" v-if="to" :class="buttonClasses">
    <slot></slot>
  </router-link>
  <button v-else :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import cn from '@/utils/cn'
import { computed } from 'vue'

export type TBaseButtonSize = 'small' | 'medium' | 'large' | 'extra-large'
export type TBaseButtonVariant = 'primary' | 'secondary' | 'tertiary'

const props = defineProps<{
  size?: TBaseButtonSize
  variant?: TBaseButtonVariant
  to?: string
}>()

const buttonClasses = computed(() => {
  return cn(
    'duration-200 disabled:pointer-events-none inline-flex items-center disabled:opacity-75 select-none',
    {
      'focus:ring-[4px]':
        props.size === 'extra-large' &&
        (props.variant === 'primary' || props.variant === 'secondary'),
      'focus:ring-[3px]':
        (props.size === 'large' || props.size === 'medium') &&
        (props.variant === 'primary' || props.variant === 'secondary'),
      'focus:ring-[2px]':
        props.size === 'small' && (props.variant === 'primary' || props.variant === 'secondary'),

      'text-lg px-5 min-h-12 rounded-xl': props.size === 'extra-large',
      'text-base px-4 min-h-9 rounded-lg': props.size === 'large',
      'text-sm px-3 min-h-7 rounded-md': props.size === 'medium',
      'text-xs px-2 min-h-6 rounded-md': props.size === 'small',

      'bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700':
        props.variant === 'primary',
      'border border-indigo-500 hover:border-indigo-600 active:border-indigo-700 text-indigo-500 hover:text-indigo-600 active:text-indigo-700':
        props.variant === 'secondary',
      'text-indigo-500 hover:text-indigo-600 active:text-indigo-700': props.variant === 'tertiary'
    }
  )
})
</script>
