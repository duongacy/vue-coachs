<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Toggle, useForwardPropsEmits, type ToggleEmits, type ToggleProps } from 'radix-vue';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<
    ToggleProps & {
      class?: string;
      variant?: 'default' | 'outline';
      size?: 'default' | 'sm' | 'lg';
    }
  >(),
  {
    variant: 'default',
    size: 'default',
    disabled: false,
  },
);

const emits = defineEmits<ToggleEmits>();

const delegatedProps = computed(() => {
  const { class: _, size, variant, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Toggle
    v-bind="forwarded"
    :class="
      cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
        {
          'bg-transparent': variant === 'default',
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground':
            variant === 'outline',
          'h-10 px-3': size === 'default',
          'h-9 px-2.5': size === 'sm',
          'h-11 px-5': size === 'lg',
        },
        props.class,
      )
    "
  >
    <slot />
  </Toggle>
</template>
