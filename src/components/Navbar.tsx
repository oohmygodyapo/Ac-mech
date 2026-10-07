import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Snowflake, MapPin } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-sky-100 dark:border-slate-800/90 shadow-xs dark:shadow-slate-950/50 transition-colors duration-300">
      {/* Top micro bar for direct contact info */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 dark:from-slate-950 dark:via-blue-950/80 dark:to-slate-950 text-white text-xs py-1.5 px-4 hidden sm:block border-b border-white/5 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 lg:gap-4">
            <span className="flex items-center gap-1.5 text-cyan-200 dark:text-cyan-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>S. Katteri, Arni &amp; Surrounding Areas</span>
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-1 text-cyan-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Safe &amp; Secure Home Service</span>
            </span>
          </div>
          <div className="flex items-center gap-3 lg:gap-4 font-medium">
            <a
              href="tel:+917703920339"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-cyan-400 shrink-0" />
              <span>+91 77039 20339</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 dark:text-slate-400">Loganathan V.</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-blue-700 via-sky-600 to-cyan-400 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Snowflake className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-xl font-black tracking-tight text-slate-950 dark:text-white font-sans transition-colors leading-tight whitespace-nowrap">
                L&amp;L AC MECHANIC
              </span>
              <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 transition-colors mt-0.5">
                <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="whitespace-nowrap">SAFE AND SECURE</span>
                <span className="text-slate-400 dark:text-slate-600 hidden xs:inline">•</span>
                <span className="text-slate-500 dark:text-slate-400 font-medium normal-case hidden xs:inline whitespace-nowrap">
                  S. Katteri, Arni
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions (Strictly md:flex to avoid duplication with mobile controls) */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* ☀️ / 🌙 Theme Toggle Button */}
            <ThemeToggle />

            {/* WhatsApp */}
            <a
              href="https://wa.me/917703920339"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 font-bold text-xs border border-emerald-200 dark:border-emerald-700/60 transition-all hover:scale-[1.02] active:scale-[0.98] btn-shine-sweep shadow-2xs"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-900" />
              <span>WhatsApp</span>
            </a>

            {/* Call Now */}
            <a
              href="tel:+917703920339"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 dark:shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all hover:scale-[1.02] active:scale-[0.98] btn-shine-sweep"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Header Controls (Strictly md:hidden) */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <ThemeToggle compact={true} />

            <a
              href="tel:+917703920339"
              className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-900 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-slate-800 flex items-center justify-center min-w-[40px] min-h-[40px]"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 flex items-center justify-center min-w-[40px] min-h-[40px] cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-sky-100 dark:border-slate-800 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-sky-50 dark:hover:bg-slate-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Theme Preference Selector */}
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-2 text-xs font-bold text-slate-600 dark:text-slate-300">
            <span>Color Theme</span>
            <ThemeToggle />
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3">
            <a
              href="tel:+917703920339"
              className="flex items-center justify-center gap-2 min-h-[48px] py-3 px-4 rounded-xl bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-700/20 active:scale-95 transition-all btn-shine-sweep"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/917703920339"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 min-h-[48px] py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md shadow-emerald-600/20 active:scale-95 transition-all btn-shine-sweep"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
            <span>S. Katteri, Arni • Owner: Loganathan V.</span>
          </div>
        </div>
      )}
    </header>
  );
};
