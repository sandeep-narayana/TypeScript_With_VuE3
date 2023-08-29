<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="app">
    <JobsList :jobs="jobs"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import Job from "@/types/job";
import JobsList from "./components/JobsList.vue";

export default defineComponent({
  name: "App",
  components: {
    JobsList,
  },
  setup() {

    const jobs = ref<Job[]>([
      { title: "Farm worker", location: "aerdam", salary: 20400, id: "1" },
      { title: "F worker", location: "amserdam", salary: 2004500, id: "2" },
      { title: "Frm worker", location: "msterdam", salary: 2000450, id: "3" },
      { title: "Fm worker", location: "asterdam", salary: 2000045, id: "4" },
      { title: "arm worker", location: "amerdam", salary: 2000045, id: "5" },
      { title: "rm worker", location: "terdam", salary: 200023460, id: "6" },
    ]);
    return { jobs };
  },
});
</script>

<style>
</style>
