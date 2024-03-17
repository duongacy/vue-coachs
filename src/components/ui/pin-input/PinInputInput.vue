<script setup lang="ts">
import { cn } from '@/lib/utils';
import { PinInputInput, useForwardProps, type PinInputInputProps } from 'radix-vue';
import { computed, toRef, type HTMLAttributes } from 'vue';

const props = defineProps<
  PinInputInputProps & { class?: HTMLAttributes['class']; isError?: boolean }
>();

const delegatedProps = computed(() => {
  const { class: _, isError, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <PinInputInput
    v-bind="forwardedProps"
    :class="
      cn(
        'flex h-10 w-10 rounded-md border border-input bg-background text-center text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        { 'border-destructive text-destructive focus-visible:ring-destructive': isError },
        props.class,
      )
    "
  />
</template>
