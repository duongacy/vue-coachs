<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Label } from 'radix-vue';
import { ref, useAttrs, watchEffect } from 'vue';

const attrs = useAttrs();
defineProps<{ preventDelegation?: boolean }>();
const labelRef = ref<HTMLLabelElement>();

watchEffect(() => {
  labelRef.value?.addEventListener('click', (e) => {
    // Special case for TagsInput
    if (labelRef.value?.querySelector('.TagsInput')) {
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
    :class="
      cn(
        'text-sm font-medium leading-none [&:has(input[disabled])]:opacity-70 [&:has(textarea[disabled])]:opacity-70',
        attrs.class as string,
      )
    "
  >
    <slot />
  </label>
</template>
