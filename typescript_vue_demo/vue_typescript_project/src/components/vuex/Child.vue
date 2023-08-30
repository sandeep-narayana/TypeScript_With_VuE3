<template>
  <div>
    <h1>Child Component</h1>
    <p>{{ $store.state.storeName }}</p>

    <!-- getter -->
    <!-- useGetter will pring the written value -->
    <p>{{ useGetter }} from getters</p>
    <p>{{useNewGetter}} getter calling getter</p>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  computed:{
    useGetter(){
      return this.$store.getters.hashAdd
    },
    // call another getter from one getter
     useNewGetter(){
      return this.$store.getters.hashNewAdd
    }
  }
};
</script>
