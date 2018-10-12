<template>
<div id="header">
    <a href="/"><logoHeader></logoHeader></a>
    <div v-if="isLogin && grade && grade.length && grade == 'chef'">
        <a><b-button class="btn btn-default">Validate user</b-button></a>
    </div>
</div>
</template>

<script>
import LogoHeader from 'components/form/LogoHeader'

export default {
  components: {
    LogoHeader
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
    id() {
      return this.$store.state.id
    },
    isLogin() {
      return this.$store.state.isLogin
    }
  },
}
</script>


<style>
    #header {
        width: 100%;
        padding: 10px;
    }
</style>
