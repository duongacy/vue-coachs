<script setup lang="ts">
import { cn } from '@/lib/utils';
import CardDescription from './CardDescription.vue';
import CardHeader from './CardHeader.vue';
import CardTitle from './CardTitle.vue';

const props = defineProps<{
  class?: string;
  title?: string;
  description?: string;
  imageFluid?: boolean;
  footerFluid?: boolean;
  contentFluid?: boolean;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'grid gap-6 overflow-hidden rounded-lg border bg-card p-6 text-card-foreground shadow-sm',
        props.class,
      )
    "
  >
    <div v-if="$slots.image" :class="cn({ '-m-6 mb-0': imageFluid })">
      <slot name="image" />
    </div>
    <CardHeader>
      <CardTitle v-if="!!title">{{ title }}</CardTitle>
      <CardDescription v-if="!!description">{{ description }}</CardDescription>
    </CardHeader>
    <div v-if="$slots.default" :class="cn({ '-mx-6': contentFluid })">
      <slot name="default" />
    </div>
    <div v-if="$slots.footer" :class="cn({ '-m-6 mt-0': footerFluid })">
      <slot name="footer" />
    </div>
  </div>
</template>
