<template>
  <Header />
  <Goal />
  <router-view />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Goal from './components/Goal.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Goal,
    Footer,
  },
}
</script>

<style>
body {
  margin: 0;
}
main {
  text-align: left;
  flex: 1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.m-auto {
  max-width: 1344px;
  margin: 0 auto;
  width: 100%;
}
</style>
