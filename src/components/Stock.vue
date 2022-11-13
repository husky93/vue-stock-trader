<template>
  <div class="card">
    <h4>{{ name }}</h4>
    <div>
      Price: <span>{{ price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StockElement',
  props: ['name', 'price'],
}
</script>

<style></style>
