<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '@/lib/utils';
import { BaseSlider } from '@/components/ui/slider';

const modelValue = ref([50]);
</script>

<template>
  <div class="grid gap-2">
    <BaseSlider
      v-model="modelValue"
      :max="100"
      :step="1"
      :class="cn('w-3/5', $attrs.class ?? '')"
      class="w-[350px]"
    />
  </div>
</template>
