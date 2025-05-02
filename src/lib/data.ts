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
      "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=800&auto=format&fit=crop&q=80", // Actual desk lamp
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80"  // Another desk lamp angle
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
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&auto=format&fit=crop&q=80", // Office chair
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&auto=format&fit=crop&q=80"  // Another chair angle
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
      "https://images.unsplash.com/photo-1591300103731-0dee8e0c1cf9?w=800&auto=format&fit=crop&q=80", // Wooden desk organizer
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80"  // Another desk organizer angle
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
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&auto=format&fit=crop&q=80", // Coffee table
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=800&auto=format&fit=crop&q=80"  // Another coffee table angle
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
      "https://images.unsplash.com/photo-1587644572518-833bce08c3e8?w=800&auto=format&fit=crop&q=80", // Standing desk
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&auto=format&fit=crop&q=80"  // Another standing desk angle
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
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80", // Armchair
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&auto=format&fit=crop&q=80"  // Another armchair angle
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
      "https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a?w=800&auto=format&fit=crop&q=80", // Pendant light
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop&q=80"  // Another pendant light angle
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
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop&q=80", // Floor lamp
      "https://images.unsplash.com/photo-1540932568230-11b5c6d396e5?w=800&auto=format&fit=crop&q=80"  // Another floor lamp angle
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
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80", // Desk lamp with charging
      "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=800&auto=format&fit=crop&q=80"  // Another desk lamp angle
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
      "https://images.unsplash.com/photo-1543330732-9bcec5067a38?w=800&auto=format&fit=crop&q=80", // Chandelier
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&auto=format&fit=crop&q=80"  // Another chandelier angle
    ],
    category: 'lighting',
    tags: ['ceiling', 'chandelier', 'dining'],
    inStock: true,
    rating: 4.9
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
    name: 'lighting',
    label: 'Lighting',
    filter: 'lighting'
  }
];

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
