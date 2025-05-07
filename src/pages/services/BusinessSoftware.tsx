import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ShoppingCart, BarChart, Clock, Users, Settings, ClipboardList } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const BusinessSoftwarePage = () => {
  const features = [
    {
      title: 'Point of Sale Systems',
      description: 'User-friendly POS solutions with inventory tracking, sales reporting, and payment processing.',
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Inventory Management',
      description: 'Real-time tracking of stock levels, automated reordering, and supplier management.',
      icon: <ClipboardList className="h-5 w-5 text-primary" />,
    },
    {
      title: 'HR & Payroll',
      description: 'Employee management, attendance tracking, payroll processing, and compliance reporting.',
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed business reporting and KPI tracking to measure and improve performance.',
      icon: <BarChart className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Process Automation',
      description: 'Streamline workflows and eliminate manual tasks for improved efficiency.',
      icon: <Clock className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Customizable Modules',
      description: 'Tailor software components to your specific business needs and workflows.',
      icon: <Settings className="h-5 w-5 text-primary" />,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Requirements Analysis',
      description: 'Thorough assessment of your business processes and software needs.',
    },
    {
      step: '2',
      title: 'Custom Development',
      description: 'Building and configuring software solutions tailored to your requirements.',
    },
    {
      step: '3',
      title: 'Implementation & Support',
      description: 'Deployment, staff training, and ongoing technical assistance.',
    },
  ];

  const benefits = [
    {
      title: 'Increase Operational Efficiency',
      description: 'Automate routine tasks and streamline workflows to save time and reduce errors by up to 40%.',
    },
    {
      title: 'Improve Inventory Control',
      description: 'Reduce stockouts and overstock situations with accurate inventory tracking and forecasting.',
    },
    {
      title: 'Enhance Customer Experience',
      description: 'Faster service, accurate pricing, and personalized interactions that build customer loyalty.',
    },
    {
      title: 'Access Real-time Business Insights',
      description: 'Make informed decisions with up-to-the-minute data on sales, inventory, and other key metrics.',
    },
  ];

  const caseStudies = [
    {
      title: 'Habesha Cuisine',
      industry: 'Food Service',
      description: 'Integrated POS and inventory system reduced food waste by 25% and improved order accuracy to 99.5%.',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
    },
    {
      title: 'Unity Academy',
      industry: 'Education',
      description: 'School management system that increased administrative efficiency by 35% and improved parent communication.',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
    },
  ];

  const faqs = [
    {
      question: 'Can your software work with our existing hardware?',
      answer: "In most cases, yes. Our solutions are designed to be compatible with standard hardware. We'll assess your current setup and recommend any necessary upgrades or replacements.",
    },
    {
      question: 'Do your systems work offline?',
      answer: 'Yes, many of our solutions offer offline functionality with data synchronization when connectivity is restored – a crucial feature for businesses in areas with inconsistent internet access.',
    },
    {
      question: 'How much training will our staff need?',
      answer: "Training requirements vary depending on the complexity of the system and your team's technical proficiency. We provide comprehensive training programs tailored to different user roles within your organization.",
    },
    {
      question: 'Can the software grow with our business?',
      answer: 'Absolutely. Our solutions are modular and scalable, allowing you to add features and users as your business expands without disrupting your operations.',
    },
    {
      question: 'How do you handle data migration from our existing systems?',
      answer: 'We have a structured process for data migration that includes extraction from your current systems, cleaning and validation, and importing into the new solution while maintaining data integrity.',
    },
  ];

  return (
    <>
      <Navbar />
      <ServiceTemplate
        title="Business Software"
        tagline="Custom software solutions that streamline operations and drive growth."
        heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000"
        features={features}
        processSteps={processSteps}
        benefits={benefits}
        caseStudies={caseStudies}
        faqs={faqs}
      />
      <Footer />
    </>
  );
};

export default BusinessSoftwarePage;
