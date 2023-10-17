<script setup lang="ts">
  import UserService from "../services/user.service.ts";
  import {onBeforeMount, ref} from "vue";
  import UserInfoModel from "../models/user-info.model.ts";
  import UpdateUserModal from "../components/modals/user/UpdateUser.vue";
  import RemoveCheck from "../components/modals/RemoveCheck.vue";

  const users = ref<UserInfoModel[]>([]);
  const selectedUser = ref<UserInfoModel>();
  const showModal = ref(false)
  const showCheckModal = ref(false)

  onBeforeMount(async () => {
    users.value = await UserService.findAll();
  });

  function openModal(user: UserInfoModel){
    selectedUser.value = {...user};
    showModal.value = !showModal.value;
  }

  function openCheckModal(user: UserInfoModel){
    selectedUser.value = {...user};
    showCheckModal.value = !showCheckModal.value;
  }

  function updateUserInformations(updatedUser: UserInfoModel){
    showModal.value = false;
    UserService.update(updatedUser.id, updatedUser);
    users.value = users.value.map(user => user.id === updatedUser.id ? updatedUser : user);
  }

  function removeUser(user_id: number){
    showCheckModal.value = false;
    UserService.remove(user_id);
    users.value = users.value.filter(user => user.id !== user_id);
  }
</script>

<template>
  <UpdateUserModal v-if="showModal" class="modal" :class="{ 'modal-open': showModal }" :selected_user="selectedUser" @close="showModal = false" @update="(updatedUser) => updateUserInformations(updatedUser)"></UpdateUserModal>
  <RemoveCheck v-if="showCheckModal" class="modal" :class="{ 'modal-open': showCheckModal }" :element="selectedUser" @remove="(id) => removeUser(id)" @pass="showCheckModal = false"></RemoveCheck>
  <div v-if="users.length > 0">
    <div class="flex justify-center pb-5">
      <h2 class="text-3xl font-bold">Liste des Utilisateurs</h2>
    </div>
    <div class="overflow-auto" style="height: 80vh;">
      <table class="table table-xs">
        <!-- head -->
        <thead>
          <tr class="">
            <th>#</th>
            <th>Email</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Date de naissance</th>
            <th>Role</th>
            <th>Date de création</th>
            <th>Date de modification</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-base-200 hover:bg-izzup-primary hover:text-izzup-black" v-for="user in users" :key="user">
            <th>{{user.id}}</th>
            <td>{{user.email}}</td>
            <td>{{user.first_name}}</td>
            <td>{{user.last_name}}</td>
            <td>{{user.date_of_birth}}</td>
            <td>{{user.role}}</td>
            <td>{{user.created_at}}</td>
            <td>{{user.updated_at}}</td>
            <td class="w-10">
              <button type="button" class="btn btn-circle" v-on:click="openModal(user)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
              </button>
            </td>
            <td class="w-10">
              <button type="button" class="btn btn-circle" v-on:click="openCheckModal(user)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
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