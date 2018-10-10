<template>
<div class="page">
<form
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul id="ul-error">
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
  </p>

  <p>
      <label for="grade">Grade</label>
      <select
        id="grade"
        v-model="grade"
        name="grade"
      >
        <option value="chef">Chef</option>
        <option value="detective">Detective</option>
        <option value="agent" selected>Agent</option>
      </select>
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
    <label for="rePassword">Confirm password</label>
    <input
      id="rePassword"
      v-model="rePassword"
      type="password"
      name="rePassword"
    >
  </p>


  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</div>
</template>

<script>
export default {
  data() {
    return {
    errors: [],
    grade: null,
    email: null,
    password: null,
    rePassword: null
    }
  },
  methods:{
    checkForm(e) {
      if (this.grade && this.email && this.password && this.rePassword) {

        if (this.password != this.rePassword) {
          this.errors.push('Passwords must be the same');
          e.preventDefault();
          return false;
        }
        return true;
      }

      this.errors = [];

      if (!this.grade) {
        this.errors.push('Grade required.');
      }
      if (!this.email) {
        this.errors.push('Email required.');
      }
      if (!this.password) {
        this.errors.push('Password required.');
      }
      if (!this.rePassword) {
        this.errors.push('Confirm password required.');
      }

      e.preventDefault();
    }
  }
}
</script>
