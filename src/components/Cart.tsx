
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/useCart';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    isCartOpen, 
    toggleCart, 
    totalItems, 
    totalPrice 
  } = useCart();
  
  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 animate-fade-in"
          onClick={toggleCart}
          aria-hidden="true"
        />
      )}
      
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-background border-l shadow-lg transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isCartOpen}
      >
        <div className="flex flex-col h-full">
          {/* Cart header */}
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <h2 className="font-medium">Your Cart ({totalItems})</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleCart} aria-label="Close cart">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Cart items */}
          {items.length > 0 ? (
            <ScrollArea className="flex-1 px-4 py-2">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.product.id} className="border-b pb-4">
                    <div className="flex gap-3">
                      <div className="w-20 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium line-clamp-1">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{item.product.category}</p>
                        <div className="mt-1 flex justify-between items-center">
                          <span className="font-medium">${item.product.price.toFixed(2)}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-muted-foreground hover:text-destructive"
                            onClick={() => removeItem(item.product.id)}
                            aria-label={`Remove ${item.product.name} from cart`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-2 flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-r-none"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <div className="px-3 h-7 border-y flex items-center justify-center text-sm min-w-[40px]">
                            {item.quantity}
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-l-none"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-1 mb-4">Add items to get started</p>
              <Button onClick={toggleCart}>Continue Shopping</Button>
            </div>
          )}
          
          {/* Cart footer */}
          {items.length > 0 && (
            <div className="mt-auto border-t p-4 space-y-4">
              <div className="flex justify-between items-center font-medium">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout</p>
              <div className="grid gap-2">
                <Button size="lg" className="w-full" asChild onClick={toggleCart}>
                  <Link to="/checkout">
                    Checkout
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
