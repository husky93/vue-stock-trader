<template>
  <div class="header-info">
    <div class="day-ui">
      <InfoGroup label="Day" :value="$store.state.day" />
      <Button @btn-click="handleEndDayClick" text="End Day" />
    </div>
    <InfoGroup label="Funds" :value="`${$store.state.funds} $`" />
  </div>
</template>

<script>
import InfoGroup from './InfoGroup.vue'
import Button from './Button.vue'
export default {
  name: 'HeaderInfo',
  components: {
    InfoGroup,
    Button,
  },
  methods: {
    handleEndDayClick() {
      this.$store.dispatch('endDay')
      this.$store.dispatch('changeMaxAmount')
    },
  },
}
</script>

<style scoped>
.header-info,
.day-ui {
  display: flex;
  gap: 24px;
}
</style>
