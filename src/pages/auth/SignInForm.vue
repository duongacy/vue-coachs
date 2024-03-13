<script setup lang="ts">
import { BaseButton } from '@/components/ui/button'
import { BaseInput } from '@/components/ui/input'
import { BaseTypography } from '@/components/ui/typography'
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants'
import { key } from '@/store'
import { type authActions } from '@/store/modules/AUTHEN/actions'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, type SubmissionHandler, type InvalidSubmissionHandler } from 'vee-validate'
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useStore } from 'vuex'
import { z } from 'zod'
import {
  BaseCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { BaseLabel } from '@/components/ui/label'

const SignInSchema = z.object({
  email: z.string().refine((value) => EMAIL_REGEX.test(value), 'Your email is invalid'),
  password: z.string().refine((value) => PASSWORD_REGEX.test(value), 'Your password is invalid')
})
type SignInType = z.infer<typeof SignInSchema>

const store = useStore(key)
const { errors, handleSubmit, defineField } = useForm<SignInType>({
  initialValues: { email: '', password: '' },
  validationSchema: toTypedSchema(SignInSchema)
})

const shouldShowValidate = ref(false)
const [email] = defineField('email')
const [password] = defineField('password')

const signInHandler: SubmissionHandler<SignInType> = async (data) => {
  const signinAction: Parameters<typeof authActions.auth>[1] = {
    type: 'signin',
    payload: data
  }
  try {
    await store.dispatch('AUTHEN/auth', signinAction)
  } catch (error: any) {
    alert(error.message)
  }
}
const signInErrorHandler: InvalidSubmissionHandler<SignInType> = (e) => {
  shouldShowValidate.value = true
  const firstErrorField = document.querySelector(
    `[name='${Object.keys(e.errors)[0]}']`
  ) as HTMLInputElement
  firstErrorField?.focus()
}
const onSubmit = handleSubmit(signInHandler, signInErrorHandler)

onBeforeRouteLeave((_1, _2, next) => {
  const isAuthenticated = store.getters['AUTHEN/isAuthenticated']
  if (!isAuthenticated) {
    const answer = window.confirm('Are you sure?')
    next(answer)
    return
  }
  next()
})
</script>
<template>
  <form @submit.prevent="onSubmit">
    <BaseCard>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          If you have an account, please sign-in with email and password.
        </CardDescription>
      </CardHeader>
      <CardContent class="space-y-2">
        <div class="space-y-1">
          <BaseLabel for="email">Email</BaseLabel>
          <BaseInput id="email" placeholder="Enter your email" v-model:model-value="email" name="email"
            @keypress="shouldShowValidate = false" />
          <BaseTypography class="mt-2 text-red-500" variant="small" v-if="!!errors.email && shouldShowValidate">
            {{ errors.email }}
          </BaseTypography>
        </div>
        <div class="space-y-1">
          <BaseLabel for="username">Password</BaseLabel>
          <BaseInput placeholder="Enter your password" id="password" v-model="password" name="password" type="password"
            @keypress="shouldShowValidate = false" />
          <BaseTypography class="mt-2 text-red-500" variant="small" v-if="!!errors.password && shouldShowValidate">
            {{ errors.password }}
          </BaseTypography>
        </div>
      </CardContent>
      <CardFooter>
        <BaseButton type="submit" class="w-full">Sign In</BaseButton>
      </CardFooter>
    </BaseCard>
  </form>
</template>
