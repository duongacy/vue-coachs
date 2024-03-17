<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue';
import { useVModel } from '@vueuse/core';
import { cn } from '@/lib/utils';
import { useForwardProps } from 'radix-vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  defaultValue?: string;
  value?: string;
  isError?: boolean;
  disabled?: boolean;
  placeholder?: string;
}>();

const placeholderWithCondition = computed(() => {
  return props.disabled ? undefined : props.placeholder;
});

const delegateProps = computed(() => {
  const { class: _, isError, ...delegate } = props;
  return delegate;
});
const forwardProps = useForwardProps(delegateProps);

const emits = defineEmits<{
  'update:value': [value: string];
}>();

const modelValue = useVModel(props, 'value', emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <textarea
    v-bind="forwardProps"
    :placeholder="placeholderWithCondition"
    v-model="modelValue"
    :class="
      cn(
        'flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        { 'border-destructive focus-visible:ring-destructive': isError },
        props.class,
      )
    "
  />
</template>
