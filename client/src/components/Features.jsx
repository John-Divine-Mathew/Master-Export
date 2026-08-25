import React from 'react';
import { 
  Boxes, 
  Truck, 
  FileSpreadsheet, 
  Calculator, 
  Users, 
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Boxes,
      tag: 'Order Management',
      title: 'Export & Import Lifecycle',
      description: 'Track orders seamlessly from proforma invoicing and advance payment receipts to full fulfillment, customs clearance, and overseas bank remittance.',
      highlight: 'Proforma to Settlement',
      color: 'blue'
    },
    {
      icon: Truck,
      tag: 'Logistics Tracking',
      title: 'Multi-Modal Freight Tracking',
      description: 'Monitor container shipments by Ocean (FCL/LCL), Air cargo express, and Inland haulage. Automatic tracking updates with carrier milestone notifications.',
      highlight: 'Ocean, Air & Road',
      color: 'sky'
    },
    {
      icon: FileSpreadsheet,
      tag: 'Customs & Compliance',
      title: 'Automated Document Vault',
      description: 'Generate audit-ready Commercial Invoices, Packing Lists, Certificates of Origin, and Shipping Bills in PDF format with 1-click single-admin dispatch.',
      highlight: '1-Click PDF Generation',
      color: 'indigo'
    },
    {
      icon: Calculator,
      tag: 'Forex & Profits',
      title: 'Real-Time Net Profit Engine',
      description: 'Accurately calculate net margins per trade order factoring product procurement, ocean freight, marine insurance, and customs duties in 6+ currencies.',
      highlight: 'Multi-Currency Forex',
      color: 'emerald'
    },
    {
      icon: Users,
      tag: 'Directory',
      title: 'Global Partners & CHA Directory',
      description: 'Centralize records of overseas buyers, domestic manufacturing suppliers, Custom House Agents (CHA), and international shipping lines in one secured portal.',
      highlight: 'Single-Admin Control',
      color: 'amber'
    },
    {
      icon: ShieldAlert,
      tag: 'Risk & Inventory',
      title: 'Inventory & DGFT Compliance',
      description: 'Manage warehouse stock, track HS codes, ensure DGFT / ICEGATE trade compliance, and receive instant alert notifications on shipment delays or payment dues.',
      highlight: 'Real-Time Telemetry',
      color: 'rose'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 scroll-mt-20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive ERP Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Engineered Specifically for Global Trade Operators
          </h2>
          <p className="mt-3.5 text-base text-slate-600 font-normal">
            Eliminate operational chaos with automated workflows designed to handle every phase of international commerce.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center font-bold shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>{item.highlight}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
