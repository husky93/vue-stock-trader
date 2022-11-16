<template>
  <main class="stocks m-auto">
    <h3>Stocks</h3>
    <div class="stocks-container" @mousemove="handleMouseMove">
      <Stock
        @stock-bought="resetCounter"
        v-for="stock in $store.state.stocksAvailable"
        :key="stock.id"
        :name="stock.name"
        :price="stock.price"
        :id="stock.id"
        :maxAmount="stock.maxAmount"
        :reset="reset"
        ref="stocks"
      />
    </div>
  </main>
</template>

<script>
import Stock from '../components/Stock.vue'
import { cardsHoverMixin } from '../app/mixins'
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
  mixins: [cardsHoverMixin],
}
</script>
<style>
.stocks {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stocks-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 916px;
  width: calc(100% - 20px);
  position: relative;
}

.stocks-container:hover > .card > .card-border {
  opacity: 1;
}
</style>
