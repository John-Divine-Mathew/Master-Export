import React from 'react';
import { 
  ArrowRight, 
  Calculator, 
  CheckCircle2 
} from 'lucide-react';
import heroImg from '../assets/hero_logistics.jpg';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-center overflow-hidden">
      
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Subtle Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90 backdrop-blur-[2px]" />

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-80 bg-blue-600/20 blur-3xl pointer-events-none -z-0" />

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center text-center">
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Global Trade Operations,{' '}
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Simplified.
          </span>
        </h1>

        {/* Short Subheadline */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
          The centralized ERP built for export and import businesses. Manage orders, multi-modal ocean and air shipments, customs compliance, and real-time multi-currency profit margins in one place.
        </p>

        {/* Action CTAs */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
          >
            <span>Request Live Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#simulator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-xl transition-all shadow-md hover:border-white/40"
          >
            <Calculator className="w-4 h-4 text-sky-400" />
            <span>Test Profit Simulator</span>
          </a>
        </div>

        {/* Centered Key Feature Badges */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <span>Single-Admin Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <span>Multi-Currency (USD, EUR, INR...)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <span>Automated Customs PDFs</span>
          </div>
        </div>

      </div>

    </section>
  );
}
