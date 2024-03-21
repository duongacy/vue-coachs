<template>
  <div class="flex min-h-screen gap-x-4 px-8 py-6">
    <div class="flex flex-grow flex-col gap-4">
      <div class="w-fit">
        <div class="flex items-end gap-4">
          <BaseAvatar
            size="lg"
            shape="square"
            src="/src/assets/avatar.jpeg"
            fallback="avatar"
            alt="cn"
          >
          </BaseAvatar>
          <div class="grid grid-cols-[auto_1fr] items-center gap-x-1 text-neutral-600">
            <Mail class="w-4" />
            <BaseText
              as="a"
              class="cursor-pointer underline"
              href="mailto:duongy96@gmail.com"
              small
            >
              duongy96@gmail.com
            </BaseText>
            <Phone class="w-4" />
            <BaseText as="a" href="tel:0976888738" class="cursor-pointer underline" small
              >(+84)976888738</BaseText
            >
            <GithubLogoIcon />
            <BaseText as="a" class="cursor-pointer underline" small
              >https://github.com/duongacy</BaseText
            >
          </div>
        </div>
        <BaseText heading4 extrabold class="mt-2 text-neutral-800"> Le Van Nhu Y </BaseText>
        <BaseText heading6 extrabold class="text-violet-700"> Frontend developer </BaseText>
      </div>
      <div class="flex flex-grow flex-col gap-4">
        <BaseText caption bold class="uppercase text-pink-600">Work Experience</BaseText>
        <div class="grid gap-2">
          <div class="flex">
            <BaseText bold caption>UX Lead / </BaseText>
            <BaseText normal caption class="text-neutral-600"
              >&nbsp; Cyfirma Singapore Cybersecurity
            </BaseText>
            <BaseBadge variant="secondary" class="ml-4 text-violet-800">Cybersecurity</BaseBadge>
          </div>
          <BaseText normal caption class="text-neutral-600"
            >Oct 2021 - Present, Singapore
          </BaseText>
          <BaseText as="div" light small class="text-neutral-500"
            >Cyfirma is a leading Cyber Security Threat Intelligent firm which has multiple B2B and
            B2C cybersecurity platforms. <br />
            <ul class="mt-2 list-disc pl-6">
              <li>Leading the UI UX design team</li>
              <li>Designing web portals following the UX design process using Figma</li>
              <li>
                Implementing and maintaining an industry standard design system with style guides
              </li>
              <li>Recommending solutions for a streamlined, user-friendly interfaces</li>
              <li>Building an interactive B2C cybersecurity mobile app using Flutter and Figma</li>
            </ul>
          </BaseText>
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
