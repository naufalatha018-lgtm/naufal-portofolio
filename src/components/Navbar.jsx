import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';
import { copy } from '../data/content';

const sections = ['home', 'about', 'services', 'projects', 'certifications', 'blog', 'contact'];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const t = copy[lang].nav;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/90 dark:bg-bench/90 backdrop-blur-md border-b border-paper-line dark:border-bench-line'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-mono font-bold text-ink dark:text-mist">
          <img src="/images/logo.png" alt="" width="28" height="28" className="rounded-sm" />
          <span className="hidden sm:inline">naufal_network</span>
        </a>

        <div className="hidden md:flex items-center gap-1 font-mono text-sm">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="px-3 py-2 rounded text-ink-muted dark:text-mist-muted hover:text-copper dark:hover:text-copper-bright transition-colors"
            >
              {t[s]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex items-center gap-1 px-2 py-1.5 rounded font-mono text-xs border border-paper-line dark:border-bench-line hover:border-copper dark:hover:border-copper-bright transition-colors"
          >
            <Languages size={14} />
            {lang.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded border border-paper-line dark:border-bench-line hover:border-copper dark:hover:border-copper-bright transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden p-2 rounded border border-paper-line dark:border-bench-line"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-paper dark:bg-bench border-t border-paper-line dark:border-bench-line px-5 py-4 flex flex-col gap-1 font-mono text-sm">
          {sections.map((s) => (
            <a key={s} href={`#${s}`} onClick={() => setOpen(false)} className="py-2 text-ink-muted dark:text-mist-muted">
              {t[s]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
