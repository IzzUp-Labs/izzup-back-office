<script setup lang="ts">
  import {onBeforeMount, ref} from "vue";
  import CompanyModel from "../models/company.model.ts";
  import CompanyService from "../services/company.service.ts";
  import ShowJobOffers from "../components/modals/company/ShowJobOffers.vue";
  import JobOfferModel from "../models/job-offer.model.ts";

  const companyList = ref<CompanyModel[]>([]);
  const jobOffers = ref<JobOfferModel[]>();
  const showModal = ref(false)

  onBeforeMount(async () => {
    companyList.value = await CompanyService.findAll();
  });

  async function openModal(company: CompanyModel){
    jobOffers.value = company.jobOffers;
    showModal.value = !showModal.value;
  }
</script>

<template>
  <ShowJobOffers v-if="showModal" class="modal" :class="{ 'modal-open': showModal }" :job_offers="jobOffers" @close="showModal = false"></ShowJobOffers>
  <div v-if="companyList.length > 0">
    <div class="overflow-auto pt-10" style="height: 80vh;">
      <table class="table table-xs">
        <!-- head -->
        <thead>
        <tr class="">
          <th>#</th>
          <th>Adresse</th>
          <th>Nom</th>
          <th>Place ID</th>
          <th>Employeur de la société</th>
          <th>Location</th>
          <th>Les offres d'emploi</th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-base-200 hover:bg-izzup-primary hover:text-izzup-black" v-for="company in companyList" :key="company">
          <th>{{company.id}}</th>
          <td>{{company.address}}</td>
          <td>{{company.name}}</td>
          <td>{{company.place_id}}</td>
          <td>{{company.employer.user.first_name}} {{company.employer.user.last_name}}</td>
          <td>
            <button class="btn btn-outline">
              <a :href="`https://www.google.com/maps/place/?q=place_id:${company.place_id}`" target="_blank" rel="noopener noreferrer">Voir sur GoogleMap</a>
            </button>
          </td>
          <td>
            <button class="btn btn-outline" v-bind:disabled="company?.jobOffers?.length <= 0" v-on:click="openModal(company)">
              Voir les offres
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>