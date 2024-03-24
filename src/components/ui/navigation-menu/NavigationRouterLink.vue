<script setup lang="ts">
import { cn } from '@/lib/utils';
import { navigationMenuTriggerStyle } from '.';
</script>

<template>
  <router-link
    to="/components"
    :class="
      cn(navigationMenuTriggerStyle, {
        '[&.router-link-active]:bg-accent': true,
      })
    "
  >
    <slot />
  </router-link>
</template>
