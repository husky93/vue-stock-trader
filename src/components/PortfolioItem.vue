<template>
  <div>
    <h4>{{ stockObject.name }}</h4>
    <div class="text-group">
      Shares owned: <span>{{ stock.amount }}</span>
    </div>
    <div class="text-group">
      Bought for: <span>{{ stock.buyPrice + '$' }}</span>
    </div>
    <div class="text-group">
      Current price: <span>{{ stockObject.price + '$' }}</span>
    </div>
    <div class="text-group">
      Profit / Loss:
      <span :class="classObject">{{
        (stockObject.price - stock.buyPrice) * stock.amount + '$'
      }}</span>
    </div>
    <div class="text-group">
      Value:
      <span>{{ stockObject.price * stock.amount + '$' }}</span>
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
    classObject() {
      return {
        red:
          (this.stockObject.price - this.stock.buyPrice) * this.stock.amount <
          0,
        green:
          (this.stockObject.price - this.stock.buyPrice) * this.stock.amount >=
          0,
      }
    },
  },
}
</script>

<style scoped>
h4 {
  font-size: 1.2rem;
  margin: 12px 0;
}

.text-group {
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

span {
  font-weight: 500;
  color: var(--light-color);
  font-size: 1.05rem;
}

span.red {
  color: var(--danger-color);
}

span.green {
  color: var(--primary-color);
}

.portfolio-item-ui {
  margin-top: 12px;
}
</style>
