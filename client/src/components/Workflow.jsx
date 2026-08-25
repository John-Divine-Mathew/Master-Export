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
    <section className="py-14 sm:py-18 bg-purple-50/20 scroll-mt-20" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            How Master Export ERP Powers Your Business
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-normal">
            A structured, linear workflow connecting buyers, suppliers, documentation, and payments into one single-admin system.
          </p>
        </div>

        {/* Ecosystem Pipeline Ribbon */}
        <div className="mb-10 bg-white rounded-2xl p-4 sm:p-5 border border-purple-100 shadow-sm max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-bold text-slate-700">
            {pipeline.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-50/50 border border-purple-200/80 shadow-sm hover:border-purple-400 transition-colors">
                  <span className="w-4 h-4 rounded-full bg-purple-600 text-white text-[9px] flex items-center justify-center font-black">
                    {item.icon}
                  </span>
                  <span className="text-slate-800">{item.label}</span>
                </div>
                {idx < pipeline.length - 1 && (
                  <span className="text-purple-500 font-bold hidden sm:inline">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 font-bold flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-purple-300">
                      STEP {step.num}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-purple-600">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
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
