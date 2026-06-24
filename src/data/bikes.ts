import type { Bike } from '../types/bike';

export const bikes: Bike[] = [
  {
    id: 'domane-al',
    name: 'Domane AL Concept',
    category: 'Road',
    price: 1499,
    tagline: 'Comfort-forward endurance geometry for long weekend miles.',
    specs: ['Endurance fit', 'Carbon fork', '38mm clearance'],
    useCase: 'Long rides and rough pavement',
    highlight: 'Most versatile road option',
    accent: 'endurance',
  },
  {
    id: 'marlin-trail',
    name: 'Marlin Trail Concept',
    category: 'Mountain',
    price: 929,
    tagline: 'A capable hardtail for trail starts, fitness rides, and dirt paths.',
    specs: ['1x drivetrain', 'Hydraulic discs', 'Trail geometry'],
    useCase: 'Entry trail and mixed terrain',
    highlight: 'Best first trail bike',
    accent: 'trail',
  },
  {
    id: 'allant-city',
    name: 'Allant City Concept',
    category: 'Electric',
    price: 2799,
    tagline: 'A practical electric commuter with everyday utility built in.',
    specs: ['Assist to 20mph', 'Integrated lights', 'Rear rack'],
    useCase: 'Commuting and errands',
    highlight: 'Fastest daily rider',
    accent: 'electric',
  },
  {
    id: 'district-eq',
    name: 'District EQ Concept',
    category: 'City',
    price: 1199,
    tagline: 'Low-maintenance city movement with clean lines and ready-to-ride gear.',
    specs: ['Belt drive', 'Fenders', 'Internal hub'],
    useCase: 'Urban riding',
    highlight: 'Lowest maintenance',
    accent: 'city',
  },
];

export const categories = ['All', 'Road', 'Mountain', 'City', 'Electric'] as const;
export type CategoryFilter = (typeof categories)[number];
