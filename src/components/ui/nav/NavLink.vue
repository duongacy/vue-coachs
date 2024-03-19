<template>
  <router-link
    v-slot="{ isActive }"
    :to="to"
    v-bind="$attrs"
    class="inline-flex leading-[24px] text-neutral-400"
  >
    <span :class="cn('text-neutral-500', { 'text-neutral-900': isActive })">
      <slot></slot>
    </span>
  </router-link>
</template>
<script setup lang="ts">
import { cn } from '@/lib/utils';
defineProps<{ to: string }>();
</script>
