import { useState } from 'react';
import { Grid, List, SlidersHorizontal, ShoppingBag, TagIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ProductCard from './ProductCard';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/useCart';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
}

type ViewMode = 'grid' | 'list';
type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'rating-desc' | 'sale';

const ProductGrid = ({ products, title, description }: ProductGridProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const { addItem } = useCart();
  
  const sortProducts = (products: Product[]): Product[] => {
    const productsCopy = [...products];
    
    switch (sortOption) {
      case 'price-asc':
        return productsCopy.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return productsCopy.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
      case 'rating-desc':
        return productsCopy.sort((a, b) => b.rating - a.rating);
      case 'sale':
        return productsCopy.sort((a, b) => {
          if (a.onSale && !b.onSale) return -1;
          if (!a.onSale && b.onSale) return 1;
          return 0;
        });
      case 'featured':
      default:
        return productsCopy.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }
  };
  
  const sortedProducts = sortProducts(products);
  
  const getSortLabel = (option: SortOption): string => {
    switch (option) {
      case 'featured': return 'Featured';
      case 'price-asc': return 'Price: Low to High';
      case 'price-desc': return 'Price: High to Low';
      case 'name-asc': return 'Name: A to Z';
      case 'rating-desc': return 'Top Rated';
      case 'sale': return 'On Sale';
      default: return 'Sort';
    }
  };
  
  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
    toast.success(`Added ${product.name} to cart`, {
      duration: 2000,
    });
  };
  
  const onSaleProducts = products.filter(product => product.onSale);
  
  return (
    <div>
      {(title || description) && (
        <div className="mb-8">
          {title && <h2 className="section-title">{title}</h2>}
          {description && <p className="section-subtitle">{description}</p>}
        </div>
      )}
      
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-muted-foreground">
          {products.length} {products.length === 1 ? 'product' : 'products'}
          {onSaleProducts.length > 0 && (
            <span className="ml-2">
              ({onSaleProducts.length} on sale)
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden sm:inline">{getSortLabel(sortOption)}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => setSortOption('featured')}>
                Featured
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('price-asc')}>
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('price-desc')}>
                Price: High to Low
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('name-asc')}>
                Name: A to Z
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('rating-desc')}>
                Top Rated
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('sale')}>
                On Sale
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              className="h-8 rounded-none px-2"
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              className="h-8 rounded-none px-2"
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="space-y-4 animate-fade-in">
          {sortedProducts.map((product) => (
            <div key={product.id} className="flex border rounded-lg p-4 gap-4">
              <Link 
                to={`/product/${product.id}`}
                className="w-24 h-24 rounded-md overflow-hidden bg-muted flex-shrink-0 relative"
              >
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {product.onSale && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-bl">
                    Sale
                  </div>
                )}
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/product/${product.id}`} className="hover:underline">
                  <h3 className="font-medium">{product.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  {product.onSale ? (
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-red-500">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice?.toFixed(2)}</span>
                    </div>
                  ) : (
                    <span className="font-medium">${product.price.toFixed(2)}</span>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {products.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
