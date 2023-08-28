<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import {userStore} from "./stores/user.store.ts";
import Login from "./views/Login.vue";

const store = userStore();
const user = store.user;
</script>

<template>
    <side-bar v-if="store.isLogged"></side-bar>
    <Login v-else></Login>
</template>

<style scoped>
</style>
