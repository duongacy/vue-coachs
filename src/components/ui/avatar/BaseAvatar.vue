<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { AvatarRoot } from 'radix-vue';
import { type AvatarVariants, avatarVariant, AvatarFallback, AvatarImage } from '.';
import { cn } from '@/lib/utils';

const props = withDefaults(
  defineProps<{
    class?: string;
    size?: AvatarVariants['size'];
    shape?: AvatarVariants['shape'];
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
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <AvatarImage v-if="!!src" :src="src" :alt="alt" />
    <AvatarFallback v-if="!!fallback">{{ fallback }}</AvatarFallback>
  </AvatarRoot>
</template>
