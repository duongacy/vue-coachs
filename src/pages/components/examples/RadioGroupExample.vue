<script setup lang="ts">
import { BaseLabel } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
</script>

<template>
  <div class="grid gap-2">
    <RadioGroup default-value="comfortable">
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r1" value="default" />
        <BaseLabel for="r1">Default</BaseLabel>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r2" value="comfortable" />
        <BaseLabel for="r2">Comfortable</BaseLabel>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r3" value="compact" />
        <BaseLabel for="r3">Compact</BaseLabel>
      </div>
    </RadioGroup>
  </div>
</template>
