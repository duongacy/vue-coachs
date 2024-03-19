<script setup lang="ts">
import {
  BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BaseCard, CardContent, CardFooter } from '@/components/ui/card';
import { ref } from 'vue';

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
];

const singleValue = ref('item-2');
const multipleValue = ref(['item-1', 'item-3']);
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <BaseCard
      title="Single"
      description="(Not collapsible)"
      class="border-none shadow-none"
    >
      <CardContent>
        <BaseAccordion
          v-model:model-value="singleValue"
          type="single"
          class="w-[350px]"
        >
          <AccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
          >
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </BaseAccordion>
      </CardContent>
      <CardFooter> Selected value: {{ singleValue }} </CardFooter>
    </BaseCard>

    <BaseCard
      title="Single"
      description="(Collapsible)"
      class="border-none shadow-none"
    >
      <CardContent>
        <BaseAccordion
          v-model:model-value="singleValue"
          type="single"
          class="w-[350px]"
          collapsible
        >
          <AccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
          >
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </BaseAccordion>
      </CardContent>
      <CardFooter> Selected value: {{ singleValue }} </CardFooter>
    </BaseCard>

    <BaseCard
      title="Multiple"
      description="(Multiple is auto collapsible)"
      class="border-none shadow-none"
    >
      <BaseAccordion
        v-model:model-value="multipleValue"
        type="multiple"
        class="w-[350px]"
      >
        <AccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </BaseAccordion>
      <CardFooter> Selected value: {{ multipleValue.join(', ') }} </CardFooter>
    </BaseCard>
  </div>
</template>
