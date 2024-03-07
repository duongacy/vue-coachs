<template>
  <div class="flex min-h-screen p-6">
    <div class="mx-auto flex w-full max-w-screen-xl overflow-hidden rounded-xl border">
      <div class="flex h-full flex-grow flex-col justify-between bg-neutral-800 p-8">
        <div>
          <BaseTypography class="text-white" weight="medium" variant="h3">WTVue</BaseTypography>
        </div>
        <div>
          <BaseTypography class="text-white" variant="h4">
            “This project is creating for learning purpose and try to show what are Vuejs can do.”
          </BaseTypography>
          <BaseTypography class="mt-2 italic text-white">YLVN - Newbies community</BaseTypography>
        </div>
      </div>
      <div class="flex h-full w-1/2 max-w-[500px] flex-col justify-center">
        <div class="mx-auto w-[350px] space-y-6 p-6">
          <Component :is="authenComponent" />
          <BaseTypography variant="small" class="text-center uppercase text-neutral-500"
            >If you don't have an account</BaseTypography
          >
          <BaseButton class="w-full" variant="outline" @click="toggleAuth">
            {{ toggleText }}</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import SignInForm from './SignInForm.vue'
import SignUpForm from './SignUpForm.vue'
import { BaseButton } from '@/components/ui/button'
import { BaseTypography } from '@/components/ui/typography'

const isSignin = ref<boolean>(true)
const toggleAuth = () => {
  isSignin.value = !isSignin.value
}
const toggleText = computed(() => (isSignin.value ? 'Sign Up' : 'Sign In'))
const authenComponent = computed(() => (isSignin.value ? SignInForm : SignUpForm))
</script>
./SignUpForm.vue
