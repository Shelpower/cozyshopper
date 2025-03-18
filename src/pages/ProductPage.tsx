
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '@/lib/data';
import { Product } from '@/lib/types';
import CategoryNav from '@/components/CategoryNav';
import ProductGrid from '@/components/ProductGrid';

const ProductPage = () => {
  const { category = 'all' } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    setLoading(true);
    setTimeout(() => {
      const fetchedProducts = getProductsByCategory(category);
      setProducts(fetchedProducts);
      setLoading(false);
      
      // Scroll to top when category changes
      window.scrollTo(0, 0);
    }, 300);
  }, [category]);
  
  const handleCategoryChange = (newCategory: string) => {
    // This function is handled by the router via CategoryNav component
    console.log('Category selected:', newCategory);
  };
  
  // Format category name for display
  const getCategoryTitle = () => {
    if (category === 'all') return 'All Products';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  return (
    <div className="container px-4 py-24 md:py-32">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">{getCategoryTitle()}</h1>
        <p className="mt-4 text-muted-foreground">
          Browse our collection of {category === 'all' ? 'products' : category} for your home and office.
        </p>
      </div>
      
      <CategoryNav onSelectCategory={handleCategoryChange} className="mb-8" />
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-muted rounded-lg aspect-square mb-4"></div>
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
};

export default ProductPage;
