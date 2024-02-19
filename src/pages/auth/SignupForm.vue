<template>
  <div class="flex flex-col p-12">
    <div class="mx-auto w-full max-w-sm space-y-10">
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900">
        Sign up to your account
      </h2>
      <form class="space-y-6" @submit.prevent="onSubmit">
        <div>
          <p class="text-sm font-medium leading-6 text-neutral-900">Email address</p>
          <input
            v-model.trim="userAuthen.email.value"
            type="email"
            class="block w-full mt-2 rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 text-sm leading-6"
          />
        </div>
        <div>
          <p class="text-sm font-medium leading-6 text-neutral-900">Password</p>
          <input
            v-model.trim="userAuthen.password.value"
            type="password"
            class="block w-full mt-2 rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 text-sm leading-6"
          />
        </div>
        <div>
          <p class="text-sm font-medium leading-6 text-neutral-900">Confirm password</p>
          <input
            v-model.trim="userAuthen.rePassword.value"
            type="password"
            class="block w-full mt-2 rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 text-sm leading-6"
          />
        </div>

        <base-button type="submit" variant="primary" size="large" class="w-full justify-center">
          Sign up
        </base-button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { key } from '@/store'
import type { authActions } from '@/store/modules/AUTHEN/actions'
import { ref } from 'vue'
import { useStore } from 'vuex'

const userAuthen = ref({
  email: { value: '', error: '' },
  password: { value: '', error: '' },
  rePassword: { value: '', error: '' }
})

const checkValidate = () => {
  let ok = true
  if (!userAuthen.value.email.value.includes('@')) {
    userAuthen.value.email.error = 'Email is not valid'
    ok = false
  }
  if (userAuthen.value.password.value.length < 6) {
    userAuthen.value.password.error = 'Password is not valid'
    return false
  }
  if (userAuthen.value.rePassword.value !== userAuthen.value.password.value) {
    userAuthen.value.rePassword.error = 'Password and rePassword must be the same'
    ok = false
  }
  return ok
}
const store = useStore(key)

const onSubmit = async () => {
  if (!checkValidate()) return
  const signupAction: Parameters<typeof authActions.auth>[1] = {
    type: 'signin',
    payload: { email: userAuthen.value.email.value, password: userAuthen.value.password.value }
  }
  try {
    await store.dispatch('AUTHEN/signup', signupAction)
  } catch (error: any) {
    alert(error.message)
  }
}
</script>
