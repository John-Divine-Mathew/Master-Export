import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Receipt, 
  Users, 
  Boxes, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export default function ModuleTabs({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard & Analytics', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'orders', label: 'Orders & Logistics', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'finance', label: 'Invoices & Profits', icon: <Receipt className="w-4 h-4" /> },
    { id: 'partners', label: 'Customers & Suppliers', icon: <Users className="w-4 h-4" /> },
    { id: 'inventory', label: 'Inventory & HS Codes', icon: <Boxes className="w-4 h-4" /> }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white scroll-mt-20" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            System Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Integrated ERP Architecture
          </h2>
          <p className="text-base text-slate-600">
            Purpose-built components designed to replace manual paperwork with automated accuracy.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:text-blue-600'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="bg-slate-50/50 rounded-2xl p-6 sm:p-10 border border-slate-200">
          
          {/* 1. Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-2xl font-bold text-brand-navy">
                  Unified Executive Dashboard
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Real-time visibility across export sales, supplier imports, active vessel shipments, and net profit margins upon login.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Real-time KPIs: Orders, Invoices, Shipments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Monthly Revenue, Expenses & Estimated Profit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Low Stock Thresholds & Overdue Payment Flags</span>
                  </li>
                </ul>
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                >
                  Explore Dashboard <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-blue-600" /> Monthly Trade Performance
                    </span>
                    <span className="text-emerald-600 font-bold">+28.4% YoY</span>
                  </div>

                  <div className="h-36 flex items-end justify-between gap-3 pt-4 pb-2 border-b border-slate-100">
                    <div className="flex-1 bg-slate-100 rounded-t h-[45%] relative">
                      <div className="bg-blue-600 rounded-t h-[75%]"></div>
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-t h-[65%] relative">
                      <div className="bg-blue-600 rounded-t h-[80%]"></div>
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-t h-[85%] relative">
                      <div className="bg-blue-600 rounded-t h-[85%]"></div>
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-t h-[70%] relative">
                      <div className="bg-blue-600 rounded-t h-[70%]"></div>
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-t h-[95%] relative">
                      <div className="bg-blue-600 rounded-t h-[90%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Orders Tab */}
          {activeTab === 'orders' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-2xl font-bold text-brand-navy">
                  Dual Order & Logistics Hub
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Manage export sales contracts and import supplier purchase orders with multi-modal freight tracking.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Export lifecycle: Draft &rarr; Confirmed &rarr; Shipped &rarr; Delivered</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Sea, Air, Road & Courier freight tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Track POL, POD, ETD, ETA, container and vessel IDs</span>
                  </li>
                </ul>
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                >
                  View Order Pipeline <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase text-[10px]">
                      <th className="pb-2">Order #</th>
                      <th className="pb-2">Type</th>
                      <th className="pb-2">Destination</th>
                      <th className="pb-2">Value</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2 font-bold text-slate-900">#EXP-9120</td>
                      <td className="py-2 text-blue-600 font-semibold">Export</td>
                      <td className="py-2 text-slate-600">United States</td>
                      <td className="py-2 font-bold">$42,000</td>
                      <td className="py-2"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-semibold">Shipped</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-slate-900">#IMP-3318</td>
                      <td className="py-2 text-purple-600 font-semibold">Import</td>
                      <td className="py-2 text-slate-600">Germany</td>
                      <td className="py-2 font-bold">€28,500</td>
                      <td className="py-2"><span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-[10px] font-semibold">In Transit</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-slate-900">#EXP-9121</td>
                      <td className="py-2 text-blue-600 font-semibold">Export</td>
                      <td className="py-2 text-slate-600">Dubai (UAE)</td>
                      <td className="py-2 font-bold">AED 65,000</td>
                      <td className="py-2"><span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-semibold">Confirmed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. Finance Tab */}
          {activeTab === 'finance' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-2xl font-bold text-brand-navy">
                  Invoices & Financial Auditing
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Track customer remittances, supplier payables, and log granular operational expenses including customs duties and freight.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Multi-currency invoices in USD, EUR, INR, AED, GBP, CNY</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Payment statuses: Pending, Partially Paid, Paid, Overdue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Accurate profit calculation per shipment</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-900">Invoice #INV-2026-094</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">PAID IN FULL</span>
                </div>
                <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-100">
                  <div><strong>Customer:</strong> EuroTrade Logistics GmbH</div>
                  <div><strong>Total:</strong> €34,200 (INR ₹31,63,500)</div>
                  <div><strong>Method:</strong> SWIFT TT Wire Transfer</div>
                  <div><strong>Net Margin:</strong> 26.8% ($9,165 USD)</div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Partners Tab */}
          {activeTab === 'partners' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-2xl font-bold text-brand-navy">
                  Global Customers & Suppliers Directory
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Maintain records of international buyers and overseas suppliers with currencies and payment terms.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Partner dossiers with tax IDs, addresses & contacts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Payment terms: Net 30, Advance, LC at Sight</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Lifetime order volume and history</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">US</div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">Atlantic Global Imports LLC</div>
                    <div className="text-[11px] text-slate-500">United States &bull; USD ($) &bull; Terms: LC 60 Days</div>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">AE</div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">Al-Khaleej Trading Corp</div>
                    <div className="text-[11px] text-slate-500">Dubai, UAE &bull; AED &bull; Terms: 30% Advance Wire</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. Inventory Tab */}
          {activeTab === 'inventory' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-2xl font-bold text-brand-navy">
                  Inventory & HS Code Catalog
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Catalog products with Harmonized System (HS) Codes and set minimum stock alerts for automatic reordering.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Harmonized Tariff (HS Code) classification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Stock-in (import arrival) & Stock-out (export dispatch)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Low inventory threshold notifications</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-900">Basmati Rice Premium (50kg)</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-semibold text-xs">HS: 1006.30.20</span>
                </div>
                <div className="text-xs text-slate-500 space-y-1">
                  <div>Current In Stock: <strong>1,450 Bags</strong></div>
                  <div>Min. Alert Threshold: <strong>200 Bags</strong></div>
                  <div className="pt-2 text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Stock Healthy & Export Ready
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
