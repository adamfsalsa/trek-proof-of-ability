<script setup lang="ts">
import type { FilterGroup as FilterGroupType } from '../types/bike';
import FilterGroup from './FilterGroup.vue';

defineProps<{ groups: FilterGroupType[] }>();
</script>

<template>
  <div class="filters">
    <button class="filters__mobile-button" type="button" aria-controls="filter-sidebar">☷ Filters</button>
    <aside id="filter-sidebar" class="filters__panel" aria-label="Filters">
      <h2>Filters</h2>
      <FilterGroup v-for="group in groups" :key="group.id" :group="group" />
    </aside>
  </div>
</template>

<style scoped>
.filters__mobile-button {
  background: white;
  border: 1px solid #1a1a1a;
  border-radius: 8px;
  display: none;
  font-size: 1.35rem;
  font-weight: 900;
  min-height: 4rem;
  width: 100%;
}

.filters__mobile-button:hover {
  background: var(--gray-10);
  border-color: var(--brand-red);
  color: var(--brand-red);
}

.filters__mobile-button:active {
  transform: translateY(1px);
}

.filters__panel h2 {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 1rem;
}

@media (max-width: 900px) {
  .filters__mobile-button {
    display: block;
    margin-bottom: 3rem;
  }

  .filters__panel {
    display: none;
  }
}
</style>
