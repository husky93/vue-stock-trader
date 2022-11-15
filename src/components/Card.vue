<template>
  <div class="card">
    <div class="card-border"></div>
    <div class="card-bg"></div>
    <div class="content-wrapper"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'CardElement',
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
