import React from 'react';
import { ThumbsUp, HeartHandshake, ShieldCheck, CheckCheck } from 'lucide-react';

export const CustomerTrust: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-sky-50/60 via-white to-sky-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 px-3.5 py-1.5 rounded-full shadow-2xs">
            LOCAL REPUTATION
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            CUSTOMER TRUST &amp; FEEDBACK
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real appreciation from homes and businesses across S. Katteri &amp; Arni.
          </p>
        </div>

        {/* Central Statement Card Wrapper */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white dark:bg-slate-900/90 border-2 border-cyan-200/80 dark:border-cyan-500/30 p-7 sm:p-11 shadow-xl shadow-cyan-900/5 dark:shadow-[0_0_40px_rgba(6,182,212,0.12)] text-center overflow-hidden">
            {/* Subtle decorative quote accent */}
            <div
              className="absolute -top-6 -left-6 text-cyan-100 dark:text-cyan-950/40 text-9xl font-serif select-none pointer-events-none opacity-40"
              aria-hidden="true"
            >
              “
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-13 h-13 rounded-2xl bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 mb-5 shadow-2xs">
                <ThumbsUp className="w-6 h-6" />
              </div>

              {/* Required Main Statement */}
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                “Proper and friendly service 👌”
              </h3>

              {/* Required Supporting Text */}
              <p className="mt-3.5 text-xl sm:text-2xl font-bold text-cyan-700 dark:text-cyan-400">
                “Cheap and best service.”
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-sm text-slate-600 dark:text-slate-300 font-medium">
                <span className="flex items-center gap-2">
                  <CheckCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  No Hidden Labor Charges
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Safe &amp; Secure Workmanship
                </span>
                <span className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  Customer Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
