<script setup lang="ts">
import { computed, ref } from 'vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
import CompareTray from './components/CompareTray.vue';
import FilterSidebar from './components/FilterSidebar.vue';
import HeroMarquee from './components/HeroMarquee.vue';
import IntroCopy from './components/IntroCopy.vue';
import ProductGrid from './components/ProductGrid.vue';
import ProductToolbar from './components/ProductToolbar.vue';
import TrekHeader from './components/TrekHeader.vue';
import { bikes, filterGroups, promoTile } from './data/bikes';

const selectedIds = ref<string[]>([]);
const itemsPerPage = ref(24);
const sort = ref('featured');

const displayedBikes = computed(() => {
  const products = [...bikes];

  if (sort.value === 'az') {
    products.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort.value === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  }

  return products.slice(0, itemsPerPage.value);
});

const selectedBikes = computed(() => bikes.filter((bike) => selectedIds.value.includes(bike.id)));

function toggleCompare(bikeId: string) {
  selectedIds.value = selectedIds.value.includes(bikeId)
    ? selectedIds.value.filter((id) => id !== bikeId)
    : [...selectedIds.value, bikeId].slice(-3);
}
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <TrekHeader />

  <main id="main-content">
    <h1 class="sr-only">Electric bikes product listing</h1>

    <HeroMarquee />
    <Breadcrumbs />
    <IntroCopy />

    <section class="plp" aria-labelledby="plp-heading">
      <h2 id="plp-heading" class="sr-only">Electric bike products</h2>

      <FilterSidebar :groups="filterGroups" />

      <div class="plp__results">
        <ProductToolbar
          v-model:items-per-page="itemsPerPage"
          v-model:sort="sort"
          :result-count="62"
        />

        <ProductGrid
          :products="displayedBikes"
          :promo="promoTile"
          :selected-ids="selectedIds"
          @toggle-compare="toggleCompare"
        />
      </div>
    </section>

    <CompareTray :selected-bikes="selectedBikes" @clear="selectedIds = []" />
  </main>
</template>

<style scoped>
.plp {
  background: var(--white);
  display: grid;
  gap: var(--space-6);
  grid-template-columns: minmax(16rem, 1fr) minmax(0, 5fr);
  min-width: 0;
  padding: var(--space-5) var(--space-5) var(--space-10);
  width: 100%;
}

.plp__results {
  min-width: 0;
  width: 100%;
}

@media (max-width: 900px) {
  .plp {
    display: block;
    padding: var(--space-5) var(--space-5) var(--space-8);
  }
}

@media (max-width: 640px) {
  .plp {
    padding: var(--space-4) var(--space-3) var(--space-8);
  }
}

@media (max-width: 420px) {
  .plp {
    padding-inline: var(--space-2);
  }
}
</style>
