<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useAttrs } from 'vue';

const attrs = useAttrs();
const props = withDefaults(
  defineProps<{
    as?: string;

    heading1?: boolean;
    heading2?: boolean;
    heading3?: boolean;
    heading4?: boolean;
    heading5?: boolean;
    heading6?: boolean;
    body?: boolean;
    caption?: boolean;
    small?: boolean;
    tiny?: boolean;

    black?: boolean;
    extrabold?: boolean;
    bold?: boolean;
    semibold?: boolean;
    medium?: boolean;
    normal?: boolean;
    light?: boolean;
    extralight?: boolean;
    thin?: boolean;
  }>(),
  {
    as: 'p',
  },
);
</script>
<template>
  <component
    :is="props.as"
    v-bind="attrs"
    :class="[
      cn('text-body font-normal', {
        'text-heading1': heading1,
        'text-heading2': heading2,
        'text-heading3': heading3,
        'text-heading4': heading4,
        'text-heading5': heading5,
        'text-heading6': heading6,
        'text-body': body,
        'text-caption': caption,
        'text-captionall': small,
        'text-tiny': tiny,

        'font-black': black,
        'font-extrabold': extrabold,
        'font-bold': bold,
        'font-semibold': semibold,
        'font-medium': medium,
        'font-normal': normal,
        'font-light': light,
        'font-extralight': extralight,
        'font-thin': thin,
      }),
      attrs.class,
    ]"
  >
    <slot />
  </component>
</template>
