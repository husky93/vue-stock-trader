<template>
  <main class="home m-auto">
    <h3>Home</h3>
    <div class="content">
      <h4>How to play:</h4>
      <p>
        Buy stocks on the market (if they are priced well), then end the day
        (prices change every day). Check your portfolio and decide if it is
        profitable for you to sell your stocks right now.
      </p>
      <div class="inside">
        <h5>In summary:</h5>
        <ol>
          <li>Buy/sell stocks</li>
          <li>End the day</li>
          <li>Check the prices</li>
          <li>Profit & repeat</li>
        </ol>
      </div>
    </div>
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
  font-weight: 300;
  font-size: 15px;
}

.content {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inside ol {
  text-align: left;
}

h4 {
  font-size: 1.2rem;
}

h5 {
  font-size: 1rem;
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
