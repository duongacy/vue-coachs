<script setup lang="ts">
import { BaseInput } from '@/components/ui/input';
import { BaseLabel } from '@/components/ui/label';
import { AlbumIcon, Mail, Search } from 'lucide-vue-next';
import { ref } from 'vue';

const value = ref();
</script>

<template>
  <div class="grid gap-4">
    <div class="grid gap-2">
      <p class="text-heading6 font-bold">Default</p>
      <div class="flex flex-wrap gap-4">
        <BaseLabel class="grid gap-2">
          <span>No Icon</span>
          <BaseInput
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
          >
          </BaseInput>
        </BaseLabel>
        <BaseLabel class="grid gap-2">
          <span>With left icon</span>
          <BaseInput
            :startIcon="Mail"
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
          >
          </BaseInput>
        </BaseLabel>

        <BaseLabel class="grid gap-2">
          <span>With right icon</span>
          <BaseInput
            :endIcon="Search"
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
          >
          </BaseInput>
        </BaseLabel>
        <BaseLabel class="grid gap-2">
          <span>With left and right icon</span>
          <BaseInput
            :startIcon="AlbumIcon"
            :endIcon="Search"
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
          >
          </BaseInput>
        </BaseLabel>
      </div>
    </div>
    <div class="grid gap-2">
      <p class="text-heading6 font-bold">Error</p>
      <div class="flex flex-wrap gap-4">
        <BaseLabel class="grid gap-2">
          <span>No Icon</span>
          <BaseInput
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
            isError
          >
          </BaseInput>
        </BaseLabel>
        <BaseLabel class="grid gap-2">
          <span>With left icon</span>
          <BaseInput
            :startIcon="Mail"
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
            isError
          >
          </BaseInput>
        </BaseLabel>

        <BaseLabel class="grid gap-2">
          <span>With right icon</span>
          <BaseInput
            :endIcon="Search"
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
            isError
          >
          </BaseInput>
        </BaseLabel>
        <BaseLabel class="grid gap-2">
          <span>With left and right icon</span>
          <BaseInput
            :startIcon="AlbumIcon"
            :endIcon="Search"
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
            isError
          >
          </BaseInput>
        </BaseLabel>
      </div>
    </div>
    <div class="grid gap-2">
      <p class="text-heading6 font-bold">Disabled</p>
      <div class="flex flex-wrap gap-4">
        <BaseLabel class="grid gap-2">
          <span>No Icon</span>
          <BaseInput
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
            disabled
          >
          </BaseInput>
        </BaseLabel>
        <BaseLabel class="grid gap-2">
          <span>With left icon</span>
          <BaseInput
            :startIcon="Mail"
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
            disabled
          >
          </BaseInput>
        </BaseLabel>

        <BaseLabel class="grid gap-2">
          <span>With right icon</span>
          <BaseInput
            :endIcon="Search"
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
            disabled
          >
          </BaseInput>
        </BaseLabel>
        <BaseLabel class="grid gap-2">
          <span>With left and right icon</span>
          <BaseInput
            :startIcon="AlbumIcon"
            :endIcon="Search"
            v-model:value="value"
            placeholder="Text here"
            class="w-[350px]"
            disabled
          >
          </BaseInput>
        </BaseLabel>
      </div>
    </div>
  </div>
</template>
