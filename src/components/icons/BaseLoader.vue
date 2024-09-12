<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  width: 11.2px;
  height: 11.2px;
  border-radius: 11.2px;
  box-shadow:
    28px 0px 0 0 rgba(255, 255, 255, 0.2),
    22.7px 16.5px 0 0 rgba(255, 255, 255, 0.4),
    8.68px 26.6px 0 0 rgba(255, 255, 255, 0.6),
    -8.68px 26.6px 0 0 rgba(255, 255, 255, 0.8),
    -22.7px 16.5px 0 0 #ffffff;

  animation: spinner-b87k6z 0.8s infinite linear;
}

@keyframes spinner-b87k6z {
  to {
    transform: rotate(360deg);
  }
}
html[data-theme='light'] .spinner {
  filter: invert(1) brightness(0);
}
</style>
