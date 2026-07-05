import { createContext, useContext, useState } from 'react';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'id';
    return window.localStorage.getItem('lang') || 'id';
  });

  const toggleLang = () => {
    setLang((l) => {
      const next = l === 'id' ? 'en' : 'id';
      window.localStorage.setItem('lang', next);
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
