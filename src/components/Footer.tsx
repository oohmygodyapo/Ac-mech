import React from 'react';
import { Snowflake, ShieldCheck, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Snowflake className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                L&amp;L AC MECHANIC
              </span>
            </div>

            <p className="text-sm font-medium text-cyan-100/90 leading-relaxed italic">
              “Professional AC Service &amp; Repair in S. Katteri, Arni.”
            </p>

            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>TAGLINE: SAFE AND SECURE</span>
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Reliable doorstep cooling services, repair, gas charging &amp; maintenance for all residential &amp; commercial clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Loganathan V.
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Our AC Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span>🔧</span> AC Repair &amp; Troubleshooting
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span>❄️</span> Regular AC Service &amp; Jet Wash
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span>🏠</span> AC Installation &amp; Relocation
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span>💨</span> AC Gas Leakage &amp; Refill
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span>🛠️</span> Preventive Maintenance
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="font-bold text-white">Owner:</span>
                <span>Loganathan V.</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a href="tel:+917703920339" className="hover:text-cyan-400 font-bold transition-colors">
                  +91 77039 20339
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:Loganathanv050101@gmail.com"
                  className="hover:text-cyan-400 break-all transition-colors"
                >
                  Loganathanv050101@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Location: S. Katteri, Arni</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <span className="inline-block text-[11px] text-cyan-300/80 font-medium">
                3+ Years of Work Experience
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © 2026 L&amp;L AC MECHANIC. All Rights Reserved.
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle compact={true} />
            <span className="text-slate-400 font-medium">Safe &amp; Secure Home Service</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
