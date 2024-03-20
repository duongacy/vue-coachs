<script setup lang="ts">
import { BaseLabel } from '@/components/ui/label';
import { BaseSelect } from '@/components/ui/select';
import type { SelectOption } from '@/components/ui/select/BaseSelect.vue';
import { ref } from 'vue';

const options: SelectOption[] = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'grapes',
    label: 'Grapes',
    disabled: true,
  },
];
const value = ref();
</script>

<template>
  <div class="flex gap-4">
    <div class="grid w-[350px] gap-2">
      <BaseLabel for="fruits">Select Fruit(with default value)</BaseLabel>
      <BaseSelect
        id="fruits"
        v-model:model-value="value"
        :options="options"
        default-value="banana"
        placeholder="Select fruits"
        class="mx-1"
        label="Fruits"
      >
      </BaseSelect>
    </div>
    <div class="grid w-[350px] gap-2">
      <BaseLabel for="fruits2">Select Fruit(with placeholder)</BaseLabel>
      <BaseSelect
        id="fruits2"
        v-model:model-value="value"
        :options="options"
        placeholder="Select fruits"
        class="mx-1"
        label="Fruits"
      >
      </BaseSelect>
    </div>
    <div class="grid w-[350px] gap-2">
      <BaseLabel
        for="fruits3"
        disabled
        >Select Fruit(disabled)</BaseLabel
      >
      <BaseSelect
        id="fruits3"
        v-model:model-value="value"
        disabled
        :options="options"
        placeholder="Select fruits"
        class="mx-1"
        label="Fruits"
      >
      </BaseSelect>
    </div>
  </div>
</template>
