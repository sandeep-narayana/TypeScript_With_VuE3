<template>
  <div>
    <h1>Hello, I am Parent Component</h1>
    <!-- the error is for all other things which should be declare in store -->
    <!-- it is working fine -->
    <!-- it will be available to all the components -->
    <p>{{ $store.state.storeName }}</p>
    <Child />
  </div>s
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "FirstComponent",
  components: {
    Child,
  },
};
</script>
