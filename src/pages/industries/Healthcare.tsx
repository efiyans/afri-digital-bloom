
import React from 'react';
import IndustryTemplate from '@/components/industries/IndustryTemplate';
import { ShieldCheck, BadgeDollarSign, FileWarning } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const HealthcareIndustryPage = () => {
  const challenges = [
    {
      title: 'Patient Data Management',
      description: 'Healthcare facilities struggle with securely managing patient records while ensuring easy access for authorized staff.',
      icon: <FileWarning className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Regulatory Compliance',
      description: 'Maintaining compliance with healthcare regulations and data protection laws poses significant challenges.',
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Administrative Overhead',
      description: 'High operational costs in healthcare administration due to manual processes and duplicated efforts.',
      icon: <BadgeDollarSign className="h-5 w-5 text-primary" />,
    },
  ];

  const solutions = [
    {
      title: 'Secure Electronic Health Records',
      description: 'Our HIPAA-compliant EHR solutions provide secure, accessible patient data management with role-based access control.',
    },
    {
      title: 'Compliance Management System',
      description: 'Automated compliance tracking and reporting tools ensure your facility meets all regulatory requirements.',
    },
    {
      title: 'Practice Management Software',
      description: 'Streamline appointment scheduling, billing, and administrative tasks to reduce overhead costs.',
    },
  ];

  const relevantServices = [
    {
      title: 'Medical Practice Management Software',
      description: 'Comprehensive solution for patient scheduling, billing, and practice operations.',
      href: '/services/business-software',
    },
    {
      title: 'Healthcare Data Analytics',
      description: 'Convert patient data into actionable insights for better care and operational decisions.',
      href: '/services/database-solutions',
    },
    {
      title: 'Patient Portal Development',
      description: 'Secure online platforms for patients to access records, schedule appointments, and communicate with providers.',
      href: '/services/web-development',
    },
  ];

  const stats = [
    {
      value: '90%',
      label: 'of healthcare clients reduced administrative costs by 30%+',
    },
    {
      value: '45%',
      label: 'average reduction in paperwork processing time',
    },
    {
      value: '100%',
      label: 'compliance rate for regulatory requirements',
    },
  ];

  const testimonials = [
    {
      quote: "The patient management system has revolutionized our clinic operations. We've reduced wait times by 60% while improving data accuracy.",
      author: "Dr. Abebe Fekadu",
      role: "Medical Director",
      company: "Horizon Medical Center",
    },
    {
      quote: "Their compliance management tools have given us peace of mind knowing we're always up to date with changing regulations.",
      author: "Tigist Haile",
      role: "Compliance Officer",
      company: "Unity Hospital",
    },
  ];

  return (
    <>
      <Navbar />
      <IndustryTemplate
        title="Healthcare & Clinics"
        tagline="Transforming Healthcare with Technology"
        heroImage="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=1920"
        challenges={challenges}
        solutions={solutions}
        relevantServices={relevantServices}
        stats={stats}
        testimonials={testimonials}
        ctaText="Ready to optimize your healthcare operations?"
      />
      <Footer />
    </>
  );
};

export default HealthcareIndustryPage;
