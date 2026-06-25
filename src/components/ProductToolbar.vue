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
  gap: var(--space-4);
  justify-content: space-between;
  margin-bottom: var(--space-5);
}

p {
  font-size: 1rem;
  font-weight: 900;
  margin: 0;
}

.toolbar__controls {
  align-items: center;
  display: flex;
  gap: var(--space-5);
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
  padding: var(--space-1) var(--space-2);
}

select:hover {
  background: var(--gray-10);
  border-color: var(--gray-20);
}

select:focus-visible {
  border-color: var(--brand-red);
}

@media (max-width: 760px) {
  .toolbar {
    margin-bottom: var(--space-4);
  }

  p,
  select,
  label {
    font-size: 1.25rem;
  }

  .toolbar__controls {
    gap: var(--space-4);
  }
}

@media (max-width: 560px) {
  p,
  select,
  label {
    font-size: 1rem;
  }

  .toolbar__controls {
    gap: var(--space-2);
  }
}
</style>
