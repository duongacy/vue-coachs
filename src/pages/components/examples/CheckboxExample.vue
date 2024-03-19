<script setup lang="ts">
import { BaseButton } from '@/components/ui/button';
import { BaseCheckbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { ref, watchEffect } from 'vue';
import * as z from 'zod';

const result = ref<boolean>();

const updateCheckedHandler = (value: boolean) => {
  result.value = value;
};
watchEffect(() => {
  console.log(result.value);
});

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const;

const formSchema = toTypedSchema(
  z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
  }),
);

const { handleSubmit, errors } = useForm({
  validationSchema: formSchema,
  initialValues: {
    items: ['recents', 'home'],
  },
});

watchEffect(() => {
  console.log('errors', errors.value);
});

const onSubmit = handleSubmit((values) => {
  console.log('submited', values);
});
</script>

<template>
  <div class="grid gap-4">
    <div class="grid gap-2">
      <p>Basic using</p>
      <div class="flex gap-2">
        <BaseCheckbox
          label="Checkbox"
          :checked="result"
          @update:checked="updateCheckedHandler"
        ></BaseCheckbox>
        <BaseCheckbox
          label="Checkbox disabled"
          disabled
        ></BaseCheckbox>
      </div>
    </div>
    <div class="grid gap-2">
      <p>With vee-validate</p>
      <form @submit="onSubmit">
        <FormField name="items">
          <FormItem>
            <div class="mb-4">
              <FormLabel class="text-base"> Sidebar </FormLabel>
              <FormDescription>
                Select the items you want to display in the sidebar.
              </FormDescription>
            </div>

            <FormField
              v-for="item in items"
              v-slot="{ value, handleChange }"
              :key="item.id"
              type="checkbox"
              :value="item.id"
              :unchecked-value="false"
              name="items"
            >
              <FormItem class="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <BaseCheckbox
                    :checked="value.includes(item.id)"
                    @update:checked="handleChange"
                  />
                </FormControl>
                <FormLabel class="font-normal">
                  {{ item.label }}
                </FormLabel>
              </FormItem>
            </FormField>
            <FormMessage />
          </FormItem>
        </FormField>

        <div class="mt-4 flex justify-start">
          <BaseButton type="submit"> Submit </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>
