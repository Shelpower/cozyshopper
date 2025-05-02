
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/useCart';
import { Search, ShoppingBag, Menu, X, Home, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';
import { useTheme } from '@/lib/useTheme';

const Navbar = () => {
  const { totalItems, toggleCart } = useCart();
  const { theme } = useTheme();
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
        isScrolled 
          ? 'py-3 bg-background/95 backdrop-blur-md border-b shadow-sm' 
          : 'py-5 bg-gradient-to-b from-background/90 via-background/70 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-medium text-xl tracking-tight flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          <span>QualityDecor</span>
        </Link>
        
        {/* Desktop Navigation - Fisheye effect with CSS scale transform */}
        <nav className="hidden md:flex space-x-8">
          <div className="fisheye-menu flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 fisheye-item"
            >
              Home
            </Link>
            <Link 
              to="/products/office" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 fisheye-item"
            >
              Office
            </Link>
            <Link 
              to="/products/furniture" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 fisheye-item"
            >
              Furniture
            </Link>
            <Link 
              to="/products/lighting" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 fisheye-item"
            >
              Lighting
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 fisheye-item"
            >
              About
            </Link>
          </div>
        </nav>
        
        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSearch}
            aria-label="Search"
            className="relative hover:bg-primary/10"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Link to="/settings">
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="Settings"
              className="relative hover:bg-primary/10"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/profile">
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="User profile"
              className="relative hover:bg-primary/10"
            >
              <User className="h-5 w-5" />
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleCart}
            aria-label="Shopping cart"
            className="relative hover:bg-primary/10"
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
            className="md:hidden hover:bg-primary/10"
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
            <Link to="/products/lighting" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Lighting
            </Link>
            <Link to="/about" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/settings" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Settings
            </Link>
            <Link to="/profile" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Profile
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
