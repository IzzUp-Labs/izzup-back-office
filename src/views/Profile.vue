<script setup lang="ts">
import {userStore} from "../stores/user.store.ts";
import UserInfoModel from "../models/user-info.model.ts";

const store = userStore();
const user: UserInfoModel | null = store.user;
</script>

<template>
  <div class="flex flex-col items-center justify-center pt-36">
    <div class="card w-96 bg-izzup-primary shadow-xl text-izzup-black">
      <div class="card-body">
        <h2 class="card-title">{{user?.last_name.toString().toUpperCase()}}</h2>
        <p>Email : {{ user?.email }}</p>
        <p>Date de création : {{ new Date(user?.created_at.toString()).toLocaleDateString() }}</p>
        <p>Role : {{ user?.role }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>