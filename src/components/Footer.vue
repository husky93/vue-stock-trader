<template>
  <footer>Made by <a href="https://github.com/husky93">husky93</a> 2022</footer>
</template>

<script>
export default {
  name: 'FooterElement',
}
</script>

<style scoped>
footer {
  padding: 36px 0;
  font-weight: 300;
  z-index: 5;
}

footer a {
  color: var(--primary-color);
  font-weight: 400;
}
</style>
