<template>
  <div>
    <LoginComp v-model:username="username" v-model:password="password"></LoginComp>
    {{ username }}
    {{ password }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginComp from './LoginComp.vue'

const username = ref<string>('')
const password = ref<string>('')
</script>
