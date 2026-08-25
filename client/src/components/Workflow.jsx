import React from 'react';
import { 
  Users, 
  FileSpreadsheet, 
  Truck, 
  FolderCheck, 
  BadgeDollarSign 
} from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      num: "1",
      icon: <Users className="w-4 h-4" />,
      title: "Partners & Products",
      desc: "Register buyers, suppliers, and catalog items with HS Codes and currencies."
    },
    {
      num: "2",
      icon: <FileSpreadsheet className="w-4 h-4" />,
      title: "Orders",
      desc: "Generate Export or Import orders with calculated totals and terms."
    },
    {
      num: "3",
      icon: <Truck className="w-4 h-4" />,
      title: "Shipments",
      desc: "Track Sea/Air containers, Port of Loading/Discharge, and live ETD/ETA."
    },
    {
      num: "4",
      icon: <FolderCheck className="w-4 h-4" />,
      title: "Documents",
      desc: "Create Commercial Invoices, Packing Lists, Bill of Lading, and COO."
    },
    {
      num: "5",
      icon: <BadgeDollarSign className="w-4 h-4" />,
      title: "Net Profit",
      desc: "Log payments and freight expenses to see real-time net margins."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/60 scroll-mt-20" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            End-to-End Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            How TradeFlow ERP Works
          </h2>
          <p className="text-base text-slate-600">
            Five streamlined steps connecting your entire trade lifecycle into one unified system.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col items-center"
            >
              <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center mb-4">
                {step.num}
              </div>

              <h4 className="text-sm font-bold text-brand-navy mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
