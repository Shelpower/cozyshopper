
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');
  
  return (
    <div className="container py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium mb-6">Legal Information</h1>
        <p className="text-muted-foreground mb-10">
          Important information about our policies, terms, and how we handle your data.
        </p>
        
        <Tabs defaultValue="privacy" onValueChange={setActiveTab} value={activeTab}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
            <TabsTrigger value="cookies">Cookie Policy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="privacy" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Privacy Policy</h2>
              <p className="text-sm text-muted-foreground">Last updated: July 1, 2023</p>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-medium mb-2">1. Introduction</h3>
                  <p className="text-muted-foreground">
                    QualityDecor ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
                    Policy explains how we collect, use, disclose, and safeguard your information when you 
                    visit our website or make a purchase.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">2. Information We Collect</h3>
                  <p className="text-muted-foreground mb-2">
                    We collect information that you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Create an account</li>
                    <li>Make a purchase</li>
                    <li>Sign up for our newsletter</li>
                    <li>Contact our customer service</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    This information may include your name, email address, postal address, phone number, 
                    and payment information.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">3. How We Use Your Information</h3>
                  <p className="text-muted-foreground mb-2">We may use the information we collect to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about products, services, and promotions</li>
                    <li>Improve our website and customer experience</li>
                    <li>Detect and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">4. Sharing Your Information</h3>
                  <p className="text-muted-foreground">
                    We may share your information with third-party service providers who perform services 
                    on our behalf, such as payment processing, order fulfillment, and marketing assistance. 
                    We may also share information when required by law or to protect our rights.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">5. Your Rights</h3>
                  <p className="text-muted-foreground">
                    Depending on your location, you may have rights regarding your personal information, 
                    such as the right to access, correct, or delete your data. To exercise these rights, 
                    please contact us using the information provided at the end of this policy.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">6. Contact Us</h3>
                  <p className="text-muted-foreground">
                    If you have questions about this Privacy Policy, please contact us at:
                    <br />
                    Email: privacy@qualitydecor.com
                    <br />
                    Address: 123 Decor Street, New York, NY 10001
                  </p>
                </section>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="terms" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Terms of Service</h2>
              <p className="text-sm text-muted-foreground">Last updated: July 1, 2023</p>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-medium mb-2">1. Acceptance of Terms</h3>
                  <p className="text-muted-foreground">
                    By accessing or using our website, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our website or services.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">2. Products and Services</h3>
                  <p className="text-muted-foreground">
                    We strive to provide accurate descriptions and images of our products. However, 
                    we do not guarantee that product descriptions or other content on our site are 
                    accurate, complete, reliable, current, or error-free.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">3. Pricing and Payment</h3>
                  <p className="text-muted-foreground">
                    All prices are listed in U.S. dollars and are subject to change without notice. 
                    We accept major credit cards, PayPal, and other specified payment methods. Payment 
                    must be received prior to shipment of any goods.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">4. Shipping and Delivery</h3>
                  <p className="text-muted-foreground">
                    Shipping times are estimates only and are not guaranteed. We are not responsible 
                    for delays caused by carriers, customs, or other circumstances beyond our control.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">5. Returns and Refunds</h3>
                  <p className="text-muted-foreground">
                    Please refer to our Returns Policy for information on returns, exchanges, and refunds. 
                    Certain products may be excluded from our standard return policy.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">6. Intellectual Property</h3>
                  <p className="text-muted-foreground">
                    All content on our website, including text, graphics, logos, images, and software, 
                    is the property of QualityDecor and is protected by copyright, trademark, and other 
                    intellectual property laws.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">7. Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, QualityDecor shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages, or any loss of 
                    profits or revenues.
                  </p>
                </section>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cookies" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Cookie Policy</h2>
              <p className="text-sm text-muted-foreground">Last updated: July 1, 2023</p>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-medium mb-2">1. What Are Cookies</h3>
                  <p className="text-muted-foreground">
                    Cookies are small text files that are placed on your computer or mobile device when 
                    you visit a website. They are widely used to make websites work more efficiently and 
                    provide information to the website owners.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">2. How We Use Cookies</h3>
                  <p className="text-muted-foreground mb-2">We use cookies for several purposes, including:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Essential cookies: necessary for the website to function properly</li>
                    <li>Functional cookies: to remember your preferences and settings</li>
                    <li>Analytical cookies: to collect information about how you use our website</li>
                    <li>Marketing cookies: to deliver more relevant advertisements</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">3. Types of Cookies We Use</h3>
                  <p className="text-muted-foreground mb-2">The specific cookies we use include:</p>
                  <table className="w-full text-sm text-muted-foreground border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Cookie Name</th>
                        <th className="text-left p-2">Purpose</th>
                        <th className="text-left p-2">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">_ga</td>
                        <td className="p-2">Used by Google Analytics to distinguish users</td>
                        <td className="p-2">2 years</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">_gid</td>
                        <td className="p-2">Used by Google Analytics to distinguish users</td>
                        <td className="p-2">24 hours</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">cart</td>
                        <td className="p-2">Stores information about the contents of your cart</td>
                        <td className="p-2">2 weeks</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">recently_viewed</td>
                        <td className="p-2">Keeps track of recently viewed products</td>
                        <td className="p-2">30 days</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">4. Managing Cookies</h3>
                  <p className="text-muted-foreground">
                    Most web browsers allow you to manage your cookie preferences. You can set your 
                    browser to refuse cookies, or to alert you when cookies are being sent. However, 
                    if you disable cookies, some parts of our website may not function properly.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-medium mb-2">5. Your Consent</h3>
                  <p className="text-muted-foreground">
                    By using our website, you consent to our use of cookies as described in this policy. 
                    If you do not agree to our use of cookies, you should set your browser accordingly 
                    or not use our website.
                  </p>
                </section>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 border-t pt-8">
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline" 
              onClick={() => setActiveTab('privacy')}
              className={activeTab === 'privacy' ? 'bg-muted' : ''}
            >
              Privacy Policy
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setActiveTab('terms')}
              className={activeTab === 'terms' ? 'bg-muted' : ''}
            >
              Terms of Service
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setActiveTab('cookies')}
              className={activeTab === 'cookies' ? 'bg-muted' : ''}
            >
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
