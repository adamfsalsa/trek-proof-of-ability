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

    <figure class="product-card__image">
      <img :src="product.image.src" :alt="product.image.alt" loading="lazy" decoding="async" />
    </figure>

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
  border-radius: 2px;
  display: grid;
  grid-template-rows: 2.75rem minmax(310px, auto) auto;
  min-width: 0;
  padding-bottom: var(--space-8);
  transition:
    box-shadow 180ms ease,
    transform 180ms ease;
}

.product-card:hover {
  box-shadow: 0 12px 28px rgb(0 0 0 / 0.08);
  transform: translateY(-2px);
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
  background: var(--white);
  display: grid;
  margin: 0;
  min-height: 310px;
  overflow: hidden;
  padding: var(--space-3);
  place-items: center;
}

.product-card:hover .product-card__image {
  background: #fafafa;
}

.product-card__image img {
  aspect-ratio: 4 / 3;
  display: block;
  height: auto;
  max-height: 310px;
  object-fit: contain;
  object-position: center;
  transition: transform 180ms ease;
  width: min(100%, 30rem);
}

.product-card:hover .product-card__image img {
  transform: scale(1.025);
}

.product-card__body {
  text-align: center;
}

.product-card h3 {
  font-size: 1rem;
  font-weight: 900;
  margin: var(--space-5) 0 var(--space-3);
  text-decoration-color: transparent;
  text-underline-offset: 0.16em;
}

.product-card:hover h3 {
  color: var(--brand-red);
  text-decoration: underline;
  text-decoration-color: currentcolor;
}

.product-card p {
  color: var(--gray-90);
  font-size: 1rem;
  margin: 0;
}

@media (max-width: 760px) {
  .product-card {
    grid-template-rows: 3.25rem minmax(300px, auto) auto;
    padding-bottom: var(--space-8);
  }

  .product-card__image {
    min-height: 300px;
  }

  .product-card__image img {
    max-height: 300px;
  }

  .product-card h3,
  .product-card p {
    font-size: 1.25rem;
  }
}

@media (max-width: 560px) {
  .product-card {
    grid-template-rows: 3rem minmax(210px, auto) auto;
  }

  .product-card__image {
    min-height: 210px;
    padding-inline: 0;
  }

  .product-card__image img {
    max-height: 210px;
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
