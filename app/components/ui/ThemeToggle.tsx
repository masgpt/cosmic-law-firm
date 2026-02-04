import React, { useEffect, useState } from 'react';
import Icon from '@src/components/Icon';

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
    const persistTheme = () => {
      localStorage.setItem('theme', theme);
    };

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      applyTheme(systemTheme);

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', handleChange);
      persistTheme();
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      applyTheme(theme);
    }

    persistTheme();
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
      type="button"
      onClick={toggleTheme}
      className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-800 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      aria-label={`Toggle theme (currently ${theme})`}
    >
      {theme === 'system' && (
        <Icon name="desktop_windows" className="text-slate-600 dark:text-slate-300 size-5 block" />
      )}
      {theme === 'dark' && (
        <Icon name="dark_mode" className="text-slate-100 size-5 block" />
      )}
      {theme === 'light' && (
        <Icon name="light_mode" className="text-slate-900 size-5 block" />
      )}
    </button>
  );
};

export default ThemeToggle;
