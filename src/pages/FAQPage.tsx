
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQPage = () => {
  return (
    <div className="container py-24 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium mb-6">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-10">
          Find answers to the most common questions about our products, shipping, returns, and more.
        </p>
        
        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-medium mb-4">Products & Ordering</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I know if a product is in stock?</AccordionTrigger>
                <AccordionContent>
                  All products listed on our website are currently in stock and ready to ship. 
                  If a product is out of stock, it will be clearly marked as "Out of Stock" and 
                  you won't be able to add it to your cart.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I modify or cancel my order after it's placed?</AccordionTrigger>
                <AccordionContent>
                  You can modify or cancel your order within 2 hours of placing it. Please contact 
                  our customer service team immediately at support@qualitydecor.com with your order 
                  number and requested changes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer gift wrapping services?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer gift wrapping for an additional $5 per item. You can select this 
                  option during checkout and add a personal message that will be included on a gift card.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Are product dimensions listed in inches or centimeters?</AccordionTrigger>
                <AccordionContent>
                  All product dimensions are listed in inches. If you need measurements in centimeters, 
                  you can multiply the inch value by 2.54 to get the equivalent in centimeters.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          
          <section>
            <h2 className="text-xl font-medium mb-4">Shipping & Delivery</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-5">
                <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                <AccordionContent>
                  Standard shipping typically takes 3-5 business days within the continental US. 
                  Expedited shipping options are available at checkout for an additional fee, 
                  which can reduce delivery time to 1-2 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes, we ship to most countries worldwide. International shipping rates and 
                  delivery times vary by location. Please note that customers are responsible 
                  for any import taxes or duties that may apply.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Is shipping free?</AccordionTrigger>
                <AccordionContent>
                  We offer free standard shipping on all orders over $50 within the continental US. 
                  Orders under $50 incur a flat shipping fee of $7.95.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Can I track my order?</AccordionTrigger>
                <AccordionContent>
                  Yes, once your order ships, you'll receive a confirmation email with a tracking 
                  number and link. You can also view tracking information in your account under 
                  "Order History."
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          
          <section>
            <h2 className="text-xl font-medium mb-4">Returns & Refunds</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-9">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We accept returns within 30 days of delivery for items in their original condition 
                  and packaging. Custom or personalized items are not eligible for return unless 
                  they arrive damaged or defective.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>How do I initiate a return?</AccordionTrigger>
                <AccordionContent>
                  To initiate a return, log into your account and select the order containing the 
                  item(s) you wish to return. Follow the prompts to generate a return label and 
                  instructions. If you checked out as a guest, contact our customer service team 
                  with your order number.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger>How long do refunds take to process?</AccordionTrigger>
                <AccordionContent>
                  Once we receive your returned item(s), it typically takes 3-5 business days to 
                  inspect and process the return. After processing, refunds are issued to your 
                  original payment method and may take an additional 3-7 business days to appear, 
                  depending on your financial institution.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-12">
                <AccordionTrigger>Do I have to pay for return shipping?</AccordionTrigger>
                <AccordionContent>
                  Return shipping costs are the responsibility of the customer, except in cases 
                  where the item arrived damaged, defective, or if we sent the wrong item. In those 
                  cases, we'll provide a prepaid return label.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          
          <section>
            <h2 className="text-xl font-medium mb-4">Account & Payment</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-13">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover), 
                  PayPal, Apple Pay, and Google Pay. We currently do not accept checks or money orders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-14">
                <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                <AccordionContent>
                  Yes, we use industry-standard encryption and secure payment processors to protect 
                  your financial information. We never store your full credit card details on our servers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-15">
                <AccordionTrigger>Do I need to create an account to place an order?</AccordionTrigger>
                <AccordionContent>
                  No, you can check out as a guest without creating an account. However, creating an 
                  account allows you to track orders, save addresses, and access special promotions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
        
        <div className="mt-12 p-6 bg-muted rounded-lg text-center">
          <h2 className="text-xl font-medium mb-2">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            We're here to help. Reach out to our customer service team for personalized assistance.
          </p>
          <Button asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
