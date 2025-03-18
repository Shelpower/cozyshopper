
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/useAuth';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Package, 
  Heart, 
  LogOut, 
  Settings 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="container px-4 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div className="p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <User className="h-10 w-10" />
                </div>
                <h2 className="font-medium text-lg">{user?.name}</h2>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
              
              <div className="mt-6 space-y-2">
                <Button 
                  onClick={() => setActiveTab('profile')}
                  variant={activeTab === 'profile' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button 
                  onClick={() => setActiveTab('orders')}
                  variant={activeTab === 'orders' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button 
                  onClick={() => setActiveTab('wishlist')}
                  variant={activeTab === 'wishlist' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Link to="/settings">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </Link>
                <Button 
                  onClick={logout}
                  variant="ghost" 
                  className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-3">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="border rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-medium mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Full Name</h3>
                    <p>{user?.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Email Address</h3>
                    <p>{user?.email}</p>
                  </div>
                </div>
                <Button className="mt-4">Edit Profile</Button>
              </div>
              
              <div className="border rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-medium mb-4">Saved Addresses</h2>
                <p className="text-muted-foreground">You haven't saved any addresses yet.</p>
                <Button variant="outline" className="mt-4">Add Address</Button>
              </div>
              
              <div className="border rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-medium mb-4">Payment Methods</h2>
                <p className="text-muted-foreground">You haven't saved any payment methods yet.</p>
                <Button variant="outline" className="mt-4">Add Payment Method</Button>
              </div>
            </div>
          )}
          
          {activeTab === 'orders' && (
            <div className="border rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-medium mb-4">Order History</h2>
              <p className="text-muted-foreground">You haven't placed any orders yet.</p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/products/all">Browse Products</Link>
              </Button>
            </div>
          )}
          
          {activeTab === 'wishlist' && (
            <div className="border rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-medium mb-4">Wishlist</h2>
              <p className="text-muted-foreground">Your wishlist is empty.</p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/products/all">Browse Products</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
