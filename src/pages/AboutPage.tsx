import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function AboutPage() {
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
        {t('about.title')}
      </h1>
      
      <div className="prose prose-lg text-foreground max-w-none">
        <p className="mb-6">
          {t('about.description')}
        </p>
        
        <p className="mb-8">
          {t('about.focus')}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {t('about.stats.experience')}
            </h3>
            <p className="text-muted-foreground">
              {t('about.features.expert_team_desc')}
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {t('about.stats.projects')}
            </h3>
            <p className="text-muted-foreground">
              {t('about.features.quality_results_desc')}
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {t('about.stats.satisfaction')}
            </h3>
            <p className="text-muted-foreground">
              {t('about.features.strategic_focus_desc')}
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t('about.features.strategic_focus')}
          </h2>
          <p className="mb-6">
            {t('about.features.strategic_focus_desc')}
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">
            {t('about.features.expert_team')}
          </h2>
          <p className="mb-6">
            {t('about.features.expert_team_desc')}
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">
            {t('about.features.proven_process')}
          </h2>
          <p>
            {t('about.features.proven_process_desc')}
          </p>
        </section>
      </div>
    </div>
  );
}
