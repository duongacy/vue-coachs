<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">Frameworks/ libraries</BaseText>
    <div class="mt-4 flex flex-col gap-2">
      <BaseText
        v-for="{ name, description } in libraries"
        :key="name"
        semibold
        heading6
        class="leading-7 text-neutral-800"
      >
        {{ name }}:
        <span class="font-extralight text-neutral-600">
          {{ description }}
        </span>
      </BaseText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
const libraries = (store.getters['PROFILE/profile'] as Profile).libraries;

// const libraries = [
//   {
//     label: 'React/ React Native',
//     description:
//       'Fundamental in building dynamic and responsive web/mobile applications using React/React Native.',
//   },
//   {
//     label: 'Vuejs',
//     description: 'Experienced in developing interactive and scalable web applications with Vuejs.',
//   },
//   {
//     label: 'Redux',
//     description:
//       'Skilled in state management with Redux, facilitating predictable and centralized data flow in complex JavaScript applications.',
//   },
//   {
//     label: 'Vuex',
//     description:
//       "Fundamental for managing application state with Vuex, ensuring a centralized and reactive state management solution is inspired from Redux  in Vue's projects.",
//   },
//   {
//     label: 'Tailwind CSS',
//     description:
//       'Proficient in utilizing Tailwind CSS, to rapidly build custom-designed, responsive user interfaces with minimal CSS code.',
//   },
//   {
//     label: 'Ant Design',
//     description:
//       'Experienced in implementing Ant Design to create elegant and functional user interfaces.',
//   },
//   {
//     label: 'Tanstack Query',
//     description:
//       'Skilled in using Tanstack Query to efficiently fetch, cache, and update data in React applications, enabling seamless data management.',
//   },
//   {
//     label: 'React Hook Form',
//     description:
//       'Proficient in building forms with React Hook Form for managing form state and combine with some TypeScript-first schema like Zod, Yub,... for validation in React applications, enhancing user experience and developer productivity.',
//   },
// ];
</script>
