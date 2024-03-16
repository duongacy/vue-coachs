<script setup lang="ts">
import { Primitive } from 'radix-vue';
import { buttonVariants, type ButtonProps } from '.';

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  size: 'default',
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="buttonVariants(props)"
  >
    <slot />
  </Primitive>
</template>
