<script setup lang="ts">
import type { PromoTile } from '../types/bike';

defineProps<{
  promo: PromoTile;
}>();
</script>

<template>
  <article class="promo-tile" aria-labelledby="promo-title">
    <div class="promo-tile__art" aria-hidden="true"></div>
    <div class="promo-tile__content">
      <h3 id="promo-title">{{ promo.title }}</h3>
      <p>{{ promo.eyebrow }}</p>
      <a href="#">{{ promo.cta }} <span aria-hidden="true">▶</span></a>
    </div>
  </article>
</template>

<style scoped>
.promo-tile {
  align-items: end;
  background:
    linear-gradient(rgb(0 0 0 / 0.1), rgb(0 0 0 / 0.52)),
    linear-gradient(135deg, #b9d7ea, #26394c);
  color: var(--white);
  display: grid;
  min-height: 420px;
  overflow: hidden;
  position: relative;
}

.promo-tile__art {
  border-left: 1.1rem solid rgb(255 255 255 / 0.58);
  height: 120%;
  left: 42%;
  position: absolute;
  top: -10%;
  transform: rotate(18deg);
}

.promo-tile__content {
  padding: var(--space-5);
  position: relative;
  text-align: center;
  z-index: 1;
}

.promo-tile h3 {
  font-size: clamp(1.6rem, 3vw, 2rem);
  margin: 0;
}

.promo-tile p {
  font-weight: 700;
  margin: var(--space-2) 0 var(--space-4);
}

.promo-tile a {
  color: var(--white);
  font-weight: 900;
}

@media (max-width: 760px) {
  .promo-tile {
    min-height: 300px;
  }
}
</style>
