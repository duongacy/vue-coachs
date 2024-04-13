<template>
  <BaseContainer :class="cn('flex gap-4 py-4 shadow-sm', $props.class)">
    <NavigationMobileMenu class="lg:hidden" />
    <NavigationLogo class="ml-auto lg:ml-0" />
    <NavigationPCMenu class="hidden lg:flex flex-auto" />
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from '@/layouts/BaseContainer.vue';
import { cn } from '@/lib/utils';
import NavigationLogo from './NavigationLogo.vue';
import NavigationMobileMenu from './NavigationMobileMenu.vue';
import NavigationPCMenu from './NavigationPCMenu.vue';

defineOptions({ inheritAttrs: true });
defineProps<{
  class?: string;
}>();
</script>
