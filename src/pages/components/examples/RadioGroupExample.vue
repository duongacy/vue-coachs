<script setup lang="ts">
import { BaseLabel } from '@/components/ui/label';
import { RadioGroup } from '@/components/ui/radio-group';
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
  <div class="flex gap-4">
    <div class="grid min-w-[350px] gap-2">
      <BaseLabel>Select type</BaseLabel>
      <RadioGroup
        default-value="comfortable"
        :options="options"
        v-model:model-value="value"
        class="flex gap-3"
      >
      </RadioGroup>
    </div>
    <div class="grid min-w-[350px] gap-2">
      <BaseLabel disabled>Select type(Disabled all)</BaseLabel>
      <RadioGroup
        disabled
        default-value="comfortable"
        :options="options"
        v-model:model-value="value"
        class="flex gap-3"
      >
      </RadioGroup>
    </div>
  </div>
</template>
