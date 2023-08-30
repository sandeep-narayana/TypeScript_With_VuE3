<template>
  <div class="app">
    <header class="header">
      <div class="order">
        <button @click="handleClick('title')" class="button">
          Order by title
        </button>
        <button @click="handleClick('salary')" class="button">
          Order by salary
        </button>
        <button @click="handleClick('location')" class="button">
          Order by location
        </button>
      </div>
    </header>

    <JobsList :jobs="jobs" :order="order" />
  </div>

  <!-- State management -->
  <First />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import Job from "@/types/job";
import JobsList from "./components/JobsList.vue";
import OrderTerm from "./types/OrderTerm";
import First from "./components/vuex/First.vue";

export default defineComponent({
  name: "App",
  components: {
    JobsList,
    First,
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

    // initial order
    const order = ref<OrderTerm>("location");
    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };
    return { jobs, handleClick, order };
  },
});
</script>

<style scoped>
.header {
  background-color: #3498db;
  padding: 20px;
  text-align: center;
}

.order {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.button {
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #27ae60;
}
</style>
