<script setup lang="ts">
import type { ProductColor } from '../types/bike';

defineProps<{
  colors: ProductColor[];
}>();
</script>

<template>
  <ul class="swatches" aria-label="Available colors">
    <li v-for="color in colors" :key="color.name">
      <span class="swatch" :style="{ backgroundColor: color.value }">
        <span class="sr-only">{{ color.name }}</span>
      </span>
    </li>
  </ul>
</template>

<style scoped>
.swatches {
  display: flex;
  gap: var(--space-2);
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.swatches li {
  display: flex;
}

.swatch {
  border: 3px solid var(--white);
  border-radius: 999px;
  box-shadow: 0 0 0 2px var(--gray-20), 0 0 0 4px rgb(0 0 0 / 0.08);
  display: inline-flex;
  height: 2.05rem;
  transition:
    box-shadow 160ms ease,
    transform 160ms ease;
  width: 2.05rem;
}

.swatch:hover {
  box-shadow: 0 0 0 2px var(--gray-90), 0 0 0 5px rgb(0 0 0 / 0.1);
  transform: scale(1.08);
}
</style>
