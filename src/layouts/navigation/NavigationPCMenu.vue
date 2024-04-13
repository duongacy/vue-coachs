<template>
  <NavigationMenu :class="cn('', $props.class)">
    <NavigationMenuList class="gap-4">
      <router-link to="/profile" :class="navigationMenuTriggerStyle()"> About me </router-link>

      <NavigationMenuItem>
        <NavigationMenuTrigger class="has-[.router-link-active]:bg-neutral-100"
          >Design pattern
          <ListItem
            v-for="component in components"
            :key="component.title + '__'"
            :href="component.href"
            class="hidden"
          >
          </ListItem>
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <ListItem
              v-for="component in components"
              :key="component.title"
              :title="component.title"
              :href="component.href"
            >
              {{ component.description }}
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <router-link to="/public-projects" :class="navigationMenuTriggerStyle()">
        Public projects
      </router-link>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import ListItem from './NavigationItem.vue';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Content',
    href: '/design-pattern/content',
    description: 'Typography, Images, Tables, Figures,...',
  },
  {
    title: 'Forms',
    href: '/design-pattern/forms',
    description: 'Select, Checkbox, Radio, Range, Input,...',
  },
  {
    title: 'Layout',
    href: '/design-pattern/layouts',
    description: 'Header, Footer, Container,...',
  },
  {
    title: 'Components',
    href: '/design-pattern/components',
    description: 'Accordion, Alerts, Badge, Breadcrumb,...',
  },
];

defineOptions({ inheritAttrs: true });
defineProps<{
  class?: string;
}>();
</script>
