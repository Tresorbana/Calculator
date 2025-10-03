import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, TrendingUp, Target, Zap } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function ProcessOptimization() {
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
          {t('services.process_optimization.title')}
        </h1>
        
        <div className="prose prose-lg text-foreground max-w-none">
          <section className="mb-12">
            <p className="text-lg mb-8">
              {lang === 'es'
                ? 'Logramos resultados excepcionales mejorando los procesos y gestionando los costos de manera eficiente. Nuestro enfoque integral garantiza que su organización opere al máximo rendimiento.'
                : 'We achieve outstanding results by enhancing processes and efficiently managing costs. Our comprehensive approach ensures your organization operates at peak performance.'}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Eficiencia Mejorada' : 'Enhanced Efficiency'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Optimizamos sus procesos para maximizar la eficiencia y reducir el desperdicio.'
                    : 'We streamline your processes to maximize efficiency and reduce waste.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Reducción de Costos' : 'Cost Reduction'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Identificamos y eliminamos ineficiencias para reducir sus costos operativos.'
                    : 'We identify and eliminate inefficiencies to reduce your operational costs.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Resultados Rápidos' : 'Fast Results'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Implementamos mejoras que producen resultados tangibles rápidamente.'
                    : 'We implement improvements that produce tangible results quickly.'}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {lang === 'es' ? 'Nuestro Enfoque' : 'Our Approach'}
            </h2>
            <div className="space-y-6">
              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? '1. Análisis' : '1. Analysis'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Evaluamos exhaustivamente sus procesos actuales para identificar oportunidades de mejora.'
                    : 'We thoroughly assess your current processes to identify improvement opportunities.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? '2. Diseño' : '2. Design'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Desarrollamos soluciones personalizadas adaptadas a las necesidades específicas de su organización.'
                    : 'We develop customized solutions tailored to your organization\'s specific needs.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? '3. Implementación' : '3. Implementation'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Ejecutamos el plan de optimización con mínima interrupción de sus operaciones.'
                    : 'We execute the optimization plan with minimal disruption to your operations.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? '4. Seguimiento' : '4. Monitoring'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Monitoreamos continuamente el rendimiento y hacemos ajustes según sea necesario.'
                    : 'We continuously monitor performance and make adjustments as needed.'}
                </p>
              </div>
            </div>
          </section>

          <section className="p-8 glass-card rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {lang === 'es' ? '¿Listo para optimizar?' : 'Ready to Optimize?'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {lang === 'es'
                ? 'Póngase en contacto con nosotros hoy para discutir cómo podemos ayudarlo a mejorar sus procesos empresariales.'
                : 'Contact us today to discuss how we can help you improve your business processes.'}
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
