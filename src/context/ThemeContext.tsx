import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('ll_theme');
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const applyTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('ll_theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const setTheme = (newTheme: Theme) => {
    applyTheme(newTheme);
  };

  useEffect(() => {
    // Initial sync
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen for system theme changes if user hasn't explicitly set localStorage
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('ll_theme');
      if (!stored) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
