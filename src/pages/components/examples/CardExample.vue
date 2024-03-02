<script setup lang="ts">
import {
  BaseSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { BaseInput } from '@/components/ui/input'
import { BaseLabel } from '@/components/ui/label'
import { BaseCard, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import BaseTypography from '@/components/ui/typography/BaseTypography.vue'
import { BaseButton } from '@/components/ui/button'

const submitHandler = (e: Event) => {
  e.preventDefault()
  console.log('Submit handler', e)
}

const cancelHandler = () => {
  console.log('Cancel handler')
}

const actionHandler = () => {
  console.log('Action handler')
}
</script>

<template>
  <div>
    <BaseTypography variant="list">Card with form submit</BaseTypography>
    <form @submit.prevent="submitHandler" class="mb-4">
      <BaseCard
        title="Create project"
        description="Deploy your new project in one-click."
        cancel-text="Cancel"
        action-text="Create"
        action-type="submit"
        @cancel="cancelHandler"
      >
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
      </BaseCard>
    </form>

    <BaseTypography variant="list">Card with custom header & footer</BaseTypography>
    <BaseCard>
      <template #header>
        <CardHeader>
          <CardTitle>Create project </CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
      </template>
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
      <template #footer>
        <CardFooter class="flex justify-between px-6 pb-6">
          <BaseButton variant="outline" @click="cancelHandler">Cancel </BaseButton>
          <BaseButton @click="actionHandler">Create</BaseButton>
        </CardFooter>
      </template>
    </BaseCard>
  </div>
</template>
