
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import { getFeaturedProducts } from '@/lib/data';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Categories section */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-muted/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
            <div>
              <h2 className="section-title">Shop by Category</h2>
              <p className="section-subtitle">Explore our collections by category</p>
            </div>
            <Button asChild variant="link" size="sm" className="mt-2 md:mt-0">
              <Link to="/products/all">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/products/office" 
              className="group relative overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-all duration-300"
            >
              <img 
                src="https://images.unsplash.com/photo-1505843490578-27c7dfbd7f1d" 
                alt="Home Office" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-medium">Home Office</h3>
                  <p className="text-white/80 text-sm">Create a productive workspace</p>
                </div>
              </div>
            </Link>
            
            <Link 
              to="/products/furniture" 
              className="group relative overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-all duration-300"
            >
              <img 
                src="https://images.unsplash.com/photo-1577140917170-285929fb55b7" 
                alt="Furniture" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-medium">Furniture</h3>
                  <p className="text-white/80 text-sm">Stylish and functional pieces</p>
                </div>
              </div>
            </Link>
            
            <Link 
              to="/products/lighting" 
              className="group relative overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-all duration-300"
            >
              <img 
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4" 
                alt="Lighting" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-medium">Lighting</h3>
                  <p className="text-white/80 text-sm">Illuminate your space</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured products section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">Curated selection of our best items</p>
            </div>
            <Button asChild variant="link" size="sm" className="mt-2 md:mt-0">
              <Link to="/products/all">
                View All Products <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      
      {/* Design philosophy section */}
      <section className="py-16 bg-gradient-to-b from-muted/10 to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">Our Design Philosophy</h2>
              <p className="text-muted-foreground mb-6">
                We believe in creating spaces that inspire creativity and productivity. Our curated collection 
                of home and office decor follows the principles of minimalist design – functional, beautiful, 
                and built to last.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Premium quality materials that stand the test of time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Thoughtful design that balances form and function</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Sustainable manufacturing practices for a better planet</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6" 
                alt="Modern interior design" 
                className="rounded-lg aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter section */}
      <section className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <span className="tag mb-2">Newsletter</span>
          <h2 className="section-title mb-3">Subscribe for Updates</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Stay informed about new arrivals, exclusive offers, and design inspiration.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            />
            <Button type="submit" className="h-10">Subscribe</Button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">
            By subscribing, you agree to our privacy policy and consent to receive updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
