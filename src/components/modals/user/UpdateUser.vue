<script setup lang="ts">

  import UserInfoModel from "../../../models/user-info.model.ts";
  import {ref, watch} from "vue";
  import {RoleEnum} from "../../../models/enums/role-enum.ts";

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
  <dialog class="modal">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg flex justify-center">Information de l'utilisateur</h3>
        <div class="flex justify-center">
          <div>
            <div>
              <label class="label">
                <span class="label-text">Email :</span>
              </label>
              <input type="text" class="input input-bordered input-accent w-full max-w-xs" disabled v-model="userModification.email"/>
            </div>
            <div>
              <label class="label">
                <span class="label-text">Lastname :</span>
              </label>
              <input type="text" class="input input-bordered input-accent w-full max-w-xs" disabled v-model="userModification.last_name"/>
            </div>
            <div>
              <label class="label">
                <span class="label-text">Firstname :</span>
              </label>
              <input type="text" class="input input-bordered input-accent w-full max-w-xs" disabled v-model="userModification.first_name"/>
            </div>
            <div>
              <label class="label">
                <span class="label-text">Photo de profile :</span>
              </label>
              <div v-if="userModification.photo" class="flex justify-center">
                <label class="btn btn-ghost btn-circle btn-lg avatar" tabindex="0">
                  <div class="avatar placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-auto">
                      <figure><img :src="userModification.photo" alt="badge"/></figure>
                    </div>
                  </div>
                </label>
              </div>
              <div v-else>
                Aucune photo de profile
              </div>
            </div>
            <div class="modal-action flex justify-center">
              <button class="btn btn-error" v-on:click="emit('close');">Close</button>
              <!--          <button class="btn btn-accent" v-on:click="emit('update', userModification);" v-bind:disabled="!isUpdated">Modifier</button>-->
            </div>
          </div>
        </div>
      </form>
  </dialog>
</template>

<style scoped>

</style>