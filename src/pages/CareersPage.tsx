
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CareersPage = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'We\'re looking for a talented Product Designer to join our team and help create beautiful, functional products for our customers.'
    },
    {
      id: 2,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our marketing team to develop and implement strategies that drive brand awareness and customer acquisition.'
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      department: 'Customer Service',
      location: 'Boston, MA (On-site)',
      type: 'Full-time',
      description: 'Help our customers have the best possible experience with our products and services.'
    },
    {
      id: 4,
      title: 'Supply Chain Coordinator',
      department: 'Operations',
      location: 'Chicago, IL (On-site)',
      type: 'Full-time',
      description: 'Manage our supply chain processes to ensure efficient product delivery and inventory management.'
    },
    {
      id: 5,
      title: 'Social Media Intern',
      department: 'Marketing',
      location: 'Remote',
      type: 'Part-time',
      description: 'Assist our marketing team with creating and scheduling content for our social media channels.'
    }
  ];
  
  return (
    <div className="container py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-6">Join Our Team</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At QualityDecor, we're passionate about creating beautiful, functional spaces. 
            If you share our vision, we'd love to have you on our team.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-lg mb-16">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
            alt="Our team" 
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <div className="text-white max-w-xl">
              <h2 className="text-2xl font-medium mb-2">Why work with us?</h2>
              <p>
                Join a team of passionate individuals who are dedicated to creating products that 
                enhance people's living and working spaces.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl">❖</span>
              </div>
              <h3 className="font-medium mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                We encourage creative thinking and new ideas that push the boundaries of traditional decor.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl">✦</span>
              </div>
              <h3 className="font-medium mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                We believe the best results come from working together and sharing diverse perspectives.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl">♦</span>
              </div>
              <h3 className="font-medium mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We strive for excellence in everything we do, from product design to customer service.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Benefits & Perks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <span className="text-primary">✓</span>
              </div>
              <div>
                <h3 className="font-medium">Competitive Compensation</h3>
                <p className="text-sm text-muted-foreground">
                  Salary packages that recognize your skills and experience
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <span className="text-primary">✓</span>
              </div>
              <div>
                <h3 className="font-medium">Health Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive medical, dental, and vision coverage
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <span className="text-primary">✓</span>
              </div>
              <div>
                <h3 className="font-medium">Flexible Work Arrangements</h3>
                <p className="text-sm text-muted-foreground">
                  Remote and hybrid options for many positions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <span className="text-primary">✓</span>
              </div>
              <div>
                <h3 className="font-medium">Professional Development</h3>
                <p className="text-sm text-muted-foreground">
                  Opportunities for growth and skill enhancement
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <span className="text-primary">✓</span>
              </div>
              <div>
                <h3 className="font-medium">Employee Discount</h3>
                <p className="text-sm text-muted-foreground">
                  Generous discounts on all our products
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <span className="text-primary">✓</span>
              </div>
              <div>
                <h3 className="font-medium">Paid Time Off</h3>
                <p className="text-sm text-muted-foreground">
                  Generous vacation policy and paid holidays
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-medium mb-8">Open Positions</h2>
          <div className="grid grid-cols-1 gap-4">
            {openPositions.map((position) => (
              <Card key={position.id}>
                <CardHeader>
                  <CardTitle>{position.title}</CardTitle>
                  <CardDescription>
                    {position.department} · {position.location} · {position.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{position.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to={`/careers/${position.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-muted rounded-lg text-center">
          <h2 className="text-xl font-medium mb-4">Don't see a position that fits?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're always on the lookout for talented individuals. Send us your resume and let us know 
            how you can contribute to our team.
          </p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
