<template>
  <div>
    <h3 class="uppercase text-heading5 font-bold text-pink-700">Noteworthy Projects</h3>
    <div class="mt-4 flex flex-col gap-3">
      <div
        v-for="{ name, from, description, responsibilities, to, libraries, company } in projects"
        :key="name + from + to"
        class="rounded-xl bg-neutral-50 p-6"
      >
        <p class="font-semibold text-heading5 text-foreground/80">
          {{ name }}
        </p>
        <div class="font-thin text-body mt-1 leading-5 text-foreground/80 flex gap-2">
          <p>{{ profileDate(from) }} - {{ profileDate(to) }}</p>
          <BaseSeparator orientation="vertical" class="h-4" />
          <span class="font-extralight text-foreground/60">
            {{ company.name }}
          </span>
        </div>
        <div class="mt-3 text-heading6">
          <p class="text-foreground/80">Description:</p>
          <p class="text-foreground/60 font-light leading-7 mt-1">{{ description }}</p>
        </div>

        <p class="mt-3 font-normal text-heading6 text-foreground/80">Responsibilities:</p>
        <BaseText
          extralight
          heading6
          as="ul"
          class="mt-2 flex flex-col gap-1 leading-7 text-foreground/60"
        >
          <li
            v-for="item in responsibilities"
            :key="item"
            :class="cn({ 'list-inside list-disc': responsibilities.length > 1 })"
          >
            {{ item }}
          </li>
        </BaseText>
        <div class="mt-4 flex gap-2 flex-wrap">
          <BaseBadge v-for="tech in libraries" :key="tech.id" variant="destructive">{{
            tech.name
          }}</BaseBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseBadge } from '@/components/ui/badge';
import { BaseSeparator } from '@/components/ui/separator';
import { BaseText } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { store } from '@/store';
import type { Profile } from '@/store/modules/PROFILE/types';
import { profileDate } from './profileDate';
const projects = (store.getters['PROFILE/profile'] as Profile).projects;
</script>
