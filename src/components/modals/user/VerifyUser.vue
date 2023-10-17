<script setup lang="ts">

  import UserInfoModel from "../../../models/user-info.model.ts";
  import {ref} from "vue";

  const props = defineProps<{
    selected_user: UserInfoModel
  }>()
  const isChecked = ref<boolean>(false);

  const emit = defineEmits<{
    close: () => void,
    verify: [value: string],
    unverify: [value: string]
  }>()

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    // Then specify how you want your dates to be formatted
    return new Intl.DateTimeFormat('default', {dateStyle: 'full', timeStyle: "short"}).format(date);
  }
</script>

<template>
  <dialog class="modal">
    <div class="grid">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">Informations de vérification :</h3>
        <p class="py-2">L'utilisateur {{ selected_user.first_name }} {{selected_user.last_name}} née le {{selected_user.date_of_birth}} et inscrit le {{formatDate(selected_user.created_at.toString())}}
          avec le role {{selected_user.role}} souhaite être vérifié.
        </p>
        <p>Veuillez vérifier sa pièce d'identitée ci-dessous avec les informations de son compte :</p>
        <div class="container flex flex-col items-center">
          <button class="btn btn-warning mt-5" onclick="id_card.showModal()" v-on:click="isChecked = true">Voir la pièce d'identitée</button>
        </div>
        <div class="flex m-5">
          <button class="btn btn-accent" v-bind:disabled="!isChecked" v-on:click="emit('verify', selected_user.id)">Valider le compte</button>
          <button class="btn btn-error ms-5" v-bind:disabled="!isChecked" v-on:click="emit('unverify', selected_user.id)">Ne pas valider le compte</button>
        </div>
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