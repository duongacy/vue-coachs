<script setup lang="ts">
defineProps<{
  username: string
  password: string
}>()

defineEmits<{
  'update:username': [value: string]
  'update:password': [value: string]
}>()
</script>
<template>
  <div>
    <h1>Login</h1>
    <p>username</p>
    <input
      type="text"
      class="border"
      :value="username"
      @input="$emit('update:username', ($event.target as HTMLInputElement).value)"
    />
    <p>password</p>
    <input
      type="text"
      class="border"
      :value="password"
      @input="$emit('update:password', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
