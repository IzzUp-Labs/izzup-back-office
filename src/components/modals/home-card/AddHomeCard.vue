<script setup lang="ts">

  import HomeCardModel from "../../../models/home-card.model.ts";
  import {HomepageCardTypeEnum} from "../../../models/enums/homepage-card-type.enum.ts";
  import {ref} from "vue";

  const newCard = ref<HomeCardModel>({
    id: 0,
    title: '',
    description: '',
    link: '',
    type: ''
  })

  function loadFiles(event) {
    newCard.value.photo = event.target.files[0];
    console.log(event.target.files[0]);
  }

  const emit = defineEmits<{
    close: () => void,
    create: [value: HomeCardModel]
  }>()
</script>

<template>
  <dialog id="my_modal_1" class="modal">
    <div>
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">Création d'une carte :</h3>
        <div>
          <label class="label">
            <span class="label-text">Image de la carte :</span>
          </label>
          <input type="file" accept="image/jpeg, image/png" class="file-input file-input-bordered file-input-accent w-full max-w-xs" v-on:change="loadFiles"/>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Titre :</span>
          </label>
          <input type="text" class="input input-bordered input-accent w-full max-w-xs" v-model="newCard.title"/>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Description :</span>
          </label>
          <input type="text" class="input input-bordered input-accent w-full max-w-xs" v-model="newCard.description"/>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Type de carte :</span>
          </label>
          <select class="select select-accent w-full max-w-xs" v-model="newCard.type">
            <option disabled selected>Quel type de carte ?</option>
            <option v-for="type in HomepageCardTypeEnum">{{ type }}</option>
          </select>
        </div>
        <div>
          <label class="label">
            <span class="label-text">URL d'un site si nécessaire :</span>
          </label>
          <input type="text" class="input input-bordered input-accent w-full max-w-xs" v-model="newCard.link"/>
        </div>
        <div class="modal-action">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn" v-on:click="emit('close')">Close</button>
          <button class="btn btn-accent" v-on:click="emit('create', newCard)">Ajouter</button>
        </div>
      </form>
    </div>
  </dialog>
</template>

<style scoped>

</style>