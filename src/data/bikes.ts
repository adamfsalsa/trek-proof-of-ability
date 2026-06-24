import type { Bike, FilterGroup, PromoTile } from '../types/bike';

export const bikes: Bike[] = [
  {
    id: 'fx-plus-1s',
    name: 'FX+ 1S',
    family: 'FX+',
    category: 'Hybrid',
    price: 2199.99,
    colors: [
      { name: 'Dark Star', value: '#164d18' },
      { name: 'Matte Trek Black', value: '#000000' },
    ],
    silhouette: 'hardtail',
  },
  {
    id: 'townie-go-s',
    name: 'Townie Go! S',
    family: 'Townie Go!',
    category: 'City',
    price: 2199.99,
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Purple Lotus', value: '#8b54bd' },
      { name: 'Mint', value: '#d7ecd1' },
      { name: 'Silver', value: '#d7d7d7' },
    ],
    silhouette: 'stepthrough',
  },
  {
    id: 'rail-plus-8',
    name: 'Rail+ 8 Gen 5',
    family: 'Rail',
    category: 'Mountain',
    price: 5999.99,
    isNew: true,
    colors: [
      { name: 'Matte Black', value: '#111111' },
      { name: 'Dark Web', value: '#4b4b4b' },
    ],
    silhouette: 'full-suspension',
  },
  {
    id: 'rail-plus-5',
    name: 'Rail+ 5 Gen 5',
    family: 'Rail',
    category: 'Mountain',
    price: 4999.99,
    isNew: true,
    colors: [
      { name: 'Seafoam', value: '#d7ecd1' },
      { name: 'Bronze', value: '#98674f' },
    ],
    silhouette: 'full-suspension',
  },
  {
    id: 'charter-plus-lowstep',
    name: 'Charter+ 5S Lowstep',
    family: 'Charter+',
    category: 'City',
    price: 4499.99,
    isNew: true,
    colors: [
      { name: 'Blue Sage', value: '#007ab8' },
      { name: 'Trek Green', value: '#45b931' },
    ],
    silhouette: 'stepthrough',
  },
  {
    id: 'fetch-plus',
    name: 'Fetch+ 2',
    family: 'Fetch+',
    category: 'Cargo',
    price: 5999.99,
    isNew: true,
    colors: [
      { name: 'Galactic Grey', value: '#6f7775' },
      { name: 'Deep Smoke', value: '#2f3437' },
    ],
    silhouette: 'cargo',
  },
];

export const filterGroups: FilterGroup[] = [
  {
    id: 'category',
    label: 'Category',
    type: 'link',
    defaultOpen: true,
    options: [
      { id: 'electric-mountain', label: 'Electric mountain bikes' },
      { id: 'electric-hybrid', label: 'Electric hybrid bikes' },
      { id: 'electric-gravel', label: 'Electric gravel bikes' },
      { id: 'electra-ebikes', label: 'Electra ebikes' },
      { id: 'electric-road', label: 'Electric road bikes' },
    ],
  },
  {
    id: 'family',
    label: 'Family',
    type: 'checkbox',
    defaultOpen: true,
    options: [
      { id: 'fuel-plus', label: 'Fuel+' },
      { id: 'rail', label: 'Rail' },
      { id: 'verve-plus', label: 'Verve+' },
      { id: 'fx-plus', label: 'FX+' },
      { id: 'townie-go', label: 'Townie Go!' },
      { id: 'checkpoint-plus', label: 'Checkpoint+' },
      { id: 'charter-plus', label: 'Charter+' },
    ],
  },
  {
    id: 'new',
    label: 'New',
    type: 'checkbox',
    defaultOpen: true,
    options: [{ id: 'new', label: 'NEW' }],
  },
  {
    id: 'price',
    label: 'Price',
    type: 'checkbox',
    options: [
      { id: '1000-1999', label: '$1,000-$1,999.99' },
      { id: '2000-2999', label: '$2,000-$2,999.99' },
      { id: '3000-3999', label: '$3,000-$3,999.99' },
      { id: '4000-4999', label: '$4,000-$4,999.99' },
      { id: '5000-7499', label: '$5,000-$7,499.99' },
    ],
  },
];

export const promoTile: PromoTile = {
  eyebrow: 'Not sure? Take the quiz.',
  title: 'Find your e-bike',
  copy: 'Answer a few quick questions and narrow the ride style that fits your life.',
  cta: 'Start now',
};
