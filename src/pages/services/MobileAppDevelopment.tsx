
import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { Smartphone, Zap, Cloud, Phone, Globe, Fingerprint } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const MobileAppDevelopmentPage = () => {
  const features = [
    {
      title: 'Native & Cross-Platform Apps',
      description: 'Build apps for iOS, Android, or both platforms with optimal performance and user experience.',
      icon: <Smartphone className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Performance Optimization',
      description: 'Fast, responsive applications designed to work efficiently even on limited bandwidth.',
      icon: <Zap className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Cloud Integration',
      description: 'Seamless connectivity with cloud services for data storage, synchronization, and backup.',
      icon: <Cloud className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Offline Functionality',
      description: 'Apps that continue to work without constant internet connectivity – crucial for African markets.',
      icon: <Phone className="h-5 w-5 text-primary" />,
    },
    {
      title: 'API Development',
      description: 'Custom APIs to connect your mobile app with existing systems and third-party services.',
      icon: <Globe className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Secure Authentication',
      description: 'Implement robust security measures including biometric authentication and data encryption.',
      icon: <Fingerprint className="h-5 w-5 text-primary" />,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'Define app requirements, user stories, and technical specifications.',
    },
    {
      step: '2',
      title: 'Design & Development',
      description: 'Create intuitive interfaces and build robust backend functionality.',
    },
    {
      step: '3',
      title: 'Testing & Deployment',
      description: 'Rigorous testing and smooth launch to app stores with ongoing support.',
    },
  ];

  const benefits = [
    {
      title: 'Reach Mobile-First Customers',
      description: 'Connect with the growing number of African consumers who primarily access the internet via mobile devices.',
    },
    {
      title: 'Enhance Customer Engagement',
      description: 'Build loyalty through personalized experiences and convenient services that keep users coming back.',
    },
    {
      title: 'Enable New Revenue Streams',
      description: 'Create new ways to monetize your products and services through in-app purchases, subscriptions, or mobile commerce.',
    },
    {
      title: 'Improve Field Operations',
      description: 'Equip your mobile workforce with tools that enhance productivity and data collection capabilities.',
    },
  ];

  const caseStudies = [
    {
      title: 'Habesha Cuisine',
      industry: 'Food Service',
      description: 'Created a mobile ordering app that increased customer repeat visits by 25% through a digital loyalty program.',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
    },
    {
      title: 'Addis Skyline Hotel',
      industry: 'Hospitality',
      description: 'Developed a mobile check-in system that reduced front desk wait times by 60% and improved guest satisfaction.',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    },
  ];

  const faqs = [
    {
      question: 'Do I need separate apps for iOS and Android?',
      answer: 'Not necessarily. We can develop cross-platform applications that work on both iOS and Android from a single codebase, reducing development time and cost while maintaining quality.',
    },
    {
      question: 'How long does it take to develop a mobile app?',
      answer: 'Development timelines vary based on complexity, typically ranging from 2-6 months. Simple apps may be completed faster, while complex applications with extensive features take longer.',
    },
    {
      question: 'Can my app work offline?',
      answer: 'Yes, we can implement offline functionality that allows users to access key features and store data locally, with synchronization once an internet connection is available.',
    },
    {
      question: 'How do you handle app store submission?',
      answer: 'We manage the entire submission process for both Google Play Store and Apple App Store, ensuring compliance with guidelines and optimizing your app listing for discovery.',
    },
    {
      question: 'What about app updates and maintenance?',
      answer: 'We offer ongoing support and maintenance packages to keep your app updated with the latest OS versions, security patches, and feature enhancements.',
    },
  ];

  return (
    <>
      <Navbar />
      <ServiceTemplate
        title="Mobile App Development"
        tagline="Custom mobile solutions that connect businesses with Africa's mobile-first customers."
        heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000"
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

export default MobileAppDevelopmentPage;
