import { useState } from 'react';
import { Menu, X, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const { lang, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to get the current path with the correct language prefix
  const getLocalizedPath = (path: string) => {
    if (path.startsWith('/spanish')) {
      return path;
    }
    return lang === 'es' ? `/spanish${path === '/' ? '' : path}` : path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20 h-24">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link to={getLocalizedPath('/')} className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-inset-0.5"></div>
            <div className="relative bg-background/80 backdrop-blur-sm p-1.5 rounded-xl border border-border/20 group-hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center space-x-3 p-1">
                <img
                  src="https://www.laformulacg.net/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=128&q=75"
                  alt="La Formula Capital Group"
                  className="relative z-10 h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col ml-1">
                  <span className="text-base md:text-lg font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">
                    La Formula
                  </span>
                  <span className="text-xs md:text-xs font-medium text-foreground/90">
                    Capital Group
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to={getLocalizedPath('/#services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("header.services")}
            </Link>
            <Link
              to={getLocalizedPath('/about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("header.about")}
            </Link>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary"
                >
                  {lang === 'en' ? 'English' : 'Español'}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  <span className="flex items-center">
                    {lang === 'en' && <Check className="mr-2 h-4 w-4" />}
                    <span>English</span>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')}>
                  <span className="flex items-center">
                    {lang === 'es' && <Check className="mr-2 h-4 w-4" />}
                    <span>Español</span>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 border-t border-border/20 pt-4">
            <Link
              to={getLocalizedPath('/#services')}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.services")}
            </Link>
            <Link
              to={getLocalizedPath('/about')}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.about")}
            </Link>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Languages:</p>
              <div className="pl-4 space-y-1">
                <button 
                  onClick={() => {
                    setLanguage('en');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent flex items-center"
                >
                  {lang === 'en' && <Check className="mr-2 h-4 w-4" />}
                  English
                </button>
                <button 
                  onClick={() => {
                    setLanguage('es');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent flex items-center"
                >
                  {lang === 'es' && <Check className="mr-2 h-4 w-4" />}
                  Español
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
