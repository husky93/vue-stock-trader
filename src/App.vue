<template>
  <div v-if="$store.state.funds < 1000000" class="main-wrapper">
    <Header />
    <Goal />
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <Footer />
  </div>
  <div v-if="$store.state.funds > 1000000" class="main-wrapper">
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
:root {
  --bg-color: #060606;
  --text-color: #eeeffc;
  --primary-color: #49a078;
  --secondary-color: #216869;
  --danger-color: #c3403e;
  --light-color: #9cc5a1;
  --page-max-width: 1344px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  text-align: left;
}

main::before {
  content: '';
  position: absolute;
  opacity: 0.06;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(0px);
  width: calc(100vw - 50px);
  height: 100vh;
  --page-edge: calc((100vw - var(--page-max-width)) / 2);
}

h3 {
  font-size: 26px;
}

#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.m-auto {
  max-width: 1344px;
  margin: 0 auto;
  width: 100%;
  padding: 16px;
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
