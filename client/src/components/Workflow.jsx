import React from 'react';
import { 
  FileText, 
  ShoppingCart, 
  FileCheck2, 
  BadgeDollarSign, 
  ShieldCheck
} from 'lucide-react';

export default function Workflow() {
  const pipeline = [
    { label: "Sales Orders", icon: "01" },
    { label: "Procurement", icon: "02" },
    { label: "Documentation", icon: "03" },
    { label: "Settlement", icon: "04" }
  ];

  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Order Generation",
      desc: "Create and validate export & import sales contracts with automated multi-currency proforma invoicing."
    },
    {
      num: "02",
      icon: ShoppingCart,
      title: "Procurement & Purchase",
      desc: "Link supplier purchase orders, track production readiness, and verify export inventory specifications."
    },
    {
      num: "03",
      icon: FileCheck2,
      title: "Trade Documentation",
      desc: "Generate Commercial Invoices, Packing Lists, and Certificates of Origin with 1-click customs compliance."
    },
    {
      num: "04",
      icon: BadgeDollarSign,
      title: "Payment Settlement",
      desc: "Record buyer remittances, vendor payables, and live multi-currency forex conversions with zero discrepancy."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#EBF3FC]/30 scroll-mt-20 border-b border-[#BCD8F8]/40" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004EAB] block mb-2">
            Execution Flow
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            How Master Export Pro Powers Your Business
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal">
            A structured, linear workflow connecting buyers, suppliers, documentation, and payments into one single-admin system.
          </p>
        </div>

        {/* Ecosystem Pipeline Ribbon */}
        <div className="mb-8 bg-white rounded-2xl p-3 sm:p-4 border border-[#BCD8F8]/60 shadow-2xs max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-bold text-slate-700">
            {pipeline.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#EBF3FC] border border-[#BCD8F8] shadow-2xs hover:border-[#004EAB] transition-colors">
                  <span className="w-4 h-4 rounded-full bg-[#004EAB] text-white text-[9px] flex items-center justify-center font-black">
                    {item.icon}
                  </span>
                  <span className="text-slate-800">{item.label}</span>
                </div>
                {idx < pipeline.length - 1 && (
                  <span className="text-[#004EAB] font-bold hidden sm:inline">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 4 Step Cards Grid with Smooth Hover-Lift & Micro-Transitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-[#BCD8F8] hover:shadow-xl hover:shadow-[#004EAB]/10 hover-lift transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] text-[#004EAB] font-bold flex items-center justify-center group-hover:scale-110 group-hover:bg-[#004EAB] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-[#004EAB] bg-[#EBF3FC] px-2.5 py-0.5 rounded-full border border-[#BCD8F8] group-hover:bg-[#004EAB] group-hover:text-white group-hover:border-[#004EAB] transition-all duration-300">
                      STEP {step.num}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#004EAB] transition-colors duration-200 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#004EAB]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#004EAB]" />
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
