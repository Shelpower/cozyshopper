
import { useState, useEffect } from 'react';
import { useTheme } from '@/lib/useTheme';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Moon, Sun, PanelLeft, Laptop } from 'lucide-react';

type FontSize = 'small' | 'medium' | 'large';

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [reduceMotion, setReduceMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  
  // Load user preferences from localStorage on init
  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize') as FontSize | null;
    const savedReduceMotion = localStorage.getItem('reduceMotion') === 'true';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    
    if (savedFontSize) setFontSize(savedFontSize);
    if (savedReduceMotion !== null) setReduceMotion(savedReduceMotion);
    if (savedHighContrast !== null) setHighContrast(savedHighContrast);
    
    // Apply font size to html element
    applyFontSize(savedFontSize || 'medium');
  }, []);
  
  const handleFontSizeChange = (value: string) => {
    const newSize = value as FontSize;
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyFontSize(newSize);
    toast.success(`Font size changed to ${newSize}`);
  };
  
  const applyFontSize = (size: FontSize) => {
    const html = document.documentElement;
    
    // Remove existing font size classes
    html.classList.remove('text-sm', 'text-base', 'text-lg');
    
    // Add appropriate class based on selected size
    switch(size) {
      case 'small':
        html.classList.add('text-sm');
        break;
      case 'medium':
        html.classList.add('text-base');
        break;
      case 'large':
        html.classList.add('text-lg');
        break;
    }
  };
  
  const handleReduceMotionChange = (checked: boolean) => {
    setReduceMotion(checked);
    localStorage.setItem('reduceMotion', String(checked));
    
    const html = document.documentElement;
    if (checked) {
      html.classList.add('reduce-motion');
    } else {
      html.classList.remove('reduce-motion');
    }
    
    toast.success(`Motion ${checked ? 'reduced' : 'enabled'}`);
  };
  
  const handleHighContrastChange = (checked: boolean) => {
    setHighContrast(checked);
    localStorage.setItem('highContrast', String(checked));
    
    const html = document.documentElement;
    if (checked) {
      html.classList.add('high-contrast');
    } else {
      html.classList.remove('high-contrast');
    }
    
    toast.success(`High contrast mode ${checked ? 'enabled' : 'disabled'}`);
  };
  
  return (
    <div className="container px-4 py-24 md:py-32">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium mb-8">Settings</h1>
        
        <div className="space-y-10">
          {/* Appearance */}
          <div>
            <h2 className="text-xl font-medium mb-6">Appearance</h2>
            <div className="space-y-6">
              {/* Theme Selector */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Label className="text-base">Theme</Label>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    className="flex-col h-24 py-6"
                    onClick={() => setTheme('light')}
                  >
                    <Sun className="h-6 w-6 mb-2" />
                    <span>Light</span>
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    className="flex-col h-24 py-6"
                    onClick={() => setTheme('dark')}
                  >
                    <Moon className="h-6 w-6 mb-2" />
                    <span>Dark</span>
                  </Button>
                  <Button
                    variant={theme === 'system' ? 'default' : 'outline'}
                    className="flex-col h-24 py-6"
                    onClick={() => setTheme('system')}
                  >
                    <Laptop className="h-6 w-6 mb-2" />
                    <span>System</span>
                  </Button>
                </div>
              </div>
              
              {/* Font Size */}
              <div>
                <Label className="text-base mb-4 block">Font Size</Label>
                <RadioGroup 
                  value={fontSize} 
                  onValueChange={handleFontSizeChange} 
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="small" />
                    <Label htmlFor="small">Small</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="large" />
                    <Label htmlFor="large">Large</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          
          {/* Accessibility */}
          <div>
            <h2 className="text-xl font-medium mb-6">Accessibility</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="reduce-motion" className="text-base">Reduce Motion</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Minimize animation and movement
                  </p>
                </div>
                <Switch 
                  id="reduce-motion" 
                  checked={reduceMotion} 
                  onCheckedChange={handleReduceMotionChange}
                />
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div>
                  <Label htmlFor="high-contrast" className="text-base">High Contrast</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Increase contrast for better readability
                  </p>
                </div>
                <Switch 
                  id="high-contrast" 
                  checked={highContrast} 
                  onCheckedChange={handleHighContrastChange}
                />
              </div>
            </div>
          </div>
          
          {/* Privacy */}
          <div>
            <h2 className="text-xl font-medium mb-6">Privacy</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="analytics" className="text-base">Usage Analytics</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Help us improve by sharing anonymous usage data
                  </p>
                </div>
                <Switch id="analytics" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div>
                  <Label htmlFor="cookies" className="text-base">Accept Cookies</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Allow cookies for personalized experience
                  </p>
                </div>
                <Switch id="cookies" defaultChecked />
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="pt-4">
            <Button onClick={() => toast.success('Settings saved successfully')}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
