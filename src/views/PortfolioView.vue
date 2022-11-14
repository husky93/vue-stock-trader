<template>
  <main class="portfolio m-auto">
    <h3>Portfolio</h3>
    <div v-if="$store.state.stocksOwned.length === 0">
      <h4>You dont own any stocks yet! It's time to buy some.</h4>
    </div>
    <div v-if="$store.state.stocksOwned.length > 0">
      <PortfolioItem
        v-for="stock in $store.state.stocksOwned"
        :stock="stock"
        :key="`${stock.id}-portfolio`"
      />
    </div>
  </main>
</template>

<script>
import PortfolioItem from '../components/PortfolioItem.vue'
export default {
  components: {
    PortfolioItem,
  },
}
</script>
