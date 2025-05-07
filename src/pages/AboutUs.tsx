
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ChevronRight, UserRound, Star, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactModal } from '@/components/contact/ContactModal';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Abebe Bekele",
      role: "Founder & CEO",
      bio: "Former Google engineer with 15+ years of experience in software development and digital transformation.",
      image: "https://i.pravatar.cc/300?img=1",
    },
    {
      name: "Tigist Haile",
      role: "Chief Technology Officer",
      bio: "Expert in cloud architecture with a background in developing solutions for enterprise-level organizations.",
      image: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "Daniel Kebede",
      role: "Head of Business Solutions",
      bio: "Specialized in ERP implementation with experience serving clients across East Africa.",
      image: "https://i.pravatar.cc/300?img=3",
    },
    {
      name: "Frehiwot Tadesse",
      role: "Lead Designer",
      bio: "Award-winning UX/UI designer with a passion for creating intuitive digital experiences.",
      image: "https://i.pravatar.cc/300?img=8",
    },
  ];

  const values = [
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that give our clients a competitive edge.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do, from code quality to client communication.",
    },
    {
      icon: <UserRound className="h-8 w-8 text-primary" />,
      title: "Client-Centered",
      description: "We prioritize understanding each client's unique needs and delivering solutions that exceed expectations.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We believe in transparency, honesty, and building long-term relationships built on trust.",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "AfriDigitalBloom was established with a vision to empower African businesses through technology.",
    },
    {
      year: "2017",
      title: "Expanded to East Africa",
      description: "Opened offices in Kenya and Uganda to serve clients across East Africa.",
    },
    {
      year: "2019",
      title: "50th Client Milestone",
      description: "Celebrated our 50th client success story with a 98% satisfaction rate.",
    },
    {
      year: "2021",
      title: "Innovation Award",
      description: "Received the African Tech Innovation Award for our work in digital transformation.",
    },
    {
      year: "2023",
      title: "Enterprise Solutions Launch",
      description: "Expanded our services to include enterprise-level ERP and business intelligence solutions.",
    },
  ];

  const clientLogos = [
    "https://placehold.co/200x80/e3e3e3/626262?text=Client+Logo",
    "https://placehold.co/200x80/e3e3e3/626262?text=Client+Logo",
    "https://placehold.co/200x80/e3e3e3/626262?text=Client+Logo",
    "https://placehold.co/200x80/e3e3e3/626262?text=Client+Logo",
    "https://placehold.co/200x80/e3e3e3/626262?text=Client+Logo",
    "https://placehold.co/200x80/e3e3e3/626262?text=Client+Logo",
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We empower African businesses with cutting-edge technology solutions since 2015.
            </p>
            <p className="mb-8">
              AfriDigitalBloom was founded with a clear mission: to bridge the digital divide for African businesses by 
              providing world-class technology solutions tailored to local needs. From our beginnings in Ethiopia, 
              we've grown to serve clients across East Africa, helping organizations of all sizes transform their 
              operations and achieve new levels of success through technology.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto p-3 bg-brand-accent rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-secondary"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right md:ml-auto' : 'md:mr-auto'}`}>
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1 md:pl-12' : 'md:order-2 md:pr-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Circle marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Trusted by 50+ Brands</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We've partnered with organizations across industries to deliver technology solutions that drive real results.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join our success stories</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's work together to transform your business with custom technology solutions tailored to your needs.
          </p>
          <ContactModal 
            trigger={
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Get in Touch <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            }
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
