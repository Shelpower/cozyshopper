
import { useState } from 'react';
import { useTheme } from '@/lib/useTheme';
import { useAuth } from '@/lib/useAuth';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Sun, 
  Moon, 
  Monitor, 
  Eye,
  ZoomIn,
  Move,
  Palette
} from 'lucide-react';
import { Navigate } from 'react-router-dom';

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const { user, isAuthenticated } = useAuth();
  const [fontSize, setFontSize] = useState(user?.preferences.fontSize || 'medium');
  const [reduceMotion, setReduceMotion] = useState(user?.preferences.reduceMotion || false);
  const [highContrast, setHighContrast] = useState(user?.preferences.highContrast || false);
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
    document.documentElement.style.fontSize = 
      size === 'small' ? '14px' : 
      size === 'large' ? '18px' : '16px';
  };
  
  const handleReduceMotionChange = (checked: boolean) => {
    setReduceMotion(checked);
    if (checked) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  };
  
  const handleHighContrastChange = (checked: boolean) => {
    setHighContrast(checked);
    if (checked) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };
  
  return (
    <div className="container px-4 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-medium mb-6">Settings</h1>
        
        <div className="space-y-10">
          {/* Theme Settings */}
          <div className="border rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="h-5 w-5" />
              <h2 className="text-xl font-medium">Theme Settings</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Appearance</h3>
                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    onClick={() => setTheme('light')}
                    variant={theme === 'light' ? 'default' : 'outline'} 
                    className="h-auto py-6 flex flex-col gap-1"
                  >
                    <Sun className="h-5 w-5" />
                    <span>Light</span>
                  </Button>
                  <Button 
                    onClick={() => setTheme('dark')}
                    variant={theme === 'dark' ? 'default' : 'outline'} 
                    className="h-auto py-6 flex flex-col gap-1"
                  >
                    <Moon className="h-5 w-5" />
                    <span>Dark</span>
                  </Button>
                  <Button 
                    onClick={() => setTheme('system')}
                    variant={theme === 'system' ? 'default' : 'outline'} 
                    className="h-auto py-6 flex flex-col gap-1"
                  >
                    <Monitor className="h-5 w-5" />
                    <span>System</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Accessibility Settings */}
          <div className="border rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <Eye className="h-5 w-5" />
              <h2 className="text-xl font-medium">Accessibility</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Font Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    onClick={() => handleFontSizeChange('small')}
                    variant={fontSize === 'small' ? 'default' : 'outline'} 
                    className="relative"
                  >
                    <span className="text-sm">Small</span>
                  </Button>
                  <Button 
                    onClick={() => handleFontSizeChange('medium')}
                    variant={fontSize === 'medium' ? 'default' : 'outline'} 
                    className="relative"
                  >
                    <span className="text-base">Medium</span>
                  </Button>
                  <Button 
                    onClick={() => handleFontSizeChange('large')}
                    variant={fontSize === 'large' ? 'default' : 'outline'} 
                    className="relative"
                  >
                    <span className="text-lg">Large</span>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Move className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="reduce-motion">Reduce motion</Label>
                </div>
                <Switch 
                  id="reduce-motion" 
                  checked={reduceMotion} 
                  onCheckedChange={handleReduceMotionChange}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ZoomIn className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="high-contrast">High contrast</Label>
                </div>
                <Switch 
                  id="high-contrast" 
                  checked={highContrast} 
                  onCheckedChange={handleHighContrastChange}
                />
              </div>
            </div>
          </div>
          
          {/* Account Settings */}
          <div className="border rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                <p>{user?.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Password</h3>
                <p>••••••••</p>
              </div>
              <Button variant="outline">Change Password</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button className="px-8">Save Settings</Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
