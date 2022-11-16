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

main.stocks::before {
  --radial-bg-primary: var(--primary-color);
  --radial-bg-secondary: var(--secondary-color);
  --radial-bg-tetriary: var(--light-color);
  background: radial-gradient(
      400px circle at calc(100% - var(--page-edge) - 10%) 45%,
      var(--radial-bg-primary),
      70%,
      transparent
    ),
    radial-gradient(
      400px circle at 50% 55%,
      var(--radial-bg-secondary),
      60%,
      transparent
    ),
    radial-gradient(
      350px circle at calc(var(--page-edge) + 15%) 40%,
      var(--radial-bg-tetriary),
      60%,
      transparent
    );
}
</style>
