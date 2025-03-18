
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/useCart';
import { Search, ShoppingBag, Menu, X, Home, User, Settings, Sun, Moon, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';
import { useTheme } from '@/lib/useTheme';

const Navbar = () => {
  const { totalItems, toggleCart } = useCart();
  const { theme, setTheme } = useTheme();
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
          ? 'py-3 bg-background/95 backdrop-blur-md border-b' 
          : 'py-5 bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm'
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
              to="/products/accessories" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 fisheye-item"
            >
              Accessories
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
        
        {/* Social media icons - Desktop only */}
        <div className="hidden md:flex items-center space-x-3 mr-4">
          <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
        
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
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="relative hover:bg-primary/10"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
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
            <Link to="/products/accessories" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Accessories
            </Link>
            <Link to="/products/lighting" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Lighting
            </Link>
            <Link to="/about" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/profile" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Profile
            </Link>
            <Link to="/settings" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Settings
            </Link>
            
            {/* Social media icons - Mobile only */}
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
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
