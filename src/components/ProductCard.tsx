
import { useState } from 'react';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '@/lib/useCart';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };
  
  return (
    <div 
      className="product-card group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
    >
      <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {product.onSale && (
          <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
            Sale
          </Badge>
        )}
        
        {/* Quick action buttons that appear on hover */}
        <div 
          className={`absolute inset-0 bg-black/5 flex items-end justify-center p-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex gap-2 w-full transform transition-transform duration-300 translate-y-0 group-hover:translate-y-0">
            <Button 
              variant="default" 
              size="sm" 
              className="flex-1 rounded-full bg-primary text-primary-foreground shadow-md"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="mb-1 flex gap-1">
          {product.featured && (
            <span className="tag bg-primary/10 text-primary text-xs mb-1">Featured</span>
          )}
        </div>
        <h3 className="font-medium text-base">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-auto line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          {product.onSale ? (
            <div className="flex flex-col">
              <span className="text-lg font-medium text-red-500">${product.price.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice?.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-lg font-medium">${product.price.toFixed(2)}</span>
          )}
          <div className="flex items-center">
            <span className="text-sm text-muted-foreground">★ {product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
