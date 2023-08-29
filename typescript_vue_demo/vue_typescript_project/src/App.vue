<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="app">
    <p>{{ this.name }} {{ age }}</p>
    <button v-on:click="changeName('zelda')">Change Name</button>
    <button v-on:click="changeAge(55)">Change Name</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const state = reactive({
      name: "",
      age: 25 as number | string,
    });
    return { ...toRefs(state) };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
      return name;
    },
    changeAge(age: number) {
      this.age = age;
      return age;
    },
  },
});
</script>

<style>
</style>
