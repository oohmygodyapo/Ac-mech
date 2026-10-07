import React, { useState } from 'react';
import { Snowflake, Wind, Zap, Gauge, Power, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AnimatedACUnitProps {
  className?: string;
}

export const AnimatedACUnit: React.FC<AnimatedACUnitProps> = ({ className = '' }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [temperature, setTemperature] = useState<number>(18);
  const [mode, setMode] = useState<'turbo' | 'cool' | 'eco'>('cool');
  const [isPowered, setIsPowered] = useState<boolean>(true);
  const [swingActive, setSwingActive] = useState<boolean>(true);

  const handleModeChange = (newMode: 'turbo' | 'cool' | 'eco') => {
    setMode(newMode);
    if (!isPowered) setIsPowered(true);
    if (newMode === 'turbo') setTemperature(16);
    if (newMode === 'cool') setTemperature(18);
    if (newMode === 'eco') setTemperature(24);
  };

  // 6 realistically timed floating snowflake particles
  const particleOffsets = [
    { left: '14%', delay: '0s', duration: '2.5s', drift: '-20px', size: 14, opacity: 0.9 },
    { left: '26%', delay: '0.6s', duration: '2.3s', drift: '12px', size: 18, opacity: 0.95 },
    { left: '40%', delay: '1.4s', duration: '2.8s', drift: '-14px', size: 16, opacity: 0.85 },
    { left: '56%', delay: '0.2s', duration: '2.4s', drift: '16px', size: 20, opacity: 0.95 },
    { left: '72%', delay: '1.1s', duration: '2.7s', drift: '-16px', size: 15, opacity: 0.9 },
    { left: '86%', delay: '1.8s', duration: '2.2s', drift: '14px', size: 13, opacity: 0.85 },
  ];

  return (
    <div className={`relative flex flex-col items-center select-none w-full ${className}`}>
      
      {/* 🌊 AMBIENT COOLING AURA & ATMOSPHERIC WAVES (Adapts to Light/Dark) */}
      {isPowered && (
        <div className="absolute inset-0 pointer-events-none -top-10 flex justify-center">
          {/* Deep radial cinematic cooling blur */}
          <div
            className={`w-[120%] max-w-2xl h-[420px] rounded-full blur-3xl animate-ac-glow transition-all duration-700 ${
              isDark
                ? 'bg-gradient-to-b from-cyan-400/30 via-blue-600/20 to-transparent'
                : 'bg-gradient-to-b from-cyan-400/18 via-sky-300/15 to-transparent'
            }`}
            aria-hidden="true"
          />

          {/* Ambient wave rib 1 */}
          <div
            className={`absolute top-4 w-[110%] h-72 rounded-[45%] blur-2xl animate-bg-wave transition-all duration-700 ${
              isDark
                ? 'bg-gradient-to-tr from-cyan-400/25 via-blue-500/15 to-transparent'
                : 'bg-gradient-to-tr from-cyan-300/15 via-sky-300/10 to-transparent'
            }`}
            aria-hidden="true"
          />

          {/* Ambient wave rib 2 (counter phase) */}
          <div
            className={`absolute top-10 w-[115%] h-80 rounded-[50%] blur-2xl animate-bg-wave transition-all duration-700 ${
              isDark
                ? 'bg-gradient-to-br from-sky-400/25 via-cyan-400/15 to-transparent'
                : 'bg-gradient-to-br from-sky-300/15 via-cyan-200/10 to-transparent'
            }`}
            style={{ animationDelay: '-4s' }}
            aria-hidden="true"
          />
        </div>
      )}

      {/* ❄️ THE LARGE SPLIT AC INDOOR UNIT */}
      <div className="relative w-full max-w-[480px] sm:max-w-[560px] transition-all animate-ac-float z-10">
        
        {/* Unit Chassis Shell */}
        <div
          className={`relative rounded-3xl p-1.5 sm:p-2 transition-all duration-500 ${
            isDark
              ? 'bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-[0_25px_60px_rgba(6,182,212,0.22)] border border-cyan-500/30'
              : 'bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 shadow-[0_20px_50px_rgba(8,145,178,0.18)] border border-slate-300/80'
          }`}
        >
          {/* Top Return-Air Grille / Inflow Vents */}
          <div className="h-3 sm:h-3.5 w-full bg-slate-900/15 dark:bg-slate-950/80 rounded-t-2xl overflow-hidden flex items-center gap-1 px-4 py-0.5 border-b border-black/10 dark:border-white/10">
            {[...Array(34)].map((_, i) => (
              <div
                key={i}
                className="flex-1 h-2 rounded-xs bg-slate-400/60 dark:bg-slate-700/80 shadow-inner"
              />
            ))}
          </div>

          {/* Front High-Gloss Sculpted Panel */}
          <div className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-100 dark:via-white dark:to-slate-200 rounded-2xl pt-3.5 pb-2.5 px-4 sm:px-6 shadow-sm overflow-hidden text-slate-900">
            
            {/* ✨ Realistic light shine reflection beam moving smoothly across the high-gloss front casing */}
            {isPowered && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-20">
                <div className="absolute -inset-y-6 -left-40 w-36 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-xs animate-light-shine" />
              </div>
            )}

            {/* Top Gloss Edge Highlight */}
            <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-95" />

            {/* Brand Logo & Model Header */}
            <div className="flex items-center justify-between mb-2 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black tracking-widest text-slate-900 uppercase font-sans">
                  L&amp;L
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-cyan-700 dark:text-cyan-800 tracking-wider flex items-center gap-1 bg-cyan-50 dark:bg-cyan-100/80 px-2 py-0.5 rounded-full border border-cyan-200">
                  <Sparkles className="w-2.5 h-2.5 text-cyan-600" />
                  INVERTER PRO
                </span>
              </div>

              {/* Status LED & Badge */}
              <div className="flex items-center gap-1.5">
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isPowered
                      ? mode === 'turbo'
                        ? 'bg-cyan-400 shadow-[0_0_12px_#22d3ee]'
                        : 'bg-emerald-400 shadow-[0_0_12px_#34d399]'
                      : 'bg-slate-400'
                  }`}
                />
                <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-wider">
                  {isPowered ? 'ACTIVE' : 'STANDBY'}
                </span>
              </div>
            </div>

            {/* AC Center Row: Features & Hidden LED Temperature Display (Symmetrically Aligned) */}
            <div className="flex items-center justify-between my-1 sm:my-2 relative z-10">
              <div className="flex items-center gap-2">
                {/* 5-Star Energy Label */}
                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 rounded px-1.5 sm:px-2 py-0.5 shadow-2xs">
                  <span className="text-[8px] sm:text-[9px] font-bold text-amber-700 tracking-tighter">★★★★★</span>
                  <span className="text-[7.5px] sm:text-[8px] font-black text-amber-900 ml-0.5">5 STAR</span>
                </div>
                <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wide hidden xs:inline">
                  ECO R32
                </span>
              </div>

              {/* Digital LED Screen on Right with Vibrant Cyan Glow */}
              <div className="relative bg-slate-950 rounded-xl px-3 sm:px-3.5 py-1.5 border border-slate-800 shadow-inner flex items-center gap-2 sm:gap-3">
                {isPowered ? (
                  <>
                    <div className="flex items-baseline">
                      <span className="font-mono text-2xl sm:text-3xl font-black text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] tracking-tight">
                        {temperature}
                      </span>
                      <span className="font-mono text-xs font-bold text-cyan-400 ml-0.5">
                        °C
                      </span>
                    </div>

                    <div className="h-6 w-px bg-slate-800" />

                    <div className="flex flex-col justify-center">
                      <span className="text-[8.5px] font-black tracking-wider text-cyan-400 uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] flex items-center gap-1">
                        <Snowflake className="w-2.5 h-2.5 animate-spin-slow text-cyan-300" />
                        COOLING
                      </span>
                      <span className="text-[8px] font-mono font-bold text-sky-400 uppercase">
                        {mode.toUpperCase()}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-xs font-mono font-bold text-slate-500 py-1 px-2">
                    STANDBY
                  </div>
                )}
              </div>
            </div>

            {/* Metallic Chrome Accent Trim Line */}
            <div className="mt-2.5 h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-xs" />

            {/* Bottom Louver Vent & Blower Chamber */}
            <div className="relative mt-1 bg-slate-950 rounded-b-xl p-1 overflow-hidden border border-slate-900 shadow-inner">
              
              {/* Rotating Cross-Flow Fan Blower Visual */}
              <div className="relative h-4 sm:h-5 w-full bg-slate-950 rounded-lg overflow-hidden flex items-center justify-center">
                {isPowered && (
                  <div
                    className="absolute inset-0 opacity-80 animate-ac-blower"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        90deg,
                        rgba(6, 182, 212, 0.6) 0px,
                        rgba(6, 182, 212, 0.6) 3px,
                        rgba(15, 23, 42, 0.98) 3px,
                        rgba(15, 23, 42, 0.98) 12px
                      )`,
                      animationDuration: mode === 'turbo' ? '0.18s' : mode === 'eco' ? '0.4s' : '0.26s',
                    }}
                  />
                )}
                {/* Fan Center glow & blade shadow */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-cyan-950/30 to-slate-950" />
                <span className="relative z-10 text-[8px] font-mono text-cyan-300/90 tracking-widest uppercase font-semibold">
                  {isPowered ? 'CROSS-FLOW FAN ACTIVE' : 'FAN STOPPED'}
                </span>
              </div>

              {/* Motorized Discharge Louver / Air Flap */}
              <div
                className={`h-2.5 sm:h-3 w-full bg-gradient-to-b from-slate-100 via-white to-slate-200 rounded-md shadow-sm border-t border-slate-200 transition-transform ${
                  isPowered && swingActive ? 'animate-ac-louver origin-top' : ''
                }`}
                style={{
                  transform: isPowered ? 'rotateX(30deg)' : 'rotateX(0deg)',
                  transformStyle: 'preserve-3d',
                }}
              />
            </div>

          </div>
        </div>

        {/* ❄️ REALISTIC-LOOKING COOL AIRFLOW WAVES & PARTICLES (Smooth Height & Opacity Transition) */}
        <div
          className={`relative w-full pointer-events-none transition-all duration-500 overflow-visible ${
            isPowered ? 'h-32 sm:h-40 opacity-100' : 'h-8 opacity-0 pointer-events-none'
          }`}
        >
          {isPowered && (
            <>
              {/* Wave 1: Primary Dense Chilled Flow */}
              <div
                className={`absolute left-3 right-3 top-0 h-30 rounded-b-3xl blur-md animate-cool-flow-1 transition-all ${
                  isDark
                    ? 'bg-gradient-to-b from-cyan-400/50 via-sky-400/30 to-transparent'
                    : 'bg-gradient-to-b from-cyan-400/40 via-sky-300/25 to-transparent'
                }`}
                style={{ clipPath: 'polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)' }}
              />

              {/* Wave 2: Wider Secondary Spread with phase offset */}
              <div
                className={`absolute left-1 right-1 top-0 h-34 rounded-b-3xl blur-lg animate-cool-flow-2 transition-all ${
                  isDark
                    ? 'bg-gradient-to-b from-sky-400/40 via-cyan-300/20 to-transparent'
                    : 'bg-gradient-to-b from-sky-400/30 via-cyan-300/15 to-transparent'
                }`}
                style={{ clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)' }}
              />

              {/* Wave 3: Ambient Cooling Mist Depth */}
              <div
                className={`absolute left-5 right-5 top-1 h-38 rounded-b-full blur-xl animate-cool-flow-3 transition-all ${
                  isDark
                    ? 'bg-gradient-to-b from-blue-400/30 via-cyan-200/15 to-transparent'
                    : 'bg-gradient-to-b from-blue-400/25 via-cyan-200/10 to-transparent'
                }`}
              />

              {/* Airflow Velocity Stream Vector Graphics */}
              <svg
                className="absolute inset-0 w-full h-full opacity-85"
                viewBox="0 0 500 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 50,0 Q 80,65 120,140"
                  stroke="url(#windGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="8 8"
                  className="animate-pulse"
                />
                <path
                  d="M 150,0 Q 170,55 190,145"
                  stroke="url(#windGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="12 6"
                />
                <path
                  d="M 250,0 L 250,150"
                  stroke="url(#windGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="10 8"
                />
                <path
                  d="M 350,0 Q 330,55 310,145"
                  stroke="url(#windGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="12 6"
                />
                <path
                  d="M 450,0 Q 420,65 380,140"
                  stroke="url(#windGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="8 8"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="windGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity={isDark ? 0.95 : 0.85} />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity={isDark ? 0.65 : 0.55} />
                    <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* ❄️ Drifting Ice Crystal Snowflake Particles */}
              {particleOffsets.map((p, index) => (
                <div
                  key={index}
                  className="absolute top-1 pointer-events-none"
                  style={{
                    left: p.left,
                    animation: `snowDrift ${p.duration} ease-in-out ${p.delay} infinite`,
                    // @ts-expect-error CSS custom variable
                    '--drift-x': p.drift,
                  }}
                >
                  <Snowflake
                    className={`drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] ${
                      isDark ? 'text-cyan-300' : 'text-cyan-500'
                    }`}
                    style={{ width: `${p.size}px`, height: `${p.size}px`, opacity: p.opacity }}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* 🎛️ Interactive Controller Dock (Symmetrical & Perfectly Aligned across all screens) */}
      <div
        className={`relative z-20 mt-3 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-xl flex flex-col sm:flex-row items-center justify-center gap-2 max-w-lg w-full transition-all duration-300 ${
          isDark
            ? 'bg-slate-900/90 border border-slate-800 shadow-slate-950/60'
            : 'bg-white/95 border border-sky-200/90 shadow-sky-950/10'
        }`}
      >
        {/* Row 1 on mobile: Power & Swing Side-by-Side */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Power Button */}
          <button
            onClick={() => setIsPowered(!isPowered)}
            type="button"
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] cursor-pointer active:scale-95 btn-shine-sweep ${
              isPowered
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25 hover:bg-emerald-700'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
            title="Toggle AC Power"
          >
            <Power className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">{isPowered ? 'AC ON' : 'AC OFF'}</span>
          </button>

          {/* Louver Swing Button */}
          <button
            onClick={() => setSwingActive(!swingActive)}
            type="button"
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] cursor-pointer active:scale-95 ${
              swingActive && isPowered
                ? 'bg-sky-100 dark:bg-cyan-950/80 text-sky-800 dark:text-cyan-300 border border-sky-300 dark:border-cyan-700/60 shadow-2xs'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400'
            }`}
            title="Toggle Louver Swing"
          >
            <Wind className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
            <span className="whitespace-nowrap">Swing {swingActive ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        {/* Row 2 on mobile: 3 Mode Buttons Aligned in Balanced Grid */}
        <div className="grid grid-cols-3 sm:flex items-center bg-slate-100 dark:bg-slate-950 rounded-xl p-1 gap-1 border border-slate-200 dark:border-slate-800 w-full sm:w-auto">
          <button
            onClick={() => handleModeChange('turbo')}
            type="button"
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-bold transition-all min-h-[44px] cursor-pointer active:scale-95 ${
              mode === 'turbo' && isPowered
                ? 'bg-blue-700 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-cyan-300'
            }`}
          >
            <Zap className="w-3 h-3 text-cyan-300 shrink-0" />
            <span className="whitespace-nowrap">Turbo 16°</span>
          </button>
          <button
            onClick={() => handleModeChange('cool')}
            type="button"
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-bold transition-all min-h-[44px] cursor-pointer active:scale-95 ${
              mode === 'cool' && isPowered
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-300'
            }`}
          >
            <Snowflake className="w-3 h-3 text-cyan-200 shrink-0" />
            <span className="whitespace-nowrap">Cool 18°</span>
          </button>
          <button
            onClick={() => handleModeChange('eco')}
            type="button"
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-bold transition-all min-h-[44px] cursor-pointer active:scale-95 ${
              mode === 'eco' && isPowered
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400'
            }`}
          >
            <Gauge className="w-3 h-3 text-emerald-200 shrink-0" />
            <span className="whitespace-nowrap">Eco 24°</span>
          </button>
        </div>
      </div>

      <div className="mt-2 text-center">
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 inline-flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
          <span>Split AC Simulation • {isDark ? 'Cinematic Cyan Glow' : 'Clean Ice-Blue Aura'}</span>
        </span>
      </div>

    </div>
  );
};
