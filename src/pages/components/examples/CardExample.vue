<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseCard, CardContent, CardFooter } from '@/components/ui/card';
import { BaseInput } from '@/components/ui/input';
import { BaseLabel } from '@/components/ui/label';
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <BaseCard
      class="w-[350px]"
      title="Lorem ipsum dolor sit amet."
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    >
      <CardContent>
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <BaseLabel for="name">Name</BaseLabel>
              <BaseInput
                id="name"
                placeholder="Name of your project"
              />
            </div>
            <div class="flex flex-col space-y-1.5">
              <BaseLabel for="framework">Framework</BaseLabel>
              <!-- <BaseSelect>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="nuxt"> Nuxt.js </SelectItem>
                  <SelectItem value="next"> Next.js </SelectItem>
                  <SelectItem value="sveltekit"> SvelteKit </SelectItem>
                  <SelectItem value="astro"> Astro </SelectItem>
                </SelectContent>
              </BaseSelect> -->
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex">
        <BaseButton variant="ghost"> Cancel </BaseButton>
        <BaseButton>Deploy</BaseButton>
      </CardFooter>
    </BaseCard>
  </div>
</template>
