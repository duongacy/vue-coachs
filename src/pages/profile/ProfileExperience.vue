<template>
  <div>
    <p class="uppercase text-pink-700 text-heading5 font-bold">Work Experience</p>
    <div class="mt-4 flex flex-col gap-3">
      <div
        v-for="{ company, role, from, to } in workExperiences"
        :key="company + role + from + to"
        class="rounded-xl bg-neutral-50 p-6"
      >
        <div class="flex gap-4 text-neutral-800 font-semibold text-heading6">
          <span>
            {{ role }}
          </span>
          <div class="h-6 w-[1px] bg-neutral-400"></div>
          <span class="font-light">
            {{ company }}
          </span>
        </div>
        <p class="mt-1 font-thin text-body">{{ from + ' - ' + to }}</p>
        <div
          as="ul"
          class="mt-3 flex flex-col gap-1 font-extralight text-heading6 leading-7 text-neutral-600"
        >
          <li
            v-for="item in role"
            :key="item"
            :class="cn({ 'list-inside list-disc': role.length > 1 })"
          >
            {{ item }}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
const workExperiences = (store.getters['PROFILE/profile'] as Profile).experiences;
// const workExperiences = [
//   {
//     company: 'FPT Software',
//     position: 'Frontend Developer',
//     timeRange: 'Sep 2022 - Present, Vietnam',
//     responsibilities: [
//       `Collaborate with UX/UI designers to translate design wireframes and prototypes into functional frontend code.`,
//       `Work with backend developers to integrate frontend code with server-side logic and APIs.`,
//       `Optimize the performance of web pages by minimizing loading times, reducing HTTP requests, and implementing techniques like lazy loading and code splitting.`,
//       `Manage code repositories, collaborate with team members, and track changes to codebase.`,
//     ],
//   },
//   {
//     company: 'Citisys',
//     position: 'Web - Mobile Developer',
//     timeRange: 'Aug 2021 - Sep 2022, Vietnam',
//     responsibilities: [
//       `Develop intuitive and responsive user interfaces for web(Reactjs) and mobile(React Native) applications, ensuring a seamless user experience across different devices and screen sizes.`,
//       `Document technical specifications, project requirements, and development processes to facilitate knowledge sharing, onboarding of new team members, and future maintenance tasks.`,
//       `Collaborate with designers, product managers, and other stakeholders to gather requirements and define project specifications.`,
//       `Write clean, efficient, and well-documented code following best practices and coding standards.`,
//     ],
//   },
//   {
//     company: 'Cybersoft Academy',
//     position: 'Teaching Assistant (Part time)',
//     timeRange: 'Feb 2021 - Aug 2021, Vietnam',
//     responsibilities: [
//       `Offering technical assistance to students.`,
//       `Reviewing/feedback student code submissions and suggestions for coding improvement.`,
//       `Tracking student progress and performance.`,
//     ],
//   },
//   {
//     company: 'USUM software',
//     position: 'Frontend developer',
//     timeRange: 'Dec 2020 - Oct 2021, Vietnam',
//     responsibilities: [
//       `Collaborated closely with design teams to translate wireframes and mockups into responsive web interfaces.`,
//       `Utilized HTML, CSS, and JavaScript library (Reactjs) to build dynamic and interactive user interfaces.`,
//       `Worked closely with backend developers to integrate frontend components with server-side logic, RESTful APIs, and databases. Implemented data fetching and state management techniques to ensure seamless communication between the frontend and backend layers.`,
//       `Developed mobile-responsive web applications that provided a consistent user experience across various devices and screen sizes.`,
//     ],
//   },
//   {
//     company: 'FPT Software',
//     position: 'Frontend Developer',
//     timeRange: 'Nov 2019 - Dec 2020, Vietnam',
//     responsibilities: [
//       `Combines technical proficiency in HTML, CSS, and JavaScript with effective communication, collaboration, problem-solving, and a commitment to ongoing learning to contribute effectively to web development projects.`,
//     ],
//   },
//   {
//     company: 'FPT Software',
//     position: 'Software Tester',
//     timeRange: 'Oct 2016 - Nov 2019, Vietnam',
//     responsibilities: [
//       `Working as a Software Tester, ensure that the software meets the specified requirements, functions correctly, and delivers the desired outcomes, include analysis requirement, define test planning, design testcases, execute test planning and report status.`,
//     ],
//   },
// ];
</script>
