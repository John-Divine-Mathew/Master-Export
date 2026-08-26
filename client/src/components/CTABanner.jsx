import React from 'react';
import { ArrowRight, Lock, CheckCircle2, Layers } from 'lucide-react';

export default function CTABanner({ onOpenLogin }) {
  return (
    <section className="py-14 sm:py-16 bg-[#000F2E] text-white relative overflow-hidden">
      
      {/* Ambient Blue Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-[#004EAB]/25 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white max-w-2xl mx-auto">
          Scale Your Global Trade with Master Export Pro
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
          Manage your international sales orders, supplier procurement, trade documentation, and multi-currency financials from one centralized hub.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3 w-full sm:w-auto">
          <button
            onClick={onOpenLogin}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#004EAB] hover:bg-[#003E8A] rounded-xl transition-all shadow-xl shadow-[#004EAB]/30 hover:shadow-[#004EAB]/50 transform hover:-translate-y-0.5"
          >
            <Lock className="w-4 h-4" />
            <span>Login to ERP Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href="#modules"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-[#BCD8F8]/40 rounded-xl transition-all"
          >
            <Layers className="w-4 h-4 text-[#8FBDF3]" />
            <span>View All Modules</span>
          </a>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Single-Admin Architecture</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Multi-Currency Support</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 1-Click Export Invoices</span>
        </div>

      </div>
    </section>
  );
}
