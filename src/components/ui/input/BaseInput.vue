<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useForwardProps } from 'radix-vue';
import { computed, type Component, type HTMLAttributes } from 'vue';
import type { Size } from '../types';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  value?: string;
  name?: string;

  size?: Size;
  isError?: boolean;
  startIcon?: Component;
  endIcon?: Component;
}>();

const delegateProps = computed(() => {
  const { size, isError, startIcon, endIcon, ...delegate } = props;
  return delegate;
});
const forwardProps = useForwardProps(delegateProps);

const emits = defineEmits<{
  'update:value': [value: string];
}>();

const modelValue = defineModel('value');
</script>

<template>
  <div
    :class="
      cn(
        'relative  flex h-10 overflow-hidden rounded-md border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        {
          'pointer-events-none': props.disabled,
          'border-destructive text-destructive focus-within:ring-destructive':
            isError && !props.disabled,
        },
        props.class,
      )
    "
  >
    <div
      class="absolute inset-y-0 start-0 grid place-content-center px-2"
      v-if="startIcon"
    >
      <component
        :is="startIcon"
        class="size-4 text-muted-foreground"
      />
    </div>
    <div
      class="absolute inset-y-0 end-0 grid place-content-center px-2"
      v-if="endIcon"
    >
      <component
        :is="endIcon"
        class="size-4 text-muted-foreground"
      />
    </div>
    <input
      v-bind="forwardProps"
      v-model="modelValue"
      :class="
        cn('h-full w-full bg-white px-3 py-2 focus:outline-none', {
          'pl-9': startIcon,
          'pr-9': endIcon,
        })
      "
    />
  </div>
</template>
