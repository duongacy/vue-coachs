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
  ['text-heading1', '80/80'],
  ['text-heading2', '60/60'],
  ['text-heading3', '40/44'],
  ['text-heading4', '30/34'],
  ['text-heading5', '24/28'],
  ['text-heading6', '20/24'],
  ['text-body', '16/20'],
  ['text-caption', '14/22'],
  ['text-small', '12/18'],
  ['text-tiny', '10/16'],
];
</script>

<template>
  <div class="grid overflow-auto overflow-y-hidden">
    <div
      v-for="fontWeightClass in fontWeightClasses"
      :key="fontWeightClass"
      class="flex items-end gap-4"
    >
      <p class="w-20">{{ fontWeightClass.split('-')[1] }}</p>
      <div v-for="[textClass, info] in textClasses" :key="textClass + fontWeightClass">
        <BaseText small bold class="text-red-800" v-if="fontWeightClass === 'font-black'"
          >{{ info }}
        </BaseText>
        <BaseText
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
          class="relative text-red-700"
        >
          {{ textClass.split('-')[1] }}
        </BaseText>
      </div>
    </div>
  </div>
</template>
