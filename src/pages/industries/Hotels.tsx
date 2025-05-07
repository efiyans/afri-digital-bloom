
import React from 'react';
import IndustryTemplate from '@/components/industries/IndustryTemplate';
import { Building, BadgeDollarSign, Clock, Globe } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const HotelsIndustryPage = () => {
  const challenges = [
    {
      title: 'Complex Booking Management',
      description: 'Hotels struggle with managing bookings across multiple channels while avoiding double-bookings and maximizing occupancy.',
      icon: <Building className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Staff Coordination',
      description: 'Coordinating housekeeping, maintenance, and front desk operations efficiently can be challenging without proper systems.',
      icon: <Clock className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Revenue Optimization',
      description: 'Implementing dynamic pricing and optimizing revenue across seasons and occupancy rates is complex without data insights.',
      icon: <BadgeDollarSign className="h-5 w-5 text-primary" />,
    },
  ];

  const solutions = [
    {
      title: 'Integrated Booking System',
      description: 'Our hotel management software connects all booking channels in one place, preventing double-bookings and maximizing occupancy.',
    },
    {
      title: 'Staff Management Portal',
      description: 'Digital task management ensures every room is cleaned and maintained on time with real-time updates and coordination.',
    },
    {
      title: 'Revenue Management Tools',
      description: 'AI-driven pricing tools analyze market trends and occupancy patterns to optimize pricing and maximize revenue.',
    },
  ];

  const relevantServices = [
    {
      title: 'Property Management System',
      description: 'All-in-one software for front desk operations, reservations, room management, and guest services.',
      href: '/services/business-software',
    },
    {
      title: 'Hotel Website & Booking Engine',
      description: 'Custom-designed website with integrated direct booking capability to reduce commission fees.',
      href: '/services/web-development',
    },
    {
      title: 'Customer Data Platform',
      description: 'Collect and analyze guest data to personalize stays and increase repeat bookings.',
      href: '/services/database-solutions',
    },
  ];

  const stats = [
    {
      value: '85%',
      label: 'of our hotel clients report increased direct bookings',
    },
    {
      value: '42%',
      label: 'average increase in operational efficiency',
    },
    {
      value: '28%',
      label: 'reduction in administrative costs',
    },
  ];

  const testimonials = [
    {
      quote: "The booking management system transformed how we operate. We've reduced overbookings to zero while increasing our occupancy rate by 23%.",
      author: "Samira Negash",
      role: "General Manager",
      company: "Addis Crown Hotel",
    },
    {
      quote: "Their mobile app development team created a guest experience app that has significantly improved our customer satisfaction scores.",
      author: "Michael Tesfaye",
      role: "Operations Director",
      company: "Blue Nile Resort",
    },
  ];

  return (
    <>
      <Navbar />
      <IndustryTemplate
        title="Hotels & Hospitality"
        tagline="Digital solutions for exceptional guest experiences"
        heroImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920"
        challenges={challenges}
        solutions={solutions}
        relevantServices={relevantServices}
        stats={stats}
        testimonials={testimonials}
        ctaText="Ready to transform your hospitality business?"
      />
      <Footer />
    </>
  );
};

export default HotelsIndustryPage;
