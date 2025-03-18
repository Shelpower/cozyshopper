
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/useCart';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { totalItems, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Check if page is scrolled for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-6 ${
        isScrolled ? 'py-3 frosted-glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-medium text-xl tracking-tight">
          HomeDecor
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Home
          </Link>
          <Link to="/products/office" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Office
          </Link>
          <Link to="/products/furniture" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Furniture
          </Link>
          <Link to="/products/accessories" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Accessories
          </Link>
        </nav>
        
        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSearch}
            aria-label="Search"
            className="relative"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleCart}
            aria-label="Shopping cart"
            className="relative"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products/office" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Office
            </Link>
            <Link to="/products/furniture" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Furniture
            </Link>
            <Link to="/products/accessories" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Accessories
            </Link>
          </nav>
        </div>
      )}
      
      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 p-4 bg-background border-b border-border animate-fade-in">
          <SearchBar onClose={toggleSearch} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
