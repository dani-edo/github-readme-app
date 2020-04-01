<template>
  <div id="app">
    <router-view>
      <HomePage />
    </router-view>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue-logo {
  width: 100px;
}
.container {
  max-width: 600px !important;
}
a:hover {
  text-decoration: none !important;
}
.home-button {
  position: fixed;
  left: 10px;
  top: 10px;
}
</style>
