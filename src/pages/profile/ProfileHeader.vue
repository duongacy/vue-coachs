<template>
  <div class="flex w-fit flex-col gap-4">
    <div class="flex items-end gap-4">
      <BaseAvatar size="lg" shape="square" src="/src/assets/avatar.jpeg" fallback="avatar" alt="cn">
      </BaseAvatar>
      <div>
        <BaseText heading4 bold class="mt-4 text-neutral-800"> Le Van Nhu Y </BaseText>
        <BaseText heading6 semibold class="mt-1 text-pink-700">Middle Frontend Developer </BaseText>
        <BaseText light caption class="mt-2 leading-5 text-neutral-600">
          Experienced Middle Frontend Developer with 4 years of hands-on experience in building and
          optimizing user interfaces for web applications. Skilled in frontend technologies and
          frameworks, adept at collaborating with cross-functional teams to deliver high-quality
          software solutions.
        </BaseText>
      </div>
    </div>
    <div class="flex gap-4 bg-neutral-50 p-4 text-neutral-500">
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
</template>

<script setup lang="ts">
import { BaseAvatar } from '@/components/ui/avatar';
import { BaseText } from '@/components/ui/text';
import { GithubLogoIcon } from '@radix-icons/vue';
import { Mail, Phone } from 'lucide-vue-next';
</script>

<style lang="scss" scoped></style>
