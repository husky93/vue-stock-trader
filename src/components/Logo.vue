<template>
  <router-link to="/" class="link"
    ><img src="../assets/logo.png" alt="Stock Market"
  /></router-link>
</template>

<script>
export default {
  name: 'LogoElement',
}
</script>

<style scoped>
.link {
  text-decoration: none;
}
img {
  width: 120px;
}
</style>
