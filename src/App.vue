<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import {userStore} from "./stores/user.store.ts";
import UserInfoModel from "./models/user-info.model.ts";

const store = userStore();
const user: UserInfoModel | null = store.user;
</script>

<template>
    <side-bar></side-bar>
    <div class="md:container md:mx-auto px-5">
      <router-view />
    </div>
</template>

<style scoped>
</style>
