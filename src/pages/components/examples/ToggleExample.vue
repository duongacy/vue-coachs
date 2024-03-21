<script setup lang="ts">
import { Bold } from 'lucide-vue-next';
import { BaseToggle } from '@/components/ui/toggle';
import { ref } from 'vue';
import { BaseText } from '@/components/ui/text';

const variants = ['default', 'outline'] as const;
const sizes = ['default', 'sm', 'lg'] as const;
const value = ref(false);
</script>
<template>
  <div class="grid gap-4">
    <div v-for="variant in variants" :key="variant + 'toggle'" class="flex items-end gap-4">
      <BaseText>Variant {{ variant }}</BaseText>
      <div v-for="size in sizes" :key="size + variant + 'togglesize'">
        <BaseToggle :size="size" :variant="variant" v-model:pressed="value">
          <Bold class="h-4 w-4" />
        </BaseToggle>
        <BaseText>Size {{ size }}</BaseText>
      </div>
    </div>
  </div>
</template>
