import { ExternalLink } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { copy, projects } from '../data/content';
import BentoCard from './BentoCard';

export default function Projects() {
  const { lang } = useLang();
  const t = copy[lang].projects;

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="label-tag mb-3">{t.eyebrow}</p>
        <h2 className="section-heading mb-3">{t.title}</h2>
        <p className="text-ink-muted dark:text-mist-muted mb-10 max-w-xl">{t.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-5 auto-rows-[minmax(0,1fr)]">
          {projects.map((p) => {
            const item = t.items[p.id];
            return (
              <BentoCard key={p.id} className={`flex flex-col ${p.span}`}>
                <div className="rounded overflow-hidden aspect-video mb-4 border border-paper-line dark:border-bench-line">
                  <iframe
                    src={`https://www.youtube.com/embed/${p.videoId}`}
                    title={item.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <h3 className="font-mono font-bold text-ink dark:text-mist mb-1.5">{item.title}</h3>
                <p className="text-sm text-ink-muted dark:text-mist-muted leading-relaxed flex-1">{item.desc}</p>
                <a
                  href={`https://youtu.be/${p.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-mono font-semibold text-copper dark:text-copper-bright hover:underline"
                >
                  {t.watch} <ExternalLink size={14} />
                </a>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
