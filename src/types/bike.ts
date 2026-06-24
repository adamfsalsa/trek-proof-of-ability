export type BikeCategory = 'Road' | 'Mountain' | 'Hybrid' | 'City' | 'Cargo';

export interface ProductColor {
  name: string;
  value: string;
}

export interface BikeImage {
  src: string;
  alt: string;
  credit: string;
}

export interface Bike {
  id: string;
  name: string;
  family: string;
  category: BikeCategory;
  price: number;
  isNew?: boolean;
  colors: ProductColor[];
  silhouette: 'hardtail' | 'stepthrough' | 'full-suspension' | 'cargo';
  image: BikeImage;
}

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterGroup {
  id: string;
  label: string;
  defaultOpen?: boolean;
  type: 'link' | 'checkbox';
  options: FilterOption[];
}

export interface PromoTile {
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  image: BikeImage;
}
