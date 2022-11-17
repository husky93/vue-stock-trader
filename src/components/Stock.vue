<template>
  <Card>
    <h4>{{ name }}</h4>
    <div class="price">
      Price: <span>{{ price + '$' }}</span>
    </div>
    <div class="stock-ui">
      <div class="counter-container">
        <Button @btn-click="decreaseCount" text="-" />
        <input
          type="number"
          @input="handleMaxInput"
          v-model="count"
          min="0"
          :max="maxAmount"
        />
        <Button @btn-click="increaseCount" text="+" />
      </div>
      <div class="button-container">
        <Button @btn-click="setCount(maxAmount)" text="Max" />
        <Button @btn-click="handleBuyStock" text="Buy" />
      </div>
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

<style scoped>
h4 {
  font-size: 1.2rem;
  margin: 12px 0;
}

.counter-container,
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.counter-container,
.price {
  margin-bottom: 12px;
}

.price {
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.price span {
  font-weight: 500;
  color: var(--light-color);
  font-size: 1.05rem;
}

input {
  width: 76px;
  padding: 10px 20px;
  text-align: center;
  background-color: transparent;
  border-radius: 5px;
  font-size: 1rem;
  color: var(--text-color);
  border: 1px var(--text-color) solid;
  transition: background-color 250ms ease-in-out;
}

input:focus {
  background-color: rgba(255, 255, 255, 0.07);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
