
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

// Navigation data
const navLinks = [
  {
    title: "Services",
    dropdown: [
      { label: "Web Development", href: "#" },
      { label: "Business Software", href: "#" },
      { label: "ERP Solutions", href: "#" },
      { label: "Mobile App Development", href: "#" },
      { label: "Database Solutions", href: "#" },
      { label: "Digital Marketing", href: "#" },
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
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">AfriDigital</span>
            <span className="text-2xl font-bold text-brand-secondary">Bloom</span>
          </a>
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
                      <a 
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm hover:bg-accent"
                      >
                        {dropdownItem.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={index}
                href={link.href}
                className="px-3 py-2 text-sm font-medium hover:text-primary link-underline"
              >
                {link.title}
              </a>
            )
          ))}
          <Button asChild variant="default" size="sm" className="ml-4">
            <a href="#contact">Contact Us</a>
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
                      <a
                        key={dropdownIndex}
                        href={dropdownItem.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        onClick={toggleMobileMenu}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className="block py-2 font-medium hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  {link.title}
                </a>
              )}
            </div>
          ))}
          <Button asChild className="w-full mt-4">
            <a href="#contact" onClick={toggleMobileMenu}>Contact Us</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
