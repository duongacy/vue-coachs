<script setup lang="ts">
import {
  BaseCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BaseCard, CardContent } from '@/components/ui/card';
</script>

<template>
  <div class="grid gap-2 px-12">
    <BaseCarousel class="relative">
      <CarouselContent>
        <CarouselItem v-for="(_, index) in 5" :key="index">
          <div class="p-1">
            <BaseCard>
              <CardContent class="flex aspect-[16/9] items-center justify-center p-6">
                <span class="text-4xl font-semibold">{{ index + 1 }}</span>
              </CardContent>
            </BaseCard>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </BaseCarousel>
  </div>
</template>
