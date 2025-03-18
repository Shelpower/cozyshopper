
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: Category;
  tags: string[];
  featured?: boolean;
  inStock: boolean;
  rating: number;
  onSale?: boolean;
  originalPrice?: number;
}

export type Category = 'office' | 'furniture' | 'accessories' | 'lighting';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CategoryNavItem {
  name: string;
  label: string;
  icon?: string;
  filter: Category | 'all';
}

export interface User {
  id: string;
  email: string;
  name: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  reduceMotion: boolean;
  highContrast: boolean;
}
