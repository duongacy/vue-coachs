<template>
  <router-link
    :to="to"
    v-bind="$attrs"
    class="text-neutral-400 inline-flex leading-[24px]"
    v-slot="{ isActive }"
  >
    <span :class="cn('text-neutral-500', { 'text-neutral-900': isActive })">
      <slot></slot>
    </span>
  </router-link>
</template>
<script setup lang="ts">
import { cn } from '@/lib/utils'
defineProps<{ to: string }>()
</script>
