<template>
  <div id="app">
    <v-box-output />
  </div>
</template>

<script>
import VBoxOutput from "./components/vBoxOutput.vue";

export default {
  name: "App",
  components: {
    VBoxOutput,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
