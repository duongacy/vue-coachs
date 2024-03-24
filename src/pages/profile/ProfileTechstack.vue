<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">Techstack 2024</BaseText>
    <div class="mt-4 flex flex-wrap gap-2">
      <BaseText
        v-for="{ name, url } in techstacks"
        :key="name"
        as="a"
        :href="url"
        heading4
        extralight
        class="border border-neutral-300 px-6 py-4 hover:border-pink-300 hover:text-pink-700"
      >
        {{ name }}
      </BaseText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';
const techstacks = [
  {
    name: 'Typescript',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Nuxt',
    url: 'https://nuxt.com/',
  },
  {
    name: 'Tailwind',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Strapi',
    url: 'https://strapi.io/',
  },
];
</script>
