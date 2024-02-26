<script setup lang="ts">
import { Check, ChevronsUpDown } from 'lucide-vue-next'

import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { BaseButton } from '@/components/ui/button'
import {
  BaseCommand,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { BasePopover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' }
]

const open = ref(false)
const value = ref({})
</script>

<template>
  <div>
    <BasePopover v-model:open="open">
      <PopoverTrigger as-child>
        <BaseButton
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-[200px] justify-between"
        >
          {{
            value
              ? frameworks.find((framework) => framework.value === value)?.label
              : 'Select framework...'
          }}

          <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </BaseButton>
      </PopoverTrigger>
      <PopoverContent class="w-[200px] p-0">
        <BaseCommand v-model="value">
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              <CommandItem
                v-for="framework in frameworks"
                :key="framework.value"
                :value="framework"
                @select="open = false"
              >
                <Check
                  :class="
                    cn('mr-2 h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')
                  "
                />
                {{ framework.label }}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </BaseCommand>
      </PopoverContent>
    </BasePopover>
  </div>
</template>
