<template>
  <main class="stocks m-auto">
    <h3>Stocks</h3>
    <div class="container">
      <Stock
        @stock-bought="resetCounter"
        v-for="stock in $store.state.stocksAvailable"
        :key="stock.id"
        :name="stock.name"
        :price="stock.price"
        :id="stock.id"
        :maxAmount="stock.maxAmount"
        :reset="reset"
      />
    </div>
  </main>
</template>

<script>
import Stock from '../components/Stock.vue'
export default {
  name: 'StocksView',
  components: {
    Stock,
  },
  data() {
    return {
      reset: false,
    }
  },
  methods: {
    async resetCounter() {
      this.reset = true
      await setTimeout(() => (this.reset = false), 0)
    },
  },
  created() {
    this.$store.dispatch('changeMaxAmount')
  },
}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
</style>
