
import React from 'react';
import IndustryTemplate from '@/components/industries/IndustryTemplate';
import { GraduationCap, Users, FileText } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const EducationIndustryPage = () => {
  const challenges = [
    {
      title: 'Student Information Management',
      description: 'Schools struggle with tracking student records, attendance, and performance across multiple systems.',
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Administration Efficiency',
      description: 'Educational institutions face challenges in streamlining administrative tasks and reducing paperwork.',
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Parent-Teacher Communication',
      description: 'Maintaining effective communication between educators and parents is often difficult and inconsistent.',
      icon: <Users className="h-5 w-5 text-primary" />,
    },
  ];

  const solutions = [
    {
      title: 'School Management System',
      description: 'Our comprehensive student information system centralizes all student data for easy access and management.',
    },
    {
      title: 'Administrative Automation',
      description: 'Digitize forms, approvals, and processes to eliminate paperwork and speed up administrative tasks.',
    },
    {
      title: 'Communication Platform',
      description: 'Dedicated portals for parents and teachers to communicate effectively about student progress and school activities.',
    },
  ];

  const relevantServices = [
    {
      title: 'School Management Software',
      description: 'All-in-one platform for student records, attendance, grading, and school operations.',
      href: '/services/business-software',
    },
    {
      title: 'Educational Website & Portal',
      description: 'Custom school websites with secure login areas for students, parents, and staff.',
      href: '/services/web-development',
    },
    {
      title: 'Learning Management System',
      description: 'Digital classroom environment for assignments, resources, and virtual learning.',
      href: '/services/database-solutions',
    },
  ];

  const stats = [
    {
      value: '76%',
      label: 'reduction in administrative workload',
    },
    {
      value: '89%',
      label: 'increase in parent engagement',
    },
    {
      value: '40%',
      label: 'improvement in reporting efficiency',
    },
  ];

  const testimonials = [
    {
      quote: "The school management system has transformed how we operate. Teachers spend less time on paperwork and more time teaching.",
      author: "Yohannes Mekonen",
      role: "Principal",
      company: "Unity Academy",
    },
    {
      quote: "Parents appreciate the transparency and communication our new system provides. It's strengthened our school community.",
      author: "Frehiwot Tadesse",
      role: "Director of Operations",
      company: "Bright Future School",
    },
  ];

  return (
    <>
      <Navbar />
      <IndustryTemplate
        title="Education & Schools"
        tagline="Empowering Educational Excellence through Technology"
        heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920"
        challenges={challenges}
        solutions={solutions}
        relevantServices={relevantServices}
        stats={stats}
        testimonials={testimonials}
        ctaText="Ready to digitally transform your school?"
      />
      <Footer />
    </>
  );
};

export default EducationIndustryPage;
