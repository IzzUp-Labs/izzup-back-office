<script setup lang="ts">

  import UserInfoModel from "../../../models/user-info.model.ts";
  import {ref} from "vue";

  const props = defineProps<{
    selected_user: UserInfoModel
  }>()
  const isChecked = ref<boolean>(false);

  const emit = defineEmits<{
    close: () => void,
    verify: [value: number]
  }>()
</script>

<template>
  <dialog class="modal">
    <div class="grid">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">Informations de vérification :</h3>
        <p class="py-2">L'utilisateur {{ selected_user.first_name }} {{selected_user.last_name}} née le {{selected_user.date_of_birth}} et inscrit le {{selected_user.created_at}}
          avec le role {{selected_user.role}} souhaite être vérifié.
        </p>
        <p>Veuillez vérifier sa pièce d'identitée ci-dessous avec les informations de son compte :</p>
        <button class="btn btn-warning mt-5" onclick="id_card.showModal()" v-on:click="isChecked = true">Voir la pièce d'identitée</button>
        <button class="btn btn-accent ms-5" v-bind:disabled="!isChecked" v-on:click="emit('verify', selected_user.id)">Valider le compte</button>
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" v-on:click="emit('close')">✕</button>
      </form>
      <dialog id="id_card" class="modal">
        <form method="dialog" class="modal-box">
          <img :src="selected_user.id_photo">
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </dialog>
</template>

<style scoped>

</style>