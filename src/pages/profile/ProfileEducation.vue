<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">Education</BaseText>
    <div class="mt-4 flex flex-col gap-3">

      <div v-for="{ school, major, timeRange } in educations" :key="school + major + timeRange"
        class="flex items-center gap-2 p-6 relative">
        <div class="absolute inset-0 bg-neutral-300 z-[-1]"
          style="clip-path: polygon(30px 0, 100% 0, 100% calc(100% - 30px),calc(100% - 30px) calc( 100% - 5px), 0 100%, 0 20px);">
          <div class="absolute inset-[1px] bg-white"
            style="clip-path: inherit; "></div>
        </div>
        <img src="/src/assets/education.svg" class="h-14 object-cover" />
        <div>
          <BaseText as="div" semibold heading6 class="flex gap-4 text-neutral-800">
            <span>
              {{ major }}
            </span>
            <div class="h-6 w-[1px] bg-neutral-400"></div>
            <span class="font-light">
              {{ school }}
            </span>
          </BaseText>
          <BaseText thin body class="mt-1">{{ timeRange }}</BaseText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';

const educations = [
  {
    school: 'Cybersoft Academy',
    major: 'Web Development',
    timeRange: 'Jan 2021 - Oct 2021',
  },
  {
    school: 'HCMC University Of Pedagogy',
    major: 'Software Engineering',
    timeRange: 'Sep 2011 - Sep 2015',
  },
];
</script>
