import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function Disclaimer() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <Link 
        to="/" 
        className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        {t('common.back_to_home')}
      </Link>
      
      <h1 className="text-3xl font-bold mb-8 gradient-text">
        {t('disclaimer.title')}
      </h1>
      
      <div className="prose prose-lg text-foreground max-w-none">
        <p className="text-muted-foreground mb-6">
          {t('disclaimer.last_updated')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('disclaimer.not_legal_financial_advice_title')}
          </h2>
          <p className="mb-4">
            {t('disclaimer.not_legal_financial_advice_content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('disclaimer.no_attorney_client_relationship_title')}
          </h2>
          <p className="mb-4">
            {t('disclaimer.no_attorney_client_relationship_content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('disclaimer.third_party_links_title')}
          </h2>
          <p className="mb-4">
            {t('disclaimer.third_party_links_content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('disclaimer.no_guarantees_title')}
          </h2>
          <p className="mb-4">
            {t('disclaimer.no_guarantees_content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('disclaimer.limitation_liability_title')}
          </h2>
          <p className="mb-4">
            {t('disclaimer.limitation_liability_content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('disclaimer.changes_to_disclaimer_title')}
          </h2>
          <p className="mb-4">
            {t('disclaimer.changes_to_disclaimer_content')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t('disclaimer.contact_us_title')}
          </h2>
          <p>
            {t('disclaimer.contact_us_content')}
          </p>
          <p className="mt-2">
            Email: info@laformulacg.net
          </p>
        </section>
      </div>
    </div>
  );
}
