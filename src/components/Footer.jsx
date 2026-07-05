import { useLang } from '../context/LangContext';
import { copy, socials } from '../data/content';

export default function Footer() {
  const { lang } = useLang();
  const t = copy[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper-line dark:border-bench-line py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <span className="font-mono font-bold text-ink dark:text-mist">{t.brand}</span>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <img src={s.icon} alt="" width="18" height="18" className="opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
        <p className="text-xs font-mono text-ink-muted dark:text-mist-muted">
          &copy; {year} {t.brand}. {t.rights}
        </p>
      </div>
    </footer>
  );
}
