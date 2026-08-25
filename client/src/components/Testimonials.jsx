import React from 'react';
import { Star, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Master Export centralized our multi-currency billing and shipment tracking. We know our net margins in USD and INR before any vessel departs.",
      author: "Rajesh V. Patel",
      role: "Managing Director",
      company: "Apex Global Agro Exports",
      metrics: "3.2x Faster Turnaround"
    },
    {
      quote: "Generating error-free Commercial Invoices, Packing Lists, and shipping instructions with compliant HS codes takes under 2 minutes.",
      author: "Farhan Al-Mansoor",
      role: "Head of Trade Operations",
      company: "Gulf Logistics & Commodities",
      metrics: "100% Compliant Trade Docs"
    },
    {
      quote: "Single-admin control gives us complete oversight of overseas buyer accounts, customs margins, and live carrier tracking in one dashboard.",
      author: "David Chen",
      role: "Operations VP",
      company: "Pacific Rim Trading Partners",
      metrics: "$4.5M+ Annual Volume"
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-blue-600/10 blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Short & Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2.5 border border-blue-500/20">
            <Star className="w-3.5 h-3.5 fill-sky-400" />
            <span>Proven Reliability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Trusted by Global Trade Teams
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 font-normal max-w-2xl mx-auto">
            Powering smarter operations across international trade with connected, reliable, and efficient workflows.
          </p>
        </div>

        {/* Concise Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-slate-700/70 flex flex-col justify-between hover:border-blue-500/40 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-sky-400 bg-sky-950/70 border border-sky-500/30 px-2 py-0.5 rounded-full">
                    {item.metrics}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-700/60">
                <div className="text-xs sm:text-sm font-bold text-white">{item.author}</div>
                <div className="text-[11px] text-sky-400 font-medium">{item.role} &bull; {item.company}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
