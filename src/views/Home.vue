<script lang="ts" setup>
import QuickStat from "../components/QuickStat.vue";
import {onBeforeMount, ref} from "vue";
import LocationService from "../services/location.service.ts";
import LocationModel from "../models/location.model.ts";

const center = { lat: 48.85785247912768, lng: 2.3432708128314026 };
const locationsWithRelation = ref<LocationModel[]>([]);
const markers = [];

onBeforeMount(async () => {
    await LocationService.getAllLocations().then((res) => {
      locationsWithRelation.value = res;
    });
    // adding the locations to the map
    locationsWithRelation.value.forEach((location) => {
      markers.push({ lat: location.latitude, lng: location.longitude });
    });
});
</script>

<template>
  <div class="grid justify-center">
    <QuickStat></QuickStat>
    <div class="pt-10">
      <GMapMap
          :center="center"
          :zoom="7"
          map-type-id="terrain"
          style="width: 500px; height: 300px">
      </GMapMap>
    </div>
  </div>
</template>

<style scoped>

</style>
