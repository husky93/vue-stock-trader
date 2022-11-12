<template>
  <div class="info-group">
    {{ label }}: <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'InfoGroup',
  props: {
    label: String,
    value: String,
  },
}
</script>

<style scoped>
span {
  font-weight: 600;
}
</style>
