
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactModal } from '@/components/contact/ContactModal';

// Filter categories
const industries = ["All", "Healthcare", "Education", "Hospitality", "Food Service", "Non-profit"];
const services = ["All", "Web Development", "Mobile Apps", "Business Software", "ERP Solutions", "Digital Marketing"];

// Sample case studies
const caseStudies = [
  {
    id: 1,
    title: "Addis Skyline Hotel Booking System",
    industry: "Hospitality",
    service: "Web Development",
    challenge: "Addis Skyline Hotel was losing potential bookings due to an outdated reservation process that relied on phone calls and third-party booking sites with high commission fees.",
    solution: [
      "Developed a custom responsive booking website with real-time availability",
      "Created an integrated payment processing system",
      "Built a comprehensive dashboard for staff to manage reservations"
    ],
    results: [
      "45% increase in direct bookings",
      "28% reduction in operational costs",
      "95% positive customer feedback on the booking experience"
    ],
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
  },
  {
    id: 2,
    title: "Horizon Medical Center Patient Portal",
    industry: "Healthcare",
    service: "Business Software",
    challenge: "Horizon Medical Center struggled with managing patient records, appointment scheduling, and communication between departments.",
    solution: [
      "Developed an integrated patient management system",
      "Created secure patient portal for appointment booking and medical record access",
      "Implemented inter-department communication tools"
    ],
    results: [
      "60% reduction in administrative workload",
      "35% increase in appointment attendance rates",
      "Reduced average wait time from 45 to 15 minutes"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800",
  },
  {
    id: 3,
    title: "Unity Academy School Management System",
    industry: "Education",
    service: "ERP Solutions",
    challenge: "Unity Academy was struggling with paper-based administrative processes, leading to inefficiencies in student record management, grading, and parent communication.",
    solution: [
      "Implemented comprehensive school management ERP",
      "Developed parent-teacher communication portal",
      "Created digital grading and assessment system"
    ],
    results: [
      "70% reduction in paperwork",
      "89% increase in parent engagement",
      "40% improvement in administrative efficiency"
    ],
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
  },
  {
    id: 4,
    title: "Habesha Cuisine Online Ordering",
    industry: "Food Service",
    service: "Mobile Apps",
    challenge: "Habesha Cuisine wanted to increase takeout orders and reduce dependency on third-party delivery apps that charged high commissions.",
    solution: [
      "Developed branded mobile ordering app for iOS and Android",
      "Created loyalty program to encourage repeat customers",
      "Implemented order tracking and notification system"
    ],
    results: [
      "30% of restaurant orders now come through the app",
      "22% increase in average order value",
      "65% of app users become repeat customers"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
  },
  {
    id: 5,
    title: "Ethiopian Children's Fund Donor Portal",
    industry: "Non-profit",
    service: "Web Development",
    challenge: "Ethiopian Children's Fund needed a better way to engage donors, showcase impact, and streamline the donation process.",
    solution: [
      "Developed modern, impact-focused website",
      "Created secure donation processing system",
      "Built donor dashboard to track contributions and impact"
    ],
    results: [
      "55% increase in online donations",
      "42% improvement in donor retention",
      "120% growth in monthly recurring donations"
    ],
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
  },
];

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedService, setSelectedService] = useState("All");

  // Filter case studies based on selected industry and service
  const filteredCaseStudies = caseStudies.filter(
    (study) =>
      (selectedIndustry === "All" || study.industry === selectedIndustry) &&
      (selectedService === "All" || study.service === selectedService)
  );

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real-World Impact</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See how we've helped businesses across Africa transform their operations and achieve remarkable results through digital innovation.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-lg font-medium mb-2">Filter by Industry:</h2>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Badge 
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedIndustry(industry)}
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-2">Filter by Service:</h2>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <Badge 
                    key={service}
                    variant={selectedService === service ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={study.imageUrl} 
                    alt={study.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <Badge variant="outline">{study.service}</Badge>
                  </div>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription className="text-base">{study.challenge}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Our Solution</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {study.solution.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Results</h3>
                    <ul className="list-disc list-inside space-y-1 text-primary">
                      {study.results.map((item, index) => (
                        <li key={index} className="font-medium">{item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <ContactModal
                    trigger={
                      <Button variant="ghost" size="sm">
                        View Full Case Study <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    }
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">See how we can help your business</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Our team is ready to deliver the same level of exceptional results for your organization.
          </p>
          <ContactModal
            trigger={
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Start Your Success Story
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            }
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudies;
