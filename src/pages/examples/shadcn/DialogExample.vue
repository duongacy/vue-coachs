<script setup lang="ts">
import { BaseButton } from '@/components/ui/button'
import {
  BaseDialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { BaseInput } from '@/components/ui/input'
import { BaseLabel } from '@/components/ui/label'
</script>

<template>
  <div class="grid gap-2 border p-2">
    <BaseDialog>
      <DialogTrigger as-child>
        <BaseButton variant="outline"> Edit Profile </BaseButton>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <BaseLabel for="name" class="text-right"> Name </BaseLabel>
            <BaseInput id="name" value="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <BaseLabel for="username" class="text-right"> Username </BaseLabel>
            <BaseInput id="username" value="@peduarte" class="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <BaseButton type="submit"> Save changes </BaseButton>
        </DialogFooter>
      </DialogContent>
    </BaseDialog>
  </div>
</template>
