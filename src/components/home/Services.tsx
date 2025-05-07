
import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { Globe, ShoppingCart, Building, Database, Smartphone, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website & Web App Development",
      description: "Custom websites and applications for hotels, restaurants, clinics, schools, and NGOs.",
      href: "/services/web-development",
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Business Software",
      description: "Integrated POS, inventory management, HR & payroll, and school management systems.",
      href: "/services/business-software",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "ERP Solutions",
      description: "Enterprise resource planning for finance, HR, inventory and operations management.",
      href: "/services/erp-solutions",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Booking apps, loyalty programs, and delivery tracking for businesses across Africa.",
      href: "/services/mobile-app-development",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Solutions",
      description: "Interactive dashboards, business intelligence tools and custom reporting systems.",
      href: "/services/database-solutions",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "SEO optimization, social media management, and logo & graphic design services.",
      href: "/services/digital-marketing",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-muted-foreground">
            We provide end-to-end technology services tailored for African businesses,
            from custom software to digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.href} key={index} className="block h-full">
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                className="h-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
