<script lang="ts">
import type { InjectionKey } from 'vue';

export const FORM_ITEM_INJECTION_KEY = Symbol() as InjectionKey<string>;
</script>

<script lang="ts" setup>
import { provideimport { cn } from '@/lib/utils';
import { useId } from 'radix-vue';
import { provide } from 'vue';
efineProps<{
  class?: string;
}>();

const id = useId();
provide(FORM_ITEM_INJECTION_KEY, id);
</script>

<template>
  <div :class="cn('space-y-2', props.class)">
    <slot />
  </div>
</template>
