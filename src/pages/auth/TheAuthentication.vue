<template>
  <div class="grid min-h-screen place-content-end bg-slate-100">
    <img src="/src/assets/vue_bg.svg" class="w-full h-full object-cover absolute" />
    <div class="relative w-[600px] h-[600px] bg-neutral-700 rounded-tl-3xl p-20">
      <BaseTabs default-value="sign-in" class="w-[350px] mx-auto">
        <TabsList class="grid grid-cols-2">
          <TabsTrigger value="sign-in"> Sign In </TabsTrigger>
          <TabsTrigger value="sign-up"> Sign Up </TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignInForm />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUpForm />
        </TabsContent>
      </BaseTabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BaseTabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignInForm from './SignInForm.vue';
import SignUpForm from './SignUpForm.vue';
</script>
