
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-gradient-to-b from-muted/30 to-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products/all" className="text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/products/office" className="text-muted-foreground hover:text-foreground transition-colors">Home Office</Link></li>
              <li><Link to="/products/furniture" className="text-muted-foreground hover:text-foreground transition-colors">Furniture</Link></li>
              <li><Link to="/products/lighting" className="text-muted-foreground hover:text-foreground transition-colors">Lighting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/refund" className="text-muted-foreground hover:text-foreground transition-colors">Refund Policy</Link></li>
              <li><Link to="/legal/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:info@qualitydecor.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@qualitydecor.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <address className="text-muted-foreground not-italic">
                  123 Decor Street<br />
                  New York, NY 10001<br />
                  United States
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Link to="/" className="font-medium text-xl tracking-tight flex items-center gap-2">
              QualityDecor
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors rounded-full p-2">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors rounded-full p-2">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors rounded-full p-2">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors rounded-full p-2">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors rounded-full p-2">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} QualityDecor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
