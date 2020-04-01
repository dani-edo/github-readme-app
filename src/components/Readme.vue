<template>
  <div>
    <b-container>
      <h1>{{ repo }} Project Readme</h1>
      <h5>cool project by {{ user }}</h5>
      <vue-simple-markdown :source="data_readme"></vue-simple-markdown>
      <b-button to="/" class="home-button">Home</b-button>
    </b-container>
  </div>
</template>

<script>
import axios from "../plugins/axios";

export default {
  name: "Readme",
  data() {
    return {
      user: this.$route.params.id,
      repo: this.$route.params.repo,
      download_url: "",
      data_readme: ""
    };
  },
  mounted() {
    return this.loadReadme();
  },
  methods: {
    async loadReadme() {
      await axios
        .get("repos/" + this.user + "/" + this.repo + "/readme")
        .then(response => {
          this.download_url = response.data.download_url;
        })
        .catch(error => {
          console.log(error);
        });
      await axios
        .get(this.download_url)
        .then(response => {
          this.data_readme = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="css" scoped>
.markdown-body {
  text-align: left;
  margin: 30px auto;
  padding: 1rem;
  background: #f3f3f3;
  border-radius: 10px;
}
</style>
