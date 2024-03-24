<script setup lang="ts">
import { Primitive } from 'radix-vue';
import { useAttrs } from 'vue';
import { buttonVariants, type ButtonProps } from '.';

const attrs = useAttrs();
defineOptions({
  inheritAttrs: false,
});
const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
});
</script>

<template>
  <Primitive
    v-bind="attrs"
    :as="as"
    :as-child="asChild"
    :class="buttonVariants({ size, class: props.class, variant })"
  >
    <slot />
  </Primitive>
</template>
