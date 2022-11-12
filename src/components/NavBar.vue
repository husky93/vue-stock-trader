<template>
  <nav>
    <router-link to="/portfolio" class="link">Portfolio</router-link>
    <router-link to="/stocks" class="link">Stocks</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>
.link {
  text-decoration: none;
}
</style>
