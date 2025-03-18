
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/lib/useCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  AlertCircle, 
  CheckCircle2, 
  CreditCard, 
  Home, 
  Truck
} from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  
  // Form states
  const [formData, setFormData] = useState({
    // Shipping info
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    // Payment info
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate shipping info
    if (!formData.fullName || !formData.email || !formData.address || 
        !formData.city || !formData.state || !formData.zipCode) {
      setError('Please fill in all required fields');
      return;
    }
    
    setError('');
    setStep(2);
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate payment info
    if (!formData.cardNumber || !formData.cardName || !formData.expiry || !formData.cvv) {
      setError('Please fill in all payment details');
      return;
    }
    
    // Process payment (simulated)
    setIsProcessing(true);
    setError('');
    
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      clearCart();
    }, 2000);
  };
  
  const handleBackToStore = () => {
    navigate('/products/all');
  };
  
  if (items.length === 0 && !paymentSuccess) {
    return (
      <div className="container px-4 py-24 md:py-32 text-center">
        <h1 className="text-3xl font-medium mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">Add some products to your cart to proceed to checkout.</p>
        <Button onClick={handleBackToStore}>Back to Store</Button>
      </div>
    );
  }
  
  return (
    <div className="container px-4 py-24 md:py-32">
      {paymentSuccess ? (
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 text-primary">
            <CheckCircle2 className="h-16 w-16 mx-auto" />
          </div>
          <h1 className="text-3xl font-medium mb-4">Payment Test Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Your order has been placed successfully. This is a test payment - no actual charges were made.
          </p>
          <div className="flex justify-center">
            <Button onClick={handleBackToStore}>Continue Shopping</Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-medium mb-2">Checkout</h1>
              <div className="flex items-center text-sm">
                <span className={step >= 1 ? 'text-primary' : 'text-muted-foreground'}>Shipping</span>
                <span className="mx-2">→</span>
                <span className={step >= 2 ? 'text-primary' : 'text-muted-foreground'}>Payment</span>
              </div>
            </div>
            
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {step === 1 && (
              <form onSubmit={handleShippingSubmit} className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Home className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-xl font-medium">Shipping Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name*</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email*</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address*</Label>
                  <Input 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City*</Label>
                    <Input 
                      id="city" 
                      name="city" 
                      value={formData.city}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State*</Label>
                    <Input 
                      id="state" 
                      name="state" 
                      value={formData.state}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code*</Label>
                    <Input 
                      id="zipCode" 
                      name="zipCode" 
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full md:w-auto">
                    Continue to Payment
                  </Button>
                </div>
              </form>
            )}
            
            {step === 2 && (
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-xl font-medium">Payment Information</h2>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number*</Label>
                  <Input 
                    id="cardNumber" 
                    name="cardNumber" 
                    placeholder="1234 5678 9012 3456" 
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card*</Label>
                  <Input 
                    id="cardName" 
                    name="cardName" 
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date*</Label>
                    <Input 
                      id="expiry" 
                      name="expiry" 
                      placeholder="MM/YY" 
                      value={formData.expiry}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV*</Label>
                    <Input 
                      id="cvv" 
                      name="cvv" 
                      placeholder="123" 
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="pt-4 flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" disabled={isProcessing}>
                    {isProcessing ? 'Processing...' : 'Complete Purchase'}
                  </Button>
                </div>
              </form>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <div className="flex gap-2">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium line-clamp-1">{item.product.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>${(total * 0.08).toFixed(2)}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${(total + (total * 0.08)).toFixed(2)}</span>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4" />
                <span>Free shipping on all orders</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
