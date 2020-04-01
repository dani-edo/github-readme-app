<template>
  <b-container class="hello">
    <img alt="Vue logo" class="vue-logo" src="../assets/logo.png" />
    <form role="group" @submit.prevent="handleSubmit">
      <label for="input-live">Github Username</label>
      <b-form-input
        id="input-live"
        v-model="name"
        placeholder="Enter username"
        trim
      ></b-form-input>

      <b-form-invalid-feedback class="d-block" v-if="error">
        User not found
        <br />
        {{ error }}
      </b-form-invalid-feedback>

      <b-button type="submit" class="button--green mt-3">
        Search
      </b-button>
    </form>
  </b-container>
</template>

<script>
import axios from "../plugins/axios";

export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      error: ""
    };
  },
  methods: {
    handleSubmit() {
      axios
        .get("users/" + this.name)
        .then(() => {
          this.$router.push("/detail/" + this.name);
        })
        .catch(error => {
          console.log(error);
          this.error = error;
        });
    }
  }
};
</script>
