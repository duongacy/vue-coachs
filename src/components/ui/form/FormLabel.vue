<script lang="ts" setup>
import { BaseLabel } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import type { LabelProps } from 'radix-vue';
import { useFormField } from './useFormField';

const props = defineProps<LabelProps & { class?: string }>();

const { error, formItemId } = useFormField();
</script>

<template>
  <BaseLabel :class="cn(error && 'text-destructive', props.class)" :for="formItemId">
    <slot />
  </BaseLabel>
</template>
