<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { AvatarRoot } from 'radix-vue';
import { type AvatarVariants, avatarVariant, AvatarFallback, AvatarImage } from '.';
import { cn } from '@/lib/utils';

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class'];
    size?: AvatarVariants['size'];
    shape?: AvatarVariants['shape'];
    src?: string;
    fallback?: string;
    alt?: string;
  }>(),
  {
    size: 'sm',
    shape: 'circle',
  },
);
</script>

<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <AvatarImage :src="src" :alt="alt" v-if="!!src" />
    <AvatarFallback v-if="!!fallback">{{ fallback }}</AvatarFallback>
  </AvatarRoot>
</template>
