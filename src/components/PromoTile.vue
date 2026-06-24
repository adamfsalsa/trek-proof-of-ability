<script setup lang="ts">
import type { PromoTile } from '../types/bike';

defineProps<{
  promo: PromoTile;
}>();
</script>

<template>
  <article class="promo-tile" aria-labelledby="promo-title">
    <img :src="promo.image.src" :alt="promo.image.alt" loading="lazy" decoding="async" />
    <div class="promo-tile__content">
      <h3 id="promo-title">{{ promo.title }}</h3>
      <p>{{ promo.eyebrow }}</p>
      <a href="#">{{ promo.cta }} <span aria-hidden="true">▶</span></a>
    </div>
  </article>
</template>

<style scoped>
.promo-tile {
  background: var(--gray-90);
  color: var(--white);
  display: grid;
  min-height: 420px;
  overflow: hidden;
  position: relative;
}

.promo-tile::after {
  background: linear-gradient(rgb(0 0 0 / 0.05), rgb(0 0 0 / 0.58));
  content: '';
  inset: 0;
  position: absolute;
}

.promo-tile img {
  height: 100%;
  inset: 0;
  object-fit: cover;
  position: absolute;
  width: 100%;
}

.promo-tile__content {
  align-self: end;
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
