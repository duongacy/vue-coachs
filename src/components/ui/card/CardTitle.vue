<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h5 :class="cn('text-xl font-semibold tracking-tight', props.class)">
    <slot />
  </h5>
</template>
