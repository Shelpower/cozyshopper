import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, ArrowLeft, Star, Share, Check } from 'lucide-react';
import { useCart } from '@/lib/useCart';
import { products } from '@/lib/data';
import { Product } from '@/lib/types';
import { toast } from 'sonner';
import CategoryNav from '@/components/CategoryNav';
import ProductGrid from '@/components/ProductGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Find product by ID
    const foundProduct = products.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images[0]);
      
      // Get related products (same category, excluding current product)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    setLoading(false);
    window.scrollTo(0, 0);
  }, [productId]);
  
  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      toast.success(`Added ${product.name} to cart`, {
        duration: 2000, // Shorter display time
      });
    }
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  if (loading) {
    return (
      <div className="container px-4 py-24 md:py-32">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg aspect-square"></div>
            <div>
              <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
              <div className="h-24 bg-muted rounded w-full mb-4"></div>
              <div className="h-12 bg-muted rounded w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container px-4 py-24 md:py-32 text-center">
        <h1 className="text-3xl font-medium mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/products/all')}>View All Products</Button>
      </div>
    );
  }
  
  return (
    <div className="container px-4 py-24 md:py-32 animate-fade-in">
      <div className="mb-8">
        <button 
          onClick={handleGoBack}
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to products
        </button>
        
        <CategoryNav className="mb-8" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Product Images */}
        <div>
          <div className="relative rounded-lg overflow-hidden mb-4 aspect-square">
            <img 
              src={mainImage} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
            {product.onSale && (
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Sale
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(image)}
                className={`rounded-md overflow-hidden aspect-square border-2 ${
                  mainImage === image ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
          
          {/* Pricing */}
          <div className="flex items-center mb-4">
            {product.onSale ? (
              <>
                <span className="text-2xl font-medium text-red-500 mr-2">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice?.toFixed(2)}
                </span>
                <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  Save ${(Number(product.originalPrice) - product.price).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-gray-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">{product.rating} out of 5</span>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground mb-8">{product.description}</p>
          
          {/* Stock status */}
          <div className="flex items-center mb-6">
            {product.inStock ? (
              <div className="flex items-center text-green-600">
                <Check className="h-4 w-4 mr-1" />
                <span>In Stock</span>
              </div>
            ) : (
              <div className="text-red-500">Out of Stock</div>
            )}
          </div>
          
          {/* Quantity selector */}
          <div className="flex items-center mb-6">
            <span className="mr-4">Quantity:</span>
            <div className="flex border rounded-md">
              <button 
                className="px-3 py-1 border-r" 
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button 
                className="px-3 py-1 border-l" 
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12"
              aria-label="Add to wishlist"
            >
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12"
              aria-label="Share"
            >
              <Share className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Additional info */}
          <div className="border-t pt-6">
            <Tabs defaultValue="details">
              <TabsList className="w-full justify-start mb-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                <TabsTrigger value="returns">Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li><strong>Category:</strong> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</li>
                  <li><strong>Tags:</strong> {product.tags.join(', ')}</li>
                  <li><strong>Features:</strong> Premium quality, durable materials, modern design</li>
                </ul>
              </TabsContent>
              <TabsContent value="shipping" className="text-sm text-muted-foreground">
                <p>Free shipping on all orders over $50. Standard delivery takes 3-5 business days.</p>
                <p className="mt-2">Express shipping available at checkout for an additional fee.</p>
              </TabsContent>
              <TabsContent value="returns" className="text-sm text-muted-foreground">
                <p>We accept returns within 30 days of delivery for a full refund or exchange.</p>
                <p className="mt-2">Items must be unused and in original packaging.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-medium mb-6">You may also like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
