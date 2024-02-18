<template>
  <div :class="cn('flex flex-col gap-y-1', props.class)">
    <Disclosure
      v-slot="{ open }"
      :default-open="item.defaultOpen"
      v-for="item in props.items"
      :key="item.title.toString()"
    >
      <DisclosureButton
        class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
      >
        <span>{{ item.title }}</span>
        <ChevronUpIcon :class="cn('h-5 w-5 text-purple-500', { 'rotate-180 transform': open })" />
      </DisclosureButton>
      <DisclosurePanel class="px-4 py-2 text-sm text-gray-500 max-w-full">
        {{ item.content }}
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import cn from '@/utils/cn'
export type TDisclosureGroupItem = {
  title: string
  content: string
  defaultOpen?: boolean
}
const props = defineProps<{ class?: string; items: TDisclosureGroupItem[] }>()
</script>
