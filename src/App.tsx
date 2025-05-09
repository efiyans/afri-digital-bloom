
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service pages
import WebDevelopment from "./pages/services/WebDevelopment";
import ERPSolutions from "./pages/services/ERPSolutions";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import DatabaseSolutions from "./pages/services/DatabaseSolutions";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import BusinessSoftware from "./pages/services/BusinessSoftware";

// Industry pages
import Hotels from "./pages/industries/Hotels";
import Healthcare from "./pages/industries/Healthcare";
import Education from "./pages/industries/Education";
import Restaurants from "./pages/industries/Restaurants";
import NGOs from "./pages/industries/NGOs";

// Other main pages
import CaseStudies from "./pages/CaseStudies";
import AboutUs from "./pages/AboutUs";
import GetStarted from "./pages/GetStarted";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Pages */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/erp-solutions" element={<ERPSolutions />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/database-solutions" element={<DatabaseSolutions />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/business-software" element={<BusinessSoftware />} />
          
          {/* Industry Pages */}
          <Route path="/industries/hotels-hospitality" element={<Hotels />} />
          <Route path="/industries/healthcare-clinics" element={<Healthcare />} />
          <Route path="/industries/education-schools" element={<Education />} />
          <Route path="/industries/restaurants-food" element={<Restaurants />} />
          <Route path="/industries/ngos-non-profits" element={<NGOs />} />
          
          {/* Other Main Pages */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
