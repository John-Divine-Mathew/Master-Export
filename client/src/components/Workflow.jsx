import React from 'react';
import { 
  FileText, 
  Boxes, 
  Ship, 
  FileCheck2, 
  BadgeDollarSign, 
  BarChart3,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Workflow() {
  const pipeline = [
    { label: "Sales", icon: "01" },
    { label: "Purchase", icon: "02" },
    { label: "Inventory", icon: "03" },
    { label: "Shipment", icon: "04" },
    { label: "Documentation", icon: "05" },
    { label: "Payments", icon: "06" },
    { label: "Reports", icon: "07" },
  ];

  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Order Generation",
      desc: "Convert inquiries into proforma & commercial sales orders with multi-currency calculations."
    },
    {
      num: "02",
      icon: FileCheck2,
      title: "Documentation",
      desc: "Auto-generate Packing Lists, Certificates of Origin, and Customs Shipping Bills in 1 click."
    },
    {
      num: "03",
      icon: Boxes,
      title: "Warehouse & Packing",
      desc: "Track factory stuffing, container seal numbers, and inland port gate-in verification."
    },
    {
      num: "04",
      icon: Ship,
      title: "Carrier Tracking",
      desc: "Real-time container & flight milestones across 45+ international seaports and airports."
    },
    {
      num: "05",
      icon: BadgeDollarSign,
      title: "Payment & Forex",
      desc: "Log buyer wire settlements, freight payouts, customs duty, and live currency conversions."
    },
    {
      num: "06",
      icon: BarChart3,
      title: "Net Profit & Reports",
      desc: "View instant net margin breakdowns per trade order and export annual audit analytics."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 scroll-mt-20" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Zap className="w-3.5 h-3.5" />
            <span>End-to-End Business Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy tracking-tight">
            How Master Export ERP Powers Your Business
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            A seamless six-stage workflow that connects overseas buyers, factory suppliers, shipping lines, and bank settlements.
          </p>
        </div>

        {/* Ecosystem Pipeline Ribbon */}
        <div className="mb-10 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm">
          <div className="text-center mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Integrated ERP Ecosystem Pipeline
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold text-slate-700">
            {pipeline.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/60 hover:border-blue-400 transition-colors">
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center font-black">
                    {item.icon}
                  </span>
                  <span className="text-slate-800">{item.label}</span>
                </div>
                {idx < pipeline.length - 1 && (
                  <span className="text-blue-500 font-bold hidden sm:inline">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-slate-300">
                      STEP {step.num}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-brand-navy mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-blue-600">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Audit-Ready & Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
