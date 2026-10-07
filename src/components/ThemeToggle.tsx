import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', compact = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light mode (clean ice-blue)' : 'Switch to dark mode (deep navy cooling)'}
      className={`relative inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 rounded-xl transition-all duration-300 cursor-pointer select-none border focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-95 ${
        isDark
          ? 'bg-slate-900 hover:bg-slate-800 text-amber-300 border-slate-700 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:border-cyan-500/50'
          : 'bg-white hover:bg-sky-50 text-slate-700 hover:text-blue-900 border-slate-200 shadow-sm hover:border-cyan-300'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {/* Sun Icon */}
        <Sun
          className={`w-5 h-5 transition-all duration-500 transform ${
            isDark
              ? 'opacity-0 rotate-90 scale-50 absolute pointer-events-none'
              : 'opacity-100 rotate-0 scale-100 text-amber-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]'
          }`}
        />

        {/* Moon Icon */}
        <Moon
          className={`w-5 h-5 transition-all duration-500 transform ${
            isDark
              ? 'opacity-100 rotate-0 scale-100 text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
              : 'opacity-0 -rotate-90 scale-50 absolute pointer-events-none'
          }`}
        />
      </div>

      {!compact && (
        <span className="sr-only">
          {isDark ? 'Active: Dark mode' : 'Active: Light mode'}
        </span>
      )}
    </button>
  );
};
