
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

  <b-table striped hover :fields="fields" :items="users">
    <template slot="email" slot-scope="data">
      {{ data.value }}
    </template>
    <template slot="grade" slot-scope="data">
      {{ data.value }}
    </template>
    <template slot="valid" slot-scope="data">
      <b-button v-on:click="validUser(data.value.idUser, data.value.idAdmin)">Valid</b-button>
    </template>
  </b-table>

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
    users: null,
    fields: [
        { key: 'email', label: 'Email' },
        { key: 'grade', label: 'Grade' },
        { key: 'valid', label: 'Valid' },
      ],
    users: [
    ]
    }
  },
  mounted:function(){
    this.getUsers()
  },

  methods:{
    getUsers:function() {
      axios.get(`http://localhost:8080/api/users`)
      .then(response => {
        const data = JSON.parse(response.data.data)
        this.users = [];
        data.forEach(user => {
          if (!user.confirmed){
            this.users.push({ email: user.email, grade: user.grade, valid: { idAdmin: this.$store.state.id, idUser: user.id} });
          }
        });
      })
      .catch(err => {
        this.errors.push(err.response.data)
      })
    },
    validUser(idUser, idAdmin){
      this.errors = [];
      axios.put("http://localhost:8080/api/users/validate/" + idUser, querystring.stringify({
        idAdmin: idAdmin
      }))
      .then(response => {
        this.getUsers();
        this.success.push("user validate");
      })
      .catch(err => {
        this.errors.push(err.response.data);
        return false;
      })
      return true;
    }
  }
}
</script>
