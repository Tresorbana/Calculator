import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, Code, Cloud, Shield } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function TechnologySolutions() {
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
          {t('services.technology_solutions.title')}
        </h1>
        
        <div className="prose prose-lg text-foreground max-w-none">
          <section className="mb-12">
            <p className="text-lg mb-8">
              {lang === 'es'
                ? 'Proporcionamos soluciones tecnológicas de vanguardia que impulsan la transformación digital y mejoran las capacidades operativas. Nuestras soluciones están diseñadas para escalar con su negocio y adaptarse a las necesidades cambiantes.'
                : 'We provide cutting-edge technology solutions that drive digital transformation and enhance operational capabilities. Our solutions are designed to scale with your business and adapt to changing needs.'}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Desarrollo Personalizado' : 'Custom Development'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Creamos soluciones de software personalizadas adaptadas a sus requisitos específicos.'
                    : 'We create custom software solutions tailored to your specific requirements.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Soluciones en la Nube' : 'Cloud Solutions'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Implementamos infraestructuras en la nube escalables y seguras.'
                    : 'We implement scalable and secure cloud infrastructures.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Ciberseguridad' : 'Cybersecurity'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Protegemos sus activos digitales con soluciones de seguridad robustas.'
                    : 'We protect your digital assets with robust security solutions.'}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {lang === 'es' ? 'Nuestras Soluciones' : 'Our Solutions'}
            </h2>
            <div className="space-y-4">
              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? 'Integración de Sistemas' : 'Systems Integration'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Conectamos sus sistemas existentes para mejorar el flujo de datos y la eficiencia operativa.'
                    : 'We connect your existing systems to improve data flow and operational efficiency.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? 'Automatización de Procesos' : 'Process Automation'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Automatizamos tareas repetitivas para liberar tiempo y recursos para actividades estratégicas.'
                    : 'We automate repetitive tasks to free up time and resources for strategic activities.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? 'Análisis de Datos' : 'Data Analytics'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Implementamos soluciones de análisis de datos para obtener información valiosa de su información empresarial.'
                    : 'We implement data analytics solutions to gain valuable insights from your business information.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? 'Migración a la Nube' : 'Cloud Migration'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Facilitamos la transición segura de sus sistemas a entornos en la nube.'
                    : 'We facilitate the secure transition of your systems to cloud environments.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? 'Soporte y Mantenimiento' : 'Support & Maintenance'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Proporcionamos soporte continuo y mantenimiento para garantizar el funcionamiento óptimo de sus sistemas.'
                    : 'We provide ongoing support and maintenance to ensure optimal system performance.'}
                </p>
              </div>
            </div>
          </section>

          <section className="p-8 glass-card rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {lang === 'es' ? 'Transforme su Tecnología' : 'Transform Your Technology'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {lang === 'es'
                ? 'Permítanos ayudarlo a aprovechar el poder de la tecnología para impulsar su negocio hacia el futuro.'
                : 'Let us help you harness the power of technology to propel your business into the future.'}
            </p>
            <Link
              to={lang === 'es' ? '/spanish/contact' : '/contact'}
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('common.contact_us')}
            </Link>
          </section>
        </div>
      </div>
    </Layout>
  );
}
