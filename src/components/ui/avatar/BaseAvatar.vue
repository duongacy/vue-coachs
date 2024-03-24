<script setup lang="ts">
import { cn } from '@/lib/utils';
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    class?: string;
    size?: 'sm' | 'base' | 'lg';
    shape?: 'circle' | 'square';
    src?: string;
    fallback?: string;
    alt?: string;
  }>(),
  {
    size: 'sm',
    shape: 'circle',
    class: '',
    src: '',
    fallback: '',
    alt: '',
  },
);
</script>

<template>
  <AvatarRoot
    :class="
      cn(
        'inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-secondary font-normal text-foreground',
        {
          'h-10 w-10 text-xs': props.size === 'sm',
          'h-16 w-16 text-2xl': props.size === 'base',
          'h-32 w-32 text-5xl': props.size === 'lg',
          'rounded-full': props.shape === 'circle',
          'rounded-md': props.shape === 'square',
        },
        props.class,
      )
    "
  >
    <AvatarImage v-if="!!src" :src="src" :alt="alt" class="h-full w-full object-cover" />
    <AvatarFallback v-if="!!fallback">{{ fallback }}</AvatarFallback>
  </AvatarRoot>
</template>
