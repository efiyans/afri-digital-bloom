
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, FileText } from 'lucide-react';
import { ContactModal } from '@/components/contact/ContactModal';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-brand-dark to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg opacity-90 mb-8">
            Connect with our team for a free consultation and discover how our digital solutions
            can help your business thrive in the digital age.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ContactModal
              trigger={
                <Button 
                  size="lg" 
                  className="bg-white text-brand-dark hover:bg-gray-100 w-full"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              }
            />
            
            <Link to="/consultation" className="w-full">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 w-full"
              >
                <FileText className="mr-2 h-5 w-5" />
                Free Consultation
              </Button>
            </Link>
            
            <ContactModal
              trigger={
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/10 w-full"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              }
            />
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-xl mb-3">Visit Our Office</h3>
              <p className="opacity-70">
                Bole Road, Addis Ababa<br />
                Ethiopia
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl mb-3">Email Us</h3>
              <p className="opacity-70">
                info@afridigitalbloom.com<br />
                support@afridigitalbloom.com
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl mb-3">Call Us</h3>
              <p className="opacity-70">
                +251 912 345 678<br />
                +251 911 234 567
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
