<script setup lang="ts">
import { cn } from '@/lib/utils';
import {
  PinInputRoot,
  useForwardPropsEmits,
  type PinInputRootEmits,
  type PinInputRootProps,
} from 'radix-vue';
import { type HTMLAttributes } from 'vue';

const props = defineProps<PinInputRootProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<PinInputRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <PinInputRoot v-bind="forwarded" :class="cn('flex items-center gap-2', props.class)">
    <slot />
  </PinInputRoot>
</template>
