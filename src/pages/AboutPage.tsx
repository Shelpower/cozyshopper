
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="container py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium mb-6">About QualityDecor</h1>
        
        <div className="aspect-video overflow-hidden rounded-lg mb-10">
          <img 
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e" 
            alt="Our store" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-medium mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              QualityDecor was founded in 2018 with a simple mission: to provide high-quality, 
              stylish home and office decor at reasonable prices. What started as a small online store 
              has grown into a beloved brand trusted by thousands of customers across the country.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our founder, Jane Smith, noticed a gap in the market for affordable yet stylish home decor 
              that didn't compromise on quality. Drawing from her background in interior design, 
              she curated a collection that combines functionality with aesthetic appeal.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-medium mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="font-medium mb-2">Quality First</h3>
                <p className="text-sm text-muted-foreground">
                  We rigorously test all our products to ensure they meet the highest standards 
                  of durability and performance.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-medium mb-2">Sustainable Practices</h3>
                <p className="text-sm text-muted-foreground">
                  We're committed to reducing our environmental footprint by using eco-friendly 
                  materials and packaging wherever possible.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-medium mb-2">Customer Satisfaction</h3>
                <p className="text-sm text-muted-foreground">
                  Your happiness is our priority. We strive to provide excellent service and 
                  products that exceed your expectations.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-medium mb-4">Our Team</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Behind QualityDecor is a team of passionate individuals who share a love for beautiful spaces. 
              From our product designers to our customer service representatives, everyone plays a vital role 
              in bringing our vision to life.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
                    alt="Jane Smith" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">Jane Smith</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                    alt="John Doe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-sm text-muted-foreground">Design Director</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">Head of Customer Experience</p>
              </div>
            </div>
          </section>
          
          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-medium mb-4">Join Our Journey</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We're always looking for talented individuals who share our passion for beautiful, 
              functional spaces. Check out our current openings or drop us a line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default">
                <Link to="/careers">View Careers</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
