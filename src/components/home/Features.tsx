
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Local Context & Expertise",
      description: "Our solutions are built with deep understanding of the local business environment in Ethiopia and across Africa.",
      points: [
        "Designed for Ethiopian market conditions",
        "Support for local languages",
        "Understanding of regional business practices",
        "Local payment integrations"
      ]
    },
    {
      title: "Industry-Specific Solutions",
      description: "We create specialized software tailored to the unique needs of different sectors.",
      points: [
        "Hotel & hospitality management systems",
        "Clinic & healthcare platforms",
        "Educational institution software",
        "Restaurant & food service solutions",
        "NGO & non-profit management tools"
      ]
    },
    {
      title: "End-to-End Support",
      description: "From consultation to development to ongoing maintenance, we provide comprehensive support.",
      points: [
        "Technical consultation & planning",
        "Custom development & implementation",
        "Staff training & onboarding",
        "Ongoing maintenance & support",
        "System upgrades & enhancements"
      ]
    }
  ];

  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AfriDigital Bloom</h2>
          <p className="text-muted-foreground">
            Our solutions are built with the specific needs of African businesses in mind,
            empowering local enterprises with world-class technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 shrink-0" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
