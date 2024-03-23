<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">Projects</BaseText>
    <div class="mt-4 flex flex-col gap-3">
      <div
        v-for="({ name, timeRange, description, responsibilities, techs }, index) in projects"
        :key="name + timeRange"
        class="rounded-xl bg-neutral-50 p-6"
      >
        <BaseText as="div" semibold heading6 class="flex gap-4 text-neutral-800">
          <span>
            {{ name }}
          </span>
          <div class="h-6 w-[1px] bg-neutral-400"></div>
          <span class="font-light">
            {{ timeRange }}
          </span>
        </BaseText>
        <BaseText thin body class="mt-1 leading-5">
          {{ description }}
        </BaseText>
        <BaseText normal heading6 class="mt-3 leading-5 text-neutral-800"
          >Responsibilities:</BaseText
        >
        <BaseText
          extralight
          heading6
          as="ul"
          class="mt-2 flex flex-col gap-1 leading-7 text-neutral-600"
        >
          <li
            v-for="item in responsibilities"
            :key="item"
            :class="cn({ 'list-inside list-disc': responsibilities.length > 1 })"
          >
            {{ item }}
          </li>
        </BaseText>
        <div class="mt-4 flex gap-2">
          <BaseBadge variant="destructive" v-for="tech in techs" :key="tech">{{ tech }}</BaseBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseBadge } from '@/components/ui/badge';
import { BaseText } from '@/components/ui/text';
import { cn } from '@/lib/utils';

const projects = [
  {
    name: 'SPICA',
    timeRange: 'Jun 2023 - Present, FPT Software',
    description: `SPICA project is migrating from Adobe Flex to ES5 (ECMAScript 5) involves transitioning from a Flash-based framework to a JavaScript-based framework compliant with the ECMAScript 5 standard.`,
    responsibilities: [
      `Rewrite UI components and layouts using HTML, CSS, and JavaScript to replicate the functionality and design of the original Flex application.`,
      `Port the business logic and functionality from ActionScript (used in Flex) to JavaScript.`,
      `Integrate frontend interfaces with backend APIs`,
      `Document the migration process, including any challenges encountered and solutions implemented.`,
      `Provide training and support for developers who will be maintaining the migrated application.`,
    ],
    techs: ['HTML', 'CSS', 'Javascript'],
  },
  {
    name: 'Zero carbon system',
    timeRange: 'Feb 2023 - Jun 2023, FPT Software',
    description: `A systems that produce little to no carbon emissions, thereby mitigating climate change and reducing environmental impact, focus on transitioning away from fossil fuels, which are major contributors to carbon dioxide emissions, and instead utilize renewable energy sources such as solar, wind, hydroelectric, and geothermal power.`,
    responsibilities: [
      `Structuring source code and developing the components of the application.`,
      `Implementing perfect-pixel UIs from Figma's designs with responsive design principles.`,
      `Optimized for performance, such as page load times, rendering efficiency.`,
      `Collaborating with designers, backend developers, and product managers, to ensure alignment on project goals, requirements, and timelines.`,
      `Manage code repositories, and planning release for customer each milestone.`,
    ],
    techs: [
      'Typescript',
      'Reactjs',
      'Tailwind CSS',
      'Ant Design',
      'React Hook Form',
      'Tanstack Query',
    ],
  },
  {
    name: 'Job Korea(Albamon)',
    timeRange: 'Sep 2022 - Feb 2023, FPT Software',
    description: `Albamon is a South Korean website that specializes in job postings and recruitment services. It's particularly known for listing part-time, temporary, and hourly jobs. Users can browse through job listings and apply for positions through the platform.`,
    responsibilities: [
      `Implementing perfect-pixel UIs from Figma's designs.`,
      `Integrating frontend interfaces with backend APIs to adapt the customer requirements.`,
      `Troubleshoot and debug issues to improve the usability and functionality of web products.`,
      `Optimize performance for the application.`,
    ],
    techs: ['Typescript', 'Reactjs', 'Nextjs', 'scss', 'React Hook Form', 'Tanstack Query'],
  },
  {
    name: 'Electric Box Management',
    timeRange: 'Aug 2021 - Sep 2022, Citisys',
    description: `An Electric Box Management is the web application with some features are visualize a dashboard overview of all electric boxes, show alerts and notifications such as such as power outages, overheating, enables remote monitoring of electric boxes, including the ability to check power status, temperature, humidity levels, and any anomalies or malfunctions.`,
    responsibilities: [
      `Structuring source code and developing the components of the application.`,
      `Implement features for the web application.`,
      `Troubleshoot and debug issues to improve the usability and functionality of web products.`,
      `Optimize performance for the application.`,
    ],
    techs: ['Typescript', 'Reactjs', 'GraphQL', 'Apollo Client', 'Redux'],
  },
];
</script>
