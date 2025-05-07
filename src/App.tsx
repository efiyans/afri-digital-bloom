
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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
