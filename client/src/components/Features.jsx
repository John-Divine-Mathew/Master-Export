import React from 'react';
import { 
  Boxes, 
  Route, 
  FileText, 
  Coins, 
  PieChart, 
  Warehouse, 
  CheckCircle2 
} from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: <Boxes className="w-5 h-5" />,
      title: "Export & Import Orders",
      desc: "Centralized order hub for export customer sales and import supplier purchases with multi-product items and automatic total calculation.",
      highlights: [
        "Export Proforma Invoices & Quotations",
        "Supplier Purchase Orders (PO)",
        "Lifecycle tracking from Draft to Delivered"
      ]
    },
    {
      icon: <Route className="w-5 h-5" />,
      title: "Multi-Modal Logistics",
      desc: "Track shipments across Sea, Air, Road, and Couriers. Monitor Port of Loading, Port of Discharge, ETD, ETA, container and vessel numbers.",
      highlights: [
        "Vessel & Air Waybill tracking",
        "POL & POD schedule milestones",
        "Freight & marine insurance allocation"
      ]
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Trade Document Vault",
      desc: "Generate and store standard international trade documents like Commercial Invoices, Packing Lists, Bill of Lading, and Certificate of Origin.",
      highlights: [
        "One-click compliant PDF creation",
        "Linked to specific orders & shipments",
        "Organized and searchable cloud vault"
      ]
    },
    {
      icon: <Coins className="w-5 h-5" />,
      title: "Multi-Currency Finance",
      desc: "Handle cross-border transactions in USD, EUR, INR, AED, GBP, and CNY with automatic currency conversion and payment status tracking.",
      highlights: [
        "Automatic exchange rate conversion",
        "Pending & partial payment alerts",
        "Bank wire and Letter of Credit (LC) logs"
      ]
    },
    {
      icon: <PieChart className="w-5 h-5" />,
      title: "Net Profit Calculation",
      desc: "Know your exact profitability per order. Automatically deduct product cost, ocean freight, insurance, customs duties, and port charges.",
      highlights: [
        "Formula: Revenue - (Costs + Freight + Duties)",
        "Profit per order, shipment, and month",
        "Export sales by country insights"
      ]
    },
    {
      icon: <Warehouse className="w-5 h-5" />,
      title: "Inventory & HS Code Catalog",
      desc: "Catalog products with Harmonized System (HS) Codes, minimum stock alerts, and automated stock-in / stock-out audits.",
      highlights: [
        "Accurate HS Code compliance",
        "Real-time stock movement ledger",
        "Low inventory threshold alerts"
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white scroll-mt-20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Core System Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Built Specifically for International Trade
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to manage customers, suppliers, inventory, shipments, and finances without spreadsheets.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-50/50 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-slate-200/60">
                {item.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
