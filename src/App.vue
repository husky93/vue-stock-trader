<template>
  <div v-if="$store.state.funds < 1000000">
    <Header />
    <Goal />
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <Footer />
  </div>
  <div v-if="$store.state.funds > 1000000">
    <h1>Congratulations you've won!</h1>
    <p>Refresh the page to start again.</p>
  </div>
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
