<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import type { LabelProps } from 'radix-vue';
import { useFormField } from './useFormField';
import { cn } from '@/lib/utils';
import { BaseLabel } from '@/components/ui/label';

const props = defineProps<LabelProps & { class?: string }>();

const { error, formItemId } = useFormField();
</script>

<template>
  <BaseLabel :class="cn(error && 'text-destructive', props.class)" :for="formItemId">
    <slot />
  </BaseLabel>
</template>
