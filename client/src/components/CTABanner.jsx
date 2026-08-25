import React from 'react';
import { ArrowRight, Calculator, ShieldCheck, CheckCircle2, Rocket } from 'lucide-react';

export default function CTABanner({ onOpenDemo }) {
  return (
    <section className="py-14 sm:py-16 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-blue-600/20 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/20 text-sky-400 text-xs font-bold border border-blue-500/20">
          <Rocket className="w-3.5 h-3.5" />
          <span>Ready to Scale Your Trade Operations?</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white max-w-2xl mx-auto">
          See How Master Export ERP Can Transform Your Business
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
          Join leading exporters and trading houses who manage their international orders, ocean shipments, customs documentation, and profits from one centralized hub.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3 w-full sm:w-auto">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 rounded-xl transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
          >
            <span>Request a Product Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href="#simulator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 rounded-xl transition-all"
          >
            <Calculator className="w-4 h-4 text-sky-400" />
            <span>Test Live Simulator</span>
          </a>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full Single-Admin Setup</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Live Currency Multi-Forex</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 1-Click Export Invoices</span>
        </div>

      </div>
    </section>
  );
}
