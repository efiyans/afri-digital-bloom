
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
      { label: "Hotels & Hospitality", href: "#" },
      { label: "Healthcare & Clinics", href: "#" },
      { label: "Education & Schools", href: "#" },
      { label: "Restaurants & Food", href: "#" },
      { label: "NGOs & Non-profits", href: "#" },
    ],
  },
  { title: "Case Studies", href: "#case-studies" },
  { title: "About Us", href: "#about" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">AfriDigital</span>
            <span className="text-2xl font-bold text-brand-secondary">Bloom</span>
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
              >
                {link.title}
              </Link>
            )
          ))}
          <Button asChild variant="default" size="sm" className="ml-4">
            <Link to="#contact">Contact Us</Link>
          </Button>
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
                        onClick={toggleMobileMenu}
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
                  onClick={toggleMobileMenu}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
          <Button asChild className="w-full mt-4">
            <Link to="#contact" onClick={toggleMobileMenu}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
