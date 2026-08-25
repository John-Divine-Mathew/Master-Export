import React from 'react';
import { Star, Quote, Building2, Globe, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Master Export replaced 4 separate Excel sheets and manual CHA follow-ups. We now track our Mundra-to-Rotterdam shipments and know our exact net profit in USD and INR before the vessel sails.",
      author: "Rajesh V. Patel",
      role: "Managing Director",
      company: "Apex Global Agro Exports (Gujarat)",
      metrics: "3.2x Faster Order Turnaround"
    },
    {
      quote: "The automated document vault is incredible. Generating commercial invoices, packing lists, and shipping instructions with correct HS codes takes less than 2 minutes now.",
      author: "Farhan Al-Mansoor",
      role: "Head of International Trade",
      company: "Gulf Logistics & Commodities (Dubai, UAE)",
      metrics: "100% Error-Free Trade Docs"
    },
    {
      quote: "Single-admin control is what we needed. I can oversee all our overseas buyer accounts, calculate customs margins with live forex rates, and dispatch documents from my laptop.",
      author: "David Chen",
      role: "Operations VP",
      company: "Pacific Rim Trading Partners (Singapore / UK)",
      metrics: "$4.5M+ Annual Volume Managed"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-80 bg-blue-600/10 blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-500/20">
            <Star className="w-3.5 h-3.5 fill-sky-400" />
            <span>Proven Client Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Trusted by Leaders in International Trade
          </h2>
          <p className="mt-3.5 text-base text-slate-300 font-normal">
            See how enterprise exporters and commodity trading houses scale their operations with Master Export ERP.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-7 border border-slate-700/80 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-sky-400 bg-sky-950/80 border border-sky-500/30 px-2.5 py-0.5 rounded-full">
                    {item.metrics}
                  </span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/80">
                <div className="text-sm font-bold text-white">{item.author}</div>
                <div className="text-xs text-sky-400 font-medium">{item.role}</div>
                <div className="text-xs text-slate-400 mt-0.5">{item.company}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
