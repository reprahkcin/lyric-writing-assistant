<template>
  <div class="container mt-3">
    <ActivityView />
  </div>
</template>

<script>
import ActivityView from "@/views/ActivityView.vue";

export default {
  name: "App",
  components: {
    ActivityView,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
