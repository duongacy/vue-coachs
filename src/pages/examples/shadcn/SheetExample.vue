<script setup lang="ts">
import { BaseButton } from '@/components/ui/button'
import { BaseInput } from '@/components/ui/input'
import { BaseLabel } from '@/components/ui/label'
import {
  BaseSheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
</script>

<template>
  <div>
    <BaseSheet>
      <SheetTrigger as-child>
        <BaseButton variant="outline"> Open </BaseButton>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
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
        <SheetFooter>
          <SheetClose as-child>
            <BaseButton type="submit"> Save changes </BaseButton>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </BaseSheet>
  </div>
</template>
