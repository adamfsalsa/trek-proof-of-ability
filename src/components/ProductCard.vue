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
  grid-template-rows: 2.75rem minmax(250px, auto) auto;
  min-width: 0;
  padding-bottom: var(--space-8);
}

.product-card__topline {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto;
  min-height: 2.75rem;
}

.product-card__compare {
  justify-self: end;
}

.product-card__badge {
  background: #edf9ea;
  color: #067400;
  font-weight: 900;
  justify-self: start;
  padding: 0.35rem 0.75rem;
}

.product-card__image {
  align-items: center;
  display: grid;
  min-height: 250px;
  overflow: hidden;
  padding: var(--space-4);
  place-items: center;
}

.bike-bike {
  border-bottom: 0.42rem solid var(--bike-frame, #17483a);
  border-radius: 999px;
  display: block;
  height: 3.4rem;
  position: relative;
  width: min(82%, 19rem);
}

.bike-bike::before,
.bike-bike::after {
  border: 0.42rem solid #1c1c1c;
  border-radius: 50%;
  bottom: -2.35rem;
  content: '';
  height: clamp(3.75rem, 5.3vw, 5.35rem);
  position: absolute;
  width: clamp(3.75rem, 5.3vw, 5.35rem);
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
  font-weight: 900;
  margin: var(--space-5) 0 var(--space-3);
}

.product-card p {
  color: var(--gray-90);
  font-size: 1rem;
  margin: 0;
}

@media (max-width: 760px) {
  .product-card {
    grid-template-rows: 3.25rem minmax(260px, auto) auto;
    padding-bottom: var(--space-8);
  }

  .product-card__image {
    min-height: 260px;
  }

  .bike-bike {
    width: min(84%, 18rem);
  }

  .product-card h3,
  .product-card p {
    font-size: 1.25rem;
  }
}

@media (max-width: 560px) {
  .product-card {
    grid-template-rows: 3rem minmax(180px, auto) auto;
  }

  .product-card__image {
    min-height: 180px;
    padding-inline: 0;
  }

  .bike-bike {
    width: min(88%, 13rem);
  }

  .bike-bike::before,
  .bike-bike::after {
    height: 3.65rem;
    width: 3.65rem;
  }

  .product-card__topline {
    align-items: start;
  }

  .product-card h3,
  .product-card p {
    font-size: 1rem;
  }
}
</style>
