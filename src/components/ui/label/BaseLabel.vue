<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Label, type LabelProps } from 'radix-vue';
import { computed, ref, type HTMLAttributes, watchEffect } from 'vue';

const props = defineProps<
  LabelProps & { class?: HTMLAttributes['class']; preventDelegation?: boolean }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const labelRef = ref<HTMLLabelElement>();
const disabled = computed(() => {
  return (
    labelRef.value?.querySelector('input')?.disabled ||
    labelRef.value?.querySelector('textarea')?.disabled
  );
});

watchEffect(() => {
  labelRef.value?.addEventListener('click', (e) => {
    // Special case for TagsInput
    if (!!labelRef.value?.querySelector('.TagsInput')) {
      const input = labelRef.value?.querySelector('input');
      e.preventDefault();
      input?.focus();
    }
  });
});
</script>

<template>
  <label
    ref="labelRef"
    v-bind="delegatedProps"
    :class="
      cn(
        'text-sm font-medium leading-none ',
        { 'pointer-events-none opacity-60': disabled },
        props.class,
      )
    "
  >
    <slot />
  </label>
</template>
