import React from 'react';
import { Globe2, ShieldCheck } from 'lucide-react';

// Exactly 10 International Trade Coverage Markets with HD Flag Images
const COUNTRIES = [
  {
    name: 'United States',
    flagUrl: 'https://flagcdn.com/w160/us.png',
    code: 'USA',
    hub: 'North America Corridor'
  },
  {
    name: 'Germany',
    flagUrl: 'https://flagcdn.com/w160/de.png',
    code: 'DEU',
    hub: 'European Union Hub'
  },
  {
    name: 'United Arab Emirates',
    flagUrl: 'https://flagcdn.com/w160/ae.png',
    code: 'UAE',
    hub: 'Middle East Trade Hub'
  },
  {
    name: 'United Kingdom',
    flagUrl: 'https://flagcdn.com/w160/gb.png',
    code: 'GBR',
    hub: 'UK & Atlantic Gateway'
  },
  {
    name: 'Singapore',
    flagUrl: 'https://flagcdn.com/w160/sg.png',
    code: 'SGP',
    hub: 'Southeast Asia Gateway'
  },
  {
    name: 'Netherlands',
    flagUrl: 'https://flagcdn.com/w160/nl.png',
    code: 'NLD',
    hub: 'Rotterdam Europort'
  },
  {
    name: 'Japan',
    flagUrl: 'https://flagcdn.com/w160/jp.png',
    code: 'JPN',
    hub: 'East Asia Supply Chain'
  },
  {
    name: 'Saudi Arabia',
    flagUrl: 'https://flagcdn.com/w160/sa.png',
    code: 'SAU',
    hub: 'GCC Logistics Network'
  },
  {
    name: 'Australia',
    flagUrl: 'https://flagcdn.com/w160/au.png',
    code: 'AUS',
    hub: 'Oceania Trade Hub'
  },
  {
    name: 'India',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    code: 'IND',
    hub: 'South Asia Export Core'
  }
];

export default function CountryCoverage() {
  // Quadruple the array for a smooth, continuous infinite loop without any jumps
  const marqueeList = [...COUNTRIES, ...COUNTRIES, ...COUNTRIES, ...COUNTRIES];

  return (
    <section className="py-12 sm:py-16 bg-[#000F2E] text-white border-y border-[#001848] relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-48 bg-[#004EAB]/20 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8FBDF3] flex items-center justify-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5 text-[#8FBDF3]" />
            <span>International Trade Corridors</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Global Trade. Multiple Markets. One ERP.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-normal">
            Master Export connects export and import operations across premier international ports and customs jurisdictions.
          </p>
        </div>

      </div>

      {/* CONTINUOUS LEFT-TO-RIGHT INFINITE CAROUSEL TRACK */}
      <div className="relative w-full overflow-hidden py-3">
        
        {/* Left & Right Smooth Edge Fade Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#000F2E] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#000F2E] to-transparent z-20 pointer-events-none" />

        {/* Marquee Motion Container (Left-to-Right continuous animation) */}
        <div className="flex w-max animate-marquee-ltr hover:[animation-play-state:paused] gap-4 sm:gap-5 px-4">
          {marqueeList.map((country, idx) => (
            <div
              key={`${country.code}-${idx}`}
              className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-[#001848]/80 hover:bg-[#001848] border border-white/15 hover:border-[#8FBDF3]/60 shadow-lg backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 group shrink-0 min-w-[180px] sm:min-w-[200px]"
            >
              {/* Real HD Flag Image Container */}
              <div className="w-16 h-11 sm:w-18 sm:h-12 rounded-lg overflow-hidden border-2 border-white/20 shadow-md mb-3 bg-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-[#8FBDF3]/80 transition-all duration-300">
                <img
                  src={country.flagUrl}
                  alt={`${country.name} Flag`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Country Name */}
              <div className="font-extrabold text-sm sm:text-base text-white group-hover:text-[#8FBDF3] transition-colors leading-tight mb-1 truncate max-w-[160px]">
                {country.name}
              </div>

              {/* Small Word / Trade Hub Subtitle Below */}
              <div className="text-[11px] text-slate-400 font-medium leading-tight truncate max-w-[160px] flex items-center justify-center gap-1">
                <span>{country.hub}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Global Trade Standards Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-6 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] text-slate-400 font-medium">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Multi-Currency Forex Settlements</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> International HS Code Mapping</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Global Incoterms 2020 Compliant</span>
        </div>
      </div>

    </section>
  );
}
