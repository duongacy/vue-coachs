<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { type AlertVariants, alertVariants, AlertTitle, AlertDescription } from '.'
import { cn } from '@/lib/utils'
import { Terminal } from 'lucide-vue-next'

const props = defineProps<{
  class?: HTMLAttributes['class']
  variant?: AlertVariants['variant']
  title: string
  description: string
  icon?: any
}>()
</script>

<template>
  <div :class="cn(alertVariants({ variant }), props.class)" role="alert">
    <Terminal class="h-4 w-4" />
    <AlertTitle>{{ title }}</AlertTitle>
    <AlertDescription>{{ description }} </AlertDescription>
  </div>
</template>
