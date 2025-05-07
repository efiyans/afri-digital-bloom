
import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { Building, LineChart, Layers, RefreshCcw, Lock, Database } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ERPSolutionsPage = () => {
  const features = [
    {
      title: 'Customizable Modules',
      description: 'Tailor your ERP system with modules specific to your business needs – finance, HR, inventory, or operations.',
      icon: <Layers className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Real-time Analytics',
      description: 'Access critical business insights with powerful dashboards and reporting tools.',
      icon: <LineChart className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with existing systems and third-party applications for a unified business ecosystem.',
      icon: <RefreshCcw className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Advanced Security',
      description: 'Protect sensitive business data with role-based access controls and encryption.',
      icon: <Lock className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Solutions that grow alongside your business, from small operations to enterprise-level.',
      icon: <Building className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Data Management',
      description: 'Centralized database for improved data accuracy, consistency, and accessibility.',
      icon: <Database className="h-5 w-5 text-primary" />,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Business Analysis',
      description: 'We analyze your current processes and identify optimization opportunities.',
    },
    {
      step: '2',
      title: 'Implementation',
      description: 'Customizing and deploying your ERP solution with minimal disruption.',
    },
    {
      step: '3',
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support to ensure adoption and success.',
    },
  ];

  const benefits = [
    {
      title: 'Reduce Operational Costs by 30%',
      description: 'Streamline processes, eliminate redundancies, and automate routine tasks to significantly cut operational expenses.',
    },
    {
      title: 'Improve Decision-Making',
      description: 'Access real-time data and comprehensive reports to make informed business decisions quickly and confidently.',
    },
    {
      title: 'Enhance Productivity',
      description: 'Automate workflows and eliminate manual processes, allowing your team to focus on value-added activities.',
    },
    {
      title: 'Enable Business Growth',
      description: 'Scale your operations efficiently with systems that adapt to your expanding business needs across multiple locations.',
    },
  ];

  const caseStudies = [
    {
      title: 'Selam Medical Center',
      industry: 'Healthcare',
      description: 'Implemented an integrated ERP system that reduced administrative workload by 40% and improved patient scheduling.',
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800',
    },
    {
      title: 'Unity Academy',
      industry: 'Education',
      description: 'Deployed a comprehensive school management system that streamlined operations and improved parent communication.',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
    },
  ];

  const faqs = [
    {
      question: 'How long does ERP implementation take?',
      answer: 'Implementation timelines vary based on complexity and scale, typically ranging from 1-6 months. We provide a detailed project timeline after our initial assessment.',
    },
    {
      question: 'Can your ERP solutions work offline?',
      answer: 'Yes, many of our ERP modules have offline capabilities with data synchronization once connectivity is restored – crucial for businesses in areas with inconsistent internet access.',
    },
    {
      question: 'How do you handle data migration from our existing systems?',
      answer: 'We have a structured data migration process that includes data extraction, cleaning, transformation, and validation to ensure accurate and complete transfer of your business information.',
    },
    {
      question: 'What kind of training do you provide?',
      answer: 'We offer comprehensive training programs including admin training, end-user training, and technical documentation. Both in-person and virtual training options are available.',
    },
    {
      question: 'Do you offer customizations for local business requirements?',
      answer: 'Absolutely. Our solutions are designed to accommodate African business needs, including local tax regulations, multi-currency support, and regional business practices.',
    },
  ];

  return (
    <>
      <Navbar />
      <ServiceTemplate
        title="ERP Solutions"
        tagline="Streamline operations and drive growth with integrated business management systems."
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

export default ERPSolutionsPage;
