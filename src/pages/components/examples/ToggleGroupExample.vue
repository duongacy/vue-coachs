<script setup lang="ts">
import { Bold, Italic, Underline } from 'lucide-vue-next';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ref } from 'vue';
import { BaseText } from '@/components/ui/text';

const modelValue = ref([]);

const sizes = ['default', 'sm', 'lg'] as const;
const variants = ['default', 'outline'] as const;
const disableds = [false, true] as const;
</script>

<template>
  <div class="grid gap-y-6">
    <div v-for="variant in variants" :key="variant + 'togglegroup'">
      <BaseText heading6 semibold class="mb-2">Variant {{ variant }}</BaseText>
      <div class="grid gap-2">
        <div
          v-for="size in sizes"
          :key="variant + size + 'togglegroup'"
          class="flex items-end gap-1"
        >
          <BaseText class="w-[180px]">Size {{ size }}</BaseText>
          <div v-for="isDisabled in disableds" :key="variant + size + 'togglegroup' + isDisabled">
            <ToggleGroup
              type="single"
              v-model:model-value="modelValue"
              :size="size"
              :variant="variant"
              :disabled="isDisabled"
            >
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline class="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
    </div>
    <div>
      {{ modelValue }}
    </div>
  </div>
</template>
