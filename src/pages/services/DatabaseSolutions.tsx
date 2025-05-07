
import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { Database, BarChart2, LineChart, Search, Shield, RefreshCw } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const DatabaseSolutionsPage = () => {
  const features = [
    {
      title: 'Custom Dashboards',
      description: 'Interactive visual dashboards tailored to your specific KPIs and business metrics.',
      icon: <BarChart2 className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics tools to transform raw data into actionable business insights.',
      icon: <LineChart className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Data Integration',
      description: 'Connect and unify data from multiple sources for comprehensive analysis.',
      icon: <Database className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Custom Reporting',
      description: 'Automated report generation customized to your specific business requirements.',
      icon: <Search className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Data Security',
      description: 'Robust security measures to protect sensitive business and customer information.',
      icon: <Shield className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup solutions to ensure business continuity and data preservation.',
      icon: <RefreshCw className="h-5 w-5 text-primary" />,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Data Assessment',
      description: 'Evaluate your current data infrastructure and reporting needs.',
    },
    {
      step: '2',
      title: 'Solution Design',
      description: 'Create a customized database architecture and analytics framework.',
    },
    {
      step: '3',
      title: 'Implementation & Training',
      description: 'Deploy your solution and train your team to maximize its value.',
    },
  ];

  const benefits = [
    {
      title: 'Make Data-Driven Decisions',
      description: 'Transform raw data into actionable insights that drive informed business strategies and decisions.',
    },
    {
      title: 'Identify Growth Opportunities',
      description: 'Uncover patterns and trends that reveal new market opportunities and areas for business expansion.',
    },
    {
      title: 'Improve Operational Efficiency',
      description: 'Identify bottlenecks and inefficiencies through detailed process analysis and data visualization.',
    },
    {
      title: 'Enhance Customer Understanding',
      description: 'Gain deeper insights into customer behavior and preferences to optimize products and services.',
    },
  ];

  const caseStudies = [
    {
      title: 'Unity Academy',
      industry: 'Education',
      description: 'Implemented a student performance analytics system that helped improve overall test scores by 15% through targeted interventions.',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
    },
    {
      title: 'Selam Medical Center',
      industry: 'Healthcare',
      description: 'Created a patient analytics dashboard that reduced average wait times by 35% and improved resource allocation.',
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800',
    },
  ];

  const faqs = [
    {
      question: 'Do we need to replace our existing database systems?',
      answer: 'Not necessarily. We can often integrate with your existing systems, enhancing their capabilities while preserving your data and workflows. We'll evaluate your current setup and recommend the most efficient approach.',
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement multiple layers of security including encryption, access controls, regular security audits, and compliance with data protection regulations to ensure your sensitive information remains secure.',
    },
    {
      question: 'Can non-technical staff use the dashboards and reports?',
      answer: 'Absolutely. Our solutions are designed with user-friendly interfaces that allow non-technical users to access insights easily. We provide training to ensure your team can effectively utilize all features.',
    },
    {
      question: 'How do you handle data quality issues?',
      answer: 'Our process includes data cleaning and validation steps to identify and resolve inconsistencies. We also implement ongoing data quality monitoring to maintain accuracy over time.',
    },
    {
      question: 'Can we access our data remotely?',
      answer: 'Yes, our solutions include secure remote access options, allowing authorized users to access dashboards and reports from anywhere with internet connectivity.',
    },
  ];

  return (
    <>
      <Navbar />
      <ServiceTemplate
        title="Database Solutions"
        tagline="Transform your data into actionable insights that drive business growth."
        heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000"
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

export default DatabaseSolutionsPage;
