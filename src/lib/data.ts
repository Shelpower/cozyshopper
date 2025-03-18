
import { Product, CategoryNavItem } from './types';

// Our product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Minimalist Desk Lamp',
    description: 'A sleek and minimal desk lamp with adjustable brightness levels and color temperature.',
    price: 89.99,
    images: ['/images/desk-lamp.webp'],
    category: 'accessories',
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
    images: ['/images/office-chair.webp'],
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
    price: 59.99,
    images: ['/images/desk-organizer.webp'],
    category: 'accessories',
    tags: ['organizer', 'wooden', 'desk'],
    inStock: true,
    rating: 4.5
  },
  {
    id: '4',
    name: 'Scandinavian Coffee Table',
    description: 'Elegant Scandinavian-style coffee table with oak finish and minimalist design.',
    price: 249.99,
    images: ['/images/coffee-table.webp'],
    category: 'furniture',
    tags: ['table', 'scandinavian', 'living room'],
    featured: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    description: 'Sleek wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    images: ['/images/charging-pad.webp'],
    category: 'accessories',
    tags: ['technology', 'charging', 'wireless'],
    inStock: true,
    rating: 4.6
  },
  {
    id: '6',
    name: 'Adjustable Standing Desk',
    description: 'Electric height-adjustable standing desk with memory settings and smooth operation.',
    price: 499.99,
    images: ['/images/standing-desk.webp'],
    category: 'furniture',
    tags: ['desk', 'standing', 'adjustable'],
    featured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: '7',
    name: 'Monitor Stand',
    description: 'Aluminum monitor stand with adjustable height and integrated cable management.',
    price: 79.99,
    images: ['/images/monitor-stand.webp'],
    category: 'office',
    tags: ['monitor', 'ergonomic', 'aluminum'],
    inStock: true,
    rating: 4.4
  },
  {
    id: '8',
    name: 'Leather Desk Mat',
    description: 'Premium leather desk mat with soft microfiber bottom and stitched edges.',
    price: 49.99,
    images: ['/images/desk-mat.webp'],
    category: 'accessories',
    tags: ['desk', 'leather', 'mat'],
    inStock: true,
    rating: 4.7
  },
  {
    id: '9',
    name: 'Bookshelf with Storage',
    description: 'Modern bookshelf with additional storage compartments and sturdy construction.',
    price: 199.99,
    images: ['/images/bookshelf.webp'],
    category: 'furniture',
    tags: ['bookshelf', 'storage', 'modern'],
    inStock: true,
    rating: 4.5
  },
  {
    id: '10',
    name: 'Smart Desk Plant',
    description: 'Low-maintenance indoor plant in a smart self-watering pot, perfect for your workspace.',
    price: 29.99,
    images: ['/images/desk-plant.webp'],
    category: 'accessories',
    tags: ['plant', 'decoration', 'smart'],
    featured: true,
    inStock: true,
    rating: 4.3
  },
  {
    id: '11',
    name: 'Modern Filing Cabinet',
    description: 'Sleek filing cabinet with smooth-gliding drawers and lock mechanism.',
    price: 159.99,
    images: ['/images/filing-cabinet.webp'],
    category: 'office',
    tags: ['storage', 'organization', 'modern'],
    inStock: true,
    rating: 4.6
  },
  {
    id: '12',
    name: 'Minimalist Wall Clock',
    description: 'Silent wall clock with minimalist design and premium materials.',
    price: 69.99,
    images: ['/images/wall-clock.webp'],
    category: 'accessories',
    tags: ['clock', 'wall', 'minimalist'],
    inStock: true,
    rating: 4.5
  }
];

// Placeholder for product images - in a real app, these would be actual image paths
for (const product of products) {
  product.images = [
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334", 
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  ];
}

// Category navigation items
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
    name: 'accessories',
    label: 'Accessories',
    filter: 'accessories'
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

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
