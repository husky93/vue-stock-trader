<template>
  <header>
    <div class="m-auto">
      <div class="container">
        <Logo />
        <NavBar />
      </div>
      <div class="container ui"></div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'
import NavBar from './NavBar.vue'

export default {
  name: 'HeaderElement',
  components: {
    Logo,
    NavBar,
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.container {
  display: flex;
  align-items: center;
}
.link {
  text-decoration: none;
}
</style>
