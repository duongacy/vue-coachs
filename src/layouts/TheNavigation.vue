<template>
  <div class="shadow-md">
    <BaseContainer class="py-4 flex gap-4 items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About me</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
              >
                <li class="row-span-3">
                  <NavigationMenuLink as-child>
                    <router-link
                      class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      to="/profile"
                    >
                      <img src="/src/assets/avatar.jpeg" class="w-full aspect-square rounded-xl" />
                      <div class="mt-2 text-lg font-medium">Y Lee</div>
                      <p class="text-sm font-light leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and Tailwind CSS.
                      </p>
                    </router-link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="View my profile">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Design pattern">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
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
          <NavigationMenuItem>
            <NavigationMenuLink href="/docs" :class="navigationMenuTriggerStyle()">
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <BaseAvatar size="sm" shape="circle" alt="cn" class="ml-auto"></BaseAvatar>
      <!-- <div class="flex gap-2 h-24 items-center">
        <NavigationMenu class="grid flex-grow">
          <div class="flex gap-3">
            <NavLink size="md" as="router-link" to="/coaches">Coaches</NavLink>
            <NavLink size="md" as="router-link" to="/requests-received">Requests received</NavLink>
            <NavigationMenuItem trigger-text="Author" size="md">
              <div class="grid w-[456px] grid-cols-[auto_1fr] gap-x-3">
                <div class="p-1">
                  <NavLink
                    as="router-link"
                    class="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-5 no-underline outline-none focus:shadow-md"
                    to="/profile"
                  >
                    <BaseAvatar
                      size="lg"
                      shape="square"
                      src="/src/assets/avatar.jpeg"
                      fallback="avatar"
                      alt="cn"
                    >
                    </BaseAvatar>
                    <div class="mt-4 text-heading6 font-bold">Y Lee</div>
                    <p class="text-caption font-extralight leading-tight text-muted-foreground">
                      Frontend developer
                    </p>
                  </NavLink>
                </div>
                <div class="flex flex-col gap-y-1 px-2 py-6">
                  <ListItem href="/docs" title="Email"> duongy96@gmail.com </ListItem>
                  <ListItem href="/docs/installation" title="Phone"> (+84)976888738 </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Github">
                    https://github.com/duongacy
                  </ListItem>
                  <ListItem href="/components" title="Components">Some common components</ListItem>
                </div>
              </div>
            </NavigationMenuItem>

            <NavLink size="md" as="button" v-if="isAuthenticated" class="ml-auto" @click="signout"
              >Sign out</NavLink
            >
            <NavLink class="ml-auto" size="md" as="router-link" v-else to="/auth">Sign in</NavLink>
          </div>
        </NavigationMenu>
      </div> -->
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { BaseAvatar } from '@/components/ui/avatar';
import { store } from '@/store';
import { computed } from 'vue';
import BaseContainer from './BaseContainer.vue';
import ListItem from './NavigationMenuDemoItem.vue';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Atomics',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Features',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Layouts',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Floatings',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
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
