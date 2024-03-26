<template>
  <div class="flex items-center gap-4 p-2">
    <h5 class="text-heading5 font-extrabold text-green-700">WTVue</h5>
    <NavigationMenu class="grid flex-grow">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationRouterLink to="/coaches">Coaches</NavigationRouterLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationRouterLink to="/requests-received">Requests received</NavigationRouterLink>
        </NavigationMenuItem>
        <!-- <NavigationMenuItem>
          <NavigationMenuTrigger>Examples</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-y-1 p-4 md:w-[500px] lg:w-[600px]">
              <ListItem
                v-for="component in projects"
                :key="component.title"
                :title="component.title"
                :href="component.href"
              >
                <span class="line-clamp-1">
                  {{ component.description }}
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> -->
        <NavigationMenuItem>
          <NavigationMenuTrigger>Author</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="grid w-[456px] grid-cols-[auto_1fr] gap-x-3">
              <div class="p-1">
                <NavigationMenuLink as-child>
                  <router-link
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
                  </router-link>
                </NavigationMenuLink>
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
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem class="ml-auto">
          <button :class="navigationMenuTriggerStyle" v-if="isAuthenticated" @click="signout">
            Sign out
          </button>
          <router-link to="/auth" :class="navigationMenuTriggerStyle" v-else="isAuthenticated">
            Sign in
          </router-link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>

<script setup lang="ts">
import { BaseAvatar } from '@/components/ui/avatar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import NavigationRouterLink from '@/components/ui/navigation-menu/NavigationRouterLink.vue';
import { store } from '@/store';
import { computed } from 'vue';
import ListItem from './NavigationMenuDemoItem.vue';

const projects: { title: string; href: string; description: string }[] = [
  {
    title: 'Find a coach',
    href: 'https://vuejs.org/',
    description:
      'A JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.',
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
