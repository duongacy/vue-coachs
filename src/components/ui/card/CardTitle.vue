<script setup lang="ts">
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <h5 :class="cn('text-heading6 font-semibold tracking-tight', props.class)">
    <slot />
  </h5>
</template>
