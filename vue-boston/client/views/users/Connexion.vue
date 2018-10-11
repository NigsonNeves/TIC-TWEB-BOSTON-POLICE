<template>
<div class="page">
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul id="ul-error">
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      type="text"
      name="email"
    >
  </p>
  <p>
    <label for="password">Password</label>
    <input
      id="password"
      v-model="password"
      type="password"
      name="password"
    >
  </p>


  <p>
    <input
      type="button"
      value="Submit"
      @click="postConnexion"
    >
  </p>

</div>
</template>

<script>
import axios from 'axios';
import querystring from 'querystring'

export default {
  data() {
    return {
    errors: [],
    success: [],
    email: null,
    password: null
    }
  },
  methods:{
    postConnexion(e) {
      this.errors = [];
      if (this.email && this.password) {
        axios.post("http://localhost:8080/api/users/verif", querystring.stringify({
          email: this.email,
          password: this.password
        }))
        .then(response => {
          const data = JSON.parse(response.data.data)
          const email = data.email;
          const grade = data.grade;
          const password = data.password;
          const id = data.id;
          this.$store.commit('authenticate', {
              email,
              grade,
              password,
              id
          });
          this.$router.push({ name: "home"});
        })
        .catch(err => {
          this.errors.push(err);
          e.preventDefault();
          return false;
        })
        return true;
      }
      if (!this.email) {
        this.errors.push('Email required.');
      }
      if (!this.password) {
        this.errors.push('Password required.');
      }

      e.preventDefault();
    }
  }
}
</script>
