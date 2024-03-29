<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseCard } from '@/components/ui/card';
import ExampleSectionTemplate from '@/pages/components/ExampleSectionTemplate.vue';

const variants = ['primary', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const;
const buttonSizes = ['icon', 'sm', 'md', 'lg'] as const;
</script>

<template>
  <ExampleSectionTemplate name="Card">
    <div class="flex items-end gap-4 overflow-x-auto flex-wrap">
      <BaseCard
        class="w-[350px]"
        title="Card default"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
      >
        <template #image>
          <img src="/src/assets/avatar.jpeg" class="aspect-[4/3] object-cover" alt="..." />
        </template>
        <template #footer>
          <div class="flex gap-4 justify-end">
            <BaseButton variant="outline" class="min-w-[80px]">Cancel</BaseButton>
            <BaseButton class="min-w-[80px]">Next</BaseButton>
          </div>
        </template>
      </BaseCard>
      <BaseCard
        class="w-[350px]"
        title="Card fluid image"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
        image-fluid
      >
        <template #image>
          <img src="/src/assets/avatar.jpeg" class="aspect-[4/3] object-cover" alt="..." />
        </template>
        <template #footer>
          <div class="flex gap-4 justify-end">
            <BaseButton variant="outline" class="min-w-[80px]">Cancel</BaseButton>
            <BaseButton class="min-w-[80px]">Next</BaseButton>
          </div>
        </template>
      </BaseCard>
      <BaseCard
        class="w-[350px]"
        title="Card fluid footer and image"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
        image-fluid
        footer-fluid
      >
        <template #image>
          <img src="/src/assets/avatar.jpeg" class="aspect-[4/3] object-cover" alt="..." />
        </template>
        <template #footer>
          <div class="flex gap-4 bg-neutral-100 py-3 px-6 justify-end">
            <BaseButton variant="outline" class="min-w-[80px]">Cancel</BaseButton>
            <BaseButton class="min-w-[80px]">Next</BaseButton>
          </div>
        </template>
      </BaseCard>
      <BaseCard
        class="w-[350px]"
        title="Card without image"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
      >
        <p>Content</p>
        <template #footer>
          <div class="flex gap-4 justify-end">
            <BaseButton variant="outline" class="min-w-[80px]">Cancel</BaseButton>
            <BaseButton class="min-w-[80px]">Next</BaseButton>
          </div>
        </template>
      </BaseCard>
    </div>
  </ExampleSectionTemplate>
</template>
