<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
  import CompanyModel from "../models/company.model.ts";
  import CompanyService from "../services/company.service.ts";

  const companyList = ref<CompanyModel[]>([]);
  const selectedCompany = ref<CompanyModel>();

  onBeforeMount(async () => {
    companyList.value = await CompanyService.findAll();
  });
</script>

<template>
  <div class="grid justify-center">
    <div>
      <select class="select select-accent w-full max-w-xs" v-model="selectedCompany">
        <option disabled selected>Select a company ?</option>
        <option v-for="company in companyList" >{{company.name}}</option>
      </select>
    </div>
  </div>
  <div v-if="selectedCompany">
    <div class="collapse bg-base-200" v-for="jobOffer in selectedCompany.jobOffers">
      <input type="checkbox" class="peer" />
      <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Click me to show/hide content
      </div>
      <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>hello</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>