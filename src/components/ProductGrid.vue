<script setup lang="ts">
import type { Bike, PromoTile as PromoTileType } from '../types/bike';
import ProductCard from './ProductCard.vue';
import PromoTile from './PromoTile.vue';

defineProps<{
  products: Bike[];
  promo: PromoTileType;
  selectedIds: string[];
}>();

defineEmits<{
  toggleCompare: [productId: string];
}>();
</script>

<template>
  <div class="product-grid" aria-live="polite">
    <ProductCard
      v-for="product in products.slice(0, 1)"
      :key="product.id"
      :product="product"
      :selected="selectedIds.includes(product.id)"
      @toggle-compare="$emit('toggleCompare', $event)"
    />

    <PromoTile :promo="promo" />

    <ProductCard
      v-for="product in products.slice(1)"
      :key="product.id"
      :product="product"
      :selected="selectedIds.includes(product.id)"
      @toggle-compare="$emit('toggleCompare', $event)"
    />
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  gap: var(--space-10) var(--space-6);
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1180px) {
  .product-grid {
    gap: var(--space-10) var(--space-5);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .product-grid {
    column-gap: var(--space-4);
    row-gap: var(--space-8);
  }

  .product-grid :deep(.promo-tile) {
    grid-column: 1 / -1;
  }
}

@media (max-width: 560px) {
  .product-grid {
    column-gap: var(--space-3);
    row-gap: var(--space-6);
  }
}

@media (max-width: 359px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
