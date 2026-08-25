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
      title: "Unified Trade Management",
      desc: "Consolidate international sales orders, supplier procurement, and customer records into one single-admin platform.",
      stat: "100% Unified"
    },
    {
      icon: FileCheck2,
      title: "Automated Trade Documentation",
      desc: "Generate audit-ready Commercial Invoices, Packing Lists, and Certificates of Origin in seconds without manual entry.",
      stat: "Under 2 Mins"
    },
    {
      icon: Receipt,
      title: "Payment & Invoice Tracking",
      desc: "Monitor buyer wire remittances, supplier payables, and Letter of Credit milestones with zero accounting discrepancies.",
      stat: "Zero Errors"
    },
    {
      icon: TrendingUp,
      title: "Multi-Currency Financials",
      desc: "Accurate multi-currency margin visibility with real-time conversion rates across USD, EUR, INR, AED, GBP, and CNY.",
      stat: "Live Forex"
    },
    {
      icon: PackageCheck,
      title: "Catalog & HS Code Management",
      desc: "Maintain structured product inventories with standardized HS code mappings, unit measurements, and pricing tiers.",
      stat: "Standardized"
    },
    {
      icon: ShieldCheck,
      title: "Total Operational Control",
      desc: "Bank-grade data security, complete audit trails, and streamlined customs records for complete peace of mind.",
      stat: "Enterprise Safe"
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-white scroll-mt-20" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Why Trading Companies Choose Master Export
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-normal">
            Engineered to remove friction from international trade, reduce manual work, and protect margins.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 font-bold flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-purple-600">
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
