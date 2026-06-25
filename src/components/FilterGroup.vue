<script setup lang="ts">
import { ref } from 'vue';
import type { FilterGroup } from '../types/bike';

const props = defineProps<{ group: FilterGroup }>();
const isOpen = ref(Boolean(props.group.defaultOpen));
</script>

<template>
  <section class="filter-group">
    <h3>
      <button type="button" :aria-expanded="isOpen" @click="isOpen = !isOpen">
        <span>{{ group.label }}</span><span aria-hidden="true">{{ isOpen ? '⌃' : '⌄' }}</span>
      </button>
    </h3>
    <ul v-show="isOpen">
      <li v-for="option in group.options" :key="option.id">
        <a v-if="group.type === 'link'" href="#"><em>{{ option.label }}</em></a>
        <label v-else><input type="checkbox" :value="option.id" /> <em>{{ option.label }}</em></label>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.filter-group {
  border-bottom: 1px solid #e8e8e8;
  padding: 0.75rem 0;
}

h3 {
  margin: 0;
}

button {
  background: transparent;
  border: 0;
  border-radius: var(--radius-button);
  display: flex;
  font-weight: 800;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
}

button:hover {
  background: var(--gray-10);
}

button[aria-expanded='true'] {
  color: var(--brand-red);
}

ul {
  list-style: none;
  margin: 0.5rem 0 0;
  padding: 0;
}

a,
label {
  border-radius: var(--radius-button);
  color: black;
  display: block;
  padding: 0.45rem 0.5rem;
  text-decoration: none;
}

a:hover,
label:hover {
  background: var(--gray-10);
}

a:hover em,
label:hover em {
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

input {
  accent-color: #1a1a1a;
}

label:has(input:checked) {
  background: #f4f4f4;
  font-weight: 900;
}
</style>
