<template>
  <div :class="cn('shadow-sm', $props.class)">
    <BaseContainer class="flex gap-4 py-4 items-center">
      <NavigationMobileMenu class="lg:hidden" />
      <NavigationPCMenu class="hidden lg:flex flex-auto" />
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import BaseContainer from '@/layouts/BaseContainer.vue';
import { cn } from '@/lib/utils';
import NavigationMobileMenu from './NavigationMobileMenu.vue';
import NavigationPCMenu from './NavigationPCMenu.vue';

defineOptions({ inheritAttrs: true });
defineProps<{
  class?: string;
}>();
</script>
