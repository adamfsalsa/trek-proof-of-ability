<script setup lang="ts">
defineProps<{ resultCount: number; itemsPerPage: number; sort: string }>();
defineEmits<{ 'update:itemsPerPage': [value: number]; 'update:sort': [value: string] }>();
</script>

<template>
  <div class="toolbar">
    <p>{{ resultCount }} Results</p>
    <div class="toolbar__controls">
      <label><strong>Items</strong>
        <select :value="itemsPerPage" @change="$emit('update:itemsPerPage', Number(($event.target as HTMLSelectElement).value))">
          <option :value="24">24</option><option :value="48">48</option><option :value="72">72</option>
        </select>
      </label>
      <label><strong>Sort by</strong>
        <select :value="sort" @change="$emit('update:sort', ($event.target as HTMLSelectElement).value)">
          <option value="featured">Featured</option><option value="az">A-Z</option><option value="price-low">Price Low-High</option>
        </select>
      </label>
    </div>
  </div>
</template>

<style scoped>
.toolbar { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
p { font-weight: 900; margin: 0; }
.toolbar__controls { display: flex; gap: 1rem; }
label { display: flex; gap: .5rem; align-items: center; }
select { border: 0; background: white; }
</style>
