<template>
  <div>
    <div class="relative flex gap-x-3">
      <div class="flex h-6 items-center">
        <input
          id="comments"
          name="comments"
          type="checkbox"
          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div class="text-sm leading-6">
        <label for="comments" class="font-medium text-gray-900">Comments</label>
        <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
