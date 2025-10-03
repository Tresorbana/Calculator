import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, Lightbulb, Users, BarChart3 } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function BusinessConsulting() {
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
          {t('services.business_consulting.title')}
        </h1>
        
        <div className="prose prose-lg text-foreground max-w-none">
          <section className="mb-12">
            <p className="text-lg mb-8">
              {lang === 'es'
                ? 'Proporcionamos servicios de consultoría empresarial estratégica que impulsan el crecimiento y mejoran el rendimiento organizacional. Nuestros consultores expertos trabajan en estrecha colaboración con su equipo para desarrollar e implementar soluciones efectivas.'
                : 'We provide strategic business consulting services that drive growth and improve organizational performance. Our expert consultants work closely with your team to develop and implement effective solutions.'}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Estrategia Innovadora' : 'Innovative Strategy'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Desarrollamos estrategias innovadoras adaptadas a los desafíos únicos de su negocio.'
                    : 'We develop innovative strategies tailored to your business\'s unique challenges.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Expertos Experimentados' : 'Experienced Experts'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Nuestro equipo cuenta con décadas de experiencia en consultoría empresarial.'
                    : 'Our team has decades of experience in business consulting.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Resultados Medibles' : 'Measurable Results'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Nos enfocamos en entregar resultados cuantificables y sostenibles.'
                    : 'We focus on delivering quantifiable and sustainable results.'}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {lang === 'es' ? 'Áreas de Consultoría' : 'Consulting Areas'}
            </h2>
            <div className="space-y-4">
              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? 'Planificación Estratégica' : 'Strategic Planning'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Ayudamos a definir la visión, misión y objetivos estratégicos de su organización para guiar el crecimiento a largo plazo.'
                    : 'We help define your organization\'s vision, mission, and strategic objectives to guide long-term growth.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? 'Transformación Organizacional' : 'Organizational Transformation'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Facilitamos cambios organizacionales para mejorar la eficiencia y la competitividad.'
                    : 'We facilitate organizational changes to improve efficiency and competitiveness.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? 'Gestión del Cambio' : 'Change Management'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Guiamos a su organización a través de transiciones complejas con mínima interrupción.'
                    : 'We guide your organization through complex transitions with minimal disruption.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <h3 className="font-semibold text-xl mb-3">
                  {lang === 'es' ? 'Desarrollo de Liderazgo' : 'Leadership Development'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Desarrollamos las habilidades de liderazgo de su equipo ejecutivo para impulsar el éxito.'
                    : 'We develop your executive team\'s leadership skills to drive success.'}
                </p>
              </div>
            </div>
          </section>

          <section className="p-8 glass-card rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {lang === 'es' ? 'Impulse su Negocio' : 'Elevate Your Business'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {lang === 'es'
                ? 'Descubra cómo nuestros servicios de consultoría pueden transformar su organización y llevarla al siguiente nivel.'
                : 'Discover how our consulting services can transform your organization and take it to the next level.'}
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
