<template>
  <main class="home m-auto">
    <h3>Home</h3>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main.home::before {
  --radial-bg-primary: #904c77;
  --radial-bg-secondary: #7189ff;
  --radial-bg-tetriary: #00a7e1;
  background: radial-gradient(
      400px circle at calc(100% - var(--page-edge) - 10%) 55%,
      var(--radial-bg-primary),
      70%,
      transparent
    ),
    radial-gradient(
      400px circle at 50% 40%,
      var(--radial-bg-secondary),
      60%,
      transparent
    ),
    radial-gradient(
      350px circle at calc(var(--page-edge) + 15%) 50%,
      var(--radial-bg-tetriary),
      60%,
      transparent
    );
}
</style>
