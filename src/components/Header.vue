<template>
  <header>
    <div class="m-auto">
      <div class="container">
        <Logo />
        <NavBar />
      </div>
      <div class="container ui">
        <HeaderInfo />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'
import NavBar from './NavBar.vue'
import HeaderInfo from './HeaderInfo.vue'

export default {
  name: 'HeaderElement',
  components: {
    Logo,
    NavBar,
    HeaderInfo,
  },
}
</script>

<style scoped>
header .m-auto {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: 50;
}
.container {
  display: flex;
  align-items: center;
  gap: 24px;
}

@media screen and (min-width: 996px) {
  header .m-auto {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
