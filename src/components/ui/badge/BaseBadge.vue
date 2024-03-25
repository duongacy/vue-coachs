<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { Size, Variant } from '../types';

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    size?: Size;
    class?: string;
  }>(),
  { class: '', variant: 'primary', size: 'sm' },
);
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex items-center rounded-full border all font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        {
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80':
            variant === 'primary',
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80':
            variant === 'secondary',
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80':
            variant === 'destructive',
          'text-foreground': variant === 'outline',

          'px-2.5 py-0.5 text-caption': size === 'sm',
          'px-3.5 py-1 text-body': size === 'md',
          'px-5 py-1.5 text-heading6': size === 'lg',
        },
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
