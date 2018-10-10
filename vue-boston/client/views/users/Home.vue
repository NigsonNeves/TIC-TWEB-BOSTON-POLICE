<template>
  <div class="page">
    <p>
      <logo></logo>
      <a href="/connexion"><button>Connexion</button></a>
      <a href="/inscription"><button>Inscription</button></a>
    </p>
  </div>
</template>

<script>
import Logo from 'components/form/Logo'

export default {
  components: {
    Logo
  }
}
</script>
