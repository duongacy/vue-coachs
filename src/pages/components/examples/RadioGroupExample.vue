<script setup lang="ts">
import { BaseLabel } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import type { RadioOption } from '@/components/ui/radio-group/RadioGroup.vue';
import { ref } from 'vue';

const options: RadioOption[] = [
  {
    value: 'default',
    label: 'Default',
    disabled: true,
  },
  {
    value: 'comfortable',
    label: 'Comfortable',
  },
  {
    value: 'compact',
    label: 'Compact',
  },
];
const value = ref('compact');
</script>

<template>
  <div class="grid gap-2">
    <RadioGroup
      default-value="comfortable"
      :options="options"
      v-model:model-value="value"
      class="flex"
    >
    </RadioGroup>
    {{ value }}
  </div>
</template>
