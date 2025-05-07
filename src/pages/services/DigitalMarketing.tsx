
import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { Palette, SearchCheck, Users, BarChart, FileImage, Mail } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const DigitalMarketingPage = () => {
  const features = [
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings to increase visibility and organic traffic.',
      icon: <SearchCheck className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Social Media Management',
      description: 'Strategic content creation and community engagement across relevant platforms.',
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive reporting and insights to measure campaign effectiveness.',
      icon: <BarChart className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Graphic Design',
      description: 'Professional visual content creation including logos, banners, and marketing materials.',
      icon: <FileImage className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Brand Identity Development',
      description: 'Cohesive brand strategy and visual identity design to establish market presence.',
      icon: <Palette className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Email Marketing',
      description: 'Targeted email campaigns to nurture leads and maintain customer relationships.',
      icon: <Mail className="h-5 w-5 text-primary" />,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Strategy & Planning',
      description: 'Define goals, target audience, and develop a customized marketing roadmap.',
    },
    {
      step: '2',
      title: 'Implementation',
      description: 'Execute campaigns across appropriate channels with compelling content.',
    },
    {
      step: '3',
      title: 'Analysis & Optimization',
      description: 'Track performance and refine strategies for continuous improvement.',
    },
  ];

  const benefits = [
    {
      title: 'Increase Brand Awareness',
      description: 'Establish your brand presence in the digital landscape, reaching potential customers where they spend their time online.',
    },
    {
      title: 'Generate Qualified Leads',
      description: 'Attract potential customers who are actively looking for your products or services through targeted marketing strategies.',
    },
    {
      title: 'Improve Conversion Rates',
      description: 'Optimize your digital assets and campaigns to turn more visitors into paying customers.',
    },
    {
      title: 'Build Customer Loyalty',
      description: 'Foster long-term relationships through consistent engagement and personalized communication.',
    },
  ];

  const caseStudies = [
    {
      title: 'Habesha Cuisine',
      industry: 'Food Service',
      description: 'Social media campaign that increased foot traffic by 40% and online engagement by 200% within three months.',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
    },
    {
      title: 'Addis Skyline Hotel',
      industry: 'Hospitality',
      description: 'Complete brand refresh and digital marketing strategy that resulted in a 60% increase in direct bookings.',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    },
  ];

  const faqs = [
    {
      question: 'How long before I see results from digital marketing?',
      answer: 'Some channels like paid advertising can show immediate results, while organic strategies like SEO typically take 3-6 months to demonstrate significant impact. We provide regular reports to track progress throughout the process.',
    },
    {
      question: 'Which social media platforms should my business use?',
      answer: 'The ideal platforms depend on your specific business, target audience, and goals. We analyze where your potential customers are most active and focus efforts on those platforms for maximum ROI.',
    },
    {
      question: 'Do you work with businesses in specific industries?',
      answer: 'We have experience across various sectors including hospitality, healthcare, education, and food service. Our team takes time to understand the unique challenges and opportunities in your industry.',
    },
    {
      question: 'How do you measure marketing success?',
      answer: 'We establish clear KPIs aligned with your business objectives, which may include website traffic, lead generation, conversion rates, engagement metrics, or revenue growth. Regular reporting keeps you informed of progress.',
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer: 'Yes, we can work within established brand guidelines or help you develop new ones if needed. Consistency across all marketing channels is key to building strong brand recognition.',
    },
  ];

  return (
    <>
      <Navbar />
      <ServiceTemplate
        title="Digital Marketing"
        tagline="Build your brand and attract customers in the digital landscape."
        heroImage="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2000"
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

export default DigitalMarketingPage;
