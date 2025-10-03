import React, { createContext, useContext, ReactNode, useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import translations from '@/translations';

type Language = 'en' | 'es';

interface LanguageContextType {
  lang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize language from localStorage or URL
  useEffect(() => {
    try {
      // First try to get language from localStorage
      const savedLang = localStorage.getItem('preferredLanguage') as Language | null;
      
      // Then check the URL path
      const urlLang = location.pathname.startsWith('/spanish') ? 'es' : 'en';
      
      // Use saved language if available, otherwise use URL-based language
      const newLang = savedLang || urlLang;
      
      // Update state if needed
      if (newLang !== lang) {
        setLang(newLang);
      }
      
      // Ensure URL matches the selected language
      if (newLang === 'es' && !location.pathname.startsWith('/spanish')) {
        navigate(`/spanish${location.pathname}`, { replace: true });
      } else if (newLang === 'en' && location.pathname.startsWith('/spanish')) {
        navigate(location.pathname.replace(/^\/spanish/, '') || '/', { replace: true });
      }
      
      // Save to localStorage
      localStorage.setItem('preferredLanguage', newLang);
      
    } catch (error) {
      console.error('Error initializing language:', error);
    }
  }, [location.pathname, navigate]);

  // Handle language changes
  const setLanguage = useCallback((newLang: Language) => {
    try {
      if (newLang !== lang) {
        // Save to state and localStorage
        setLang(newLang);
        localStorage.setItem('preferredLanguage', newLang);
        
        // Update URL
        const currentPath = location.pathname;
        if (newLang === 'es') {
          if (!currentPath.startsWith('/spanish')) {
            navigate(`/spanish${currentPath}`, { replace: true });
          }
        } else {
          if (currentPath.startsWith('/spanish')) {
            navigate(currentPath.replace(/^\/spanish/, '') || '/', { replace: true });
          }
        }
      }
    } catch (error) {
      console.error('Error changing language:', error);
    }
  }, [lang, location.pathname, navigate]);

  // Translation function
  const t = useCallback((key: string): string => {
    try {
      if (!key) return '';
      
      // Try current language first
      if (translations[lang] && key in translations[lang]) {
        return translations[lang][key];
      }
      
      // Try fallback language (en)
      if (lang !== 'en' && translations['en'] && key in translations['en']) {
        return translations['en'][key];
      }
      
      return `[${key}]`;
    } catch (error) {
      console.error(`Error translating key '${key}':`, error);
      return `[${key}]`;
    }
  }, [lang]);

  // Create context value
  const contextValue = React.useMemo(() => ({
    lang,
    setLanguage,
    t
  }), [lang, setLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
