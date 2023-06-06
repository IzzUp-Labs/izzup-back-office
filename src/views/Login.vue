<script setup lang="ts">
  import { ref } from 'vue'
  const password = ref('')
  const email = ref('')
</script>

<template>
  <div class="flex justify-center pt-60">
    <h1 class="font-bold text-5xl">Login</h1>
  </div>
  <div class="container mx-auto m-5 h-60 rounded-3xl shadow-2xl bg-izzup-white">
    <input type="text" class="m-2 text-center">
    <button class="rounded-full bg-izzup-secondary">valider</button>
  </div>
</template>

<style scoped>
</style>