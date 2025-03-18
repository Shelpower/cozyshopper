
import { useState, useEffect } from 'react';
import { useTheme } from '@/lib/useTheme';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { toast } from 'sonner';
import { Moon, Sun, Laptop, Eye, Type, TextCursorInput, Brush, Contrast, PanelLeft, Volume2, Bell, Languages } from 'lucide-react';

type FontSize = 'small' | 'medium' | 'large';
type ColorTheme = 'default' | 'blue' | 'purple' | 'green';
type Language = 'english' | 'spanish' | 'french' | 'german';

// Translation data for different languages
const translations = {
  english: {
    settings: "Settings",
    appearance: "Appearance",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    colorAccents: "Color Accents",
    fontSize: "Font Size",
    small: "Small",
    medium: "Medium",
    large: "Large",
    accessibility: "Accessibility",
    reduceMotion: "Reduce Motion",
    reduceMotionDesc: "Minimize animation and movement",
    highContrast: "High Contrast",
    highContrastDesc: "Increase contrast for better readability",
    dyslexiaFont: "Dyslexia-friendly Font",
    dyslexiaFontDesc: "Use a more readable font for dyslexic users",
    lineSpacing: "Line Spacing",
    tight: "Tight",
    normal: "Normal",
    relaxed: "Relaxed",
    loose: "Loose",
    notifications: "Notifications",
    enableNotifications: "Enable Notifications",
    notificationsDesc: "Receive alerts about order updates and promotions",
    soundEffects: "Sound Effects",
    soundEffectsDesc: "Enable sound feedback for interactions",
    languageRegion: "Language & Region",
    preferredLanguage: "Preferred Language",
    privacy: "Privacy",
    analytics: "Usage Analytics",
    analyticsDesc: "Help us improve by sharing anonymous usage data",
    cookies: "Accept Cookies",
    cookiesDesc: "Allow cookies for personalized experience",
    saveChanges: "Save Changes"
  },
  spanish: {
    settings: "Configuración",
    appearance: "Apariencia",
    theme: "Tema",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    colorAccents: "Acentos de Color",
    fontSize: "Tamaño de Fuente",
    small: "Pequeño",
    medium: "Mediano",
    large: "Grande",
    accessibility: "Accesibilidad",
    reduceMotion: "Reducir Movimiento",
    reduceMotionDesc: "Minimizar animaciones y movimientos",
    highContrast: "Alto Contraste",
    highContrastDesc: "Aumentar el contraste para mejor legibilidad",
    dyslexiaFont: "Fuente para Dislexia",
    dyslexiaFontDesc: "Usar una fuente más legible para usuarios con dislexia",
    lineSpacing: "Espaciado de Línea",
    tight: "Estrecho",
    normal: "Normal",
    relaxed: "Relajado",
    loose: "Amplio",
    notifications: "Notificaciones",
    enableNotifications: "Activar Notificaciones",
    notificationsDesc: "Recibir alertas sobre actualizaciones de pedidos y promociones",
    soundEffects: "Efectos de Sonido",
    soundEffectsDesc: "Activar retroalimentación sonora para interacciones",
    languageRegion: "Idioma y Región",
    preferredLanguage: "Idioma Preferido",
    privacy: "Privacidad",
    analytics: "Análisis de Uso",
    analyticsDesc: "Ayúdanos a mejorar compartiendo datos anónimos de uso",
    cookies: "Aceptar Cookies",
    cookiesDesc: "Permitir cookies para una experiencia personalizada",
    saveChanges: "Guardar Cambios"
  },
  french: {
    settings: "Paramètres",
    appearance: "Apparence",
    theme: "Thème",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
    colorAccents: "Accents de Couleur",
    fontSize: "Taille de Police",
    small: "Petit",
    medium: "Moyen",
    large: "Grand",
    accessibility: "Accessibilité",
    reduceMotion: "Réduire les Mouvements",
    reduceMotionDesc: "Minimiser les animations et mouvements",
    highContrast: "Contraste Élevé",
    highContrastDesc: "Augmenter le contraste pour une meilleure lisibilité",
    dyslexiaFont: "Police pour Dyslexie",
    dyslexiaFontDesc: "Utiliser une police plus lisible pour les utilisateurs dyslexiques",
    lineSpacing: "Espacement des Lignes",
    tight: "Serré",
    normal: "Normal",
    relaxed: "Détendu",
    loose: "Large",
    notifications: "Notifications",
    enableNotifications: "Activer les Notifications",
    notificationsDesc: "Recevoir des alertes sur les mises à jour de commandes et promotions",
    soundEffects: "Effets Sonores",
    soundEffectsDesc: "Activer les retours sonores pour les interactions",
    languageRegion: "Langue et Région",
    preferredLanguage: "Langue Préférée",
    privacy: "Confidentialité",
    analytics: "Analyse d'Utilisation",
    analyticsDesc: "Aidez-nous à améliorer en partageant des données d'utilisation anonymes",
    cookies: "Accepter les Cookies",
    cookiesDesc: "Autoriser les cookies pour une expérience personnalisée",
    saveChanges: "Enregistrer les Modifications"
  },
  german: {
    settings: "Einstellungen",
    appearance: "Erscheinungsbild",
    theme: "Thema",
    light: "Hell",
    dark: "Dunkel",
    system: "System",
    colorAccents: "Farbakzente",
    fontSize: "Schriftgröße",
    small: "Klein",
    medium: "Mittel",
    large: "Groß",
    accessibility: "Barrierefreiheit",
    reduceMotion: "Bewegungen Reduzieren",
    reduceMotionDesc: "Animationen und Bewegungen minimieren",
    highContrast: "Hoher Kontrast",
    highContrastDesc: "Kontrast für bessere Lesbarkeit erhöhen",
    dyslexiaFont: "Legasthenie-freundliche Schrift",
    dyslexiaFontDesc: "Eine besser lesbare Schrift für Legastheniker verwenden",
    lineSpacing: "Zeilenabstand",
    tight: "Eng",
    normal: "Normal",
    relaxed: "Entspannt",
    loose: "Weit",
    notifications: "Benachrichtigungen",
    enableNotifications: "Benachrichtigungen Aktivieren",
    notificationsDesc: "Erhalten Sie Benachrichtigungen über Bestellupdates und Aktionen",
    soundEffects: "Soundeffekte",
    soundEffectsDesc: "Akustische Rückmeldung für Interaktionen aktivieren",
    languageRegion: "Sprache & Region",
    preferredLanguage: "Bevorzugte Sprache",
    privacy: "Datenschutz",
    analytics: "Nutzungsanalyse",
    analyticsDesc: "Helfen Sie uns zu verbessern, indem Sie anonyme Nutzungsdaten teilen",
    cookies: "Cookies Akzeptieren",
    cookiesDesc: "Cookies für ein personalisiertes Erlebnis zulassen",
    saveChanges: "Änderungen Speichern"
  }
};

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [reduceMotion, setReduceMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [colorTheme, setColorTheme] = useState<ColorTheme>('default');
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [lineSpacing, setLineSpacing] = useState('normal');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [language, setLanguage] = useState<Language>('english');
  const [t, setT] = useState(translations.english);
  
  // Load user preferences from localStorage on init
  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize') as FontSize | null;
    const savedReduceMotion = localStorage.getItem('reduceMotion') === 'true';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedColorTheme = localStorage.getItem('colorTheme') as ColorTheme | null;
    const savedDyslexiaFont = localStorage.getItem('dyslexiaFont') === 'true';
    const savedLineSpacing = localStorage.getItem('lineSpacing') || 'normal';
    const savedNotifications = localStorage.getItem('notifications') !== 'false';
    const savedSound = localStorage.getItem('sound') !== 'false';
    const savedLanguage = localStorage.getItem('language') as Language || 'english';
    
    if (savedFontSize) setFontSize(savedFontSize);
    if (savedReduceMotion !== null) setReduceMotion(savedReduceMotion);
    if (savedHighContrast !== null) setHighContrast(savedHighContrast);
    if (savedColorTheme) setColorTheme(savedColorTheme);
    if (savedDyslexiaFont !== null) setDyslexiaFont(savedDyslexiaFont);
    if (savedLineSpacing) setLineSpacing(savedLineSpacing);
    if (savedNotifications !== null) setNotificationsEnabled(savedNotifications);
    if (savedSound !== null) setSoundEnabled(savedSound);
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setT(translations[savedLanguage]);
    }
    
    // Apply settings on load
    applyFontSize(savedFontSize || 'medium');
    applyColorTheme(savedColorTheme || 'default');
    if (savedDyslexiaFont) applyDyslexiaFont(true);
    if (savedLineSpacing) applyLineSpacing(savedLineSpacing);
    
    // Set HTML lang attribute based on saved language
    document.documentElement.lang = savedLanguage || 'en';
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

  const handleColorThemeChange = (value: string) => {
    const newTheme = value as ColorTheme;
    setColorTheme(newTheme);
    localStorage.setItem('colorTheme', newTheme);
    applyColorTheme(newTheme);
    toast.success(`Color theme changed to ${newTheme}`);
  };

  const applyColorTheme = (theme: ColorTheme) => {
    const html = document.documentElement;
    
    // Remove existing theme classes
    html.classList.remove('theme-default', 'theme-blue', 'theme-purple', 'theme-green');
    
    // Add new theme class
    html.classList.add(`theme-${theme}`);
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

  const handleDyslexiaFontChange = (checked: boolean) => {
    setDyslexiaFont(checked);
    localStorage.setItem('dyslexiaFont', String(checked));
    applyDyslexiaFont(checked);
    
    toast.success(`Dyslexia-friendly font ${checked ? 'enabled' : 'disabled'}`);
  };

  const applyDyslexiaFont = (enabled: boolean) => {
    const html = document.documentElement;
    if (enabled) {
      html.classList.add('dyslexia-font');
    } else {
      html.classList.remove('dyslexia-font');
    }
  };

  const handleLineSpacingChange = (value: string) => {
    setLineSpacing(value);
    localStorage.setItem('lineSpacing', value);
    applyLineSpacing(value);
    
    toast.success(`Line spacing changed to ${value}`);
  };

  const applyLineSpacing = (spacing: string) => {
    const html = document.documentElement;
    
    // Remove existing line spacing classes
    html.classList.remove('line-spacing-tight', 'line-spacing-normal', 'line-spacing-relaxed', 'line-spacing-loose');
    
    // Add new line spacing class
    html.classList.add(`line-spacing-${spacing}`);
  };

  const handleNotificationsChange = (checked: boolean) => {
    setNotificationsEnabled(checked);
    localStorage.setItem('notifications', String(checked));
    toast.success(`Notifications ${checked ? 'enabled' : 'disabled'}`);
  };

  const handleSoundChange = (checked: boolean) => {
    setSoundEnabled(checked);
    localStorage.setItem('sound', String(checked));
    toast.success(`Sound effects ${checked ? 'enabled' : 'disabled'}`);
  };

  const handleLanguageChange = (value: string) => {
    const newLanguage = value as Language;
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    
    // Update translations
    setT(translations[newLanguage]);
    
    // Set HTML lang attribute
    const langCode = {
      english: 'en',
      spanish: 'es',
      french: 'fr',
      german: 'de'
    }[newLanguage];
    
    document.documentElement.lang = langCode;
    
    toast.success(`Language changed to ${newLanguage}`);
  };
  
  return (
    <div className="container px-4 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium mb-8">{t.settings}</h1>
        
        <div className="space-y-10">
          {/* Appearance */}
          <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-100/50 dark:border-blue-800/50">
            <h2 className="text-xl font-medium mb-6 flex items-center">
              <Brush className="mr-2 h-5 w-5 text-blue-500" />
              {t.appearance}
            </h2>
            <div className="space-y-6">
              {/* Theme Selector */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Label className="text-base">{t.theme}</Label>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    className="flex-col h-24 py-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900"
                    onClick={() => setTheme('light')}
                  >
                    <Sun className="h-6 w-6 mb-2 text-amber-500" />
                    <span>{t.light}</span>
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    className="flex-col h-24 py-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
                    onClick={() => setTheme('dark')}
                  >
                    <Moon className="h-6 w-6 mb-2 text-indigo-400" />
                    <span>{t.dark}</span>
                  </Button>
                  <Button
                    variant={theme === 'system' ? 'default' : 'outline'}
                    className="flex-col h-24 py-6 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"
                    onClick={() => setTheme('system')}
                  >
                    <Laptop className="h-6 w-6 mb-2 text-gray-600 dark:text-gray-300" />
                    <span>{t.system}</span>
                  </Button>
                </div>
              </div>

              {/* Color Theme */}
              <div>
                <Label className="text-base mb-4 block">{t.colorAccents}</Label>
                <ToggleGroup type="single" value={colorTheme} onValueChange={handleColorThemeChange} className="flex flex-wrap justify-start gap-2">
                  <ToggleGroupItem value="default" className="bg-white dark:bg-gray-800 border h-10 w-10 rounded-full p-1">
                    <span className="block w-full h-full rounded-full bg-primary"></span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="blue" className="bg-white dark:bg-gray-800 border h-10 w-10 rounded-full p-1">
                    <span className="block w-full h-full rounded-full bg-blue-500"></span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="purple" className="bg-white dark:bg-gray-800 border h-10 w-10 rounded-full p-1">
                    <span className="block w-full h-full rounded-full bg-purple-500"></span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="green" className="bg-white dark:bg-gray-800 border h-10 w-10 rounded-full p-1">
                    <span className="block w-full h-full rounded-full bg-green-500"></span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              
              {/* Font Size */}
              <div>
                <Label className="text-base mb-4 block flex items-center">
                  <Type className="mr-2 h-4 w-4 text-blue-500" />
                  {t.fontSize}
                </Label>
                <RadioGroup 
                  value={fontSize} 
                  onValueChange={handleFontSizeChange} 
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="small" />
                    <Label htmlFor="small">{t.small}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">{t.medium}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="large" />
                    <Label htmlFor="large">{t.large}</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          
          {/* Accessibility */}
          <div className="bg-gradient-to-r from-green-50/50 to-teal-50/50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-green-100/50 dark:border-green-800/50">
            <h2 className="text-xl font-medium mb-6 flex items-center">
              <Eye className="mr-2 h-5 w-5 text-green-500" />
              {t.accessibility}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="reduce-motion" className="text-base flex items-center">
                    <PanelLeft className="mr-2 h-4 w-4 text-green-500" />
                    {t.reduceMotion}
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.reduceMotionDesc}
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
                  <Label htmlFor="high-contrast" className="text-base flex items-center">
                    <Contrast className="mr-2 h-4 w-4 text-green-500" />
                    {t.highContrast}
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.highContrastDesc}
                  </p>
                </div>
                <Switch 
                  id="high-contrast" 
                  checked={highContrast} 
                  onCheckedChange={handleHighContrastChange}
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <Label htmlFor="dyslexia-font" className="text-base flex items-center">
                    <TextCursorInput className="mr-2 h-4 w-4 text-green-500" />
                    {t.dyslexiaFont}
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.dyslexiaFontDesc}
                  </p>
                </div>
                <Switch 
                  id="dyslexia-font" 
                  checked={dyslexiaFont} 
                  onCheckedChange={handleDyslexiaFontChange}
                />
              </div>

              <div className="pt-2">
                <Label className="text-base mb-2 block">{t.lineSpacing}</Label>
                <ToggleGroup type="single" value={lineSpacing} onValueChange={handleLineSpacingChange} className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <ToggleGroupItem value="tight">{t.tight}</ToggleGroupItem>
                  <ToggleGroupItem value="normal">{t.normal}</ToggleGroupItem>
                  <ToggleGroupItem value="relaxed">{t.relaxed}</ToggleGroupItem>
                  <ToggleGroupItem value="loose">{t.loose}</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-amber-100/50 dark:border-amber-800/50">
            <h2 className="text-xl font-medium mb-6 flex items-center">
              <Bell className="mr-2 h-5 w-5 text-amber-500" />
              {t.notifications}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="notifications" className="text-base">{t.enableNotifications}</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.notificationsDesc}
                  </p>
                </div>
                <Switch 
                  id="notifications" 
                  checked={notificationsEnabled} 
                  onCheckedChange={handleNotificationsChange}
                />
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div>
                  <Label htmlFor="sound" className="text-base flex items-center">
                    <Volume2 className="mr-2 h-4 w-4 text-amber-500" />
                    {t.soundEffects}
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.soundEffectsDesc}
                  </p>
                </div>
                <Switch 
                  id="sound" 
                  checked={soundEnabled} 
                  onCheckedChange={handleSoundChange}
                />
              </div>
            </div>
          </div>
          
          {/* Language Settings */}
          <div className="bg-gradient-to-r from-indigo-50/50 to-violet-50/50 dark:from-indigo-900/20 dark:to-violet-900/20 p-6 rounded-lg border border-indigo-100/50 dark:border-indigo-800/50">
            <h2 className="text-xl font-medium mb-6 flex items-center">
              <Languages className="mr-2 h-5 w-5 text-indigo-500" />
              {t.languageRegion}
            </h2>
            <div className="space-y-4">
              <Label className="text-base mb-2 block">{t.preferredLanguage}</Label>
              <ToggleGroup type="single" value={language} onValueChange={handleLanguageChange} className="flex flex-wrap gap-2">
                <ToggleGroupItem value="english">English</ToggleGroupItem>
                <ToggleGroupItem value="spanish">Español</ToggleGroupItem>
                <ToggleGroupItem value="french">Français</ToggleGroupItem>
                <ToggleGroupItem value="german">Deutsch</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          
          {/* Privacy */}
          <div className="bg-gradient-to-r from-slate-50/50 to-gray-50/50 dark:from-slate-900/20 dark:to-gray-900/20 p-6 rounded-lg border border-slate-100/50 dark:border-slate-800/50">
            <h2 className="text-xl font-medium mb-6">{t.privacy}</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="analytics" className="text-base">{t.analytics}</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.analyticsDesc}
                  </p>
                </div>
                <Switch id="analytics" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div>
                  <Label htmlFor="cookies" className="text-base">{t.cookies}</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.cookiesDesc}
                  </p>
                </div>
                <Switch id="cookies" defaultChecked />
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="pt-4">
            <Button 
              onClick={() => toast.success(language === 'english' ? 'Settings saved successfully' : 'Configuración guardada exitosamente')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              {t.saveChanges}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
