<template>
  <div>{{ stockObject.name }}</div>
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
