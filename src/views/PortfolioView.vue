<template>
  <main class="portfolio m-auto">
    <h3>Portfolio</h3>
    <div v-if="$store.state.stocksOwned.length === 0">
      <h4>You dont own any stocks yet! It's time to buy some.</h4>
    </div>
    <div
      v-if="$store.state.stocksOwned.length > 0"
      class="portfolio-container"
      @mousemove="handleMouseMove"
    >
      <Card
        v-for="stock in $store.state.stocksOwned"
        :key="`${stock.id}-portfolio-card`"
      >
        <PortfolioItem :stock="stock" :key="`${stock.id}-portfolio-item`" />
      </Card>
    </div>
  </main>
</template>

<script>
import PortfolioItem from '../components/PortfolioItem.vue'
import Card from '../components/Card.vue'
import { cardsHoverMixin } from '../app/mixins'
export default {
  components: {
    PortfolioItem,
    Card,
  },
  mixins: [cardsHoverMixin],
}
</script>

<style>
.portfolio {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 916px;
  width: calc(100% - 20px);
}

.portfolio-container:hover > .card > .card-border {
  opacity: 1;
}
</style>
