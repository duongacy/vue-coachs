<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import CardHeader from './CardHeader.vue';
import CardTitle from './CardTitle.vue';
import CardDescription from './CardDescription.vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div
    :class="
      cn('grid gap-6 rounded-lg border bg-card p-6 text-card-foreground shadow-sm', props.class)
    "
  >
    <CardHeader v-if="!!title || !!description">
      <CardTitle v-if="!!title">{{ title }}</CardTitle>
      <CardDescription v-if="!!description">{{ description }}</CardDescription>
    </CardHeader>
    <slot></slot>
  </div>
</template>
