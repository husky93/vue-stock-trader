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

<style scoped>
nav {
  display: flex;
  gap: 24px;
}
.link {
  color: var(--secondary-color);
  font-weight: 500;
  text-decoration: none;
  transition: color 150ms;
}
.link:hover {
  color: var(--primary-color);
}
</style>
