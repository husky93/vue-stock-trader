<template>
  <div class="header-info">
    <InfoGroup label="Day" :value="$store.state.day" />
    <InfoGroup label="Funds" :value="`${$store.state.funds} $`" />
  </div>
</template>

<script>
import InfoGroup from './InfoGroup.vue'
export default {
  name: 'HeaderInfo',
  components: {
    InfoGroup,
  },
}
</script>

<style scoped>
.header-info {
  display: flex;
  gap: 24px;
}
</style>
