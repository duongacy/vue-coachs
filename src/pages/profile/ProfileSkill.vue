<template>
  <div class="flex flex-col gap-4">
    <BaseText heading5 bold class="uppercase text-pink-600">Skills</BaseText>
    <BaseText as="ul" body light class="list-inside list-disc leading-7 text-neutral-600">
      <li>Proficient in HTML5, CSS3, and JavaScript</li>
      <li>Experienced with modern frontend frameworks such as Reactjs and Vuejs</li>
      <li>Knowledgeable in responsive design principles and mobile-first development</li>
      <li>Familiarity with CSS preprocessors like SASS/SCSS and LESS</li>
      <li>Strong understanding of RESTful APIs and asynchronous programming</li>
      <li>Experience with version control systems (e.g., Git)</li>
      <li>Solid understanding of web performance optimization techniques</li>
      <li>
        Ability to collaborate effectively with cross-functional teams including designers and
        backend developers
      </li>
    </BaseText>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';
</script>
