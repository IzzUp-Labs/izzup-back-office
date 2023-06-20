<script setup lang="ts">
  import AuthLoginCredentialsModel from "../models/auth-login-credentials.model.ts";
  import {userStore} from "../stores/user.store.ts";

  const store = userStore();

  const authLoginCredentials : AuthLoginCredentialsModel = {
    email: '',
    password: ''
  }

  function login() {
    store.login(authLoginCredentials);
  }
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="#">
        <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">Login to IzzUp</h5>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email"
                 name="email"
                 id="email"
                 class="input input-bordered input-accent w-full"
                 placeholder="admin@example.com"
                  required
                  v-model="authLoginCredentials.email">
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password"
                 name="password"
                 id="password"
                 placeholder="********"
                 class="input input-bordered input-password input-accent w-full"
                 required
                 v-model="authLoginCredentials.password"
                 autocomplete="on">
        </div>
        <button type="button"
                class="btn btn-accent flex items-center justify-center w-full"
                v-on:click="login">Login to your account</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
