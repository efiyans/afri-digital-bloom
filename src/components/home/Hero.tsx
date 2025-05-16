
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-light via-white to-brand-accent overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary/5 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
              Empowering Ethiopian Businesses with Digital Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We build custom software, web applications, and digital tools designed for local businesses across Ethiopia and Africa.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="font-medium">
              View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
            </div>
          </div>

          <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {/* Main image */}
            <div className="relative border shadow-xl rounded-lg overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Digital transformation for African businesses" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Floating element 1 */}
            <div className="absolute -top-10 -left-10 bg-white p-4 rounded-lg shadow-lg transform -rotate-6 hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">100+ Local Businesses</span>
              </div>
            </div>

            {/* Floating element 2 */}
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg transform rotate-3 hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Ethiopia & Beyond</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
