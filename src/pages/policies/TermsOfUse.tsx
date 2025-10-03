import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function TermsOfUse() {
  const { t, lang } = useLanguage();

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <Link 
        to={lang === 'es' ? '/spanish' : '/'} 
        className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        {t('common.back_to_home')}
      </Link>
      
      <h1 className="text-3xl font-bold mb-8 gradient-text">
        {t('terms.title')}
      </h1>
      
      <div className="prose prose-lg text-foreground max-w-none">
        <p className="text-muted-foreground mb-6">
          {t('terms.last_updated')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('terms.agreement_title')}
          </h2>
          <p className="mb-4">
            {t('terms.agreement_content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('terms.use_license_title')}
          </h2>
          <p className="mb-4">
            {t('terms.use_license_content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('terms.disclaimer_title')}
          </h2>
          <p className="mb-4">
            {t('terms.disclaimer_content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('terms.limitations_title')}
          </h2>
          <p className="mb-4">
            {t('terms.limitations_content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('terms.governing_law_title')}
          </h2>
          <p>
            {t('terms.governing_law_content')}
          </p>
        </section>
      </div>
    </div>
  );
}
