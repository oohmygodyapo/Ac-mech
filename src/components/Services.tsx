import React from 'react';
import {
  Wrench,
  Snowflake,
  Home,
  Wind,
  Settings,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  badge: string;
  name: string;
  description: string;
  features: string[];
  gradient: string;
  borderColor: string;
  badgeBg: string;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'repair',
      icon: <Wrench className="w-7 h-7 text-amber-500" />,
      badge: 'TROUBLESHOOTING',
      name: 'AC REPAIR',
      description: 'Professional troubleshooting and repair for AC problems.',
      features: [
        'Not cooling or low cooling fix',
        'PCB circuit board diagnosis & repair',
        'Compressor tripping & capacitor fix',
        'Water leakage inside room solved',
        'Abnormal noise & vibration fixes',
      ],
      gradient: 'from-amber-500/15 via-amber-500/5 to-transparent',
      borderColor: 'group-hover:border-amber-400 dark:group-hover:border-amber-500/80',
      badgeBg: 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border-amber-200 dark:border-amber-800',
    },
    {
      id: 'service',
      icon: <Snowflake className="w-7 h-7 text-cyan-500" />,
      badge: 'DEEP CLEANING',
      name: 'AC SERVICE',
      description: 'Regular AC servicing to help maintain cooling performance.',
      features: [
        'High-pressure jet pump water wash',
        'Indoor cooling coil deep foam wash',
        'Outdoor condenser unit chemical cleaning',
        'Air filter disinfection & sanitize',
        'Drain pipe & tray blockage clearance',
      ],
      gradient: 'from-cyan-500/15 via-cyan-500/5 to-transparent',
      borderColor: 'group-hover:border-cyan-400 dark:group-hover:border-cyan-500/80',
      badgeBg: 'bg-cyan-100 dark:bg-cyan-950/80 text-cyan-900 dark:text-cyan-200 border-cyan-200 dark:border-cyan-800',
    },
    {
      id: 'installation',
      icon: <Home className="w-7 h-7 text-blue-600 dark:text-cyan-400" />,
      badge: 'SETUP & SHIFTING',
      name: 'AC INSTALLATION',
      description: 'AC installation and setup for your home or business.',
      features: [
        'New split AC indoor & outdoor mounting',
        'Window AC bracket fitting & casing',
        'Safe AC uninstallation & relocation',
        'Copper piping flaring & vacuuming',
        'Vibration-free heavy duty wall brackets',
      ],
      gradient: 'from-blue-600/15 via-blue-600/5 to-transparent',
      borderColor: 'group-hover:border-blue-400 dark:group-hover:border-blue-500/80',
      badgeBg: 'bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800',
    },
    {
      id: 'gas',
      icon: <Wind className="w-7 h-7 text-sky-500" />,
      badge: 'PRESSURE & REFILL',
      name: 'AC GAS SERVICE',
      description: 'AC gas-related service and cooling problem inspection.',
      features: [
        'Nitrogen pressure leak detection',
        'Flare nut & valve leak brazing repair',
        'R32, R410A & R22 eco refrigerant gas refill',
        'Vacuum pump moisture removal',
        'Chilled airflow temperature testing',
      ],
      gradient: 'from-sky-500/15 via-sky-500/5 to-transparent',
      borderColor: 'group-hover:border-sky-400 dark:group-hover:border-sky-500/80',
      badgeBg: 'bg-sky-100 dark:bg-sky-950/80 text-sky-900 dark:text-sky-200 border-sky-200 dark:border-sky-800',
    },
    {
      id: 'maintenance',
      icon: <Settings className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
      badge: 'PREVENTIVE CARE',
      name: 'AC MAINTENANCE',
      description: 'Routine maintenance to keep your AC working properly.',
      features: [
        'Pre-summer full health diagnostics',
        'Electrical voltage & amp load check',
        'Thermostat sensor calibration',
        'Blower motor lubrication & check',
        'Prevents unexpected power bills & breakdowns',
      ],
      gradient: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
      borderColor: 'group-hover:border-emerald-400 dark:group-hover:border-emerald-500/80',
      badgeBg: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/80 px-3.5 py-1.5 rounded-full shadow-2xs">
            EXPERT SOLUTIONS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            OUR SERVICES
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Professional doorstep air conditioning solutions for Split &amp; Window ACs in S. Katteri, Arni.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-3xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:bg-white dark:hover:bg-slate-900 ${service.borderColor} flex flex-col justify-between`}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-13 h-13 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {service.icon}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${service.badgeBg}`}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-blue-950 dark:group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Key feature list */}
                <div className="mt-4 pt-3.5 border-t border-slate-200/80 dark:border-slate-800 space-y-1.5">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons with 44px+ touch target & shine sweep */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2">
                <a
                  href={`https://wa.me/917703920339?text=${encodeURIComponent(
                    `Hello Loganathan V., I need ${service.name} service for my AC in S. Katteri / Arni.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 min-h-[44px] py-2.5 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 group-hover:bg-emerald-600 text-emerald-800 dark:text-emerald-300 group-hover:text-white font-bold text-xs border border-emerald-200 dark:border-emerald-800 group-hover:border-emerald-600 shadow-2xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 btn-shine-sweep"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="tel:+917703920339"
                  className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 group-hover:bg-blue-600 text-blue-800 dark:text-cyan-300 group-hover:text-white border border-blue-200 dark:border-slate-700 group-hover:border-blue-600 shadow-2xs hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 btn-shine-sweep"
                  title="Call for this service"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}

          {/* Quick Consultation Highlight Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 dark:from-slate-900 dark:via-blue-950 dark:to-slate-950 border border-transparent dark:border-cyan-500/25 p-6 sm:p-7 text-white shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-4 shadow-sm">
                <Snowflake className="w-6 h-6 animate-spin-slow" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-900/50 border border-cyan-700/60 px-2.5 py-1 rounded-full">
                SAME-DAY INSPECTION
              </span>
              <h3 className="mt-3 text-xl sm:text-2xl font-black tracking-tight text-white">
                Need Fast AC Service in Arni?
              </h3>
              <p className="mt-2 text-sm text-cyan-100/80 leading-relaxed">
                Whether your AC is leaking water, blowing warm air, or tripping the circuit, Loganathan V. provides direct doorstep checkups.
              </p>
              <div className="mt-4 space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Split &amp; Window AC expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Voltas, Daikin, LG, Blue Star &amp; more</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Transparent inspection before repair</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href="tel:+917703920339"
                className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all btn-shine-sweep cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now: +91 77039 20339</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
