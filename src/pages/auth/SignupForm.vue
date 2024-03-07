<template>
  <div>
    <div>
      <BaseTypography variant="h3" weight="medium" class="text-center"
        >Create an account
      </BaseTypography>
      <BaseTypography variant="detail" weight="regular" class="text-center text-neutral-500"
        >Enter your email and password
      </BaseTypography>
    </div>
    <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
      <div class="space-y-2">
        <div>
          <BaseInput
            placeholder="Enter your email"
            v-model="userAuthen.email.value"
            @input="removeValidate('email')"
          />
          <BaseTypography
            class="mt-1 text-red-500"
            variant="small"
            v-if="!!userAuthen.email.error"
            >{{ userAuthen.email.error }}</BaseTypography
          >
        </div>
        <div>
          <BaseInput
            placeholder="Enter your password"
            type="password"
            v-model="userAuthen.password.value"
            @input="removeValidate('password')"
          />
          <BaseTypography
            class="mt-1 text-red-500"
            variant="small"
            v-if="!!userAuthen.password.error"
            >{{ userAuthen.password.error }}</BaseTypography
          >
        </div>
        <div>
          <BaseInput
            placeholder="Confirm your password"
            type="password"
            v-model="userAuthen.rePassword.value"
            @input="removeValidate('rePassword')"
          />
          <BaseTypography
            class="mt-1 text-red-500"
            variant="small"
            v-if="!!userAuthen.rePassword.error"
            >{{ userAuthen.rePassword.error }}</BaseTypography
          >
        </div>
      </div>
      <BaseButton class="w-full"> Sign Up</BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from '@/components/ui/button'
import { BaseInput } from '@/components/ui/input'
import { BaseTypography } from '@/components/ui/typography'

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

const removeValidate = (field: 'email' | 'password' | 'rePassword') => {
  userAuthen.value[field].value = ''
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

<style scoped></style>
