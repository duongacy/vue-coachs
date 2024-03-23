<template>
  <div class="flex flex-col gap-4">
    <BaseText heading5 bold class="uppercase text-pink-600">Certifications</BaseText>
    <BaseText as="ul" body light class="list-inside list-disc leading-7 text-neutral-600">
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, impedit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, impedit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, impedit.</li>
    </BaseText>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';
</script>
