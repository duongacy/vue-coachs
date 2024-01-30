<template>
  <router-link :to="props.to" v-if="props.to" :class="className">
    <slot></slot>
  </router-link>
  <button v-else :class="className">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import cn from '@/utils/cn'

const props = defineProps<{
  to?: string
  mode?: 'outline' | 'contained' | 'text'
  class?: string
}>()

const className = cn(
  'px-6 py-2 min-h-10 rounded-full min-w-28 text-center',
  {
    'border-blue-600 hover:border-blue-500 active:border-blue-700 border text-blue-600 hover:text-blue-500 active:text-blue-700':
      props.mode == 'outline' || !props.mode,
    'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white': props.mode == 'contained',
    'text-blue-600 hover:text-blue-500 active:text-blue-700': props.mode == 'text'
  },
  props.class
)
</script>
