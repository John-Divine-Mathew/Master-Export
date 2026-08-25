import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

export default function CTABanner({ onOpenDemo }) {
  return (
    <section className="py-14 sm:py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-semibold border border-blue-500/20">
          <span>Get Started Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
          Ready to Modernize Your Trade Operations?
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Replace disconnected spreadsheets, lost paperwork, and manual currency calculations with Master Export ERP.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
          >
            <Rocket className="w-4 h-4" />
            <span>Schedule a Live Walkthrough</span>
          </button>
          <a
            href="#simulator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-all"
          >
            <span>Try Free Live Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
