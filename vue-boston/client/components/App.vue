<template>
  <div id="app">
  <Header></Header>
  <router-view></router-view>
  </div>
</template>

<script>
import Header from './shared/Header'
export default {
  components: {
    Header
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


<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
  /* nesting for the need to test postcss */
}
#ul-error {
  list-style: none;
  border: 1px solid red;
  width: 50%;
  padding: 10px;
  margin: 10px auto;
}

#ul-success {
  list-style: none;
  border: 1px solid green;
  width: 50%;
  padding: 10px;
  margin: 10px auto;
}
</style>
