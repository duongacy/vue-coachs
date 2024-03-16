<script setup lang="ts">
const fontWeightClasses = [
  'font-black',
  'font-extrabold',
  'font-bold',
  'font-semibold',
  'font-medium',
  'font-normal',
  'font-light',
  'font-extralight',
  'font-thin',
];
const textClasses = [
  'text-heading1',
  'text-heading2',
  'text-heading3',
  'text-heading4',
  'text-heading5',
  'text-heading6',
  'text-body',
  'text-caption',
  'text-small',
  'text-tiny',
];
</script>

<template>
  <div class="grid overflow-auto">
    <div
      v-for="fontWeightClass in fontWeightClasses"
      :key="fontWeightClass"
      class="flex items-baseline gap-4"
    >
      <p class="w-20">{{ fontWeightClass.split('-')[1] }}</p>
      <p
        v-for="textClass in textClasses"
        :key="textClass + fontWeightClass"
        :class="[textClass, fontWeightClass]"
      >
        {{ textClass.split('-')[1] }}
      </p>
    </div>
  </div>
</template>
