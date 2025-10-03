import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function CookiesPolicy() {
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
        {t('cookies.title')}
      </h1>
      
      <div className="prose prose-lg text-foreground max-w-none">
        <p className="text-muted-foreground mb-6">
          {t('cookies.last_updated')}
        </p>

        <section className="mb-8">
          <p className="mb-4">
            {t('cookies.intro')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('cookies.what_are_cookies_title')}
          </h2>
          <p className="mb-4">
            {t('cookies.what_are_cookies_content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('cookies.how_we_use_cookies_title')}
          </h2>
          <p className="mb-4">
            {t('cookies.how_we_use_cookies_content')}
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>{t('cookies.purpose_necessary')}</li>
            <li>{t('cookies.purpose_preferences')}</li>
            <li>{t('cookies.purpose_analytics')}</li>
            <li>{t('cookies.purpose_marketing')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('cookies.your_choices_title')}
          </h2>
          <p className="mb-4">
            {t('cookies.your_choices_content')}
          </p>
          <p className="mb-4">
            {t('cookies.manage_cookies')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('cookies.third_party_cookies_title')}
          </h2>
          <p className="mb-4">
            {t('cookies.third_party_cookies_content')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t('cookies.contact_us_title')}
          </h2>
          <p>
            {t('cookies.contact_us_content')}
          </p>
          <p className="mt-2">
          </p>
        </section>
      </div>
    </div>
  );
}
