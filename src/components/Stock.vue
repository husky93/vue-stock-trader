<template>
  <div class="card" @mousemove="handleMouseMove">
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
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'StockElement',
  props: ['name', 'price', 'id', 'maxAmount', 'reset'],
  components: {
    Button,
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
    handleMouseMove(e) {
      const { currentTarget: target } = e

      const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top

      target.style.setProperty('--mouse-x', `${x}px`)
      target.style.setProperty('--mouse-y', `${y}px`)
    },
  },
}
</script>

<style scoped>
.card {
  --mouse-x: 100px;
  --mouse-y: 100px;
  background-color: rgba(255, 255, 255, 0.1);
  height: 260px;
  width: 300px;
  border-radius: 10px;
  padding: 24px;
  position: relative;
}

.card:hover::before {
  opacity: 1;
}

.card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.2),
    transparent 40%
  );
  border-radius: inherit;
  content: '';
  opacity: 0;
  transition: opacity 500ms;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 2;
}
</style>
