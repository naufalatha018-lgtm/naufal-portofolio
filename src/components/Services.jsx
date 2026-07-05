import { Code2, Cpu, Video } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { copy, services } from '../data/content';
import BentoCard from './BentoCard';

const icons = { web: Code2, electronics: Cpu, video: Video };

export default function Services() {
  const { lang } = useLang();
  const t = copy[lang].services;

  return (
    <section id="services" className="py-24 sm:py-32 bg-paper-panel/50 dark:bg-bench-panel/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="label-tag mb-3">{t.eyebrow}</p>
        <h2 className="section-heading mb-3">{t.title}</h2>
        <p className="text-ink-muted dark:text-mist-muted mb-10 max-w-xl">{t.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((svc) => {
            const Icon = icons[svc.id];
            const item = t.items[svc.id];
            return (
              <BentoCard key={svc.id} className={svc.span}>
                <Icon className="text-copper dark:text-copper-bright mb-4" size={28} strokeWidth={1.75} />
                <h3 className="font-mono font-bold text-lg text-ink dark:text-mist mb-2">{item.title}</h3>
                <p className="text-ink-muted dark:text-mist-muted text-sm leading-relaxed">{item.desc}</p>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
