<template>
  <div class="goal m-auto">
    <h2>Goal: $1,000,000</h2>
    <progress max="1000000" :value="$store.state.funds"></progress>
  </div>
</template>

<script>
export default {
  name: 'GoalElement',
}
</script>

<style>
progress {
  width: 75%;
  height: 1rem;
}
</style>
