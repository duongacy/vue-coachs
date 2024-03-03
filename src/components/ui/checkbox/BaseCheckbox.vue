<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class']; label?: string }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, disabled: __, label: ___, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <label
    :class="
      cn('inline-flex gap-2 items-center cursor-pointer select-none', props.class, {
        'opacity-70 pointer-events-none': props.disabled
      })
    "
  >
    <CheckboxRoot
      v-bind="forwarded"
      class="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
    >
      <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
        <slot>
          <Check class="h-4 w-4" />
        </slot>
      </CheckboxIndicator>
    </CheckboxRoot>
    <span class="text-sm font-medium leading-none" v-if="!!label"> {{ label }} </span>
  </label>
</template>
