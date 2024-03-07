<script setup lang="ts">
import {
  AccordionRoot,
  type AccordionRootEmits,
  type AccordionRootProps,
  useForwardPropsEmits
} from 'radix-vue'
import AccordionItem from './AccordionItem.vue'
import AccordionTrigger from './AccordionTrigger.vue'
import AccordionContent from './AccordionContent.vue'

export type TAccordionOption = {
  value: string
  title: string
  content: string
}

const props = defineProps<
  AccordionRootProps & {
    options: TAccordionOption[]
  }
>()
const emits = defineEmits<AccordionRootEmits>()
const { options, ...restProps } = props
const forwarded = useForwardPropsEmits(restProps, emits)
const forwardedModel = defineModel<string[] | string>()
</script>

<template>
  <AccordionRoot
    class="w-80 overflow-hidden rounded-2xl p-4 pt-2"
    v-bind="forwarded"
    v-model="forwardedModel"
  >
    <AccordionItem v-for="item in options" :key="item.value" :value="item.value">
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
