<script setup lang="ts">
import BaseEarth from '../icons/BaseEarth.vue'
import BaseLogo from '../icons/BaseLogo.vue'
import BaseMovie from '../icons/BaseMovie.vue'
import BaseTV from '../icons/BaseTV.vue'
</script>
<template>
  <footer>
    <div class="container py-5">
      <div class="row flex-column flex-md-row gap-4">
        <div class="col">
          <router-link to="/">
            <BaseLogo />
          </router-link>
        </div>
        <div class="col">
          <div>
            <p><BaseMovie />Movies</p>
            <ul>
              <li>Release Calendar</li>
              <li>Top 250 Movies</li>
              <li>Most Popular Movies</li>
              <li>Browse Movies by Genre</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div>
            <p><BaseTV />TV Shows</p>
            <ul>
              <li>What's on TV & Streaming</li>
              <li>Top 250 TV Shows</li>
              <li>Most Popular TV Shows</li>
              <li>Browse TV Shows by Genre</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div>
            <p><BaseEarth />Community</p>
            <ul>
              <li>Help Center</li>
              <li>Contributor Zone</li>
              <li>Polls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center pb-1" id="copy-right">
      Powered by Mohamad Yousef Eissa © 2024 | All Rights Reserved
    </p>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 10rem;
  background-color: var(--nav-bg);
}

ul {
  padding: 0;
}
li {
  width: fit-content;
  cursor: pointer;
}
li:hover {
  text-decoration: 1.2px solid underline;
}
.container p {
  display: flex;
  gap: 1rem;
  font-weight: bold;
  font-size: 20px;
  align-items: center;
  margin-left: -2rem;
  margin-bottom: 0;
  font-weight: bold;
}
svg {
  fill: var(--bs-warning);
}
.col {
  display: flex !important;
  justify-content: center !important;
}
#copy-right {
  font-size: 14px;
  color: #b0b0b0;
}
@media screen and (max-width: 1024px) {
  .col > div {
    width: 200px;
  }
}
@media screen and (max-width: 767px) {
  .col:first-of-type {
    margin-left: -5.5rem;
  }
}
</style>
