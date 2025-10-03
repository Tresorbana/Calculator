import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, Briefcase, Users, TrendingUp, Award } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function CareersPage() {
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
          {t('footer.careers')}
        </h1>
        
        <div className="prose prose-lg text-foreground max-w-none">
          <section className="mb-12">
            <p className="text-lg mb-8">
              {lang === 'es'
                ? 'Únase a nuestro equipo de profesionales dedicados y ayúdenos a proporcionar soluciones B2B excepcionales a nuestros clientes.'
                : 'Join our team of dedicated professionals and help us deliver exceptional B2B solutions to our clients.'}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Oportunidades de Carrera' : 'Career Opportunities'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Ofrecemos diversas oportunidades en consultoría, optimización de procesos y soluciones tecnológicas.'
                    : 'We offer diverse opportunities in consulting, process optimization, and technology solutions.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Cultura de Equipo' : 'Team Culture'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Fomentamos un ambiente colaborativo donde cada miembro del equipo puede crecer y prosperar.'
                    : 'We foster a collaborative environment where every team member can grow and thrive.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Crecimiento Profesional' : 'Professional Growth'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Proporcionamos capacitación continua y oportunidades de desarrollo profesional.'
                    : 'We provide ongoing training and professional development opportunities.'}
                </p>
              </div>

              <div className="p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {lang === 'es' ? 'Beneficios Competitivos' : 'Competitive Benefits'}
                </h3>
                <p className="text-muted-foreground">
                  {lang === 'es'
                    ? 'Ofrecemos paquetes de compensación competitivos y beneficios integrales.'
                    : 'We offer competitive compensation packages and comprehensive benefits.'}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {lang === 'es' ? 'Posiciones Abiertas' : 'Open Positions'}
            </h2>
            <div className="space-y-4">
              <div className="p-6 glass-card rounded-lg hover:border-primary/50 transition-all">
                <h3 className="font-semibold text-xl mb-2">
                  {lang === 'es' ? 'Consultor de Negocios Senior' : 'Senior Business Consultant'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {lang === 'es'
                    ? 'Buscamos un consultor experimentado para liderar proyectos de optimización de procesos empresariales.'
                    : 'We are seeking an experienced consultant to lead business process optimization projects.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {lang === 'es' ? 'Tiempo Completo' : 'Full-time'}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {lang === 'es' ? 'Remoto' : 'Remote'}
                  </span>
                </div>
              </div>

              <div className="p-6 glass-card rounded-lg hover:border-primary/50 transition-all">
                <h3 className="font-semibold text-xl mb-2">
                  {lang === 'es' ? 'Analista de Procesos' : 'Process Analyst'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {lang === 'es'
                    ? 'Únase a nuestro equipo para analizar y mejorar los procesos empresariales de nuestros clientes.'
                    : 'Join our team to analyze and improve our clients\' business processes.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {lang === 'es' ? 'Tiempo Completo' : 'Full-time'}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {lang === 'es' ? 'Híbrido' : 'Hybrid'}
                  </span>
                </div>
              </div>

              <div className="p-6 glass-card rounded-lg hover:border-primary/50 transition-all">
                <h3 className="font-semibold text-xl mb-2">
                  {lang === 'es' ? 'Especialista en Soluciones Tecnológicas' : 'Technology Solutions Specialist'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {lang === 'es'
                    ? 'Ayude a implementar soluciones tecnológicas innovadoras para nuestros clientes corporativos.'
                    : 'Help implement innovative technology solutions for our corporate clients.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {lang === 'es' ? 'Tiempo Completo' : 'Full-time'}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {lang === 'es' ? 'En Sitio' : 'On-site'}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="p-8 glass-card rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {lang === 'es' ? 'Cómo Aplicar' : 'How to Apply'}
            </h2>
            <p className="text-muted-foreground mb-4">
              {lang === 'es'
                ? 'Si está interesado en unirse a nuestro equipo, envíe su currículum y carta de presentación a:'
                : 'If you are interested in joining our team, please send your resume and cover letter to:'}
            </p>
            <a href="mailto:web@laformulacg.net" className="text-primary hover:underline text-lg font-semibold">
              web@laformulacg.net
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
}
