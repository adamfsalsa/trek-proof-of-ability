export type BikeCategory = 'Road' | 'Mountain' | 'City' | 'Electric';

export interface Bike {
  id: string;
  name: string;
  category: BikeCategory;
  price: number;
  tagline: string;
  specs: string[];
  useCase: string;
  highlight: string;
  accent: string;
}
