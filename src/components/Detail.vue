<template>
  <b-container class="hello">
    <label for="input-live" class="mb-3"
      ><h2>{{ $route.params.id }} repository</h2></label
    >
    <b-container v-for="(data, key) in repos" :key="key" class="mb-3">
      <b-link :to="$route.params.id + '/' + data.name">
        <b-alert show variant="primary">{{ data.name }}</b-alert>
      </b-link>
    </b-container>
    <b-button to="/" class="home-button">Home</b-button>
  </b-container>
</template>

<script>
import axios from "../plugins/axios";

export default {
  name: "Detail",
  data() {
    return {
      repos: []
    };
  },
  computed: {
    user() {
      return this.$route.params.id;
    }
  },
  mounted() {
    return this.loadRepos();
  },
  methods: {
    loadRepos() {
      axios
        .get("users/" + this.user + "/repos")
        .then(response => {
          this.repos = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.alert:hover {
  box-shadow: 0px 7px 7px -2px #00000021;
}
</style>
