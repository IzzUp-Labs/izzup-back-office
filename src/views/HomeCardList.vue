<script setup lang="ts">
  import HomeCardModel from "../models/home-card.model.ts";
  import {onBeforeMount, ref} from "vue";
  import cardService from "../services/card.service.ts";
  import RemoveCheck from "../components/modals/RemoveCheck.vue";
  import AddHomeCard from "../components/modals/home-card/AddHomeCard.vue";

  const homeCardList = ref<HomeCardModel[]>([]);
  const selectedCard = ref<HomeCardModel>();

  const showCheckModal = ref(false)
  const showAddModal = ref(false)

  onBeforeMount(async () => {
    homeCardList.value = await cardService.findAll();
  });

  function openCheckModal(card: HomeCardModel){
    selectedCard.value = {...card};
    showCheckModal.value = !showCheckModal.value;
  }

  function openAddModal(){
    showAddModal.value = !showAddModal.value;
  }

  function removeCard(cardId: number){
    showCheckModal.value = false;
    cardService.remove(cardId).then(() => {
      window.location.reload();
    });
  }

  function createCard(card: HomeCardModel){
    showAddModal.value = false;
    cardService.create(card);
  }
</script>

<template>
  <RemoveCheck v-if="showCheckModal" class="modal" :class="{ 'modal-open': showCheckModal }" :element="selectedCard" @remove="(id) => removeCard(id)" @pass="showCheckModal = false"></RemoveCheck>
  <AddHomeCard v-if="showAddModal" class="modal" :class="{ 'modal-open': showAddModal }" @close="showAddModal = false" @create="(card) => createCard(card)"></AddHomeCard>
  <div class="flex justify-center">
    <h2 class="text-3xl font-bold">Liste des cartes</h2>
  </div>
  <div class="flex justify-center pt-2">
    <button class="btn btn-outline btn-accent" v-on:click="openAddModal">Ajouter une carte</button>
  </div>
  <div class="grid grid-cols-4 gap-4 pt-5">
    <div class="card card-compact w-96 bg-base-100 shadow-xl" v-for="card in homeCardList">
      <figure><img :src="card.photo" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">{{card.title}}</h2>
        <p>{{ card.description }}</p>
        <div class="card-actions justify-center">
          <button class="btn btn-error" v-on:click="openCheckModal(card)">Supprimer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>