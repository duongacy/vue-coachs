<template>
  <!-- <div class="flex h-12 items-center gap-8">
    <p class="text-heading5 font-bold">WTVue</p>
    <div class="flex flex-grow gap-4 px-4">
      <router-link to="/coaches">Coaches</router-link>
      <router-link to="/requests-received">Requests received</router-link>
      <router-link to="/components">Components</router-link>
    </div>
    <div>
      <BaseButton
        v-if="isAuthenticated"
        variant="link"
        @click="logout"
        >Logout</BaseButton
      >
      <BaseButton
        v-else
        variant="link"
        @click="loginHandler"
        >Login</BaseButton
      >
    </div>
  </div> -->
  <div class="flex items-center gap-4 p-2">
    <h5 class="text-heading5 font-extrabold text-green-700">WTVue</h5>
    <NavigationMenu class="grid flex-grow">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Author</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="grid w-[456px] grid-cols-[auto_1fr] gap-x-3">
              <div class="p-1">
                <NavigationMenuLink as-child>
                  <a
                    class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-5 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <BaseAvatar
                      size="lg"
                      shape="square"
                      src="/src/assets/avatar.jpeg"
                      fallback="CN"
                      alt="@radix-vue"
                    >
                    </BaseAvatar>
                    <!-- <img
                        src="https://www.radix-vue.com/logo.svg"
                        class="w-full"
                      /> -->
                    <div class="mb-2 mt-4 text-lg font-bold">Y Lee</div>
                    <p class="text-sm leading-tight text-muted-foreground">
                      Frontend developer
                      <!-- Passionate about aesthetics and technology. -->
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
              <div class="flex flex-col gap-y-1 px-2 py-6">
                <ListItem
                  href="/docs"
                  title="Email"
                >
                  duongy96@gmail.com
                </ListItem>
                <ListItem
                  href="/docs/installation"
                  title="Phone"
                >
                  (+84)976888738
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Github"
                >
                  https://github.com/duongacy
                </ListItem>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationRouterLink to="/components">Components</NavigationRouterLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
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
        </NavigationMenuItem>

        <NavigationMenuItem class="ml-auto">
          <router-link
            to="/auth"
            :class="navigationMenuTriggerStyle()"
          >
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
import { cn } from '@/lib/utils';
import { store } from '@/store';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import ListItem from './NavigationMenuDemoItem.vue';
import NavigationRouterLink from '@/components/ui/navigation-menu/NavigationRouterLink.vue';

const projects: { title: string; href: string; description: string }[] = [
  {
    title: 'Find a coach',
    href: 'https://vuejs.org/',
    description:
      'A JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.',
  },
];
const router = useRouter();
const isAuthenticated = computed(() => store.getters['AUTHEN/isAuthenticated']);
const logout = async () => {
  try {
    await store.dispatch('AUTHEN/signout');
  } catch (error) {
    alert('Logout error');
  }
};
const loginHandler = () => {
  router.push('/auth');
};
</script>
