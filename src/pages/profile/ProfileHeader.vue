<template>
  <div class="flex w-fit flex-col gap-4">
    <div class="flex flex-col sm:flex-row gap-4">
      <BaseAvatar
        size="lg"
        shape="square"
        class="sm:self-end"
        :src="avatarUrl"
        fallback="avatar"
        alt="cn"
      />
      <div class="min-w-96 w-fit self-end">
        <BaseText heading5 bold class="text-neutral-800"> {{ profile.name }} </BaseText>
        <BaseText body semibold class="mt-1 text-pink-700">{{ profile.role }} </BaseText>
        <BaseText light caption class="mt-2 leading-5 text-neutral-600">
          {{ profile.description }}
        </BaseText>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row flex-wrap gap-4 bg-neutral-50 p-4 text-neutral-500">
      <a class="flex items-center font-light text-body gap-x-2" :href="'mailto:' + profile.mail">
        <div
          class="w-8 h-8 grid place-content-center rounded-full bg-foreground/5 text-foreground/50"
        >
          <Mail class="size-4 stroke-[1px]" />
        </div>
        <span>{{ profile.mail }}</span>
      </a>
      <a class="flex items-center font-light text-body gap-x-2" :href="'tel:' + profile.phone">
        <div
          class="w-8 h-8 grid place-content-center rounded-full bg-foreground/5 text-foreground/50"
        >
          <Phone class="size-4 stroke-[1px]" />
        </div>
        <span>{{ profile.phone }}</span>
      </a>
      <a class="flex items-center font-light text-body gap-x-2" :href="profile.github">
        <div
          class="w-8 h-8 grid place-content-center rounded-full bg-foreground/5 text-foreground/50"
        >
          <GithubLogoIcon class="size-4 stroke-[1px]" />
        </div>
        <span>{{ profile.github }}</span>
      </a>
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
import { computed } from 'vue';
const profile = store.getters['PROFILE/profile'] as Profile;
const avatarUrl = computed(() => {
  return 'http://localhost:1337' + profile.avatar.url;
});
</script>
