
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="inline-block tag border-primary/20 bg-primary/10 text-primary mb-2">
                New Arrivals
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                Modern designs for modern spaces
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-md">
                Elevate your home and office with our curated collection of modern, minimalist decor.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/products/all">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/products/furniture">
                  Explore Furniture
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-lg animate-scale">
            <img
              src="https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800&auto=format&fit=crop&q=80"
              alt="Modern home office setup"
              className="object-cover w-full h-full"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
