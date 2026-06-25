import type { Bike, FilterGroup, PromoTile } from '../types/bike';

const unsplash = (id: string, width = 900) =>
  `https://unsplash.com/photos/${id}/download?force=true&w=${width}`;

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
    image: {
      src: unsplash('9tehhmXFeLU'),
      alt: 'Teal electric commuter bike being ridden on a city street.',
      credit: 'Photo by Hiboy on Unsplash',
    },
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
    image: {
      src: unsplash('NymqZR6GkgQ'),
      alt: 'White step-through electric bike ridden along a sidewalk.',
      credit: 'Photo by KBO Bike on Unsplash',
    },
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
    image: {
      src: unsplash('29d_e8sa10w'),
      alt: 'Rider on a gray fat-tire electric bike in an urban setting.',
      credit: 'Photo by KINGBULL Bikes on Unsplash',
    },
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
    image: {
      src: unsplash('yy9wh76UmBo'),
      alt: 'Cyclist riding a gray electric bike near concrete city architecture.',
      credit: 'Photo by Heybike on Unsplash',
    },
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
    image: {
      src: unsplash('Juvjki6ApzI'),
      alt: 'White electric bicycle ridden down a city street.',
      credit: 'Photo by KBO Bike on Unsplash',
    },
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
    image: {
      src: unsplash('LhFecWXJuIE'),
      alt: 'Rider on an electric bike moving through a city street.',
      credit: 'Photo by Yanni Roua on Unsplash',
    },
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
  image: {
    src: unsplash('nB2c__FPOvI', 900),
    alt: 'Person riding a teal electric bike along a tree-lined sidewalk.',
    credit: 'Photo by Fahrbike Official on Unsplash',
  },
};

export const heroImage = {
  src: unsplash('nB2c__FPOvI', 1800),
  alt: 'Person riding a teal electric bike along a tree-lined sidewalk.',
  credit: 'Photo by Fahrbike Official on Unsplash',
};
