<template>
  <span
    :class="
      cn([
        'inline-flex w-fit items-center gap-x-1.5 rounded-md px-3 select-none min-h-7 text-sm font-medium text-neutral-900 ring-1 ring-inset ring-neutral-200',
        props.class
      ])
    "
  >
    <svg
      :class="cn(`h-1.5 w-1.5 fill-warning-800`, props.dotClass)"
      viewBox="0 0 6 6"
      aria-hidden="true"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>
    {{ props.text }}
  </span>
</template>

<script setup lang="ts">
import cn from '@/utils/cn'

const props = defineProps<{ dotClass?: string; text: string; class?: string }>()
</script>
