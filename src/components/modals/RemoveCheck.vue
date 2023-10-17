<script setup lang="ts">


  const props = defineProps<{
    element: any
  }>()
  const emit = defineEmits<{
    pass: () => void,
    remove: [value: string]
  }>()
</script>

<template>
  <dialog class="modal">
    <form method="dialog" class="modal-box">
      <h3 class="font-bold text-lg text-error">ATTENTION !!</h3>
      <p class="py-4">Êtes vous sûr(e) de vouloir supprimer cet élement !</p>
      <div class="modal-action">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn justify-start" v-on:click="emit('pass')">Non</button>
        <button class="btn btn-error justify-end" v-on:click="emit('remove', element.id)">Oui</button>
      </div>
    </form>
  </dialog>
</template>

<style scoped>

</style>