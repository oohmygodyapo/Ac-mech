import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Navigation,
  Clock,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/80 px-3.5 py-1.5 rounded-full shadow-2xs">
            GET IN TOUCH
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            CONTACT US
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Reach out directly for prompt AC service, emergency repair, or regular maintenance in S. Katteri, Arni.
          </p>
        </div>

        {/* 4 Quick Action Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 sm:mb-12">
          
          {/* Phone Card */}
          <div className="bg-slate-50/80 dark:bg-slate-900/80 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-lg transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-cyan-400 flex items-center justify-center mb-3.5 shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                PHONE NUMBER
              </div>
              <a
                href="tel:+917703920339"
                className="mt-1 block text-lg font-black text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                +91 77039 20339
              </a>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Call for instant booking &amp; emergency repairs.
              </p>
            </div>
            <a
              href="tel:+917703920339"
              className="mt-4 inline-flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md shadow-blue-700/20 dark:shadow-[0_0_15px_rgba(2,132,199,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all btn-shine-sweep focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-slate-50/80 dark:bg-slate-900/80 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-3.5 shadow-2xs">
                <MessageCircle className="w-5 h-5 fill-emerald-100 dark:fill-emerald-900" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                WHATSAPP CHAT
              </div>
              <a
                href="https://wa.me/917703920339"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg font-black text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
              >
                +91 77039 20339
              </a>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Chat &amp; share AC pictures or location.
              </p>
            </div>
            <a
              href="https://wa.me/917703920339"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 dark:shadow-[0_0_15px_rgba(5,150,105,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all btn-shine-sweep focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-slate-50/80 dark:bg-slate-900/80 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-sky-400 dark:hover:border-cyan-500 hover:shadow-lg transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 flex items-center justify-center mb-3.5 shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                EMAIL ADDRESS
              </div>
              <a
                href="mailto:Loganathanv050101@gmail.com"
                className="mt-1 block text-xs sm:text-sm font-black text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 break-all transition-colors"
              >
                Loganathanv050101@gmail.com
              </a>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Send service requests or quotes.
              </p>
            </div>
            <a
              href="mailto:Loganathanv050101@gmail.com"
              className="mt-4 inline-flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-3.5 rounded-xl bg-slate-800 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-slate-700 text-white font-bold text-xs shadow-md shadow-slate-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all btn-shine-sweep focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>SEND EMAIL</span>
            </a>
          </div>

          {/* Location / Directions Card */}
          <div className="bg-slate-50/80 dark:bg-slate-900/80 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-blue-400 dark:hover:border-cyan-500 hover:shadow-lg transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-cyan-950/80 text-sky-700 dark:text-cyan-400 flex items-center justify-center mb-3.5 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                SERVICE AREA
              </div>
              <div className="mt-1 text-lg font-black text-slate-900 dark:text-white">
                S. Katteri, Arni
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Doorstep service in S. Katteri &amp; nearby areas.
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/tP5rEL9EW1h7GwkU7?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-3.5 rounded-xl bg-cyan-600 dark:bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-md shadow-cyan-600/20 dark:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all btn-shine-sweep focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

        </div>

        {/* Featured Google Maps & Workshop Location Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 dark:border-cyan-500/25 relative overflow-hidden">
            
            {/* Background ambient glow */}
            <div
              className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold border border-cyan-400/30 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                  <span>GOOGLE MAPS LOCATION PIN</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Safe and Secure Service</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Locate or Visit Us in S. Katteri, Arni
              </h3>

              <p className="mt-2.5 text-sm sm:text-base text-cyan-100/80 leading-relaxed max-w-2xl">
                L&amp;L AC Mechanic is based in <strong>S. Katteri, Arni</strong>. Lead technician <strong>Loganathan V.</strong> provides prompt doorstep air conditioner inspection, service, and repairs across the entire locality.
              </p>

              {/* Working Hours & Address Grid */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3.5 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-xs">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Working Hours</div>
                    <div className="text-cyan-200/90 text-xs sm:text-sm mt-0.5">Monday – Sunday</div>
                    <div className="text-slate-300 text-xs mt-0.5 font-mono">8:00 AM – 9:00 PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-xs">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Full Address</div>
                    <div className="text-cyan-200/90 text-xs sm:text-sm mt-0.5">S. Katteri, Arni</div>
                    <div className="text-slate-300 text-xs mt-0.5">Tiruvannamalai District, Tamil Nadu</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://maps.app.goo.gl/tP5rEL9EW1h7GwkU7?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-1 inline-flex items-center justify-center gap-2.5 min-h-[48px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/30 dark:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 btn-shine-sweep cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <div className="p-1 rounded-lg bg-slate-950/10 group-hover:scale-110 transition-transform">
                    <Navigation className="w-4 h-4 text-slate-950" />
                  </div>
                  <span>OPEN GOOGLE MAPS NAVIGATION</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="tel:+917703920339"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-lg shadow-blue-700/25 hover:scale-[1.02] active:scale-[0.98] transition-all btn-shine-sweep cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Directly</span>
                </a>
              </div>

              <p className="mt-3 text-center sm:text-left text-[11px] text-slate-400">
                Direct location coordinates link for Google Maps driving directions &amp; route guidance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
