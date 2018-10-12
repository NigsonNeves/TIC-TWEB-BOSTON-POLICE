<template>
<div class="page">

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul id="ul-error">
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
  </p>

  <p v-if="success.length">
    <b>Congrats</b>
    <ul id="ul-success">
      <li v-for="suc in success" :key="suc.id">{{ suc }}</li>
    </ul>
  </p>

<b-form-select v-model="grade" name="grade" id="grade" :options="options">
</b-form-select>
<br>
<div>
  <b-input-group prepend="Email" >
    <b-form-input
    id="email"
    v-model="email"
    type="text"
    name="email"></b-form-input>
  </b-input-group>
</div>
<br>
<div>
  <b-input-group prepend="Password">
    <b-form-input
    id="password"
    v-model="password"
    type="password"
    name="password"></b-form-input>
  </b-input-group>
</div>
<br>
<div>
  <b-input-group prepend="Confirm password">
    <b-form-input
    id="rePassword"
    v-model="rePassword"
    type="password"></b-form-input>
  </b-input-group>
</div>
<br>

  <p>
    <b-button @click="postInscription" >Submit </b-button>
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
    grade: null,
    email: null,
    password: null,
    rePassword: null,
    selected: ['agent'],
      options: [
        { value: 'agent', text: 'Agent' },
        { value: 'detective', text: 'Detective' },
        { value: 'chef', text: 'Chef' }
      ]
    }
  },
  
  methods:{
    postInscription(e) {
      this.errors = [];
      this.success = [];
      if (this.grade && this.email && this.password && this.rePassword) {

        if (this.password != this.rePassword) {
          this.errors.push('Passwords must be the same');
          e.preventDefault();
          return false;
        }
        axios.post("http://localhost:8080/api/users", querystring.stringify({
          grade: this.grade,
          email: this.email,
          password: this.password
        }))
        .then(response => {
          this.success.push("Inscription successfull, you should wait until confirmation")
        })
        .catch(err => {
          this.errors.push(err.response.data);
          e.preventDefault();
          return false;
        })
        return true;
      }

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
