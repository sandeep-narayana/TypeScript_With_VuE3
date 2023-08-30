<template>
  <div>
    <h1>Hello, I am Parent Component</h1>
    <!-- the error is for all other things which should be declare in store -->
    <!-- it is working fine -->
    <!-- it will be available to all the components -->
    <p>{{ $store.state.storeName }}</p>
    <button v-on:click="newStoreName()">Change Store Name</button>
    <Child />

  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "FirstComponent",
  components: {
    Child,
  },
  methods:{
    newStoreName(){
      // state is name of method otherwise it will not work , payload is the name you want to change into
      this.$store.commit('setStoreName','NewStoreName');
    }
  }
};
</script>
