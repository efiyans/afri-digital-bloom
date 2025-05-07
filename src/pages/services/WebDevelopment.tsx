import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { Globe, Code, PanelLeft, Smartphone, ShieldCheck, Users } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const WebDevelopmentPage = () => {
  const features = [
    {
      title: 'Responsive Design',
      description: 'Websites that look great and function flawlessly on all devices, from smartphones to desktops.',
      icon: <Smartphone className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored web applications that address your unique business requirements and workflows.',
      icon: <Code className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Modern UI/UX',
      description: 'Intuitive interfaces with engaging user experiences that keep visitors coming back.',
      icon: <PanelLeft className="h-5 w-5 text-primary" />,
    },
    {
      title: 'SEO Optimized',
      description: 'Built with search engine optimization in mind to help your business get discovered online.',
      icon: <Globe className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Secure Development',
      description: "Industry-standard security practices to protect your website and your customers' data.",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Scalable Architecture',
      description: 'Solutions that grow with your business, from startups to established enterprises.',
      icon: <Users className="h-5 w-5 text-primary" />,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Consultation',
      description: 'We assess your needs and goals through detailed discussions with our experts.',
    },
    {
      step: '2',
      title: 'Design & Development',
      description: 'Our team designs and builds your website with regular feedback sessions.',
    },
    {
      step: '3',
      title: 'Launch & Support',
      description: 'We deploy your site and provide ongoing maintenance and updates.',
    },
  ];

  const benefits = [
    {
      title: 'Establish a Professional Online Presence',
      description: 'Make a lasting first impression with a professionally designed website that reflects your brand identity and values.',
    },
    {
      title: 'Expand Your Market Reach',
      description: "Reach new customers across Ethiopia and Africa with a website that's accessible 24/7, expanding your market beyond physical limitations.",
    },
    {
      title: 'Improve Operational Efficiency',
      description: 'Automate key processes like booking, ordering, or information requests, freeing up your team to focus on core business activities.',
    },
    {
      title: 'Build Customer Trust',
      description: 'A professional website builds credibility and trust with potential customers, especially important for new businesses.',
    },
  ];

  const caseStudies = [
    {
      title: 'Addis Skyline Hotel',
      industry: 'Hospitality',
      description: 'Developed a comprehensive booking system that increased online reservations by 45% within three months of launch.',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    },
    {
      title: 'Habesha Cuisine',
      industry: 'Food Service',
      description: "Created an online ordering platform that now accounts for 30% of the restaurant's total orders.",
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to develop a website?',
      answer: "Simple websites typically take 2-4 weeks, while more complex web applications may require 2-3 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
    },
    {
      question: 'Will my website work on mobile devices?',
      answer: 'Absolutely! All our websites are built with responsive design principles, ensuring they look great and function perfectly on smartphones, tablets, and desktop computers.',
    },
    {
      question: 'Can you update my existing website instead of building a new one?',
      answer: "Yes, we offer website redesign and improvement services for existing sites. We'll evaluate your current website and recommend the most cost-effective approach.",
    },
    {
      question: 'Do you provide website maintenance after launch?',
      answer: 'Yes, we offer various maintenance packages to keep your website secure, up-to-date, and running smoothly. This includes regular updates, security checks, and technical support.',
    },
  ];

  return (
    <>
      <Navbar />
      <ServiceTemplate
        title="Website & Web App Development"
        tagline="Custom digital solutions that drive growth for African businesses."
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

export default WebDevelopmentPage;
