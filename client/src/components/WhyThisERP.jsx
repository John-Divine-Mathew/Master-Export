import React from 'react';
import { 
  Layers, 
  Eye, 
  FileCheck2, 
  Receipt, 
  TrendingUp, 
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

export default function WhyThisERP() {
  const benefits = [
    {
      icon: Layers,
      title: "Centralized Trade Operations",
      desc: "Replace fragmented emails and spreadsheets with one single-admin command center for orders, suppliers, and shipping lines.",
      stat: "100% Unified"
    },
    {
      icon: Eye,
      title: "Real-Time Shipment Visibility",
      desc: "Track container milestones and vessel telemetries across 45+ international ports with live ETD/ETA alerts.",
      stat: "Live GPS Sync"
    },
    {
      icon: FileCheck2,
      title: "4x Faster Documentation",
      desc: "Generate audit-ready Commercial Invoices, Packing Lists, Shipping Bills, and Certificates of Origin in seconds.",
      stat: "Under 2 Mins"
    },
    {
      icon: Receipt,
      title: "Payment & Invoice Tracking",
      desc: "Monitor buyer wire remittances, supplier payables, customs duties, and LC milestones without accounting discrepancies.",
      stat: "Zero Discrepancy"
    },
    {
      icon: TrendingUp,
      title: "Exact Multi-Currency Margins",
      desc: "Know your exact net profit per trade factoring freight, insurance, and duties with live USD, EUR, and INR forex rates.",
      stat: "Instant Margins"
    },
    {
      icon: ShieldCheck,
      title: "Total Operational Control",
      desc: "Maintain bank-grade security, automated HS code validation, and DGFT / customs compliance records for complete peace of mind.",
      stat: "Bank-Grade Safe"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for Real Business Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy tracking-tight">
            Why Trading Companies Choose Master Export
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            Engineered to remove friction from international commerce, reduce operational overhead, and protect profit margins.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/60 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-brand-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Immediate Business ROI</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
