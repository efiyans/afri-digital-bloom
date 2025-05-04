
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Features from '@/components/home/Features';
import CaseStudies from '@/components/home/CaseStudies';
import CallToAction from '@/components/home/CallToAction';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Features />
        <CaseStudies />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
