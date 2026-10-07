import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 p-2.5 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200/90 dark:border-slate-800 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] dark:shadow-[0_-4px_30px_rgba(0,0,0,0.6)] transition-all duration-300"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href="tel:+917703920339"
          className="flex flex-col items-center justify-center min-h-[48px] py-2 px-1 rounded-xl bg-blue-700 active:bg-blue-800 text-white font-bold text-xs shadow-md shadow-blue-700/20 active:scale-95 transition-all btn-shine-sweep"
          aria-label="Call L&L AC Mechanic"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] leading-tight font-extrabold">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917703920339"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-2 px-1 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 active:scale-95 transition-all btn-shine-sweep"
          aria-label="WhatsApp L&L AC Mechanic"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 fill-white/20" />
          <span className="text-[11px] leading-tight font-extrabold">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href="https://maps.app.goo.gl/tP5rEL9EW1h7GwkU7?g_st=ac"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-2 px-1 rounded-xl bg-cyan-600 active:bg-cyan-700 text-white font-bold text-xs shadow-md shadow-cyan-600/20 active:scale-95 transition-all btn-shine-sweep"
          aria-label="Directions in Google Maps"
        >
          <Navigation className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] leading-tight font-extrabold">Directions</span>
        </a>
      </div>
    </aside>
  );
};
