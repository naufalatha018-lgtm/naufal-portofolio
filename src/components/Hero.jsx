import { useLang } from '../context/LangContext';
import { copy } from '../data/content';
import ProfileCard from './ProfileCard';

export default function Hero() {
  const { lang } = useLang();
  const t = copy[lang].hero;

  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative grid md:grid-cols-[1fr_1fr] gap-12 items-center">
        <div>
          <p className="label-tag mb-5 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-signal-bright animate-pulse" />
            {t.eyebrow}
          </p>
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-ink dark:text-mist">
            {t.title1} <span className="text-copper dark:text-copper-bright">{t.name}</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl font-semibold text-ink-muted dark:text-mist-muted">{t.tagline}</p>
          <p className="mt-4 max-w-lg text-base text-ink-muted dark:text-mist-muted leading-relaxed">{t.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-md bg-copper text-paper-panel font-mono text-sm font-semibold hover:bg-copper-bright transition-colors"
            >
              {t.cta1}
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-md border border-ink/20 dark:border-mist/20 font-mono text-sm font-semibold text-ink dark:text-mist hover:border-copper dark:hover:border-copper-bright transition-colors"
            >
              {t.cta2}
            </a>
          </div>
        </div>

        <div className="hero-profile-card w-full max-w-[300px] mx-auto">
          <ProfileCard
            name="Naufal"
            title={t.tagline}
            avatarUrl="/images/profile.jpg"
            iconUrl="/images/icon-pattern.svg"
            showUserInfo={false}
            showDetails={false}
            enableTilt
            enableMobileTilt={false}
            innerGradient="linear-gradient(160deg, #C1622Bb3 0%, #120D09 100%)"
            behindGlowColor="rgba(232, 147, 74, 0.55)"
          />
        </div>
      </div>
    </section>
  );
}
