<template>
  <main class="stocks m-auto">
    <h3>Stocks</h3>
    <Stock
      v-for="stock in $store.state.stocksAvailable"
      :key="stock.id"
      :name="stock.name"
      :price="stock.price"
      :id="stock.id"
      :maxAmount="stock.maxAmount"
    />
  </main>
</template>

<script>
import Stock from '../components/Stock.vue'
export default {
  name: 'StocksView',
  components: {
    Stock,
  },
  created() {
    this.$store.dispatch('changeMaxAmount')
  },
}
</script>
<style></style>
