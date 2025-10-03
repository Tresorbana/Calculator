import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
        {t('privacy.title')}
      </h1>
      
      <div className="prose prose-lg text-foreground max-w-none">
        <p className="text-muted-foreground mb-6">
          {t('privacy.last_updated')}
        </p>

        <section className="mb-8">
          <p className="mb-4">
            {t('privacy.intro')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('privacy.data_we_collect_title')}
          </h2>
          <p className="mb-4">
            {t('privacy.data_we_collect_content')}
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>{t('privacy.data_type_identity')}</li>
            <li>{t('privacy.data_type_contact')}</li>
            <li>{t('privacy.data_type_business')}</li>
            <li>{t('privacy.data_type_financial')}</li>
            <li>{t('privacy.data_type_technical')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('privacy.how_we_use_data_title')}
          </h2>
          <p className="mb-4">
            {t('privacy.how_we_use_data_content')}
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>{t('privacy.use_purpose_service')}</li>
            <li>{t('privacy.use_purpose_consulting')}</li>
            <li>{t('privacy.use_purpose_documentation')}</li>
            <li>{t('privacy.use_purpose_compliance')}</li>
            <li>{t('privacy.use_purpose_communication')}</li>
            <li>{t('privacy.use_purpose_improvement')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('privacy.data_security_title')}
          </h2>
          <p className="mb-4">
            {t('privacy.data_security_content')}
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>{t('privacy.security_encryption')}</li>
            <li>{t('privacy.security_access')}</li>
            <li>{t('privacy.security_training')}</li>
            <li>{t('privacy.security_audit')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('privacy.your_rights_title')}
          </h2>
          <p className="mb-4">
            {t('privacy.your_rights_content')}
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>{t('privacy.right_access')}</li>
            <li>{t('privacy.right_correction')}</li>
            <li>{t('privacy.right_erasure')}</li>
            <li>{t('privacy.right_restriction')}</li>
            <li>{t('privacy.right_data_portability')}</li>
            <li>{t('privacy.right_withdraw_consent')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t('privacy.contact_us_title')}
          </h2>
          <p className="mb-2">
            {t('privacy.contact_us_content')}
          </p>
          <div className="space-y-2">
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('privacy.email')}: info@laformulacg.net
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('privacy.phone')}: +1 (555) 123-4567
            </p>
            <p className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 Business Avenue, Suite 456<br />New York, NY 10001<br />United States</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
