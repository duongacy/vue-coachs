<template>
  <BaseCard class="grid gap-4">
    <CardContent>
      <p class="font-bold">{{ fullName }}</p>
      <p>{{ item.description }}</p>
      <div class="mt-2 flex gap-2">
        <BaseBadge v-for="area in item.areas" :key="area + '-area'" variant="destructive">{{
          area
        }}</BaseBadge>
      </div>
    </CardContent>
    <CardFooter class="flex justify-end gap-4">
      <BaseButton variant="outline">
        <router-link :to="detailsLink">Details</router-link>
      </BaseButton>
      <router-link :to="requestLink">
        <BaseButton>Request</BaseButton>
      </router-link>
    </CardFooter>
  </BaseCard>
</template>

<script setup lang="ts">
import { BaseBadge } from '@/components/ui/badge';
import { BaseButton } from '@/components/ui/button';
import { BaseCard, CardContent, CardFooter } from '@/components/ui/card';
import type { TCoach } from '@/types/coach';
import { computed } from 'vue';

const emits = defineEmits(['delete']);

const detailsLink = computed(() => '/coaches/' + props.item.id);
const requestLink = computed(() => detailsLink.value + '/request');

const fullName = computed(() => props.item.firstName + ' ' + props.item.lastName);

const props = defineProps<{ item: TCoach }>();
</script>
