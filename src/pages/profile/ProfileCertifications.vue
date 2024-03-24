<template>
  <div>
    <BaseText heading5 bold class="uppercase text-pink-700">Certifications</BaseText>
    <div class="mt-4 flex flex-col gap-3">
      <div
        v-for="{ school, name, time } in educations"
        :key="school + name + time"
        class="relative flex items-center gap-2 p-6"
      >
        <div
          class="absolute inset-0 z-[-1] bg-neutral-300"
          style="
            clip-path: polygon(
              30px 0,
              100% 0,
              100% calc(100% - 30px),
              calc(100% - 30px) calc(100% - 5px),
              0 100%,
              0 20px
            );
          "
        >
          <div class="absolute inset-[1px] bg-white" style="clip-path: inherit"></div>
        </div>
        <img src="/src/assets/certificate.svg" class="h-14 object-cover" />
        <div>
          <BaseText as="div" semibold heading6 class="flex gap-4 text-neutral-800">
            <span>
              {{ name }}
            </span>
            <div class="h-6 w-[1px] bg-neutral-400"></div>
            <span class="font-light"> {{ school }} - {{ time }} </span>
          </BaseText>
          <BaseText thin body class="mt-1">{{ time }}</BaseText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseText } from '@/components/ui/text';

const educations = [
  {
    school: 'Maximilian Schwarzmüller',
    name: 'Vue - The Complete Guide',
    time: 'Feb 2024',
  },
  {
    school: 'Cybersoft Academy',
    name: 'Web Development Certificate',
    time: 'Oct 2021',
  },
  {
    school: 'Ho Chi Minh City University Of Pedagogy',
    name: 'Bachelor of Software Engineering',
    time: 'Sep 2015',
  },
];
</script>
