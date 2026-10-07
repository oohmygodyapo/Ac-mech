import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Award, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { AnimatedACUnit } from './AnimatedACUnit';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-b from-sky-50/80 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500"
    >
      {/* 🌊 Premium Ambient Cooling Atmosphere & Subtle Background Waves */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] opacity-20 dark:opacity-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[720px] h-[500px] bg-gradient-to-b from-cyan-300/25 via-blue-500/15 to-transparent dark:from-cyan-500/20 dark:via-blue-600/15 dark:to-transparent rounded-full blur-3xl pointer-events-none animate-bg-wave"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-96 h-96 bg-gradient-to-t from-sky-200/30 to-transparent dark:from-blue-900/15 dark:to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimal Trust Pill Badges (Centered) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-950 dark:bg-blue-950/90 text-white text-xs font-bold tracking-wide shadow-xs border border-transparent dark:border-cyan-500/30">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>SAFE AND SECURE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100/90 dark:bg-cyan-950/80 text-cyan-950 dark:text-cyan-200 text-xs font-bold border border-cyan-200 dark:border-cyan-800 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400 shrink-0" />
            <span>3+ Years Experience</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100/90 dark:bg-slate-900 text-sky-950 dark:text-slate-200 text-xs font-semibold border border-sky-200 dark:border-slate-800 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-blue-700 dark:text-cyan-400 shrink-0" />
            <span>S. Katteri, Arni</span>
          </div>
        </div>

        {/* Visual-First Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text, Hierarchy & Premium CTAs */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/80 shadow-2xs w-fit mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span className="text-xs font-black text-cyan-900 dark:text-cyan-300 tracking-wider uppercase">
                L&amp;L AC MECHANIC • LOGANATHAN V.
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight transition-colors">
              L&amp;L AC SERVICE &amp; REPAIR
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-bold text-cyan-800 dark:text-cyan-300 leading-snug transition-colors">
              “Professional AC service, repair, installation &amp; maintenance.”
            </p>

            <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed transition-colors">
              Fast, dependable doorstep cooling service in <strong className="text-slate-900 dark:text-white">S. Katteri, Arni</strong> by expert technician <strong className="text-slate-900 dark:text-white">Loganathan V.</strong> with 3+ years experience.
            </p>

            {/* Micro Feature Indicators */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/90 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Home Service Available</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/90 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Quick Response</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/90 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>All Major Brands</span>
              </span>
            </div>

            {/* ✨ Premium Interactive CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full">
              
              {/* CALL NOW (Primary CTA) */}
              <a
                href="tel:+917703920339"
                className="group relative inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-700 text-white font-black text-sm shadow-lg shadow-blue-700/25 dark:shadow-[0_0_25px_rgba(2,132,199,0.4)] hover:shadow-cyan-500/40 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 btn-shine-sweep focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
              >
                <div className="p-1 rounded-lg bg-white/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span>CALL NOW</span>
              </a>

              {/* WHATSAPP (Secondary CTA) */}
              <a
                href="https://wa.me/917703920339"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-lg shadow-emerald-600/25 dark:shadow-[0_0_25px_rgba(5,150,105,0.4)] hover:shadow-emerald-500/40 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 btn-shine-sweep focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
              >
                <div className="p-1 rounded-lg bg-white/20 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                </div>
                <span>WHATSAPP</span>
                <ArrowRight className="w-4 h-4 ml-0.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              {/* GMAIL (Email CTA) */}
              <a
                href="mailto:Loganathanv050101@gmail.com"
                className="group relative inline-flex items-center justify-center gap-2.5 min-h-[48px] px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 hover:text-blue-900 dark:hover:text-cyan-300 border-2 border-slate-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 font-bold text-sm shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 btn-shine-sweep focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                <span>GMAIL</span>
              </a>
            </div>

            {/* Direct Helpline indicator */}
            <div className="mt-3.5 text-xs font-semibold text-slate-500 dark:text-slate-400 text-center lg:text-left">
              Direct Contact:{' '}
              <a
                href="tel:+917703920339"
                className="font-black text-blue-900 dark:text-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-200 underline underline-offset-2 ml-1"
              >
                +91 77039 20339
              </a>
            </div>
          </div>

          {/* Right Column: ❄️ Large Animated AC as the MAIN Visual Attraction */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-xl bg-gradient-to-b from-sky-100/70 via-sky-50/50 to-white/90 dark:from-slate-900/90 dark:via-blue-950/40 dark:to-slate-900/90 p-4 sm:p-7 rounded-3xl border border-sky-200/80 dark:border-cyan-500/25 shadow-2xl shadow-cyan-900/10 dark:shadow-[0_0_60px_rgba(6,182,212,0.18)] backdrop-blur-xs transition-colors duration-500">
              
              <div className="text-center mb-3">
                <span className="text-[11px] font-black tracking-widest text-blue-950 dark:text-cyan-200 uppercase bg-white/95 dark:bg-slate-950 border border-sky-200 dark:border-cyan-500/40 px-4 py-1 rounded-full shadow-2xs inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  ❄️ REALISTIC COOLING SIMULATION
                </span>
              </div>

              {/* The High-Impact Animated Split AC Unit */}
              <AnimatedACUnit />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
