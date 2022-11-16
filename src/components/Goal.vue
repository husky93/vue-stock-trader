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

<style scoped>
progress {
  width: 75%;
  height: 16px;
  margin-bottom: 24px;
  position: relative;
  background: #eee;
  border-radius: 100px;
}

progress::-moz-progress-bar {
  border-radius: 100px;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
}

progress::-webkit-progress-bar {
  background: #eee;
  border-radius: 100px;
}

progress::-webkit-progress-value {
  border-radius: 100px;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
}
.goal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
</style>
