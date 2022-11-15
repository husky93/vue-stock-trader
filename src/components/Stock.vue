<template>
  <Card>
    <h4>{{ name }}</h4>
    <div>
      Price: <span>{{ price + '$' }}</span>
    </div>
    <div class="stock-ui">
      <Button @btn-click="decreaseCount" text="-" />
      <input
        type="number"
        @input="handleMaxInput"
        v-model="count"
        :max="maxAmount"
      />
      <Button @btn-click="increaseCount" text="+" />
      <Button @btn-click="setCount(maxAmount)" text="Max" />
      <Button @btn-click="handleBuyStock" text="Buy" />
    </div>
  </Card>
</template>

<script>
import Button from './Button.vue'
import Card from './Card.vue'

export default {
  name: 'StockElement',
  props: ['name', 'price', 'id', 'maxAmount', 'reset'],
  components: {
    Button,
    Card,
  },
  data() {
    return {
      count: 0,
    }
  },
  watch: {
    reset: function (oldVal, newVal) {
      if (newVal) this.count = 0
    },
  },
  methods: {
    increaseCount() {
      console.log(this.id)
      if (this.count < this.maxAmount) this.count++
    },
    decreaseCount() {
      if (this.count > 0) this.count--
    },
    setCount(number) {
      this.count = number
    },
    handleMaxInput() {
      if (this.count > this.maxAmount) {
        this.count = this.maxAmount
      }
    },
    handleBuyStock() {
      this.$store.dispatch('buyStock', {
        id: this.id,
        amount: this.count,
        buyPrice: this.price,
      })
      this.$store.dispatch('changeMaxAmount')
      this.$emit('stock-bought')
      this.count = 0
    },
  },
}
</script>

<style scoped></style>
