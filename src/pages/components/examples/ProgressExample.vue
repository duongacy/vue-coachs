<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { BaseProgress } from '@/components/ui/progress';

const progress = ref(13);

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500);
  cleanupFn(() => clearTimeout(timer));
});
</script>

<template>
  <div class="grid gap-2">
    <BaseProgress
      v-model="progress"
      class="w-[350px]"
    />
  </div>
</template>
