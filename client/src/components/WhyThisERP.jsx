import React from 'react';
import { 
  Layers, 
  FileCheck2, 
  Receipt, 
  TrendingUp, 
  ShieldCheck,
  CheckCircle2, 
  PackageCheck
} from 'lucide-react';

export default function WhyThisERP() {
  const benefits = [
    {
      icon: Layers,
      title: "Unified Trade Hub",
      desc: "Centralize export sales orders, international procurement, and partner directories in one single-admin platform.",
      stat: "100% Unified"
    },
    {
      icon: FileCheck2,
      title: "1-Click Trade Documents",
      desc: "Generate audit-ready Commercial Invoices, Packing Lists, and Certificates of Origin in seconds without manual errors.",
      stat: "Under 2 Mins"
    },
    {
      icon: Receipt,
      title: "Payment & Remittance",
      desc: "Track buyer wire remittances, supplier payables, and Letter of Credit milestones with zero accounting discrepancies.",
      stat: "Zero Errors"
    },
    {
      icon: TrendingUp,
      title: "Multi-Currency Forex",
      desc: "Real-time margin visibility with live exchange rate conversions across USD, EUR, INR, AED, GBP, and CNY.",
      stat: "Live Forex"
    },
    {
      icon: PackageCheck,
      title: "HS Codes & Inventory",
      desc: "Maintain structured product catalogs with standardized HS code classifications, unit pricing, and stock alerts.",
      stat: "Standardized"
    },
    {
      icon: ShieldCheck,
      title: "Bank-Grade Compliance",
      desc: "Enterprise data encryption, immutable audit trails, and strict customs standards for complete operational confidence.",
      stat: "Enterprise Safe"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 scroll-mt-20 border-b border-slate-200/60" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Smooth Scroll Reveal */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 reveal-init">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004EAB] block mb-2">
            Why Master Export Pro
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Built Exclusively for Global Trade Operations
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal">
            Engineered to eliminate paperwork bottlenecks, protect profit margins, and accelerate international shipments.
          </p>
        </div>

        {/* 6 High-Impact Cards with Smooth Staggered Scroll Reveals & Hover-Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            const staggerClass = `stagger-${(idx % 6) + 1}`;
            return (
              <div 
                key={idx}
                className={`bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#BCD8F8] hover:shadow-xl hover:shadow-[#004EAB]/10 hover-lift transition-all duration-300 flex flex-col justify-between group cursor-default reveal-init ${staggerClass}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] text-[#004EAB] font-bold flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:bg-[#004EAB] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#004EAB] bg-[#EBF3FC] px-2.5 py-0.5 rounded-full border border-[#BCD8F8] group-hover:bg-[#004EAB] group-hover:text-white group-hover:border-[#004EAB] transition-all duration-300">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#004EAB] transition-colors duration-200 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#004EAB]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span className="text-slate-700">Verified Business ROI</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
