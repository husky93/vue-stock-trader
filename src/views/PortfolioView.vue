<template>
  <main class="portfolio m-auto">
    <h3>Portfolio</h3>
    <PortfolioItem
      v-for="stock in $store.state.stocksOwned"
      :stock="stock"
      :key="`${stock.id}-portfolio`"
    />
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
