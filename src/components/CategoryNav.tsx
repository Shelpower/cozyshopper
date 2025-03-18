
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { categoryNavItems } from '@/lib/data';
import { Category } from '@/lib/types';

interface CategoryNavProps {
  onSelectCategory?: (category: Category | 'all') => void;
  className?: string;
}

const CategoryNav = ({ onSelectCategory, className = '' }: CategoryNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Determine active category from path or use 'all' as default
  const getActiveCategoryFromPath = (): Category | 'all' => {
    if (currentPath.includes('/products/')) {
      const categoryParam = currentPath.split('/products/')[1];
      if (categoryNavItems.some(item => item.filter === categoryParam)) {
        return categoryParam as Category | 'all';
      }
    }
    return 'all';
  };
  
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>(getActiveCategoryFromPath());
  
  const handleCategoryClick = (category: Category | 'all') => {
    setActiveCategory(category);
    
    if (onSelectCategory) {
      onSelectCategory(category);
    } else {
      navigate(`/products/${category}`);
    }
  };
  
  return (
    <nav className={`flex flex-wrap gap-2 ${className}`}>
      {categoryNavItems.map((item) => (
        <Button
          key={item.name}
          variant={activeCategory === item.filter ? "default" : "outline"}
          size="sm"
          className="rounded-full transition-all duration-300"
          onClick={() => handleCategoryClick(item.filter)}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
};

export default CategoryNav;
