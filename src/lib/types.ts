
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
}

export type Category = 'office' | 'furniture' | 'accessories';

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
