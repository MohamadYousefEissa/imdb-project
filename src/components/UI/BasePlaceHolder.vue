<template>
  <div class="overflow-visible">
    <p class="placeholder-wave">
      <span class="placeholder col-12"></span>
    </p>
    <p class="placeholder-wave">
      <span class="placeholder col-12"></span><span class="placeholder col-12"></span>
    </p>
  </div>
</template>

<style scoped>
p:first-of-type span {
  height: 260px;
}
html[data-theme='light'] span {
  opacity: 1;
}
span {
  border-radius: 20px;
  opacity: 0.1;
}

div {
  width: 260px;
  height: 320px;
}
</style>
