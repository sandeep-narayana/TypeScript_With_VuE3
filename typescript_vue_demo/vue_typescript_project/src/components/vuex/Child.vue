<template>
  <div>
    <h1>Child Component</h1>
     <p>{{ $store.state.storeName }}</p>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
};
</script>
