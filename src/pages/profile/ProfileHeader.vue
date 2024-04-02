<template>
  <div class="flex w-fit flex-col gap-4">
    <div class="flex items-end gap-4">
      <BaseAvatar size="lg" shape="square" :src="'http://localhost:1337' + profile.avatar.url" fallback="avatar" alt="cn">
      </BaseAvatar>
      <div>
        <BaseText heading4 bold class="mt-4 text-neutral-800"> {{ profile.name }} </BaseText>
        <BaseText heading6 semibold class="mt-1 text-pink-700">{{ profile.role }} </BaseText>
        <BaseText light caption class="mt-2 leading-5 text-neutral-600">
          {{ profile.description }}
        </BaseText>
      </div>
    </div>
    <div class="flex gap-4 bg-neutral-50 p-4 text-neutral-500">
      <BaseText thin as="a" class="flex items-center gap-x-1">
        <Mail class="size-6 stroke-[1px]" />
        <span>{{ profile.mail }}</span>
      </BaseText>
      <div class="h-6 w-[1px] self-center bg-neutral-500"></div>
      <BaseText thin as="a" class="flex items-center gap-x-1">
        <Phone class="size-6 stroke-[1px]" />
        <span>{{ profile.phone }}</span>
      </BaseText>
      <div class="h-6 w-[1px] self-center bg-neutral-500"></div>
      <BaseText thin as="a" class="flex items-center gap-x-1">
        <GithubLogoIcon class="size-6 stroke-[1px]" />
        <span>{{ profile.github }}</span>
      </BaseText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseAvatar } from '@/components/ui/avatar';
import { BaseText } from '@/components/ui/text';
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import { GithubLogoIcon } from '@radix-icons/vue';
import { Mail, Phone } from 'lucide-vue-next';
const profile = store.getters['PROFILE/profile'] as Profile;
</script>
