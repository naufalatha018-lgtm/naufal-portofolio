import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { copy } from '../data/content';

export default function BackToTop() {
  const { lang } = useLang();
  const t = copy[lang].footer;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label={t.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-copper text-paper-panel shadow-lg flex items-center justify-center hover:bg-copper-bright transition-colors"
    >
      <ArrowUp size={18} />
    </button>
  );
}
