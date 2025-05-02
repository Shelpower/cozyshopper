
import { Product, CategoryNavItem, User } from './types';

// Our product data - 10 products total across 3 categories
export const products: Product[] = [
  // Office Category (3 products, 1 on sale)
  {
    id: '1',
    name: 'Minimalist Desk Lamp',
    description: 'A sleek and minimal desk lamp with adjustable brightness levels and color temperature.',
    price: 69.99,
    originalPrice: 89.99,
    onSale: true,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80"
    ],
    category: 'office',
    tags: ['lighting', 'desk', 'modern'],
    featured: true,
    inStock: true,
    rating: 4.7
  },
  {
    id: '2',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic office chair with lumbar support and breathable mesh back.',
    price: 299.99,
    images: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496397604100-688c59a80943?w=800&auto=format&fit=crop&q=80"
    ],
    category: 'office',
    tags: ['chair', 'ergonomic', 'comfort'],
    featured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Wooden Desk Organizer',
    description: 'Handcrafted wooden desk organizer with multiple compartments for stationery and gadgets.',
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1591129841117-3adfd313a592?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544247341-88c7f71e83a6?w=800&auto=format&fit=crop&q=80"
    ],
    category: 'office',
    tags: ['organizer', 'wooden', 'desk'],
    inStock: true,
    rating: 4.5
  },
  
  // Furniture Category (3 products, 1 on sale)
  {
    id: '11',
    name: 'Scandinavian Coffee Table',
    description: 'Elegant Scandinavian-style coffee table with oak finish and minimalist design.',
    price: 199.99,
    originalPrice: 249.99,
    onSale: true,
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=800&auto=format&fit=crop&q=80"
    ],
    category: 'furniture',
    tags: ['table', 'scandinavian', 'living room'],
    featured: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: '12',
    name: 'Adjustable Standing Desk',
    description: 'Electric height-adjustable standing desk with memory settings and smooth operation.',
    price: 499.99,
    images: [
      "https://images.unsplash.com/photo-1595514535215-8a5b0fad470b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&auto=format&fit=crop&q=80"
    ],
    category: 'furniture',
    tags: ['desk', 'standing', 'adjustable'],
    featured: false,
    inStock: true,
    rating: 4.9
  },
  {
    id: '14',
    name: 'Mid-Century Armchair',
    description: 'Comfortable armchair with mid-century design and premium upholstery.',
    price: 349.99,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=80"
    ],
    category: 'furniture',
    tags: ['chair', 'living room', 'mid-century'],
    inStock: true,
    rating: 4.7
  },
  
  // Lighting Category (4 products, 1 on sale)
  {
    id: '31',
    name: 'Pendant Light',
    description: 'Modern pendant light with adjustable height and warm glow.',
    price: 89.99,
    originalPrice: 109.99,
    onSale: true,
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop&q=80"
    ],
    category: 'lighting',
    tags: ['ceiling', 'pendant', 'modern'],
    featured: true,
    inStock: true,
    rating: 4.7
  },
  {
    id: '32',
    name: 'Floor Lamp',
    description: 'Elegant floor lamp with reading light and dimming function.',
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1543198126-1ad8a2667c69?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556710808-a8bc5935e5df?w=800&auto=format&fit=crop&q=80"
    ],
    category: 'lighting',
    tags: ['lamp', 'floor', 'standing'],
    inStock: true,
    rating: 4.6
  },
  {
    id: '36',
    name: 'Desk Lamp with Wireless Charging',
    description: 'Modern desk lamp with built-in wireless charging pad.',
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1534641760636-75c3878ae645?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573150323599-0c8cdc4c4b5e?w=800&auto=format&fit=crop&q=80"
    ],
    category: 'lighting',
    tags: ['desk', 'charging', 'multifunctional'],
    inStock: true,
    rating: 4.7
  },
  {
    id: '37',
    name: 'Chandelier',
    description: 'Contemporary chandelier with adjustable height for dining rooms.',
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610014227026-f4aa0f3087e3?w=800&auto=format&fit=crop&q=80"
    ],
    category: 'lighting',
    tags: ['ceiling', 'chandelier', 'dining'],
    inStock: true,
    rating: 4.9
  }
];

// Category navigation items - removed accessories
export const categoryNavItems: CategoryNavItem[] = [
  {
    name: 'all',
    label: 'All Products',
    filter: 'all'
  },
  {
    name: 'office',
    label: 'Home Office',
    filter: 'office'
  },
  {
    name: 'furniture',
    label: 'Furniture',
    filter: 'furniture'
  },
  {
    name: 'lighting',
    label: 'Lighting',
    filter: 'lighting'
  }
];

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
};

// Helper function to get on sale products
export const getOnSaleProducts = (): Product[] => {
  return products.filter(product => product.onSale);
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Mock users data
export const users: User[] = [
  {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    preferences: {
      theme: 'light',
      fontSize: 'medium',
      reduceMotion: false,
      highContrast: false
    }
  }
];
