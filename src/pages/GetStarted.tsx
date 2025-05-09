
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, CheckCircle, BookOpen } from 'lucide-react';
import { ContactModal } from "@/components/contact/ContactModal";

const GetStarted = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      title: "Create Your Account",
      description: "Sign up for Arada Tech services and access our platform.",
      icon: <Rocket className="h-8 w-8 text-primary" />
    },
    {
      title: "Choose Your Solution",
      description: "Browse our services and select what fits your business needs.",
      icon: <CheckCircle className="h-8 w-8 text-primary" />
    },
    {
      title: "Customize & Launch",
      description: "Work with our team to customize and launch your digital solution.",
      icon: <BookOpen className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-brand-light" id="get-started-top">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started with Arada Tech</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business with our digital solutions - follow these simple steps
            </p>
            <Button size="lg" className="font-medium">
              Start Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Three Simple Steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-muted shadow-sm hover:border-primary/20 transition-all">
                <div className="mb-4 text-primary flex justify-center">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">How long does implementation take?</h3>
                <p className="text-muted-foreground">Implementation timelines vary based on your specific requirements, but most projects are completed within 4-6 weeks.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">What support do you offer after launch?</h3>
                <p className="text-muted-foreground">We provide comprehensive post-launch support, including technical assistance, updates, and maintenance packages tailored to your needs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">Can I customize the solutions to fit my business?</h3>
                <p className="text-muted-foreground">Absolutely! All our solutions are fully customizable to address your specific business challenges and requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact our team today to discuss how we can help transform your business with our custom technology solutions.
          </p>
          <ContactModal 
            trigger={
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Contact Us Now <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            }
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GetStarted;
