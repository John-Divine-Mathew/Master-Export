import React from 'react';
import { 
  Boxes, 
  ShoppingCart, 
  FileSpreadsheet, 
  Calculator, 
  Users, 
  PackageCheck,
  ArrowUpRight
} from 'lucide-react';

export default function Features() {
  const modules = [
    {
      icon: Boxes,
      tag: 'Sales',
      title: 'Export Sales Orders',
      description: 'End-to-end management from proforma invoicing to order fulfillment and payment settlement.',
      highlight: 'Proforma to Settlement'
    },
    {
      icon: ShoppingCart,
      tag: 'Procurement',
      title: 'Import Procurement',
      description: 'Manage domestic and overseas purchase orders, vendor invoices, and delivery schedules.',
      highlight: 'Vendor & PO Tracking'
    },
    {
      icon: FileSpreadsheet,
      tag: 'Compliance',
      title: 'Customs Documentation',
      description: 'Automated 1-click generation of Commercial Invoices, Packing Lists, and Shipping Bills.',
      highlight: '1-Click PDF Export'
    },
    {
      icon: Calculator,
      tag: 'Finance',
      title: 'Multi-Currency Forex',
      description: 'Real-time multi-currency calculations supporting USD, EUR, INR, AED, GBP, and CNY.',
      highlight: 'Live Forex Rates'
    },
    {
      icon: PackageCheck,
      tag: 'Stock',
      title: 'Inventory & HS Codes',
      description: 'Centralized product catalog with HS code mapping, unit pricing, and warehouse stock tracking.',
      highlight: 'Catalog & HS Codes'
    },
    {
      icon: Users,
      tag: 'Directory',
      title: 'Buyer & Supplier Hub',
      description: 'Secured master directory of overseas clients, local vendors, and Custom House Agents (CHA).',
      highlight: 'Single-Admin Control'
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#EBF3FC]/30 scroll-mt-20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive ERP Architecture
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-normal">
            Modular enterprise platform engineered for international trade workflows.
          </p>
        </div>

        {/* Visual Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {modules.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#004EAB]/5 hover:border-[#BCD8F8] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EBF3FC] text-[#004EAB] group-hover:bg-[#004EAB] group-hover:text-white transition-all flex items-center justify-center font-bold shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 group-hover:bg-[#EBF3FC] group-hover:text-[#004EAB] transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#004EAB] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#004EAB]">
                  <span>{item.highlight}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
