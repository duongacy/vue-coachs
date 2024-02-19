<template>
  <div class="flex-grow flex flex-col">
    <div class="flex-grow">
      <signin-form v-if="isSignin"></signin-form>
      <signup-form v-else></signup-form>
    </div>
    <p class="text-center text-sm text-neutral-500">
      {{ isSignin ? 'Not a member?' : 'Is a member?' }}
      <button
        @click="toggleAuth"
        class="font-semibold leading-6 text-primary-600 hover:text-primary-500"
      >
        {{ isSignin ? 'Signup new account' : 'Signin to your account' }}
      </button>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import SigninForm from './SignInForm.vue'
import SignupForm from './SignupForm.vue'

const isSignin = ref<boolean>(true)
const toggleAuth = () => {
  isSignin.value = !isSignin.value
}
</script>
