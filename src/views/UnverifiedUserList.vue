<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import userService from "../services/user.service.ts";
import UserInfoModel from "../models/user-info.model.ts";
import VerifyUser from "../components/modals/user/VerifyUser.vue";

  const users = ref<UserInfoModel[]>([]);
  const selectedUser = ref<UserInfoModel>();
  const showModal = ref(false)

  onBeforeMount(async () => {
    users.value = await userService.findAllUsersNotVerified();
  });

  function openModal(user: UserInfoModel){
    selectedUser.value = {...user};
    showModal.value = !showModal.value;
  }

  function verifyUserByID(user_id: number){
    showModal.value = false;
    userService.verifyUser(user_id);
    users.value = users.value.filter(user => user.id !== user_id);
  }
</script>

<template>
  <VerifyUser v-if="showModal" class="modal" :class="{ 'modal-open': showModal }" :selected_user="selectedUser" @close="showModal = false" @verify="(user_id) => verifyUserByID(user_id)"></VerifyUser>
  <div v-if="users.length > 0">
    <div class="flex justify-center pb-5">
      <h2 class="text-3xl font-bold">Liste des utilisateurs non vérifié</h2>
    </div>
    <div class="overflow-auto" style="height: 80vh;">
      <table class="table table-xs">
        <!-- head -->
        <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Date de naissance</th>
          <th>Role</th>
          <th>Date de création</th>
          <th>Date de modification</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-base-200 hover:bg-izzup-primary hover:text-izzup-black" v-for="user in users">
          <th>{{user.id}}</th>
          <td>{{user.email}}</td>
          <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
          <td>{{user.date_of_birth}}</td>
          <td>{{user.role}}</td>
          <td>{{user.created_at}}</td>
          <td>{{user.updated_at}}</td>
          <td>
            <button class="btn btn-accent" v-on:click="openModal(user)">
              Vérifier
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else class="flex justify-center">
    <h1 class="text-5xl font-bold">Aucun User</h1>
  </div>
</template>

<style scoped>

</style>