<template>
  <div>
    <h1>Child Component</h1>
    <p>{{ $store.state.storeName }}</p>

    <!-- getter -->
    <!-- useGetter will pring the written value -->
    <p>{{ useGetter }} from getters</p>
    <p>{{useNewGetter}} getter calling getter</p>

<!-- showing state uisng mapState -->
    {{xyz}} using mapState 
    <p>{{key}} using mapGetter</p>
    <button @click="changeName({title:`change in storename using action`})">
      Change name using mapAction
    </button>
  </div>
</template>

<script>
import {mapState,mapGetters, mapActions } from "vuex";
export default {
  name: "ChildComponent",
  computed:{
    ...mapState({
      xyz:(state)=>state.storeName
    }),

    ...mapGetters({
      key:'hashAdd'
    }),

    useGetter(){
      return this.$store.getters.hashAdd
    },
    // call another getter from one getter
   useNewGetter(){
      return this.$store.getters.hashNewAdd;
    },
  },
  methods: {
    ...mapActions(["newTitle"]),
    changeName(payload) {
      this.newTitle(payload);
    }
  }
};
</script>
