<script setup lang="ts">

  import JobOfferModel from "../../../models/job-offer.model.ts";

  const props = defineProps<{
    job_offers: JobOfferModel[]
  }>()

  const emit = defineEmits<{
    close: () => void,
  }>()

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    // Then specify how you want your dates to be formatted
    return new Intl.DateTimeFormat('default', {dateStyle: 'full', timeStyle: "short"}).format(date);
  }
</script>

<template>
  <dialog class="modal">
    <form method="dialog" class="modal-box">
      <div>
        <div class="card card-compact" v-for="jobOffer in job_offers" :key="jobOffer">
          <div class="divider">{{ jobOffer.job_title }}</div>
          <div class="card-body">
            <p>Description : {{ jobOffer.job_description }}</p>
            <p>L'offre est de {{ jobOffer.price }}€ de l'heure</p>
            <p>Est-elle encore disponible : {{ jobOffer.is_available? "Oui" : "Non" }}</p>
            <p>Date de début : {{ formatDate(jobOffer.starting_date) }}</p>
            <p>Pour une durée de {{ jobOffer.working_hours }} heure(s)</p>
            <p>Actuellement {{jobOffer.acceptedSpots}} place(s) acceptée sur {{ jobOffer.spots }} place(s)</p>
          </div>
        </div>
      </div>
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" v-on:click="emit('close')">✕</button>
    </form>
  </dialog>
</template>

<style scoped>

</style>