import { useLang } from '../context/LangContext';
import { copy, skills } from '../data/content';
import BentoCard from './BentoCard';

export default function About() {
  const { lang } = useLang();
  const t = copy[lang].about;

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="label-tag mb-3">{t.eyebrow}</p>
        <h2 className="section-heading mb-10">{t.title}</h2>

        <div className="grid md:grid-cols-3 gap-5">
          <BentoCard className="md:col-span-2">
            <img
              src="/images/profile.jpg"
              alt=""
              width="80"
              height="80"
              className="w-16 h-16 rounded-full object-cover mb-5 border border-paper-line dark:border-bench-line"
            />
            <p className="text-ink-muted dark:text-mist-muted leading-relaxed mb-4">{t.p1}</p>
            <p className="text-ink-muted dark:text-mist-muted leading-relaxed">{t.p2}</p>
          </BentoCard>

          <BentoCard>
            <h3 className="label-tag mb-4">{t.skillsTitle}</h3>
            <ul className="space-y-3">
              {skills.map((s) => (
                <li key={s.id}>
                  <div className="flex justify-between text-sm mb-1.5 font-mono">
                    <span className="text-ink dark:text-mist">{t.skills[s.id]}</span>
                    <span className="text-signal dark:text-signal-bright">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-paper-line dark:bg-bench-line overflow-hidden">
                    <div
                      className="h-full rounded-full bg-signal dark:bg-signal-bright"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
