<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { Size } from '@/types/ui';

defineOptions({ inheritAttributes: false });
const props = withDefaults(
  defineProps<
    { class?: string; size?: Size } & (
      | {
          as: 'button';
          to?: undefined;
        }
      | {
          as: 'router-link';
          to: string;
        }
    )
  >(),
  {
    class: '',
    size: 'sm'
  },
);

const emits = defineEmits<{
  click: [];
}>();
</script>

<template>
  <component
    :is="props.as"
    @click="emits('click')"
    :to="to"
    :class="[
      cn({
        'text-body': size === 'sm',
        'text-heading6': size === 'md',
      }),
      cn(
        'group text-neutral-600 hover:text-accent-foreground focus:text-accent-foreground inline-flex h-10 items-center rounded-md bg-background  transition-colors font-light hover:bg-accent focus:bg-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 ',
        {
          '[&.router-link-active]:bg-accent [&.router-link-active]:font-semibold [&.router-link-active]:text-neutral-800':
            as === 'router-link',
          'px-4 py-2 min-h-[40px]': size === 'sm',
          'px-6 py-3 min-h-[56px]': size === 'md',
        },
        props.class,
      ),
    ]"
  >
    <slot />
  </component>
</template>
