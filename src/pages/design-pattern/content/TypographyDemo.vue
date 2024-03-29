<template>
  <ExampleSectionTemplate name="Typography">
    <div class="overflow-x-auto overflow-y-hidden">
      <div
        class="flex gap-4 items-baseline"
        v-for="fontWeightClass in fontWeightClasses"
        :key="fontWeightClass"
      >
        <h1
          :class="textClass + ' ' + fontWeightClass"
          v-for="textClass in textClasses"
          :key="textClass"
        >
          {{ textClass.split('-')[1] }}
        </h1>
      </div>
    </div>
  </ExampleSectionTemplate>
</template>

<script setup lang="ts">
import ExampleSectionTemplate from '@/pages/components/ExampleSectionTemplate.vue';

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
</script>
