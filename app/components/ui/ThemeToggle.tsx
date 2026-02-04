import React, { useEffect, useState } from 'react';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = window.document.documentElement;
    
    const applyTheme = (targetTheme: 'light' | 'dark') => {
      root.classList.remove('light', 'dark');
      root.classList.add(targetTheme);
    };

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      applyTheme(systemTheme);

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      applyTheme(theme);
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'system') return 'dark';
      if (prev === 'dark') return 'light';
      return 'system';
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      aria-label={`Toggle theme (currently ${theme})`}
    >
      {theme === 'system' && (
        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-[20px] block">
          desktop_windows
        </span>
      )}
      {theme === 'dark' && (
        <span className="material-symbols-outlined text-primary text-[20px] block">
          dark_mode
        </span>
      )}
      {theme === 'light' && (
        <span className="material-symbols-outlined text-secondary text-[20px] block">
          light_mode
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
