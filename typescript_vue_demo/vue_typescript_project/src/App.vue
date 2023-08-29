<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="app">
    <p>{{ this.name }} {{ age }}</p>
    <button v-on:click="changeName('zelda')">Change Name</button>
    <button v-on:click="changeAge(55)">Change Name</button>
    <p>{{ jobs[0].location }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import Job from "../types/job";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    // const state = reactive({
    //   name: "",
    //   age: 25 as number | string,
    // });
    // return { ...toRefs(state) };

    // const name =  ref("Sandeep");// will return a ref value not the actual value
    // const age = ref<number|string>(50);
    // return {name, age}

    const jobs = ref<Job[]>([
      { title: "Farm worker", location: "aerdam", salary: 20400, id: "1" },
      { title: "F worker", location: "amserdam", salary: 2004500, id: "2" },
      { title: "Frm worker", location: "msterdam", salary: 2000450, id: "3" },
      { title: "Fm worker", location: "asterdam", salary: 2000045, id: "4" },
      { title: "arm worker", location: "amerdam", salary: 2000045, id: "5" },
      { title: "rm worker", location: "terdam", salary: 200023460, id: "6" },
    ]);
    return {jobs};
  },
  methods: {},
});
</script>

<style>
</style>
