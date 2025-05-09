
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

// Navigation data - remove Get Started and Blog
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
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset expanded groups when closing the menu
    if (isMobileMenuOpen) {
      setExpandedGroups([]);
    }
  };

  const toggleDropdownGroup = (title: string) => {
    setExpandedGroups(prev => 
      prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]
    );
  };

  // Function to scroll to top on navigation
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedGroups([]);
  }, [location]);

  // Add scroll event listener to add shadow to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside the mobile menu to close it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileToggle = document.getElementById('mobile-toggle-btn');
      
      if (
        isMobileMenuOpen && 
        mobileMenu && 
        !mobileMenu.contains(event.target as Node) &&
        mobileToggle && 
        !mobileToggle.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMobileMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur transition-all duration-200",
      isScrolled && "shadow-sm"
    )}>
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={handleNavigation}>
            <span className="text-xl sm:text-2xl font-bold text-primary">Arada</span>
            <span className="text-xl sm:text-2xl font-bold text-brand-secondary">Tech</span>
          </Link>
        </div>
        
        {/* Desktop Navigation - Only visible on md screens and up */}
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
                        className="block px-4 py-2 text-sm hover:bg-accent w-full min-h-[44px] flex items-center"
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
                className="px-3 py-2 text-sm font-medium hover:text-primary link-underline min-h-[44px] flex items-center"
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
          <Button 
            id="mobile-toggle-btn"
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu} 
            className="h-12 w-12 text-foreground"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div 
          id="mobile-menu"
          className={cn(
            "fixed inset-y-0 right-0 w-full sm:w-80 bg-white transform transition-transform duration-300 ease-in-out overflow-hidden flex flex-col",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="flex items-center" onClick={handleNavigation}>
              <span className="text-xl font-bold text-primary">Arada</span>
              <span className="text-xl font-bold text-brand-secondary">Tech</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="h-10 w-10"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {navLinks.map((link, index) => (
              <div key={index} className="py-2 border-b border-gray-100 last:border-b-0">
                {link.dropdown ? (
                  <div className="mb-1">
                    <button
                      onClick={() => toggleDropdownGroup(link.title)}
                      className="flex items-center justify-between w-full py-3 px-1 text-base font-medium hover:text-primary min-h-[48px]"
                      aria-expanded={expandedGroups.includes(link.title)}
                    >
                      <span>{link.title}</span>
                      <ChevronDown 
                        className={cn(
                          "h-5 w-5 transition-transform duration-200",
                          expandedGroups.includes(link.title) && "transform rotate-180"
                        )} 
                      />
                    </button>
                    <div 
                      className={cn(
                        "pl-4 overflow-hidden transition-all duration-300 ease-in-out",
                        expandedGroups.includes(link.title) 
                          ? "max-h-[500px] opacity-100" 
                          : "max-h-0 opacity-0"
                      )}
                    >
                      {link.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.href}
                          className="block py-3 px-2 text-base text-muted-foreground hover:text-primary min-h-[48px] flex items-center"
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
                    className="block py-3 px-1 text-base font-medium hover:text-primary min-h-[48px] flex items-center"
                    onClick={handleNavigation}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t mt-auto">
            <ContactModal className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
