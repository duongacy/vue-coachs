<script setup lang="ts">
import { Primitive } from 'radix-vue';
import { buttonVariants, type ButtonProps } from '.';
import { computed } from 'vue';

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
});
const restProps = computed(() => {
  return { size: props.size, class: props.class, variant: props.variant };
});
</script>

<template>
  <Primitive
    v-bind="$attrs"
    :as="as"
    :as-child="asChild"
    :class="buttonVariants(restProps)"
  >
    <slot />
  </Primitive>
</template>
