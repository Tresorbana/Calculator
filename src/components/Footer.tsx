import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import US from 'country-flag-icons/react/3x2/US';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative glass-card border-t border-border/20 py-16 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl opacity-0 sm:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-inset-0.5"></div>
              <div className="relative bg-background/80 backdrop-blur-sm p-1.5 rounded-xl border border-border/20 group-hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center space-x-3 p-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <img 
                      src='https://www.laformulacg.net/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=128&q=75' 
                      alt="La Formula Capital Group" 
                      className="relative z-10 h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">La Formula</span>
                    <span className="text-sm text-muted-foreground">Capital Group</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.tagline') || 'Enhancing business efficiency and competitiveness with specialized B2B solutions. La Formula Capital Group - Your success is our formula.'}
            </p>
            <div className="flex space-x-4">
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">{t('footer.services') || 'Services'}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.process_optimization') || 'Process Optimization'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.corporate_solutions') || 'Corporate Solutions'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.corporate_structure') || 'Corporate Structure'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.portfolio_management') || 'Portfolio Management'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.global_centralization') || 'Global Centralization'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.asset_banking') || 'Asset Banking'}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">{t('footer.company') || 'Company'}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="/terms" className="hover:text-primary transition-colors">{t('footer.terms_of_use') || 'Terms of Use'}</a></li>
              <li><a href="/cookies" className="hover:text-primary transition-colors">{t('footer.cookies_policy') || 'Cookies Policy'}</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy_policy') || 'Privacy Policy'}</a></li>
              <li><a href="/disclaimer" className="hover:text-primary transition-colors">{t('footer.disclaimer') || 'Disclaimer'}</a></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">{t('footer.contact') || 'Contact'}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">web@laformulacq.net</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden">
                  <US title="United States" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground">
            © {currentYear} La Formula Capital Group
          </p>
        </div>
      </div>
    </footer>
  );
};