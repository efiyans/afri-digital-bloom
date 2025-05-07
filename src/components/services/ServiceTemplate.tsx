
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ServiceTemplateProps {
  title: string;
  tagline: string;
  heroImage: string;
  features: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
  processSteps?: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  caseStudies: {
    title: string;
    industry: string;
    description: string;
    imageUrl: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  tagline,
  heroImage,
  features,
  processSteps,
  benefits,
  caseStudies,
  faqs,
}) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-accent to-brand-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-brand-dark">{title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">{tagline}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get a Free Consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src={heroImage} 
                alt={title} 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-muted shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-brand-accent rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (Optional) */}
      {processSteps && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-between items-start">
              {processSteps.map((step, index) => (
                <div key={index} className="flex-1 relative mb-8 md:mb-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-[40%] h-0.5 bg-muted"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:w-2/5">
                  <img 
                    src={study.imageUrl} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                    style={{ minHeight: '200px' }}
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <span className="text-sm font-medium text-primary">{study.industry}</span>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground">{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's discuss how our {title.toLowerCase()} services can help your business grow and succeed.</p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
            Book a Call
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;
