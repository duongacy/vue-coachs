<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { Component, HTMLAttributes } from 'vue';
import { AlertTitle, alertVariants, type AlertVariants } from '.';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  variant?: AlertVariants['variant'];
  icon?: Component;
  title?: string;
}>();
</script>

<template>
  <div :class="cn(alertVariants({ variant }), props.class)" role="alert">
    <div class="grid h-6 w-6 shrink-0 place-content-center" v-if="!!icon">
      <component
        :is="icon"
        :class="cn('h-4 w-4 text-foreground', { 'text-destructive': variant === 'destructive' })"
      />
    </div>
    <div class="grid gap-2">
      <AlertTitle v-if="!!title">{{ title }}</AlertTitle>
      <slot />
    </div>
  </div>
</template>
