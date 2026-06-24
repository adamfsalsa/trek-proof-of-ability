<script setup lang="ts">
import type { Bike } from '../types/bike';
import ColorSwatches from './ColorSwatches.vue';
import CompareButton from './CompareButton.vue';

defineProps<{
  product: Bike;
  selected: boolean;
}>();

defineEmits<{
  toggleCompare: [productId: string];
}>();

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}
</script>

<template>
  <article class="product-card">
    <div class="product-card__topline">
      <span v-if="product.isNew" class="product-card__badge">NEW</span>
      <CompareButton
        class="product-card__compare"
        :selected="selected"
        @toggle="$emit('toggleCompare', product.id)"
      />
    </div>

    <div class="product-card__image" :class="`product-card__image--${product.silhouette}`" aria-hidden="true">
      <span class="bike-bike"></span>
    </div>

    <div class="product-card__body">
      <ColorSwatches :colors="product.colors" />
      <h3>{{ product.name }}</h3>
      <p>{{ formatPrice(product.price) }}</p>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  background: var(--white);
  display: grid;
  grid-template-rows: auto minmax(260px, 1fr) auto;
  min-width: 0;
  padding-bottom: var(--space-6);
}

.product-card__topline {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto;
  min-height: 2.5rem;
}

.product-card__badge {
  background: #edf9ea;
  color: #067400;
  font-weight: 900;
  justify-self: start;
  padding: 0.35rem 0.65rem;
}

.product-card__image {
  align-items: center;
  display: grid;
  min-height: 290px;
  overflow: hidden;
  padding: var(--space-4);
  place-items: center;
}

.bike-bike {
  border-bottom: 0.58rem solid var(--bike-frame, #17483a);
  border-radius: 999px;
  display: block;
  height: 4.8rem;
  position: relative;
  width: min(100%, 24rem);
}

.bike-bike::before,
.bike-bike::after {
  border: 0.55rem solid #1c1c1c;
  border-radius: 50%;
  bottom: -3.2rem;
  content: '';
  height: clamp(4.6rem, 8vw, 6.8rem);
  position: absolute;
  width: clamp(4.6rem, 8vw, 6.8rem);
}

.bike-bike::before {
  left: 0;
}

.bike-bike::after {
  right: 0;
}

.product-card__image--stepthrough {
  --bike-frame: #d9e8f7;
}

.product-card__image--full-suspension {
  --bike-frame: #202124;
}

.product-card__image--cargo {
  --bike-frame: #717c73;
}

.product-card__body {
  text-align: center;
}

.product-card h3 {
  font-size: 1rem;
  margin: var(--space-4) 0 var(--space-3);
}

.product-card p {
  color: var(--gray-90);
  margin: 0;
}

@media (max-width: 760px) {
  .product-card {
    grid-template-rows: auto minmax(250px, 1fr) auto;
  }

  .product-card__image {
    min-height: 300px;
  }
}

@media (max-width: 520px) {
  .product-card__image {
    min-height: 210px;
    padding-inline: 0;
  }

  .product-card__topline {
    align-items: start;
  }
}
</style>
