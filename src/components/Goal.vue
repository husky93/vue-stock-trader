<template>
  <div class="goal m-auto">
    <h2>
      {{
        $store.state.funds < 1000000
          ? 'Goal: $1,000,000'
          : 'Congratulations you have reached million dollars!'
      }}
    </h2>
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
