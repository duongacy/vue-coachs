<script setup lang="ts">
import { BaseText } from '@/components/ui/text';

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
  <div class="grid overflow-auto overflow-y-hidden">
    <div
      v-for="fontWeightClass in fontWeightClasses"
      :key="fontWeightClass"
      class="flex items-baseline gap-4"
    >
      <p class="w-20">{{ fontWeightClass.split('-')[1] }}</p>
      <BaseText
        v-for="textClass in textClasses"
        :key="textClass + fontWeightClass"
        :heading1="textClass === 'text-heading1'"
        :heading2="textClass === 'text-heading2'"
        :heading3="textClass === 'text-heading3'"
        :heading4="textClass === 'text-heading4'"
        :heading5="textClass === 'text-heading5'"
        :heading6="textClass === 'text-heading6'"
        :body="textClass === 'text-body'"
        :caption="textClass === 'text-caption'"
        :small="textClass === 'text-small'"
        :tiny="textClass === 'text-tiny'"
        :black="fontWeightClass === 'font-black'"
        :extrabold="fontWeightClass === 'font-extrabold'"
        :bold="fontWeightClass === 'font-bold'"
        :semibold="fontWeightClass === 'font-semibold'"
        :medium="fontWeightClass === 'font-medium'"
        :normal="fontWeightClass === 'font-normal'"
        :light="fontWeightClass === 'font-light'"
        :extralight="fontWeightClass === 'font-extralight'"
        :thin="fontWeightClass === 'font-thin'"
        class="text-neutral-800"
      >
        {{ textClass.split('-')[1] }}
      </BaseText>
    </div>
  </div>
</template>
