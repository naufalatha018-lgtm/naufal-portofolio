import { useState } from 'react';
import { X } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { copy, certifications } from '../data/content';
import BentoCard from './BentoCard';

export default function Certifications() {
  const { lang } = useLang();
  const t = copy[lang].certifications;
  const [active, setActive] = useState(null);

  return (
    <section id="certifications" className="py-24 sm:py-32 bg-paper-panel/50 dark:bg-bench-panel/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="label-tag mb-3">{t.eyebrow}</p>
        <h2 className="section-heading mb-3">{t.title}</h2>
        <p className="text-ink-muted dark:text-mist-muted mb-10 max-w-xl">{t.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((c) => {
            const item = t.items[c.id];
            return (
              <BentoCard key={c.id}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-md bg-copper/10 dark:bg-copper-bright/10 flex items-center justify-center font-mono font-bold text-copper dark:text-copper-bright text-xs">
                    {c.tag}
                  </div>
                  <span className="label-tag text-signal dark:text-signal-bright">{item.status}</span>
                </div>
                <h3 className="font-mono font-bold text-ink dark:text-mist mb-1.5">{item.title}</h3>
                <p className="text-sm text-ink-muted dark:text-mist-muted leading-relaxed flex-1">{item.desc}</p>
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  className="mt-4 self-start px-4 py-2 rounded-md bg-copper text-paper-panel font-mono text-xs font-semibold hover:bg-copper-bright transition-colors"
                >
                  {t.view}
                </button>
              </BentoCard>
            );
          })}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={active.image}
            alt={t.items[active.id].title}
            className="max-w-full max-h-[85vh] rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
