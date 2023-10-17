<script setup lang="ts">

  import JobOfferModel from "../../../models/job-offer.model.ts";

  const props = defineProps<{
    job_offers: JobOfferModel[]
  }>()

  const emit = defineEmits<{
    close: () => void,
  }>()
</script>

<template>
  <dialog class="modal">
    <form method="dialog" class="modal-box">
      <div>
        <div class="card card-compact" v-for="jobOffer in job_offers">
          <div class="card-body items-center text-center">
            <h2 class="card-title">{{jobOffer.job_title}}</h2>
            <p>{{ jobOffer.job_description }}</p>
            <p>{{ jobOffer.price }}</p>
            <p>{{ jobOffer.is_available }}</p>
            <p>{{ jobOffer.starting_date }}</p>
            <p>{{ jobOffer.working_hours }}</p>
            <p>{{jobOffer.acceptedSpots}} sur {{ jobOffer.spots }}</p>
          </div>
        </div>
      </div>
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" v-on:click="emit('close')">✕</button>
    </form>
  </dialog>
</template>

<style scoped>

</style>