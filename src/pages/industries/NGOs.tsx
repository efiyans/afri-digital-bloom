import React from 'react';
import IndustryTemplate from '@/components/industries/IndustryTemplate';
import { Heart, BadgeDollarSign, Users } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NGOsIndustryPage = () => {
  const challenges = [
    {
      title: 'Donor Management',
      description: 'NGOs struggle with tracking donor relationships, contributions, and engagement opportunities.',
      icon: <Heart className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Resource Allocation',
      description: 'Efficiently distributing limited resources across programs while maintaining transparency.',
      icon: <BadgeDollarSign className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Impact Reporting',
      description: 'Collecting and presenting data that clearly demonstrates program outcomes to stakeholders.',
      icon: <Users className="h-5 w-5 text-primary" />,
    },
  ];

  const solutions = [
    {
      title: 'Donor Management System',
      description: 'Our CRM solutions are tailored for non-profits to track and nurture donor relationships effectively.',
    },
    {
      title: 'Program Management Tools',
      description: 'Digital tools to plan, execute and monitor programs with clear budget tracking and allocation.',
    },
    {
      title: 'Impact Measurement Platform',
      description: 'Data collection and visualization systems that clearly demonstrate your organization\'s impact.',
    },
  ];

  const relevantServices = [
    {
      title: 'Non-Profit CRM',
      description: 'Custom donor management systems to track contributions and engagement.',
      href: '/services/business-software',
    },
    {
      title: 'NGO Website Development',
      description: 'Professional websites with donation capabilities and impact storytelling.',
      href: '/services/web-development',
    },
    {
      title: 'Data Management & Reporting',
      description: 'Systems to collect, analyze and present program data and outcomes.',
      href: '/services/database-solutions',
    },
  ];

  const stats = [
    {
      value: '42%',
      label: 'average increase in donor retention',
    },
    {
      value: '65%',
      label: 'reduction in administrative overhead',
    },
    {
      value: '38%',
      label: 'increase in online donations',
    },
  ];

  const testimonials = [
    {
      quote: "The donor management system has transformed how we engage with supporters. We've seen a significant increase in repeat donations since implementation.",
      author: "Hirut Alemayehu",
      role: "Development Director",
      company: "Ethiopian Children's Fund",
    },
    {
      quote: "Their impact reporting tools have made it much easier to demonstrate our effectiveness to donors and secure additional funding.",
      author: "Solomon Mulugeta",
      role: "Executive Director",
      company: "Community Development Initiative",
    },
  ];

  return (
    <>
      <Navbar />
      <IndustryTemplate
        title="NGOs & Non-profits"
        tagline="Technology Solutions for Maximum Social Impact"
        heroImage="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=1920"
        challenges={challenges}
        solutions={solutions}
        relevantServices={relevantServices}
        stats={stats}
        testimonials={testimonials}
        ctaText="Ready to amplify your organization's impact?"
      />
      <Footer />
    </>
  );
};

export default NGOsIndustryPage;
