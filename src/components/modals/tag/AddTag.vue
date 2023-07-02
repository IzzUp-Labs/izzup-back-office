<script setup lang="ts">
  import ExtraTagModel from "../../../models/extra-tag.model.ts";
  import {ref} from "vue";

  const newTag = ref<ExtraTagModel>({
    id: 0,
    name: "",
    color: "#000000",
  });

  const emit = defineEmits<{
    close: () => void,
    create: [value: ExtraTagModel],
  }>()
</script>

<template>
  <dialog class="modal">
    <form method="dialog" class="modal-box">
      <div class="flex mb-5">
        <h2>Prévisualisation : </h2>
        <div class="badge badge-neutral ms-5" :style="{'background-color':newTag.color}">{{newTag.name}}</div>
      </div>
      <div class="flex">
        <label class="label">
          <span class="label-text">Couleur :</span>
        </label>
        <input type="color" v-model="newTag.color"/>
      </div>
      <div class="flex">
        <label class="label">
          <span class="label-text">Nom du tag :</span>
        </label>
        <input type="text" class="input input-bordered input-accent w-full max-w-xs" v-model="newTag.name"/>
      </div>
      <div class="modal-action">
        <button class="btn" v-on:click="emit('close')">Close</button>
        <button class="btn btn-accent" v-on:click="emit('create', newTag)">Créer</button>
      </div>
    </form>
  </dialog>
</template>

<style scoped>

</style>