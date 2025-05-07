
import React from 'react';
import IndustryTemplate from '@/components/industries/IndustryTemplate';
import { UtensilsCrossed, BadgeDollarSign, ShoppingCart } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const RestaurantsIndustryPage = () => {
  const challenges = [
    {
      title: 'Order Management',
      description: 'Restaurants struggle with managing orders from multiple channels and coordinating with kitchen operations.',
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Inventory Control',
      description: 'Tracking ingredients and reducing waste while ensuring popular items stay in stock is a constant challenge.',
      icon: <UtensilsCrossed className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Revenue Optimization',
      description: 'Maximizing table turnover and managing costs while maintaining quality and customer satisfaction.',
      icon: <BadgeDollarSign className="h-5 w-5 text-primary" />,
    },
  ];

  const solutions = [
    {
      title: 'Restaurant Management System',
      description: 'Our integrated POS system connects front-of-house with kitchen operations for seamless order flow.',
    },
    {
      title: 'Inventory Management',
      description: 'Automated tracking of ingredients with alerts for low stock and waste reduction recommendations.',
    },
    {
      title: 'Customer Engagement Tools',
      description: 'Loyalty programs and marketing automation to increase customer retention and frequency.',
    },
  ];

  const relevantServices = [
    {
      title: 'Restaurant POS System',
      description: 'Full-featured point of sale system designed specifically for food service businesses.',
      href: '/services/business-software',
    },
    {
      title: 'Online Ordering Website',
      description: 'Custom website with integrated ordering capabilities to reduce third-party commission fees.',
      href: '/services/web-development',
    },
    {
      title: 'Mobile Ordering App',
      description: 'Branded mobile application for convenient customer ordering and loyalty programs.',
      href: '/services/mobile-app-development',
    },
  ];

  const stats = [
    {
      value: '35%',
      label: 'average increase in online orders',
    },
    {
      value: '25%',
      label: 'reduction in food waste',
    },
    {
      value: '18%',
      label: 'increase in customer return rate',
    },
  ];

  const testimonials = [
    {
      quote: "Their restaurant management system transformed our operations. Orders flow smoothly from customers to kitchen, and our staff love how easy it is to use.",
      author: "Selam Tesfaye",
      role: "Owner",
      company: "Addis Taste Restaurant",
    },
    {
      quote: "The online ordering system they built has become our main revenue channel, especially during challenging times.",
      author: "Daniel Bekele",
      role: "General Manager",
      company: "Spice Garden",
    },
  ];

  return (
    <>
      <Navbar />
      <IndustryTemplate
        title="Restaurants & Food Services"
        tagline="Digital Solutions for Modern Dining Experiences"
        heroImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920"
        challenges={challenges}
        solutions={solutions}
        relevantServices={relevantServices}
        stats={stats}
        testimonials={testimonials}
        ctaText="Ready to revolutionize your restaurant operations?"
      />
      <Footer />
    </>
  );
};

export default RestaurantsIndustryPage;
