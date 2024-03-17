<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useVModel } from '@vueuse/core';
import { ref, type Component, type HTMLAttributes } from 'vue';
import type { Size } from '../types';

const props = defineProps<{
  value?: string | number;
  class?: HTMLAttributes['class'];
  size?: Size;
  startIcon?: Component;
  endIcon?: Component;
  disabled?: boolean;
  placeholder?: string;
  isError?: boolean;
}>();

const emits = defineEmits<{
  'update:value': [value: string];
}>();

const modelValue = useVModel(props, 'value', emits);
</script>

<template>
  <div
    :class="
      cn(
        'relative flex h-10 overflow-hidden rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        {
          'pointer-events-none': disabled,
          'border-destructive text-destructive focus-within:ring-destructive': isError && !disabled,
        },
        props.class,
      )
    "
  >
    <div
      class="absolute inset-y-0 start-0 grid place-content-center justify-center px-2"
      v-if="startIcon"
    >
      <component
        :is="startIcon"
        class="size-6 text-muted-foreground"
      />
    </div>
    <div
      class="absolute inset-y-0 end-0 grid place-content-center justify-center px-2"
      v-if="endIcon"
    >
      <component
        :is="endIcon"
        class="size-6 text-muted-foreground"
      />
    </div>
    <input
      :disabled="disabled"
      v-model="modelValue"
      ref="inputRef"
      :placeholder="placeholder"
      :class="
        cn('h-full w-full px-3 py-2 focus:outline-none', {
          'pl-9': startIcon,
          'pr-9': endIcon,
        })
      "
    />
  </div>
</template>
