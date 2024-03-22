<template>
  <div class="mx-auto flex min-h-screen w-full max-w-[1200px] gap-x-4 px-8 py-6">
    <div class="flex flex-grow flex-col gap-8">
      <div class="flex w-fit flex-col gap-4">
        <div class="flex items-end gap-4">
          <BaseAvatar
            size="lg"
            shape="square"
            src="/src/assets/avatar.jpeg"
            fallback="avatar"
            alt="cn"
          >
          </BaseAvatar>
          <div>
            <BaseText heading4 extrabold class="mt-4 text-neutral-800"> Le Van Nhu Y </BaseText>
            <BaseText heading6 bold class="mt-1 text-violet-700"
              >Middle Frontend Developer
            </BaseText>
            <BaseText light caption class="mt-2 leading-5 text-neutral-600">
              Experienced Middle Frontend Developer with 4 years of hands-on experience in building
              and optimizing user interfaces for web applications. Skilled in frontend technologies
              and frameworks, adept at collaborating with cross-functional teams to deliver
              high-quality software solutions.
            </BaseText>
          </div>
        </div>
        <div class="flex gap-4 bg-violet-50 p-4 text-neutral-500">
          <BaseText thin as="a" class="flex items-center gap-x-1">
            <Mail class="size-6 stroke-[1px]" />
            <span>duongy96@gmail.com</span>
          </BaseText>
          <div class="h-6 w-[1px] self-center bg-neutral-500"></div>
          <BaseText thin as="a" class="flex items-center gap-x-1">
            <Phone class="size-6 stroke-[1px]" />
            <span>(+84)976888738</span>
          </BaseText>
          <div class="h-6 w-[1px] self-center bg-neutral-500"></div>
          <BaseText thin as="a" class="flex items-center gap-x-1">
            <GithubLogoIcon class="size-6 stroke-[1px]" />
            <span>https://github.com/duongacy</span>
          </BaseText>
        </div>
      </div>
      <div class="flex flex-grow flex-col gap-4">
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
      <div class="flex flex-grow flex-col gap-4">
        <BaseText heading5 bold class="uppercase text-pink-600">Work Experience</BaseText>
        <div class="grid gap-4">
          <div class="flex flex-col gap-1">
            <div class="flex">
              <BaseText bold heading6>Frontend Developer / </BaseText>
              <BaseText normal heading6 class="text-neutral-600">&nbsp; FPT Software </BaseText>
            </div>
            <BaseText normal body class="text-neutral-600">Sep 2022 - Present, Vietnam </BaseText>
            <BaseText as="div" light caption class="text-neutral-500"
              >FPT Software is considered one of the biggest software services companies in
              Vietnam,with US$1 billion in revenue (FY2023) and more than 30,000 employees globally.
              Its current clients include 91 of the Fortune Global 500 across all continents.
            </BaseText>
          </div>
          <div class="flex flex-col gap-2 rounded-lg bg-primary-foreground p-6">
            <BaseText heading6 bold class="text-neutral-800">Zero carbon system</BaseText>
            <BaseText as="ul" light body class="list-disc pl-6 leading-7 text-neutral-500">
              <li>
                Collaborated closely with designers to implement pixel-perfect UI designs and
                enhance user experience.
              </li>
              <li>
                Implemented frontend logic and integrated with backend APIs to deliver seamless user
                interactions.
              </li>
              <li>
                Conducted code reviews and provided constructive feedback to team members to ensure
                code quality and maintainability.
              </li>
              <li>Recommending solutions for a streamlined, user-friendly interfaces</li>
            </BaseText>
            <div class="mt-2 flex flex-wrap gap-2 px-4">
              <BaseBadge class="bg-neutral-200 text-violet-800">Typescript</BaseBadge>
              <BaseBadge class="bg-neutral-200 text-violet-800">Reactjs</BaseBadge>
              <BaseBadge class="bg-neutral-200 text-violet-800">Nextjs</BaseBadge>
              <BaseBadge class="bg-neutral-200 text-violet-800">TanStack Query</BaseBadge>
              <BaseBadge class="bg-neutral-200 text-violet-800">React Hook Form</BaseBadge>
              <BaseBadge class="bg-neutral-200 text-violet-800">Yup</BaseBadge>
            </div>
          </div>
          <div class="flex flex-col gap-2 rounded-lg bg-primary-foreground p-6">
            <BaseText heading6 bold class="text-neutral-800">Job Korea</BaseText>
            <BaseText as="ul" light body class="list-disc pl-6 leading-7 text-neutral-500">
              <li>
                Collaborated closely with designers to implement pixel-perfect UI designs and
                enhance user experience.
              </li>
              <li>
                Implemented frontend logic and integrated with backend APIs to deliver seamless user
                interactions.
              </li>
              <li>
                Conducted code reviews and provided constructive feedback to team members to ensure
                code quality and maintainability.
              </li>
              <li>Recommending solutions for a streamlined, user-friendly interfaces</li>
            </BaseText>
            <div class="mt-2 flex flex-wrap gap-2 px-4">
              <BaseBadge class="bg-neutral-200 text-violet-800">Typescript</BaseBadge>
              <BaseBadge class="bg-neutral-200 text-violet-800">Reactjs</BaseBadge>
              <BaseBadge class="bg-neutral-200 text-violet-800">Nextjs</BaseBadge>
              <BaseBadge class="bg-neutral-200 text-violet-800">TanStack Query</BaseBadge>
              <BaseBadge class="bg-neutral-200 text-violet-800">React Hook Form</BaseBadge>
              <BaseBadge class="bg-neutral-200 text-violet-800">Yup</BaseBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-[260px] flex-col gap-8">
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BaseAvatar } from '@/components/ui/avatar';
import { BaseBadge } from '@/components/ui/badge';
import { BaseText } from '@/components/ui/text';
import { GithubLogoIcon, InstagramLogoIcon } from '@radix-icons/vue';
import { GitForkIcon, Linkedin, LucideGitGraph, Mail, Phone } from 'lucide-vue-next';
</script>
