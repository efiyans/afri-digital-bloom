
import React from 'react';
import { ArrowRight, Building, Stethoscope, School, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Case study card component
const CaseStudyCard = ({ icon, industry, title, description, imageUrl, className }: {
  icon: React.ReactNode;
  industry: string;
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}) => {
  return (
    <div className={cn("bg-white rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md", className)}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="bg-primary/10 p-2 rounded-full mr-3">
            {icon}
          </div>
          <span className="text-sm text-muted-foreground">{industry}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <Button variant="link" className="p-0 h-auto">
          View Case Study <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: <Building className="h-5 w-5 text-primary" />,
      industry: "Hospitality",
      title: "Addis Skyline Hotel",
      description: "Complete hotel management system with booking, inventory, and customer management.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    },
    {
      icon: <Stethoscope className="h-5 w-5 text-primary" />,
      industry: "Healthcare",
      title: "Selam Medical Center",
      description: "Patient management, appointment scheduling and digital records system.",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
    },
    {
      icon: <School className="h-5 w-5 text-primary" />,
      industry: "Education",
      title: "Future Leaders Academy",
      description: "Integrated student information system with grade tracking and parent portal.",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
    },
    {
      icon: <UtensilsCrossed className="h-5 w-5 text-primary" />,
      industry: "Food Service",
      title: "Habesha Cuisine",
      description: "POS system with inventory management and online ordering integration.",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
    },
  ];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground">
              From small businesses to large enterprises, we've helped organizations across Ethiopia 
              and Africa transform their operations with custom digital solutions.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Case Studies
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              icon={study.icon}
              industry={study.industry}
              title={study.title}
              description={study.description}
              imageUrl={study.imageUrl}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
