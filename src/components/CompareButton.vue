<script setup lang="ts">
defineProps<{
  selected: boolean;
}>();

defineEmits<{
  toggle: [];
}>();
</script>

<template>
  <button class="compare-button" type="button" :aria-pressed="selected" @click="$emit('toggle')">
    <span aria-hidden="true" class="compare-button__icon">{{ selected ? '−' : '+' }}</span>
    {{ selected ? 'Compared' : 'Compare' }}
  </button>
</template>

<style scoped>
.compare-button {
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: var(--radius-button);
  color: var(--black);
  display: inline-flex;
  font-size: 1rem;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  white-space: nowrap;
}

.compare-button:hover {
  background: var(--gray-10);
  color: var(--brand-red);
}

.compare-button:active {
  transform: translateY(1px);
}

.compare-button[aria-pressed='true'] {
  color: var(--brand-red);
  font-weight: 900;
}

.compare-button[aria-pressed='true'] .compare-button__icon {
  background: var(--brand-red);
  border-color: var(--brand-red);
  color: var(--white);
}

.compare-button__icon {
  border: 2px solid currentcolor;
  border-radius: 999px;
  display: inline-grid;
  font-weight: 900;
  height: 1.35rem;
  line-height: 1;
  place-items: center;
  width: 1.35rem;
}

@media (max-width: 760px) {
  .compare-button {
    font-size: 1rem;
    gap: var(--space-1);
  }
}

@media (max-width: 420px) {
  .compare-button {
    font-size: 0.85rem;
    padding-inline: var(--space-1);
  }

  .compare-button__icon {
    height: 1.05rem;
    width: 1.05rem;
  }
}
</style>
