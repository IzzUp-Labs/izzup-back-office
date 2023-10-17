<script setup lang="ts">
  import UserInfoModel from "../models/user-info.model.ts";
  import {ref, watch, onBeforeMount} from "vue";
  import RatingService from "../services/rating.service.ts";
  import ShowStats from "../components/modals/rating/ShowStats.vue";
  import RatingModel from "../models/rating.model.ts";

  const users = ref<UserInfoModel[]>([]);
  const selectedStars = ref<number>(0);
  const showModal = ref(false)
  const selectedUserStats = ref<RatingModel>();

  onBeforeMount(async () => {
    users.value = await RatingService.getUsersByRating(selectedStars.value)
  });

  async function openModal(user: UserInfoModel){
    selectedUserStats.value = await RatingService.getRatingStats(user.id);
    showModal.value = !showModal.value;
  }

  watch(selectedStars, async (newValue) => {
    users.value = await RatingService.getUsersByRating(newValue)
  });
</script>

<template>
  <ShowStats v-if="showModal" class="modal" :class="{ 'modal-open': showModal }" :selected_user_stats="selectedUserStats" @close="showModal = false"></ShowStats>
  <div class="join flex justify-center">
    <button class="join-item btn btn-lg" :class="{'btn-active': selectedStars == 0}" v-on:click="selectedStars = 0">
      0
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
    </button>
    <button class="join-item btn btn-lg" :class="{'btn-active': selectedStars == 1}" v-on:click="selectedStars = 1">
      1
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
    </button>
    <button class="join-item btn btn-lg" :class="{'btn-active': selectedStars == 2}" v-on:click="selectedStars = 2">
      2
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
    </button>
    <button class="join-item btn btn-lg" :class="{'btn-active': selectedStars == 3}" v-on:click="selectedStars = 3">
      3
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
    </button>
    <button class="join-item btn btn-lg" :class="{'btn-active': selectedStars == 4}" v-on:click="selectedStars = 4">
      4
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
    </button>
    <button class="join-item btn btn-lg" :class="{'btn-active': selectedStars == 5}" v-on:click="selectedStars = 5">
      5
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
    </button>
  </div>
  <div v-if="users.length > 0">
    <div class="overflow-auto pt-10" style="height: 80vh;">
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
          <td>
            <button class="btn btn-accent" v-on:click="openModal(user)">
              Voir
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                  <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"/>
                </g>
              </svg>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else class="flex justify-center">
    <h1 class="text-4xl font-bold pt-5">Aucun Utilisateur</h1>
  </div>
</template>

<style scoped>

</style>