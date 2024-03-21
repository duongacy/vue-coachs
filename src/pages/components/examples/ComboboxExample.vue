<script setup lang="ts">
import { BaseCombobox, type ComboboxOption } from '@/components/ui/combobox';
import { ref, watchEffect } from 'vue';

const frameworks: ComboboxOption[] = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];
const value = ref('');

watchEffect(() => {
  console.log('value:', value.value);
});
</script>

<template>
  <BaseCombobox v-model:value="value" :options="frameworks"></BaseCombobox>
</template>
