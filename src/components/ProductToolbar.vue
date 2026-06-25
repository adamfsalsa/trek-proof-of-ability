<script setup lang="ts">
defineProps<{ resultCount: number; itemsPerPage: number; sort: string }>();
defineEmits<{ 'update:itemsPerPage': [value: number]; 'update:sort': [value: string] }>();
</script>

<template>
  <div class="toolbar">
    <p>{{ resultCount }} Results</p>
    <div class="toolbar__controls">
      <label>
        <strong>Items</strong>
        <select :value="itemsPerPage" aria-label="Items per page" @change="$emit('update:itemsPerPage', Number(($event.target as HTMLSelectElement).value))">
          <option :value="24">24</option>
          <option :value="48">48</option>
          <option :value="72">72</option>
        </select>
      </label>
      <label>
        <strong>Sort by</strong>
        <select :value="sort" aria-label="Sort products" @change="$emit('update:sort', ($event.target as HTMLSelectElement).value)">
          <option value="featured">Featured</option>
          <option value="az">A-Z</option>
          <option value="price-low">Price Low-High</option>
        </select>
      </label>
    </div>
  </div>
</template>

<style scoped>
.toolbar {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  justify-content: space-between;
  margin-bottom: var(--space-5);
  min-width: 0;
  width: 100%;
}

p {
  font-size: 1rem;
  font-weight: 900;
  margin: 0;
}

.toolbar__controls {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  justify-content: flex-end;
  min-width: 0;
}

label {
  align-items: center;
  display: flex;
  gap: var(--space-2);
  white-space: nowrap;
}

strong {
  font-weight: 900;
}

select {
  appearance: auto;
  background: var(--white);
  border: 1px solid transparent;
  border-radius: var(--radius-button);
  color: var(--black);
  font-size: 1rem;
  min-width: 0;
  padding: var(--space-1) var(--space-2);
}

select:hover {
  background: var(--gray-10);
  border-color: var(--gray-20);
}

select:focus-visible {
  border-color: var(--brand-red);
}

@media (max-width: 640px) {
  .toolbar {
    align-items: stretch;
    display: grid;
    gap: var(--space-3);
    grid-template-columns: 1fr;
  }

  .toolbar__controls {
    display: grid;
    gap: var(--space-2);
    grid-template-columns: 1fr;
    justify-content: stretch;
    width: 100%;
  }

  label {
    justify-content: space-between;
    white-space: normal;
    width: 100%;
  }

  select {
    max-width: 100%;
    width: 11rem;
  }
}
</style>
