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
        <span>{{ group.label }}</span><span>{{ isOpen ? '⌃' : '⌄' }}</span>
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
.filter-group { border-bottom: 1px solid #e8e8e8; padding: .75rem 0; }
h3 { margin: 0; }
button { background: transparent; border: 0; display: flex; justify-content: space-between; width: 100%; font-weight: 800; padding: .5rem 0; }
ul { list-style: none; margin: .5rem 0 0; padding: 0; }
a, label { color: black; display: block; padding: .4rem 0; text-decoration: none; }
input { accent-color: #1a1a1a; }
</style>
