<script setup lang="ts">
import { computed, ref } from 'vue';
import { Check, ChevronsUpDown } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
import { BaseButton } from '@/components/ui/button';
import {
  BaseCommand,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { BasePopover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import type { SelectEvent } from 'node_modules/radix-vue/dist/Combobox/ComboboxItem';
import type { AcceptableValue } from 'node_modules/radix-vue/dist/Combobox/ComboboxRoot';
import type { ComboboxOption } from '.';

const props = withDefaults(
  defineProps<{
    options: ComboboxOption[];
    value: string;
    noOptionsText?: string;
    selectPlaceHolder?: string;
    searchPlaceHolder?: string;
  }>(),
  {
    noOptionsText: 'No option found.',
    selectPlaceHolder: 'Select option...',
    searchPlaceHolder: 'Search option...',
  },
);
const emits = defineEmits<{
  'update:value': [value: string];
}>();

const open = ref(false);

const selectHandler = (ev: SelectEvent<AcceptableValue>) => {
  if (typeof ev.detail.value === 'string') {
    emits('update:value', ev.detail.value);
  }
  open.value = false;
};

const calcLabel = computed(() => {
  return props.value
    ? props.options.find((option) => option.value === props.value)?.label
    : props.selectPlaceHolder;
});
</script>

<template>
  <BasePopover v-model:open="open">
    <PopoverTrigger as-child>
      <BaseButton
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-[350px] justify-between"
      >
        {{ calcLabel }}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </BaseButton>
    </PopoverTrigger>
    <PopoverContent class="w-[350px] p-0">
      <BaseCommand>
        <CommandInput
          class="h-9"
          :placeholder="searchPlaceHolder"
        />
        <CommandEmpty>{{ noOptionsText }}</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              @select="selectHandler"
            >
              {{ option.label }}
              <Check
                :class="cn('ml-auto h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0')"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </BaseCommand>
    </PopoverContent>
  </BasePopover>
</template>
