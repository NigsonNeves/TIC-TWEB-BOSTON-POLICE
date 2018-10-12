<template>
  <div class="page">
      <logo></logo>
      <div v-if="!email || !password">
        <a href="/connexion"><b-button>Connexion</b-button></a>
        <a href="/inscription"><b-button>Inscription</b-button></a>
      </div>
      <div v-if="(email && password) && email.length && password.length">
        <a @click="$store.commit('signout')"><b-button class="btn btn-default">Deconnexion</b-button></a>
      </div>
  </div>
</template>

<script>
import Logo from 'components/form/Logo'

export default {
  components: {
    Logo
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
    }
  },
}
</script>
