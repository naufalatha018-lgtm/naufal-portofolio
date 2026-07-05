import { useLang } from '../context/LangContext';
import { copy, socials } from '../data/content';
import BentoCard from './BentoCard';

export default function Contact() {
  const { lang } = useLang();
  const t = copy[lang].contact;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-paper-panel/50 dark:bg-bench-panel/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="label-tag mb-3">{t.eyebrow}</p>
        <h2 className="section-heading mb-3">{t.title}</h2>
        <p className="text-ink-muted dark:text-mist-muted mb-10 max-w-xl">{t.subtitle}</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {socials.map((s) => {
            const item = t.items[s.key];
            return (
              <BentoCard key={s.key} as="a" href={s.href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <img src={s.icon} alt="" width="28" height="28" className="mb-4 dark:invert-0" />
                <h3 className="font-mono font-bold text-ink dark:text-mist mb-1.5">{s.label}</h3>
                <p className="text-sm text-ink-muted dark:text-mist-muted leading-relaxed flex-1">{item.desc}</p>
                <span className="mt-4 inline-block text-sm font-mono font-semibold text-copper dark:text-copper-bright">
                  {item.cta} →
                </span>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
