<template>
  <div>
    <h4>{{ stockObject.name }}</h4>
    <div>
      Shares owned: <span>{{ stock.amount }}</span>
    </div>
    <div>
      Bought for: <span>{{ stock.buyPrice + '$' }}</span>
    </div>
    <div>
      Current price: <span>{{ stockObject.price + '$' }}</span>
    </div>
    <div>
      Profit / Loss:
      <span>{{
        (stockObject.price - stock.buyPrice) * stock.amount + '$'
      }}</span>
    </div>
    <div class="portfolio-item-ui">
      <Button
        @btn-click="$store.dispatch('sellStock', stock)"
        text="Sell All"
      />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'PortfolioItem',
  props: ['stock'],
  components: {
    Button,
  },
  computed: {
    stockObject() {
      return this.$store.state.stocksAvailable[this.stock.id]
    },
  },
}
</script>

<style scoped>
span {
  font-weight: 600;
}
</style>
