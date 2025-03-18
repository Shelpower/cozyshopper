
import { Product, CategoryNavItem, User } from './types';

// Our product data
export const products: Product[] = [
  // Office Category (10 products, 2 on sale)
  {
    id: '1',
    name: 'Minimalist Desk Lamp',
    description: 'A sleek and minimal desk lamp with adjustable brightness levels and color temperature.',
    price: 69.99,
    originalPrice: 89.99,
    onSale: true,
    images: ['/images/desk-lamp.webp'],
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
    price: 49.99,
    originalPrice: 59.99,
    onSale: true,
    images: ['/images/desk-organizer.webp'],
    category: 'office',
    tags: ['organizer', 'wooden', 'desk'],
    inStock: true,
    rating: 4.5
  },
  {
    id: '4',
    name: 'Modern Floating Shelf',
    description: 'Contemporary floating shelf perfect for displaying small items or plants in your office.',
    price: 39.99,
    images: ['/images/floating-shelf.webp'],
    category: 'office',
    tags: ['shelf', 'storage', 'wall'],
    inStock: true,
    rating: 4.3
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    description: 'Sleek wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    images: ['/images/charging-pad.webp'],
    category: 'office',
    tags: ['technology', 'charging', 'wireless'],
    inStock: true,
    rating: 4.6
  },
  {
    id: '6',
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
    id: '7',
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
    id: '8',
    name: 'Desktop Whiteboard',
    description: 'Portable desktop whiteboard for quick notes and brainstorming sessions.',
    price: 24.99,
    images: ['/images/desktop-whiteboard.webp'],
    category: 'office',
    tags: ['whiteboard', 'notes', 'desktop'],
    inStock: true,
    rating: 4.2
  },
  {
    id: '9',
    name: 'Cable Management Kit',
    description: 'Complete cable management solution to keep your desk neat and organized.',
    price: 19.99,
    images: ['/images/cable-management.webp'],
    category: 'office',
    tags: ['cable', 'organization', 'desk'],
    inStock: true,
    rating: 4.5
  },
  {
    id: '10',
    name: 'Desk Mat',
    description: 'Premium leather desk mat with soft microfiber bottom and stitched edges.',
    price: 49.99,
    images: ['/images/desk-mat.webp'],
    category: 'office',
    tags: ['desk', 'leather', 'mat'],
    inStock: true,
    rating: 4.7
  },

  // Furniture Category (10 products, 2 on sale)
  {
    id: '11',
    name: 'Scandinavian Coffee Table',
    description: 'Elegant Scandinavian-style coffee table with oak finish and minimalist design.',
    price: 199.99,
    originalPrice: 249.99,
    onSale: true,
    images: ['/images/coffee-table.webp'],
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
    images: ['/images/standing-desk.webp'],
    category: 'furniture',
    tags: ['desk', 'standing', 'adjustable'],
    featured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: '13',
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
    id: '14',
    name: 'Mid-Century Armchair',
    description: 'Comfortable armchair with mid-century design and premium upholstery.',
    price: 349.99,
    images: ['/images/armchair.webp'],
    category: 'furniture',
    tags: ['chair', 'living room', 'mid-century'],
    inStock: true,
    rating: 4.7
  },
  {
    id: '15',
    name: 'Modular TV Stand',
    description: 'Customizable TV stand with adjustable shelving and cable management.',
    price: 179.99,
    originalPrice: 219.99,
    onSale: true,
    images: ['/images/tv-stand.webp'],
    category: 'furniture',
    tags: ['tv', 'living room', 'modular'],
    inStock: true,
    rating: 4.6
  },
  {
    id: '16',
    name: 'Round Dining Table',
    description: 'Elegant round dining table perfect for small spaces and intimate meals.',
    price: 299.99,
    images: ['/images/dining-table.webp'],
    category: 'furniture',
    tags: ['table', 'dining', 'round'],
    inStock: true,
    rating: 4.4
  },
  {
    id: '17',
    name: 'Storage Ottoman',
    description: 'Multifunctional ottoman with hidden storage compartment and comfortable seating.',
    price: 89.99,
    images: ['/images/ottoman.webp'],
    category: 'furniture',
    tags: ['ottoman', 'storage', 'living room'],
    inStock: true,
    rating: 4.5
  },
  {
    id: '18',
    name: 'Bedside Table',
    description: 'Compact bedside table with drawer and open shelf for storage.',
    price: 79.99,
    images: ['/images/bedside-table.webp'],
    category: 'furniture',
    tags: ['table', 'bedroom', 'storage'],
    inStock: true,
    rating: 4.3
  },
  {
    id: '19',
    name: 'Console Table',
    description: 'Slim console table perfect for entryways or behind sofas.',
    price: 149.99,
    images: ['/images/console-table.webp'],
    category: 'furniture',
    tags: ['table', 'entryway', 'console'],
    inStock: true,
    rating: 4.6
  },
  {
    id: '20',
    name: 'Wall-Mounted Desk',
    description: 'Space-saving wall-mounted desk that folds down when needed.',
    price: 129.99,
    images: ['/images/wall-desk.webp'],
    category: 'furniture',
    tags: ['desk', 'wall-mounted', 'space-saving'],
    inStock: true,
    rating: 4.2
  },

  // Accessories Category (10 products, 2 on sale)
  {
    id: '21',
    name: 'Smart Desk Plant',
    description: 'Low-maintenance indoor plant in a smart self-watering pot, perfect for your workspace.',
    price: 24.99,
    originalPrice: 29.99,
    onSale: true,
    images: ['/images/desk-plant.webp'],
    category: 'accessories',
    tags: ['plant', 'decoration', 'smart'],
    featured: true,
    inStock: true,
    rating: 4.3
  },
  {
    id: '22',
    name: 'Minimalist Wall Clock',
    description: 'Silent wall clock with minimalist design and premium materials.',
    price: 69.99,
    images: ['/images/wall-clock.webp'],
    category: 'accessories',
    tags: ['clock', 'wall', 'minimalist'],
    inStock: true,
    rating: 4.5
  },
  {
    id: '23',
    name: 'Decorative Wall Art',
    description: 'Modern abstract wall art to add color and personality to any room.',
    price: 49.99,
    originalPrice: 59.99,
    onSale: true,
    images: ['/images/wall-art.webp'],
    category: 'accessories',
    tags: ['art', 'wall', 'decoration'],
    inStock: true,
    rating: 4.7
  },
  {
    id: '24',
    name: 'Handwoven Basket',
    description: 'Natural handwoven basket for stylish storage and organization.',
    price: 34.99,
    images: ['/images/basket.webp'],
    category: 'accessories',
    tags: ['basket', 'storage', 'handwoven'],
    inStock: true,
    rating: 4.4
  },
  {
    id: '25',
    name: 'Ceramic Vase Set',
    description: 'Set of 3 ceramic vases in complementary colors and shapes.',
    price: 39.99,
    images: ['/images/vase-set.webp'],
    category: 'accessories',
    tags: ['vase', 'ceramic', 'decoration'],
    inStock: true,
    rating: 4.6
  },
  {
    id: '26',
    name: 'Photo Frame Set',
    description: 'Set of various sized photo frames with clean modern design.',
    price: 29.99,
    images: ['/images/photo-frames.webp'],
    category: 'accessories',
    tags: ['frames', 'photos', 'decoration'],
    inStock: true,
    rating: 4.5
  },
  {
    id: '27',
    name: 'Scented Candle',
    description: 'Premium scented candle in a decorative container with long burn time.',
    price: 24.99,
    images: ['/images/candle.webp'],
    category: 'accessories',
    tags: ['candle', 'scented', 'decoration'],
    inStock: true,
    rating: 4.8
  },
  {
    id: '28',
    name: 'Throw Pillow Set',
    description: 'Set of 2 decorative throw pillows with removable covers.',
    price: 44.99,
    images: ['/images/pillows.webp'],
    category: 'accessories',
    tags: ['pillows', 'decoration', 'comfort'],
    inStock: true,
    rating: 4.3
  },
  {
    id: '29',
    name: 'Artificial Succulent Set',
    description: 'Set of 3 realistic artificial succulents in decorative pots.',
    price: 19.99,
    images: ['/images/succulents.webp'],
    category: 'accessories',
    tags: ['plants', 'artificial', 'decoration'],
    inStock: true,
    rating: 4.5
  },
  {
    id: '30',
    name: 'Decorative Mirror',
    description: 'Stylish wall mirror with minimalist frame design.',
    price: 59.99,
    images: ['/images/mirror.webp'],
    category: 'accessories',
    tags: ['mirror', 'wall', 'decoration'],
    inStock: true,
    rating: 4.6
  },

  // Lighting Category (10 products, 2 on sale)
  {
    id: '31',
    name: 'Pendant Light',
    description: 'Modern pendant light with adjustable height and warm glow.',
    price: 89.99,
    originalPrice: 109.99,
    onSale: true,
    images: ['/images/pendant-light.webp'],
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
    images: ['/images/floor-lamp.webp'],
    category: 'lighting',
    tags: ['lamp', 'floor', 'standing'],
    inStock: true,
    rating: 4.6
  },
  {
    id: '33',
    name: 'Table Lamp Set',
    description: 'Set of 2 matching table lamps with fabric shades.',
    price: 79.99,
    originalPrice: 99.99,
    onSale: true,
    images: ['/images/table-lamp-set.webp'],
    category: 'lighting',
    tags: ['lamp', 'table', 'set'],
    inStock: true,
    rating: 4.5
  },
  {
    id: '34',
    name: 'Wall Sconce',
    description: 'Modern wall sconce with adjustable head and switch.',
    price: 59.99,
    images: ['/images/wall-sconce.webp'],
    category: 'lighting',
    tags: ['wall', 'sconce', 'modern'],
    inStock: true,
    rating: 4.4
  },
  {
    id: '35',
    name: 'String Lights',
    description: 'Decorative string lights for indoor or outdoor use.',
    price: 19.99,
    images: ['/images/string-lights.webp'],
    category: 'lighting',
    tags: ['string', 'decorative', 'ambiance'],
    inStock: true,
    rating: 4.8
  },
  {
    id: '36',
    name: 'Desk Lamp with Wireless Charging',
    description: 'Modern desk lamp with built-in wireless charging pad.',
    price: 69.99,
    images: ['/images/desk-charging-lamp.webp'],
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
    images: ['/images/chandelier.webp'],
    category: 'lighting',
    tags: ['ceiling', 'chandelier', 'dining'],
    inStock: true,
    rating: 4.9
  },
  {
    id: '38',
    name: 'Track Lighting Kit',
    description: 'Adjustable track lighting system with 4 spotlights.',
    price: 89.99,
    images: ['/images/track-lighting.webp'],
    category: 'lighting',
    tags: ['track', 'ceiling', 'adjustable'],
    inStock: true,
    rating: 4.5
  },
  {
    id: '39',
    name: 'Bedside Lamp',
    description: 'Compact bedside lamp with touch dimming control.',
    price: 34.99,
    images: ['/images/bedside-lamp.webp'],
    category: 'lighting',
    tags: ['bedside', 'touch', 'dimming'],
    inStock: true,
    rating: 4.4
  },
  {
    id: '40',
    name: 'Smart LED Light Bulbs',
    description: 'Set of 3 smart LED bulbs with app control and voice commands.',
    price: 39.99,
    images: ['/images/smart-bulbs.webp'],
    category: 'lighting',
    tags: ['smart', 'LED', 'bulbs'],
    inStock: true,
    rating: 4.7
  }
];

// Placeholder for product images - in a real app, these would be actual image paths
for (const product of products) {
  // Set default images if none provided
  if (!product.images || product.images.length === 0) {
    product.images = [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334", 
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ];
  }
  
  // Add more realistic product images based on category
  if (product.category === 'office') {
    product.images = [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334", 
      "https://images.unsplash.com/photo-1497366216548-37526070297c"
    ];
  } else if (product.category === 'furniture') {
    product.images = [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6", 
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126"
    ];
  } else if (product.category === 'accessories') {
    product.images = [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85", 
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
    ];
  } else if (product.category === 'lighting') {
    product.images = [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15", 
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5"
    ];
  }
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
