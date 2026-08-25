import React from 'react';
import { 
  ArrowRight, 
  Lock, 
  Layers
} from 'lucide-react';
import heroImg from '../assets/hero_logistics.jpg';

export default function Hero({ onOpenLogin }) {
  return (
    <section className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center overflow-hidden">
      
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Premium Dark Overlay with Subtle Deep Violet Undertone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090714]/90 via-[#0f0c1b]/80 to-[#18132b]/95 backdrop-blur-[1px]" />

      {/* Ambient Purple / Lavender Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-purple-600/20 blur-3xl pointer-events-none -z-0" />

      {/* Centered Minimal Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-22 flex flex-col items-center justify-center text-center">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.14] max-w-3xl mx-auto">
          Global Trade Operations,{' '}
          <span className="bg-gradient-to-r from-purple-300 via-violet-200 to-indigo-200 bg-clip-text text-transparent">
            Simplified.
          </span>
        </h1>

        {/* Short Supporting Description */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
          The centralized ERP platform built for export and import businesses. Manage orders, suppliers, customs compliance, and multi-currency financials from one unified platform.
        </p>

        {/* Direct Access Hero CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenLogin}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl transition-all shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-0.5"
          >
            <Lock className="w-4 h-4" />
            <span>Login to ERP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href="#modules"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-xl transition-all shadow-md hover:border-white/40"
          >
            <Layers className="w-4 h-4 text-purple-300" />
            <span>Explore ERP Modules</span>
          </a>
        </div>

      </div>

    </section>
  );
}
