<template>
  <div class="shadow-md the-navigation">
    <BaseContainer class="py-4 flex gap-4 items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <router-link
            to="/profile"
            class="text-heading6 inline-flex text-neutral-600 [&.router-link-active]:text-neutral-800 [&.router-link-active]:bg-neutral-100 hover:bg-neutral-50 px-4 py-2"
          >
            About me
          </router-link>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Design pattern</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <RouterLink
                  v-for="component in components"
                  :key="component.title"
                  class="text-heading6 inline-flex text-neutral-600 [&.router-link-active]:text-neutral-800 [&.router-link-active]:bg-neutral-100 hover:bg-neutral-50 px-4 py-2"
                  :to="component.href"
                >
                  <div class="flex flex-col gap-2">
                    <div class="text-body font-medium leading-none text-neutral-700">
                      {{ component.title }}
                    </div>
                    <p
                      class="line-clamp-2 text-caption leading-snug text-muted-foreground font-extralight"
                    >
                      {{ component.description }}
                    </p>
                  </div>
                </RouterLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <router-link
            to="/public-project"
            class="text-heading6 inline-flex text-neutral-600 [&.router-link-active]:text-neutral-800 [&.router-link-active]:bg-neutral-100 hover:bg-neutral-50 px-4 py-2"
          >
            Public project
          </router-link>
        </NavigationMenuList>
      </NavigationMenu>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { store } from '@/store';
import { computed } from 'vue';
import BaseContainer from './BaseContainer.vue';

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

const isAuthenticated = computed(() => store.getters['AUTHEN/isAuthenticated']);
const signout = async () => {
  try {
    await store.dispatch('AUTHEN/signout');
  } catch (error) {
    alert('signout error');
  }
};
</script>
