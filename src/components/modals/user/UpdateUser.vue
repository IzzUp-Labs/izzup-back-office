<script setup lang="ts">

  import UserInfoModel from "../../../models/user-info.model.ts";
  import {ref, watch} from "vue";
  import {RoleEnum} from "../../../models/role-enum.ts";

  const props = defineProps<{
    selected_user: UserInfoModel
  }>()

  const userModification = ref<UserInfoModel>(props.selected_user);
  const isUpdated = ref<boolean>(false);

  function checkAdmin(): boolean {
    return userModification.value.role === RoleEnum.ADMIN;
  }


  // watch if the userModification change and change the isUpdated value
  watch(userModification, () => {
    isUpdated.value = true;
  }, {deep: true});

  const emit = defineEmits<{
    close: () => void,
    update: [value: UserInfoModel]
  }>()
</script>

<template>
  <dialog>
    <div>
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">Modification de l'utilisateur</h3>
        <div>
          <label class="label">
            <span class="label-text">Email :</span>
          </label>
          <input type="text" class="input input-bordered input-accent w-full max-w-xs" v-model="userModification.email" v-bind:disabled="checkAdmin()"/>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Lastname :</span>
          </label>
          <input type="text" class="input input-bordered input-accent w-full max-w-xs" v-model="userModification.last_name" v-bind:disabled="checkAdmin()"/>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Firstname :</span>
          </label>
          <input type="text" class="input input-bordered input-accent w-full max-w-xs" v-model="userModification.first_name" v-bind:disabled="checkAdmin()"/>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Photo de profile :</span>
          </label>
          <input type="file" class="file-input file-input-bordered file-input-accent w-full max-w-xs" v-bind:disabled="checkAdmin()"/>
        </div>
        <div class="modal-action">
          <button class="btn btn-error" v-on:click="emit('close');">Close</button>
          <button class="btn btn-accent" v-on:click="emit('update', userModification);" v-bind:disabled="!isUpdated">Modifier</button>
        </div>
      </form>
    </div>
  </dialog>
</template>

<style scoped>

</style>