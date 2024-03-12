<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseInput } from '@/components/ui/input';
import { BaseTypography } from '@/components/ui/typography';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants';
import { key } from '@/store';
import type { authActions } from '@/store/modules/AUTHEN/actions';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { onBeforeRouteLeave } from 'vue-router';
import { useStore } from 'vuex';
import * as z from 'zod';

const store = useStore(key)

const zodSchema = z.object({
  email: z.string({ coerce: true }).refine(value => EMAIL_REGEX.test(value), 'Your email is invalid'),
  password: z.string({ coerce: true }).refine(value => PASSWORD_REGEX.test(value), 'Your password is invalid'),
})

type LoginForm = z.infer<typeof zodSchema>

const { errors, handleSubmit, defineField, values } = useForm<LoginForm>({
  initialValues: { email: '', password: '' },
  validationSchema: toTypedSchema(zodSchema),
})

const [email] = defineField('email');
const [password] = defineField('password');

const onSubmit = handleSubmit(
  async (data) => {
    const signinAction: Parameters<typeof authActions.auth>[1] = {
      type: 'signin',
      payload: data
    }
    try {
      await store.dispatch('AUTHEN/auth', signinAction)
    } catch (error: any) {
      alert(error.message)
    }
  },
  (e) => {
    const firstErrorField = document.querySelector(`[name='${Object.keys(e.errors)[0]}']`) as HTMLInputElement
    firstErrorField?.focus()
  }
)

onBeforeRouteLeave(() => {
  return window.confirm("Do you want to leave?");
})
</script>
<template>
  <div>
    <div>
      <BaseTypography variant="h3" weight="medium" class="text-center">Sign In with your account
      </BaseTypography>
      <BaseTypography variant="detail" weight="regular" class="text-center text-neutral-500">Enter your email and
        password
      </BaseTypography>
    </div>
    <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
      <div class="space-y-3">
        <div>
          <BaseInput placeholder="Enter your email" v-model="email" name="email" />
          <BaseTypography class="mt-1 text-red-500" variant="small" v-if="!!errors.email">
            {{ errors.email }}
          </BaseTypography>
        </div>
        <div>
          <BaseInput placeholder="Enter your password" v-model="password" name="password" type="password" />
          <BaseTypography class="mt-1 text-red-500" variant="small" v-if="!!errors.password">
            {{ errors.password }}
          </BaseTypography>
        </div>
      </div>
      <BaseButton class="w-full"> Sign In</BaseButton>
    </form>
  </div>
</template>