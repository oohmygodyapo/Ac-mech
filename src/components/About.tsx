import React from 'react';
import { Award, UserCheck, ShieldCheck, MapPin, Phone, MessageCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 dark:from-slate-900 dark:via-blue-950 dark:to-slate-950 p-7 sm:p-8 text-white shadow-2xl overflow-hidden border border-sky-800 dark:border-cyan-500/30">
              
              {/* Decorative background glow */}
              <div
                className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold border border-cyan-400/30 mb-5">
                  <UserCheck className="w-3.5 h-3.5 text-cyan-300" />
                  <span>VERIFIED LOCAL TECHNICIAN</span>
                </div>

                {/* Owner Info Avatar/Emblem */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-0.5 shadow-lg shrink-0">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <span className="text-2xl font-black text-cyan-300 font-sans">LV</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-white">
                      Loganathan V.
                    </h3>
                    <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      Owner &amp; Lead AC Mechanic
                    </p>
                  </div>
                </div>

                {/* Stats / Badges Grid */}
                <div className="grid grid-cols-2 gap-3 my-5">
                  <div className="bg-white/10 dark:bg-black/30 rounded-xl p-3 border border-white/10 dark:border-white/5">
                    <div className="flex items-center gap-1.5 text-cyan-300 mb-1">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase">Experience</span>
                    </div>
                    <div className="text-lg font-black text-white">
                      3+ Years
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Work Experience
                    </div>
                  </div>

                  <div className="bg-white/10 dark:bg-black/30 rounded-xl p-3 border border-white/10 dark:border-white/5">
                    <div className="flex items-center gap-1.5 text-cyan-300 mb-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase">Service Area</span>
                    </div>
                    <div className="text-lg font-black text-white">
                      S. Katteri
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Arni &amp; Surrounds
                    </div>
                  </div>
                </div>

                {/* Tagline Box */}
                <div className="bg-blue-950/80 dark:bg-black/40 rounded-xl p-3.5 border border-cyan-500/30 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      POLICY
                    </span>
                    <div className="text-sm font-black text-white tracking-wide">
                      SAFE AND SECURE
                    </div>
                  </div>
                </div>

                {/* Direct Connect Buttons */}
                <div className="mt-5 flex items-center gap-2.5">
                  <a
                    href="tel:+917703920339"
                    className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs shadow-md shadow-cyan-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all btn-shine-sweep"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Loganathan</span>
                  </a>
                  <a
                    href="https://wa.me/917703920339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all btn-shine-sweep"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/80 px-3.5 py-1.5 rounded-full">
              LOCAL AC SPECIALIST
            </span>
            
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              About L&amp;L AC Mechanic
            </h2>

            <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-sky-50/80 dark:bg-slate-900/90 border border-sky-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
              <p className="text-base sm:text-lg font-semibold leading-relaxed text-slate-800 dark:text-slate-200">
                “Professional AC service, repair, installation &amp; maintenance in S. Katteri, Arni. Safe and secure service with 3+ years of technical experience.”
              </p>
            </div>

            <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Founded and managed by <strong className="text-slate-900 dark:text-white">Loganathan V.</strong>, L&amp;L AC Mechanic provides dedicated doorstep cooling services across S. Katteri and Arni.
              </p>
              <p>
                From minor cooling checks, chemical jet cleaning, and gas charging to complex PCB repairs and split AC shifting, every job is done transparently with fair pricing.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white text-sm">Doorstep Visits</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Prompt arrival across S. Katteri &amp; Arni.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white text-sm">Clear Diagnosis</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Inspection explained before starting repair.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white text-sm">Safe &amp; Secure</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">High electrical safety and clean work.</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
