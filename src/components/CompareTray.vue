<script setup lang="ts">
import type { Bike } from '../types/bike';

defineProps<{
  selectedBikes: Bike[];
}>();

defineEmits<{
  clear: [];
}>();
</script>

<template>
  <aside
    v-if="selectedBikes.length"
    class="compare-tray"
    aria-live="polite"
    aria-label="Selected bikes for comparison"
  >
    <strong>{{ selectedBikes.length }} selected</strong>
    <span>{{ selectedBikes.map((bike) => bike.name).join(', ') }}</span>
    <button type="button" @click="$emit('clear')">Clear</button>
  </aside>
</template>

<style scoped>
.compare-tray {
  align-items: center;
  background: rgb(255 255 255 / 0.97);
  border: 1px solid var(--gray-20);
  border-radius: var(--radius-button);
  bottom: var(--space-4);
  box-shadow: 0 12px 30px rgb(0 0 0 / 0.14);
  display: flex;
  gap: var(--space-3);
  left: 50%;
  max-width: min(52rem, calc(100vw - 2rem));
  padding: var(--space-3) var(--space-4);
  position: fixed;
  transform: translateX(-50%);
  width: max-content;
  z-index: 50;
}

.compare-tray span {
  color: var(--gray-70);
}

.compare-tray button {
  background: var(--brand-gray);
  border: 0;
  border-radius: var(--radius-button);
  color: var(--white);
  font-weight: 900;
  margin-left: auto;
  min-height: 2.25rem;
  padding: 0 var(--space-4);
}

.compare-tray button:hover {
  background: var(--brand-red);
  box-shadow: 0 8px 18px rgb(206 26 43 / 0.22);
}

.compare-tray button:active {
  transform: translateY(1px);
}

@media (max-width: 760px) {
  .compare-tray {
    align-items: stretch;
    bottom: var(--space-3);
    flex-direction: column;
    left: var(--space-3);
    right: var(--space-3);
    transform: none;
    width: auto;
  }

  .compare-tray button {
    margin-left: 0;
  }
}
</style>
