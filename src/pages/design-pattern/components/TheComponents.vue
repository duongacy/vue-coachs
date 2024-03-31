<template>
  <BaseContainer fluid class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">Components</p>
    <div class="mt-12 grid gap-4">
      <AlertDemo />
      <BadgeDemo />
      <ButtonDemo />
      <CardDemo />
      <DropdownMenuDemo />
      <DialogDemo />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from '@/layouts/BaseContainer.vue';
import AlertDemo from './AlertDemo.vue';
import BadgeDemo from './BadgeDemo.vue';
import ButtonDemo from './ButtonDemo.vue';
import CardDemo from './CardDemo.vue';
import DialogDemo from './DialogDemo.vue';
import DropdownMenuDemo from './DropdownMenuDemo.vue';
</script>
