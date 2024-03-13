<script setup lang="ts">
import { BaseButton } from '@/components/ui/button'
import { BaseInput } from '@/components/ui/input'
import { BaseTypography } from '@/components/ui/typography'
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants'
import { key } from '@/store'
import type { authActions } from '@/store/modules/AUTHEN/actions'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, type InvalidSubmissionHandler, type SubmissionHandler } from 'vee-validate'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { z } from 'zod'

const signUpSchema = z
  .object({
    email: z.string().refine((value) => EMAIL_REGEX.test(value), { message: 'Email is invalid' }),
    password: z
      .string()
      .refine((value) => PASSWORD_REGEX.test(value), { message: 'Password is invalid' }),
    rePassword: z.string()
  })
  .refine(({ password, rePassword }) => password === rePassword, {
    message: 'Confirm password and password are not the same'
  })
type SignUpType = z.infer<typeof signUpSchema>

const samePasswordError = computed(() => {
  let msg = ''
  if (Object.keys(errors.value)?.[0] === '') {
    msg = Object.values(errors.value)[0]
  }
  console.log(msg)

  return msg
})

const { defineField, errors, handleSubmit } = useForm<SignUpType>({
  initialValues: { email: '', password: '', rePassword: '' },
  validationSchema: toTypedSchema(signUpSchema)
})

const shouldShowValidate = ref(false)
const [email] = defineField('email')
const [password] = defineField('password')
const [rePassword] = defineField('rePassword')

const store = useStore(key)
const signUpHandler: SubmissionHandler<SignUpType> = async (data) => {
  const { rePassword, ...payload } = data
  const signupAction: Parameters<typeof authActions.auth>[1] = {
    type: 'signin',
    payload
  }
  try {
    await store.dispatch('AUTHEN/auth', signupAction)
  } catch (error: any) {
    alert(error.message)
  }
}

const signUpErrorHandler: InvalidSubmissionHandler<SignUpType> = (e) => {
  shouldShowValidate.value = true
  let firstFieldName = Object.keys(e.errors)[0]
  if (firstFieldName === '') firstFieldName = 'rePassword'
  const firstErrorField = document.querySelector(`[name='${firstFieldName}']`) as HTMLInputElement
  console.log('firstFieldName', firstFieldName)

  firstErrorField?.focus()
}
const onSubmit = handleSubmit(signUpHandler, signUpErrorHandler)
</script>

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
            v-model="email"
            @keypress="shouldShowValidate = false"
            name="email"
          />
          <BaseTypography
            class="mt-1 text-red-500"
            variant="small"
            v-if="errors.email && shouldShowValidate"
          >
            {{ errors.email }}
          </BaseTypography>
        </div>
        <div>
          <BaseInput
            placeholder="Enter your password"
            type="password"
            v-model="password"
            name="password"
            @keypress="shouldShowValidate = false"
          />
          <BaseTypography
            class="mt-1 text-red-500"
            variant="small"
            v-if="!!errors.password && shouldShowValidate"
          >
            {{ errors.password }}
          </BaseTypography>
        </div>
        <div>
          <BaseInput
            placeholder="Confirm your password"
            type="password"
            v-model="rePassword"
            name="rePassword"
            @keypress="shouldShowValidate = false"
          />
          <BaseTypography
            class="mt-1 text-red-500"
            variant="small"
            v-if="!!samePasswordError && shouldShowValidate"
          >
            {{ samePasswordError }}
          </BaseTypography>
        </div>
      </div>
      <BaseButton class="w-full"> Sign Up</BaseButton>
    </form>
  </div>
</template>
