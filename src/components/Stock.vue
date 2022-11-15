<template>
  <div class="card">
    <div class="card-border"></div>
    <div class="card-bg"></div>
    <div class="content-wrapper">
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
  position: relative;
}

.card:hover::before {
  opacity: 1;
}

.card::before,
.card > .card-border {
  border-radius: inherit;
  content: '';
  opacity: 0;
  transition: opacity 500ms;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
}

.card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.2),
    transparent 40%
  );
  z-index: 3;
}

.card > .card-border {
  background: radial-gradient(
    400px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.3),
    transparent 40%
  );
  z-index: 1;
}

.card > .card-bg {
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  background-color: rgb(23, 23, 23);
  border-radius: inherit;
  margin: 1px;
  z-index: 2;
  position: relative;
}

.content-wrapper {
  position: absolute;
  padding: 24px;
  left: 0;
  top: 0;
  z-index: 10;
}
</style>
