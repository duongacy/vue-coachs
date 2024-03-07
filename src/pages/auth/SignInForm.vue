<template>
  <div>
    <div>
      <BaseTypography variant="h3" weight="medium" class="text-center"
        >Sign In with your account
      </BaseTypography>
      <BaseTypography variant="detail" weight="regular" class="text-center text-neutral-500"
        >Enter your email and password
      </BaseTypography>
    </div>
    <form class="space-y-4 mt-6" @submit.prevent="onSubmit">
      <div class="space-y-3">
        <div>
          <BaseInput placeholder="Enter your email" v-model="userAuthen.email.value" @input="removeValidate('email')" />
          <BaseTypography
            class="text-red-500 mt-1"
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
            class="text-red-500 mt-1"
            variant="small"
            v-if="!!userAuthen.password.error"
            >{{ userAuthen.password.error }}</BaseTypography
          >
        </div>
      </div>
      <BaseButton class="w-full"> Sign In</BaseButton>
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

const store = useStore(key)

const userAuthen = ref({
  email: { value: '', error: '' },
  password: { value: '', error: '' }
})

const checkValidate = () => {
  let ok = true
  if (!userAuthen.value.email.value.includes('@')) {
    userAuthen.value.email.error = 'Email is invalid'
    ok = false
  }
  if (userAuthen.value.password.value.length < 6) {
    userAuthen.value.password.error = 'Password is invalid'
    return false
  }
  return ok
}
const removeValidate = (field: 'email' | 'password') => {
  userAuthen.value[field].error = ''
}

const onSubmit = async () => {
  if (!checkValidate()) return
  const signinAction: Parameters<typeof authActions.auth>[1] = {
    type: 'signin',
    payload: {
      email: userAuthen.value.email.value,
      password: userAuthen.value.password.value
    }
  }
  try {
    await store.dispatch('AUTHEN/auth', signinAction)
  } catch (error: any) {
    alert(error.message)
  }
}
</script>
