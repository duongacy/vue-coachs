<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">Development</BaseText>
    <div class="mt-4 flex flex-col gap-2">
      <BaseText
        semibold
        heading6
        class="leading-7 text-neutral-800"
        v-for="{ label, description } in developments"
        :key="label"
      >
        {{ label }}:
        <span class="font-extralight text-neutral-600">
          {{ description }}
        </span>
      </BaseText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';
const developments = [
  {
    label: 'Version Control Systems (e.g., Git)',
    description:
      'Proficiency in using version control systems for tracking changes in code, collaborating with teams, and managing project versions.',
  },
  {
    label: 'HTML (Hypertext Markup Language)',
    description:
      'Fundamental for structuring web pages. Knowledge of HTML5 features such as semantic elements, forms, multimedia.',
  },
  {
    label: 'CSS (Cascading Style Sheets)',
    description:
      'Experience with CSS selectors, properties, layout techniques (e.g., Flexbox, Grid), and preprocessors like Sass/Scss.',
  },
  {
    label: 'JavaScript/ Typescript',
    description:
      'Proficiency in JavaScript includes understanding data types, control structures, functions, DOM manipulation, AJAX, ES6+ features. Fundamental for using a superset of JavaScript that adds static typing, improving code quality, maintainability, and developer productivity.',
  },
  {
    label: 'Responsive Design',
    description:
      'Ability to create web designs that adapt to various screen sizes and devices using techniques like media queries and flexible layouts.',
  },

  {
    label: 'Web Performance Optimization',
    description:
      'Knowledge of techniques to improve website performance, such as minimizing HTTP requests, optimizing images, lazy loading, and code minification.',
  },
  {
    label: 'Debugging and Testing',
    description:
      'Proficiency in using browser developer tools for debugging code and conducting testing, including unit testing, integration testing, and browser testing.',
  },
  {
    label: 'UI/UX Principles',
    description:
      'Understanding of user interface (UI) and user experience (UX) design principles to create intuitive and engaging web interfaces.',
  },
];
</script>
