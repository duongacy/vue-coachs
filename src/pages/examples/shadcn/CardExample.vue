<script setup lang="ts">
import {
  BaseCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  BaseSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { BaseInput } from '@/components/ui/input'
import { BaseLabel } from '@/components/ui/label'
import { BaseButton } from '@/components/ui/button'
</script>

<template>
  <div>
    <BaseCard class="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <BaseLabel for="name">Name</BaseLabel>
              <BaseInput id="name" placeholder="Name of your project" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <BaseLabel for="framework">Framework</BaseLabel>
              <BaseSelect>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="nuxt"> Nuxt.js </SelectItem>
                  <SelectItem value="next"> Next.js </SelectItem>
                  <SelectItem value="sveltekit"> SvelteKit </SelectItem>
                  <SelectItem value="astro"> Astro </SelectItem>
                </SelectContent>
              </BaseSelect>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-between px-6 pb-6">
        <BaseButton variant="outline"> Cancel </BaseButton>
        <BaseButton>Deploy</BaseButton>
      </CardFooter>
    </BaseCard>
  </div>
</template>
