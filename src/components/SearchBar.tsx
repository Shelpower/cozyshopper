
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchProducts } from '@/lib/data';
import { Product } from '@/lib/types';

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const navigate = useNavigate();
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length >= 2) {
      const searchResults = searchProducts(value);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };
  
  const handleResultClick = (productId: string) => {
    // In a real app, this would navigate to the product detail page
    console.log(`Navigating to product ${productId}`);
    if (onClose) onClose();
    setQuery('');
    setResults([]);
    
    // For now, this redirects to the products page
    navigate('/products/all');
  };
  
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={handleSearch}
            className="pl-9 w-full"
            autoFocus
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
              onClick={() => setQuery('')}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        {onClose && (
          <Button variant="outline" size="sm" onClick={onClose}>
            Cancel
          </Button>
        )}
      </div>
      
      {results.length > 0 && (
        <div className="max-h-96 overflow-y-auto border rounded-md bg-background shadow-sm animate-slide-in">
          <ul className="divide-y">
            {results.map((product) => (
              <li key={product.id} className="p-3 hover:bg-accent/50 cursor-pointer transition-colors" onClick={() => handleResultClick(product.id)}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-md overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {query.length >= 2 && results.length === 0 && (
        <div className="p-4 text-center text-muted-foreground animate-fade-in">
          No products found for "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;
