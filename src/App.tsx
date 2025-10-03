import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { HomePage } from "./components/HomePage";
import NotFound from "./pages/NotFound";
import CanvasBackground from "./components/CanvasBackground";
import { useEffect } from "react";

// Wrapper component to handle language initialization
const LanguageRouter = ({ children }: { children: React.ReactNode }) => {
  const { setLanguage } = useLanguage();
  const location = useLocation();

  // Update language based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/spanish')) {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  }, [location.pathname, setLanguage]);

  return <>{children}</>;
};

const queryClient = new QueryClient();

// Import the new pages
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import ProcessOptimization from './pages/services/ProcessOptimization';
import BusinessConsulting from './pages/services/BusinessConsulting';
import TechnologySolutions from './pages/services/TechnologySolutions';
import TermsOfUse from './pages/policies/TermsOfUse';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import CookiesPolicy from './pages/policies/CookiesPolicy';
import Disclaimer from './pages/policies/Disclaimer';

const AppContent = () => {
  const { lang } = useLanguage();
  
  return (
    <Routes>
      {/* English Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/services/process-optimization" element={<ProcessOptimization />} />
      <Route path="/services/business-consulting" element={<BusinessConsulting />} />
      <Route path="/services/technology-solutions" element={<TechnologySolutions />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<CookiesPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      
      {/* Spanish Routes */}
      <Route path="/spanish" element={<HomePage />} />
      <Route path="/spanish/about" element={<AboutPage />} />
      <Route path="/spanish/contact" element={<ContactPage />} />
      <Route path="/spanish/careers" element={<CareersPage />} />
      <Route path="/spanish/services/process-optimization" element={<ProcessOptimization />} />
      <Route path="/spanish/services/business-consulting" element={<BusinessConsulting />} />
      <Route path="/spanish/services/technology-solutions" element={<TechnologySolutions />} />
      <Route path="/spanish/terms" element={<TermsOfUse />} />
      <Route path="/spanish/privacy" element={<PrivacyPolicy />} />
      <Route path="/spanish/cookies" element={<CookiesPolicy />} />
      <Route path="/spanish/disclaimer" element={<Disclaimer />} />
      
      {/* Redirect any /spanish route without a matching path to /spanish */}
      <Route path="/spanish/*" element={<Navigate to="/spanish" replace />} />
      
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CanvasBackground/>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <LanguageRouter>
            <AppContent />
          </LanguageRouter>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
