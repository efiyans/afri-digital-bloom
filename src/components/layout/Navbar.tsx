
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { ContactModal } from "@/components/contact/ContactModal";

// Navigation data
const navLinks = [
  {
    title: "Services",
    dropdown: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Business Software", href: "/services/business-software" },
      { label: "ERP Solutions", href: "/services/erp-solutions" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Database Solutions", href: "/services/database-solutions" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  {
    title: "Industries",
    dropdown: [
      { label: "Hotels & Hospitality", href: "/industries/hotels-hospitality" },
      { label: "Healthcare & Clinics", href: "/industries/healthcare-clinics" },
      { label: "Education & Schools", href: "/industries/education-schools" },
      { label: "Restaurants & Food", href: "/industries/restaurants-food" },
      { label: "NGOs & Non-profits", href: "/industries/ngos-non-profits" },
    ],
  },
  { title: "Case Studies", href: "/case-studies" },
  { title: "About Us", href: "/about-us" },
  { title: "Get Started", href: "/get-started" },
  { title: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to scroll to top on navigation
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={handleNavigation}>
            <span className="text-2xl font-bold text-primary">Arada</span>
            <span className="text-2xl font-bold text-brand-secondary">Tech</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            link.dropdown ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center px-3 py-2 text-sm font-medium hover:text-primary">
                    {link.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white">
                  {link.dropdown.map((dropdownItem, dropdownIndex) => (
                    <DropdownMenuItem key={dropdownIndex} asChild>
                      <Link 
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-sm hover:bg-accent w-full"
                        onClick={handleNavigation}
                      >
                        {dropdownItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={index}
                to={link.href}
                className="px-3 py-2 text-sm font-medium hover:text-primary link-underline"
                onClick={handleNavigation}
              >
                {link.title}
              </Link>
            )
          ))}
          <ContactModal />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background md:hidden transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 pt-4 pb-8">
          {navLinks.map((link, index) => (
            <div key={index} className="py-2">
              {link.dropdown ? (
                <div className="mb-3">
                  <div className="font-medium mb-2">{link.title}</div>
                  <div className="pl-4 border-l border-gray-200">
                    {link.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        to={dropdownItem.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        onClick={handleNavigation}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className="block py-2 font-medium hover:text-primary"
                  onClick={handleNavigation}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
          <ContactModal className="w-full mt-4" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
