
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ContactForm } from '@/components/contact/ContactForm';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, HandShake, Users } from "lucide-react";

const Consultation = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Get Your Custom Solution</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Schedule a free consultation with our experts and discover how we can transform your business with tailored digital solutions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Form Section */}
              <div className="order-2 lg:order-1">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-primary text-white text-center py-6">
                    <h2 className="text-2xl font-bold">Free Consultation Request</h2>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
              
              {/* Info Section */}
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Get a Free Consultation?</h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <HandShake className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Expert Guidance</h3>
                      <p className="text-muted-foreground">Get personalized advice from our industry specialists who understand your business needs.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Custom Solutions</h3>
                      <p className="text-muted-foreground">Receive tailored recommendations designed specifically for your business challenges.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Clear Communication</h3>
                      <p className="text-muted-foreground">Understand your options with jargon-free explanations and transparent pricing.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-10 space-y-4 border-t pt-8">
                  <h3 className="text-xl font-semibold mb-4">Prefer to talk directly?</h3>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+251 912 345 678</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@afridigitalbloom.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">What happens during the consultation?</h3>
                  <p className="text-muted-foreground">During your free consultation, our experts will discuss your business goals, challenges, and requirements. We'll explore potential solutions and provide you with initial recommendations.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">How long does the consultation last?</h3>
                  <p className="text-muted-foreground">Our free consultations typically last between 30-45 minutes, depending on the complexity of your requirements.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Is there any obligation after the consultation?</h3>
                  <p className="text-muted-foreground">No, there's absolutely no obligation to purchase any services following your free consultation. It's simply an opportunity for us to understand your needs and for you to learn how we might help.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">How soon can I get a consultation?</h3>
                  <p className="text-muted-foreground">We typically schedule consultations within 1-2 business days of your request, depending on availability.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Consultation;
