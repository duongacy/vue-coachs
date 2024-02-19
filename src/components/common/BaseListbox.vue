<template>
  <Listbox v-model="selectedValue" as="div" :class="cn('min-w-[200px] relative z-50', props.class)">
    <div>
      <ListboxButton
        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300"
      >
        <span class="block truncate">{{ selectedName }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-neutral-400" aria-hidden="true" />
        </span>
      </ListboxButton>
      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in props.options"
            :key="option.value"
            :value="option.value"
            as="template"
          >
            <li
              :class="
                cn('relative cursor-default select-none py-2 pl-10 pr-4 text-neutral-900', {
                  'bg-amber-100 text-amber-900': active
                })
              "
            >
              <span :class="cn('font-normal block truncate', { 'font-medium': selected })">{{
                option.name
              }}</span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import cn from '@/utils/cn'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { computed } from 'vue'
export type TBaseListboxOption = {
  value: string
  name: string
}
const props = defineProps<{
  options: TBaseListboxOption[]
  class?: string
}>()

const selectedValue = defineModel<string>()
const selectedName = computed(
  () => props.options?.find((option) => option.value === selectedValue.value)?.name
)
</script>
