<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import {userStore} from "./stores/user.store.ts";

const store = userStore();
const user = store.user;
</script>

<template>
    <side-bar v-if="store.isLogged"></side-bar>
    <div class="md:container md:mx-auto px-5">
      <router-view />
    </div>
</template>

<style scoped>
</style>
