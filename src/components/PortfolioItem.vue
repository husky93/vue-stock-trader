<template>
  <div>
    <h4>{{ stockObject.name }}</h4>
    <div>Current Price:</div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: ['stock'],
  data() {
    return {
      stockObject: this.$store.state.stocksAvailable[this.stock.id],
    }
  },
}
</script>

<style></style>
