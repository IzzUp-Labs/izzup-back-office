<script setup lang="ts">

import {onBeforeMount, ref} from "vue";
import ExtraTagModel from "../models/extra-tag.model.ts";
import TagService from "../services/tag.service.ts";
import ShowTag from "../components/modals/tag/ShowTag.vue";
import AddTag from "../components/modals/tag/AddTag.vue";

  const tags = ref<ExtraTagModel[]>([]);
  const showModal = ref<boolean>(false);
  const showAddModal = ref<boolean>(false);
  const selectedTag = ref<ExtraTagModel>();

  onBeforeMount(async () => {
    tags.value = await TagService.findAll();
  });

  function openModal(tag: ExtraTagModel){
    selectedTag.value = {...tag};
    showModal.value = !showModal.value;
  }

  function updateTag(updatedTag: ExtraTagModel){
    console.log(updatedTag)
  }

  function addTag(newTag: ExtraTagModel){
    console.log(newTag)
  }
</script>

<template>
  <ShowTag v-if="showModal" class="modal" :class="{ 'modal-open': showModal }" :selected_tag="selectedTag" @close="showModal = false" @update="(updatedTag) => updateTag(updatedTag)"></ShowTag>
  <AddTag v-if="showAddModal" class="modal" :class="{ 'modal-open': showAddModal }" @close="showAddModal = false" @create="(newTag) => addTag(newTag)"></AddTag>
  <div v-if="tags.length > 0">
    <div class="flex justify-center pb-5">
      <h2 class="text-3xl font-bold">Liste des Tags</h2>
    </div>
    <div class="flex justify-center pt-2">
      <button class="btn btn-outline btn-accent" v-on:click="showAddModal = true">Ajouter un tag</button>
    </div>
    <div class="overflow-auto" style="height: 80vh;">
      <table class="table table-xs">
        <!-- head -->
        <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Couleur</th>
          <th>Apercu</th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-base-200 hover:bg-izzup-primary hover:text-izzup-black" v-for="tag in tags" :key="tag" v-on:click="openModal(tag)">
          <th>{{tag.id}}</th>
          <td>{{tag.name}}</td>
          <td>{{tag.color}}</td>
          <td>
            <div class="badge" :style="{'background-color':tag.color}">{{tag.name}}</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else class="flex justify-center">
    <h1 class="text-5xl font-bold">Aucun Tag</h1>
  </div>
</template>

<style scoped>

</style>