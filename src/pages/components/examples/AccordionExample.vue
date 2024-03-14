<script setup lang="ts">
import { BaseAccordion } from '@/components/ui/accordion'
import { ref } from 'vue'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.'
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: "Yes. It's unstyled by default, giving you freedom over the look and feel."
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.'
  }
]

const modelValue = ref<string>('item-1')
</script>

<template>
  <div>
    <BaseAccordion :options="accordionItems" collapsible type="single" v-model="modelValue" class="w-[350px]">
    </BaseAccordion>
    Item opening: {{ modelValue }}
  </div>
</template>
