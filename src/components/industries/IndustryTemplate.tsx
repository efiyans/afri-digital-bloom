
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IndustryTemplateProps {
  title: string;
  tagline: string;
  heroImage: string;
  challenges: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  relevantServices: {
    title: string;
    description: string;
    href: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
  }[];
  ctaText: string;
}

const IndustryTemplate: React.FC<IndustryTemplateProps> = ({
  title,
  tagline,
  heroImage,
  challenges,
  solutions,
  relevantServices,
  stats,
  testimonials,
  ctaText,
}) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">{tagline}</p>
            <Link to="/consultation">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Your Custom Solution
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Industry Challenges & Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges faced by {title.toLowerCase()} and have developed 
              specialized solutions to address them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Challenges</h3>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 p-2 bg-brand-accent rounded-full">
                      {challenge.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{challenge.title}</h4>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Solutions</h3>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-brand-light p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">{solution.title}</h4>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Relevant Services for {title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relevantServices.map((service, index) => (
              <Link to={service.href} key={index} className="block h-full">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="mt-4 flex justify-end">
                      <span className="text-primary font-medium inline-flex items-center">
                        Learn more <ChevronRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Testimonials Section */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Results & Testimonials</h2>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{ctaText}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts show you how our technology solutions can drive growth, 
            efficiency, and innovation in your organization.
          </p>
          <Link to="/consultation">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Book a Free Consultation
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustryTemplate;
