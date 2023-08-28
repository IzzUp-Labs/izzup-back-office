<script setup lang="ts">
import QuickStat from "../components/QuickStat.vue";
import {onBeforeMount, ref} from "vue";
import AuthService from "../services/auth.service.ts";
import UserService from "../services/user.service.ts";


const connectedDevices = ref([]);
const createdUsers = ref([]);
const unverifiedUsers = ref([]);

onBeforeMount(() => {
  AuthService.getConnectedDevices().then((res) => {
    connectedDevices.value = res;
  });
  UserService.findAll().then((res) => {
    createdUsers.value = res;
  });
  UserService.findAllUsersNotVerified().then((res) => {
    unverifiedUsers.value = res;
  });
});
</script>

<template>
  <div class="grid justify-center">
    <QuickStat :connected_devices="connectedDevices" :created_users="createdUsers" :unverified_users="unverifiedUsers"></QuickStat>
  </div>
</template>

<style scoped>

</style>