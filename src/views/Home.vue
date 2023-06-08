<script setup lang="ts">
  import {userStore} from "../stores/user.store.ts";
  import UserInfoModel from "../models/user-info.model.ts";
  import SideBar from "../components/SideBar.vue";

  const store = userStore();
  const user: UserInfoModel | null = store.user;
</script>

<template>
    <side-bar></side-bar>
</template>

<style scoped>

</style>