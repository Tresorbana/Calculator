import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t, lang } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">{t('not_found.title')}</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        {t('not_found.message')}
      </p>
      <Link 
        to={lang === 'es' ? '/spanish' : '/'}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
      >
        {t('not_found.back_home')}
      </Link>
    </div>
  );
}
