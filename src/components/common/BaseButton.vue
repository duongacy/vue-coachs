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

      'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700':
        props.variant === 'primary',
      'border border-primary-500 hover:border-primary-600 active:border-primary-700 text-primary-500 hover:text-primary-600 active:text-primary-700':
        props.variant === 'secondary',
      'text-primary-500 hover:text-primary-600 active:text-primary-700':
        props.variant === 'tertiary'
    }
  )
})
</script>
