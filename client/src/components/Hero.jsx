import React from 'react';
import { 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  ShieldCheck,
  Globe2,
  TrendingUp,
  Anchor,
  Plane,
  Sparkles
} from 'lucide-react';
import heroImg from '../assets/hero_logistics.jpg';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
      
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Premium Multi-Layer Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/95 backdrop-blur-[1.5px]" />

      {/* Ambient Blue Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/25 blur-3xl pointer-events-none -z-0" />

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center text-center">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Global Trade Operations,{' '}
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Simplified.
          </span>
        </h1>

        {/* Short Subheadline */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
          The centralized ERP platform built for export and import businesses. Manage orders, multi-modal ocean and air shipments, customs compliance, and real-time multi-currency profit margins in one place.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 rounded-xl transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
          >
            <span>Request Live Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#simulator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-xl transition-all shadow-md hover:border-white/40"
          >
            <Calculator className="w-4 h-4 text-sky-400" />
            <span>Test Profit Simulator</span>
          </a>
        </div>

        {/* Key Metrics Stats Strip */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl text-left sm:text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">$148M+</div>
            <div className="text-xs font-semibold text-sky-200/80 mt-0.5">Global Trade Handled</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-sky-400">45+ Ports</div>
            <div className="text-xs font-semibold text-sky-200/80 mt-0.5">Sea & Air Gateways</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-300">6 Currencies</div>
            <div className="text-xs font-semibold text-sky-200/80 mt-0.5">USD, EUR, INR, AED...</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">99.8%</div>
            <div className="text-xs font-semibold text-sky-200/80 mt-0.5">Customs Compliance</div>
          </div>
        </div>

      </div>

    </section>
  );
}
