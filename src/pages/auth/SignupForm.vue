<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import {
  BaseCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BaseInput } from '@/components/ui/input';
import { BaseLabel } from '@/components/ui/label';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants';
import { key } from '@/store';
import type { authActions } from '@/store/modules/AUTHEN/actions';
import { toTypedSchema } from '@vee-validate/zod';
import { Lock, Mail } from 'lucide-vue-next';
import { useForm, type InvalidSubmissionHandler, type SubmissionHandler } from 'vee-validate';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { z } from 'zod';

const signUpSchema = z
  .object({
    email: z.string().refine((value) => EMAIL_REGEX.test(value), { message: 'Email is invalid' }),
    password: z
      .string()
      .refine((value) => PASSWORD_REGEX.test(value), { message: 'Password is invalid' }),
    rePassword: z.string(),
  })
  .refine(({ password, rePassword }) => password === rePassword, {
    message: 'Confirm password and password are not the same',
  });
type SignUpType = z.infer<typeof signUpSchema>;

const samePasswordError = computed(() => {
  let msg = '';
  if (Object.keys(errors.value)?.[0] === '') {
    msg = Object.values(errors.value)[0];
  }
  return msg;
});

const { defineField, errors, handleSubmit } = useForm<SignUpType>({
  initialValues: { email: '', password: '', rePassword: '' },
  validationSchema: toTypedSchema(signUpSchema),
});

const shouldShowValidate = ref(false);
const [email] = defineField('email');
const [password] = defineField('password');
const [rePassword] = defineField('rePassword');

const store = useStore(key);
const signUpHandler: SubmissionHandler<SignUpType> = async (data) => {
  const { rePassword, ...payload } = data;
  const signupAction: Parameters<typeof authActions.auth>[1] = {
    type: 'signin',
    payload,
  };
  try {
    await store.dispatch('AUTHEN/auth', signupAction);
  } catch (error: any) {
    alert(error.message);
  }
};

const signUpErrorHandler: InvalidSubmissionHandler<SignUpType> = (e) => {
  shouldShowValidate.value = true;
  let firstFieldName = Object.keys(e.errors)[0];
  if (firstFieldName === '') firstFieldName = 'rePassword';
  const firstErrorField = document.querySelector(`[name='${firstFieldName}']`) as HTMLInputElement;
  firstErrorField?.focus();
};
const onSubmit = handleSubmit(signUpHandler, signUpErrorHandler);
</script>

<template>
  <form @submit.prevent="onSubmit">
    <BaseCard>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          If you don't have an account, register a new account with some informations below.
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-3">
        <BaseLabel class="grid gap-1">
          <span>Email</span>
          <BaseInput
            placeholder="Enter your email"
            v-model:value="email"
            @keypress="shouldShowValidate = false"
            name="email"
            :start-icon="Mail"
          />
          <p
            class="text-small text-red-500"
            v-if="errors.email && shouldShowValidate"
          >
            {{ errors.email }}
          </p>
        </BaseLabel>
        <BaseLabel class="grid gap-1">
          <span>Password</span>
          <BaseInput
            placeholder="Enter your password"
            type="password"
            v-model="password"
            name="password"
            @keypress="shouldShowValidate = false"
            :start-icon="Lock"
          />
          <p
            class="text-small text-red-500"
            v-if="!!errors.password && shouldShowValidate"
          >
            {{ errors.password }}
          </p>
        </BaseLabel>
        <BaseLabel class="grid gap-1">
          <span>Confirm password</span>
          <BaseInput
            placeholder="Confirm your password"
            type="password"
            v-model:value="rePassword"
            name="rePassword"
            @keypress="shouldShowValidate = false"
            :start-icon="Lock"
          />
          <p
            class="text-small text-red-500"
            v-if="!!samePasswordError && shouldShowValidate"
          >
            {{ samePasswordError }}
          </p>
        </BaseLabel>
      </CardContent>
      <CardFooter>
        <BaseButton class="w-full">Sign Up</BaseButton>
      </CardFooter>
    </BaseCard>
  </form>
</template>
