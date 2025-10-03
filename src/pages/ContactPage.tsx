import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, Mail, MapPin } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function ContactPage() {
  const { t, lang } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <Link 
          to={lang === 'es' ? '/spanish' : '/'} 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          {t('common.back_to_home')}
        </Link>
        
        <h1 className="text-3xl font-bold mb-8 gradient-text">
          {t('footer.contact')}
        </h1>
        
        <div className="prose prose-lg text-foreground max-w-none">
          <section className="mb-12">
            <p className="text-lg mb-8">
              {lang === 'es' 
                ? 'Estamos aquí para ayudarlo. Póngase en contacto con nosotros para cualquier consulta sobre nuestros servicios.' 
                : 'We\'re here to help. Contact us for any inquiries about our services.'}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 glass-card rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t('common.email')}</h3>
                    <a href="mailto:web@laformulacq.net" className="text-primary hover:underline">
                      web@laformulacq.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 glass-card rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {lang === 'es' ? 'Ubicación' : 'Location'}
                    </h3>
                    <p className="text-muted-foreground">
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <div className="p-6 glass-card rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">
                    {lang === 'es' ? 'Horario de Atención' : 'Business Hours'}
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>{lang === 'es' ? 'Lunes - Viernes' : 'Monday - Friday'}: 9:00 AM - 6:00 PM</p>
                    <p>{lang === 'es' ? 'Sábado - Domingo' : 'Saturday - Sunday'}: {lang === 'es' ? 'Cerrado' : 'Closed'}</p>
                  </div>
                </div>

                <div className="p-6 glass-card rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">
                    {lang === 'es' ? 'Nuestros Servicios' : 'Our Services'}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>{t('services.process_optimization.title')}</li>
                    <li>{t('services.business_consulting.title')}</li>
                    <li>{t('services.technology_solutions.title')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="p-8 glass-card rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {lang === 'es' ? '¿Por qué elegirnos?' : 'Why Choose Us?'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {lang === 'es'
                ? 'En La Formula Capital Group, estamos comprometidos a proporcionar soluciones B2B especializadas que mejoren la eficiencia empresarial y la competitividad. Nuestro equipo de expertos trabaja en estrecha colaboración con usted para comprender sus necesidades únicas y ofrecer soluciones personalizadas que impulsen el crecimiento sostenible.'
                : 'At La Formula Capital Group, we are committed to providing specialized B2B solutions that enhance business efficiency and competitiveness. Our team of experts works closely with you to understand your unique needs and deliver tailored solutions that drive sustainable growth.'}
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
