<template>
  <button @click="$emit('btn-click')">{{ text }}</button>
</template>

<script>
export default {
  name: 'ButtonElement',
  props: {
    text: String,
  },
}
</script>

<style scoped>
button {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  transition: transform 350ms ease-out;
  background-color: var(--primary-color);
  font-weight: 500;
}

button:hover {
  transform: translate(-2px, -2px);
}
</style>
