<template>
  <div class="info-group">
    {{ label }}: <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'InfoGroup',
  props: ['label', 'value'],
}
</script>

<style scoped>
span {
  font-weight: 600;
}
</style>
