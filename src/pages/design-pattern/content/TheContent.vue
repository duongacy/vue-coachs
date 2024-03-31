<template>
  <BaseContainer fluid class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">Content</p>
    <div class="mt-12 grid gap-4">
      <TypographyDemo />
      <AvatarDemo />
      <TabsDemo />
      <SeparatorDemo />
      <TooltipDemo />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from '@/layouts/BaseContainer.vue';
import AvatarDemo from './AvatarDemo.vue';
import SeparatorDemo from './SeparatorDemo.vue';
import TabsDemo from './TabsDemo.vue';
import TooltipDemo from './TooltipDemo.vue';
import TypographyDemo from './TypographyDemo.vue';
</script>
