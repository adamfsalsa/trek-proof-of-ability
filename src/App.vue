<script setup lang="ts">
import { computed, ref } from 'vue';

type BikeCategory = 'Road' | 'Mountain' | 'City' | 'Electric';
type CategoryFilter = 'All' | BikeCategory;

interface Bike {
  id: string;
  name: string;
  category: BikeCategory;
  price: number;
  tagline: string;
  specs: string[];
}

const bikes: Bike[] = [
  {
    id: 'domane-al',
    name: 'Domane AL Concept',
    category: 'Road',
    price: 1499,
    tagline: 'Comfort-forward endurance geometry for long weekend miles.',
    specs: ['Endurance fit', 'Carbon fork', '38mm clearance'],
  },
  {
    id: 'marlin-trail',
    name: 'Marlin Trail Concept',
    category: 'Mountain',
    price: 929,
    tagline: 'A capable hardtail for trail starts, fitness rides, and dirt paths.',
    specs: ['1x drivetrain', 'Hydraulic discs', 'Trail geometry'],
  },
  {
    id: 'allant-city',
    name: 'Allant City Concept',
    category: 'Electric',
    price: 2799,
    tagline: 'A practical electric commuter with everyday utility built in.',
    specs: ['Assist to 20mph', 'Integrated lights', 'Rear rack'],
  },
  {
    id: 'district-eq',
    name: 'District EQ Concept',
    category: 'City',
    price: 1199,
    tagline: 'Low-maintenance city movement with clean lines and ready-to-ride gear.',
    specs: ['Belt drive', 'Fenders', 'Internal hub'],
  },
];

const categories: CategoryFilter[] = ['All', 'Road', 'Mountain', 'City', 'Electric'];
const activeCategory = ref<CategoryFilter>('All');
const selectedIds = ref<string[]>([]);

const visibleBikes = computed(() =>
  activeCategory.value === 'All'
    ? bikes
    : bikes.filter((bike) => bike.category === activeCategory.value),
);

const selectedBikes = computed(() => bikes.filter((bike) => selectedIds.value.includes(bike.id)));

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
}

function toggleCompare(bikeId: string) {
  selectedIds.value = selectedIds.value.includes(bikeId)
    ? selectedIds.value.filter((id) => id !== bikeId)
    : [...selectedIds.value.slice(-2), bikeId];
}
</script>

<template>
  <main class="app-shell">
    <section class="hero" aria-labelledby="hero-title">
      <p class="eyebrow">Frontend engineering proof</p>
      <h1 id="hero-title">Responsive product discovery for modern bike shoppers.</h1>
      <p class="hero-copy">
        A focused Vue + TypeScript interface demonstrating component architecture,
        accessible interactions, responsive layout, and design-system thinking.
      </p>
      <a class="button" href="#products">Explore products</a>
    </section>

    <section id="products" class="products" aria-labelledby="products-title">
      <div class="section-heading">
        <p class="eyebrow">Product discovery</p>
        <h2 id="products-title">Find the right ride</h2>
        <p>Filter a focused product set and compare up to three bikes.</p>
      </div>

      <div class="filter" aria-label="Filter bike category">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="chip"
          :class="{ 'chip-active': activeCategory === category }"
          :aria-pressed="activeCategory === category"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <p class="results" aria-live="polite">
        Showing {{ visibleBikes.length }} {{ visibleBikes.length === 1 ? 'bike' : 'bikes' }}
      </p>

      <div class="grid">
        <article v-for="bike in visibleBikes" :key="bike.id" class="card">
          <div class="media" aria-hidden="true"></div>
          <div class="card-body">
            <p class="category">{{ bike.category }}</p>
            <h3>{{ bike.name }}</h3>
            <p>{{ bike.tagline }}</p>
            <strong>{{ formatPrice(bike.price) }}</strong>
            <ul aria-label="Key specs">
              <li v-for="spec in bike.specs" :key="spec">{{ spec }}</li>
            </ul>
          </div>
          <div class="card-actions">
            <button class="button" type="button">View details</button>
            <button
              class="button secondary"
              type="button"
              :aria-pressed="selectedIds.includes(bike.id)"
              @click="toggleCompare(bike.id)"
            >
              {{ selectedIds.includes(bike.id) ? 'Remove' : 'Compare' }}
            </button>
          </div>
        </article>
      </div>
    </section>

    <aside class="compare" aria-live="polite" aria-label="Bike comparison selection">
      <strong>{{ selectedBikes.length }} selected</strong>
      <span v-if="selectedBikes.length">{{ selectedBikes.map((bike) => bike.name).join(', ') }}</span>
      <span v-else>Select up to three bikes to compare.</span>
      <button class="button secondary" type="button" :disabled="selectedBikes.length === 0" @click="selectedIds = []">
        Clear
      </button>
    </aside>
  </main>
</template>

<style scoped>
:global(*) { box-sizing: border-box; }
:global(body) { margin: 0; min-width: 320px; background: #f4f4f2; color: #242424; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
:global(:focus-visible) { outline: 3px solid #005fcc; outline-offset: 3px; }
.app-shell { margin: 0 auto; max-width: 1280px; padding: 1rem; }
.hero { display: grid; gap: 1.25rem; min-height: 28rem; align-content: center; }
.eyebrow { color: #c50021; font-size: .8rem; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
h1 { max-width: 12ch; font-size: clamp(2.8rem, 8vw, 6.5rem); line-height: .9; letter-spacing: -.08em; margin: 0; text-transform: uppercase; }
h2 { font-size: clamp(2.1rem, 5vw, 4rem); line-height: .95; letter-spacing: -.06em; margin: 0; text-transform: uppercase; }
h3 { margin: 0; font-size: 1.35rem; }
.hero-copy, .section-heading p, .card p, .results, .compare span { color: #626262; line-height: 1.6; }
.button, .chip { border: 1px solid transparent; border-radius: 999px; cursor: pointer; display: inline-flex; font: inherit; font-weight: 800; justify-content: center; min-height: 2.5rem; padding: 0 1rem; align-items: center; text-decoration: none; }
.button { background: #111; color: #fff; }
.secondary, .chip { background: #fff; border-color: #bbb; color: #111; }
.chip-active { background: #111; color: #fff; }
.filter { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 1.25rem; }
.grid { display: grid; gap: 1.25rem; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 1.25rem; }
.card { background: #fff; border: 1px solid #ddd; border-radius: 1.5rem; overflow: hidden; box-shadow: 0 1px 2px rgb(0 0 0 / .07); display: grid; }
.media { min-height: 11rem; background: linear-gradient(135deg, #c50021, #111); }
.card-body, .card-actions { padding: 1rem; }
.category { color: #c50021 !important; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }
ul { display: flex; flex-wrap: wrap; gap: .5rem; list-style: none; padding: 0; }
li { border: 1px solid #ddd; border-radius: 999px; padding: .2rem .6rem; }
.card-actions { border-top: 1px solid #ddd; display: flex; gap: .5rem; flex-wrap: wrap; justify-content: space-between; }
.compare { background: rgb(255 255 255 / .96); border: 1px solid #ddd; border-radius: 1rem; bottom: 1rem; display: flex; gap: 1rem; align-items: center; justify-content: space-between; padding: 1rem; position: sticky; }
@media (max-width: 900px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 640px) { .grid { grid-template-columns: 1fr; } .compare { align-items: stretch; flex-direction: column; } }
</style>
