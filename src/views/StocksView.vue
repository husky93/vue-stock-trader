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
    handleMouseMove(e) {
      for (const card of document.getElementsByClassName('card')) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top
        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      }
    },
  },
  created() {
    this.$store.dispatch('changeMaxAmount')
  },
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
}

.stocks-container:hover > .card > .card-border {
  opacity: 1;
}
</style>
