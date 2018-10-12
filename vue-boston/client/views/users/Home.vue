<template>
  <div class="page">
      <logo></logo>
      <div v-if="!isLogin">
        <a href="/connexion"><b-button>Connexion</b-button></a>
        <a href="/inscription"><b-button>Inscription</b-button></a>
      </div>
      <div v-if="isLogin">
        <a @click="$store.commit('signout')"><b-button class="btn btn-default">Deconnexion</b-button></a>
        <br/><br/>
        <b-table striped hover :fields="fields" :items="crimes">
          <template slot="compnos" slot-scope="data">
            {{ data.value }}
          </template>
          <template slot="naturecode" slot-scope="data">
            {{ data.value }}
          </template>
          <template slot="type" slot-scope="data">
            {{ data.value }}
          </template>
          <template slot="district" slot-scope="data">
            {{ data.value }}
          </template>
          <template slot="fromdate" slot-scope="data">
            {{ data.value }}
          </template>
          <template slot="weapontype" slot-scope="data">
            {{ data.value }}
          </template>
          <template slot="year" slot-scope="data">
            {{ data.value }}
          </template>
          <template slot="month" slot-scope="data">
            {{ data.value }}
          </template>
          <template slot="day" slot-scope="data">
            {{ data.value }}
          </template>
          <template slot="streetname" slot-scope="data">
            {{ data.value }}
          </template>
          <template slot="id" slot-scope="data">
            <b-button v-on:click="deleteCrime(data.value)">Valid</b-button>
          </template>
        </b-table>
      </div>
    </div>  
</template>

<script>
import Logo from 'components/form/Logo'
import axios from 'axios';
import querystring from 'querystring'

export default {
  components: {
    Logo
  },

  data() {
    return {
    errors: [],
    success: [],
    crimes: null,
    fields: [
        { key: 'compnos', label: 'Compnos' },
        { key: 'naturecode', label: 'Nature code' },
        { key: 'type', label: 'Type' },
        { key: 'district', label: 'District' },
        { key: 'fromdate', label: 'Date' },
        { key: 'weapontype', label: 'Weapon type' },
        { key: 'year', label: 'Year' },
        { key: 'month', label: 'Month' },
        { key: 'day', label: 'Day' },
        { key: 'streetname', label: 'Streetname' },
      ],
    crimes: [
    ]
    }
  },

  computed: {
    email() {
      return this.$store.state.email
    },
    password() {
      return this.$store.state.password
    },
    grade() {
      return this.$store.state.grade
    },
    isLogin() {
      return this.$store.state.isLogin
    }
  },

  mounted:function(){
    this.getCrimes()
  },

  methods:{
    getCrimes:function() {
      axios.get(`http://localhost:8080/crimes`)
      .then(response => {
        console.log(response)
        const data = JSON.parse(response.data.data)
        this.crimes = [];
        data.forEach(crimes => {
          console.log(crimes);
            this.crimes.push({ compnos: crimes.compnos, naturecode: crimes.naturecode, type: crimes.weapontype, district: crimes.reptdistrict,
            fromdate: crimes.fromdate,weapontype: crimes.weapontype, year: crimes.year,month: crimes.month,day: crimes.day_week,streetname: crimes.streetname, id: crimes.id});
        });
      })
      .catch(err => {
        console.log(err)
        this.errors.push(err.response.data)
      })
    },

    deleteCrime:function(id) {
    },
  }

}
</script>
