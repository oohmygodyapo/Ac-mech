import React from 'react';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Home,
  Smile,
  BadgePercent,
  Check,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Reliable service',
      description:
        'Accurate diagnostics, genuine spares recommendations, and work done right the very first time.',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      tag: 'TRUSTED WORK',
    },
    {
      title: 'Quick response',
      description:
        'Fast turnaround across S. Katteri and Arni. We prioritize urgent cooling breakdown calls.',
      icon: <Clock className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
      tag: 'FAST ARRIVAL',
    },
    {
      title: 'Professional AC work',
      description:
        'Handled with 3+ years of technical hands-on field experience with precision tools and safety standards.',
      icon: <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />,
      tag: 'SKILLED MECHANIC',
    },
    {
      title: 'Home service available',
      description:
        'Hassle-free doorstep service at your home, shop, or office in S. Katteri and surrounding areas.',
      icon: <Home className="w-5 h-5 text-sky-600 dark:text-cyan-400" />,
      tag: 'AT YOUR DOORSTEP',
    },
    {
      title: 'Friendly service',
      description:
        'Polite, transparent communication. We clearly explain what the issue is before doing any work.',
      icon: <Smile className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      tag: 'PROPER & POLITE',
    },
    {
      title: 'Affordable service',
      description:
        'Honest and reasonable pricing without unexpected or hidden charges. Value-for-money cooling solutions.',
      icon: <BadgePercent className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      tag: 'FAIR & BEST RATES',
    },
  ];

  const servicedBrands = [
    'Voltas',
    'Daikin',
    'LG',
    'Blue Star',
    'Lloyd',
    'Panasonic',
    'Carrier',
    'Samsung',
    'Hitachi',
    'Godrej',
    'Whirlpool',
    'O General',
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-900 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-200 dark:border-cyan-800">
            <Check className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
            <span>CUSTOMER FIRST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            WHY CHOOSE US?
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Dedicated to providing S. Katteri, Arni with honest, dependable, and safe air conditioning repair services.
          </p>
        </div>

        {/* 6 Feature Checkmark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-2xs hover:shadow-2xl hover:shadow-cyan-900/10 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-slate-950 border border-sky-100 dark:border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/50 transition-transform">
                  {point.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {point.tag}
                </span>
              </div>

              {/* Checkmark + Title */}
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-base">✅</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-800 dark:group-hover:text-cyan-300 transition-colors">
                  {point.title}
                </h3>
              </div>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Multi-Brand Support Banner */}
        <div className="mt-10 sm:mt-12 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
          <div className="text-center mb-3.5">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              WE SERVICE ALL MAJOR AIR CONDITIONER BRANDS &amp; MODELS
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {servicedBrands.map((brand) => (
              <span
                key={brand}
                className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-950 hover:bg-sky-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
