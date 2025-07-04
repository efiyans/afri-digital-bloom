import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { ContactModal } from "@/components/contact/ContactModal";

// Flatten all navigation items into tabs
const allTabItems = [
  // Services
  { label: "Web Development", href: "/services/web-development" },
  { label: "Business Software", href: "/services/business-software" },
  { label: "ERP Solutions", href: "/services/erp-solutions" },
  { label: "Mobile Apps", href: "/services/mobile-app-development" },
  { label: "Database Solutions", href: "/services/database-solutions" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  
  // Industries
  { label: "Hotels", href: "/industries/hotels-hospitality" },
  { label: "Healthcare", href: "/industries/healthcare-clinics" },
  { label: "Education", href: "/industries/education-schools" },
  { label: "Restaurants", href: "/industries/restaurants-food" },
  { label: "NGOs", href: "/industries/ngos-non-profits" },
  
  // Main pages
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about-us" },
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
            <span className="text-xl sm:text-2xl font-bold text-secondary">Tech</span>
          </Link>
        </div>
        
        {/* Contact Modal for Desktop */}
        <div className="hidden md:block">
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
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Horizontal Scrollable Tab Bar */}
      <div className="border-t bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <ScrollArea className="w-full" type="scroll">
            <Tabs value={location.pathname} className="w-full">
              <TabsList className="inline-flex h-12 items-center justify-start rounded-none bg-transparent p-0 w-max">
                {allTabItems.map((item, index) => (
                  <TabsTrigger
                    key={index}
                    value={item.href}
                    asChild
                    className="rounded-none border-b-2 border-transparent px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:text-primary hover:border-primary/50 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent whitespace-nowrap"
                  >
                    <Link to={item.href} onClick={handleNavigation}>
                      {item.label}
                    </Link>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <ScrollBar orientation="horizontal" className="h-2" />
          </ScrollArea>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex md:hidden"
          aria-hidden={!isMobileMenuOpen}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Mobile Tab List */}
          <aside
            id="mobile-menu"
            className={cn(
              "fixed right-0 top-0 h-full w-full sm:w-80 bg-background shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto z-50",
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/" className="flex items-center" onClick={handleNavigation}>
                <span className="text-xl font-bold text-primary">Arada</span>
                <span className="text-xl font-bold text-secondary">Tech</span>
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
            
            <div className="flex-1 overflow-y-auto p-2">
              <div className="space-y-1">
                {allTabItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className={cn(
                      "block py-3 px-4 text-base font-medium rounded-lg transition-colors min-h-[48px] flex items-center",
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-primary"
                    )}
                    onClick={handleNavigation}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t">
              <ContactModal className="w-full" />
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Navbar;
