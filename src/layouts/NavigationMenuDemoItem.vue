<script setup lang="ts">
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

defineProps<{ title?: string; href?: string }>();
</script>

<template>
  <li class="list-none">
    <NavigationMenuLink as-child>
      <router-link
        :to="href || ''"
        :class="
          cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            $attrs.class || '',
          )
        "
      >
        <div class="text-body font-medium leading-none text-neutral-700">{{ title }}</div>
        <p class="line-clamp-2 text-caption leading-snug text-muted-foreground font-extralight">
          <slot />
        </p>
      </router-link>
    </NavigationMenuLink>
  </li>
</template>
