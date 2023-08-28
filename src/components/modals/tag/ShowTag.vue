<script setup lang="ts">
  import ExtraTagModel from "../../../models/extra-tag.model.ts";
  import {ref, watch} from "vue";

  const props = defineProps<{
    selected_tag: ExtraTagModel
  }>()

  const tagModification = ref<ExtraTagModel>(props.selected_tag);
  const isUpdated = ref<boolean>(false);

  const emit = defineEmits<{
    close: () => void,
    update: [value: ExtraTagModel],
    delete: [id: number]
  }>()

  watch(tagModification, () => {
    isUpdated.value = true;
    console.log(tagModification.value)
  }, {deep: true});

</script>

<template>
  <dialog class="modal">
    <form method="dialog" class="modal-box">
      <div class="flex mb-5">
        <h2>Prévisualisation : </h2>
        <div class="badge badge-neutral ms-5" :style="{'background-color':tagModification.color}">{{tagModification.name}}</div>
      </div>
      <div class="flex">
        <label class="label">
          <span class="label-text">Couleur :</span>
        </label>
        <input type="color" v-model="tagModification.color"/>
      </div>
      <div class="flex">
        <label class="label">
          <span class="label-text">Nom du tag :</span>
        </label>
        <input type="text" class="input input-bordered input-accent w-full max-w-xs" v-model="tagModification.name"/>
      </div>
      <div class="modal-action">
        <button class="btn" v-on:click="emit('close')">Close</button>
        <button class="btn btn-error" v-on:click="emit('delete', tagModification.id)">Supprimer</button>
        <button class="btn btn-accent" v-on:click="emit('update', tagModification)" v-bind:disabled="!isUpdated">Modifier</button>
      </div>
    </form>
  </dialog>
</template>

<style scoped>

</style>