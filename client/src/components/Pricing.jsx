import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing({ onOpenDemo }) {
  return (
    <section className="py-16 sm:py-20 bg-white scroll-mt-20" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Deployment & Licensing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Transparent Plans for Global Trade
          </h2>
          <p className="text-base text-slate-600">
            Choose the deployment tier that matches your shipping frequency and business model.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Plan 1 */}
          <div className="bg-slate-50/50 rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-brand-navy">Starter Trader</h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">For emerging exporters managing initial shipments</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-black text-slate-900">$49</span>
                <span className="text-xs font-medium text-slate-500">/ month</span>
              </div>
              <ul className="space-y-2.5 pt-5 border-t border-slate-200 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Single Admin Full Access</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Up to 50 Orders / Month</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Sea & Air Freight Tracker</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> 6 Currencies (USD, EUR, INR...)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Trade Document PDFs</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Net Profit Margin Engine</li>
              </ul>
            </div>
            <button
              onClick={onOpenDemo}
              className="mt-7 w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-lg text-xs font-semibold transition-all"
            >
              Select Starter
            </button>
          </div>

          {/* Plan 2 - Featured */}
          <div className="relative bg-white rounded-2xl p-7 border-2 border-blue-600 shadow-xl shadow-blue-600/5 flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
              Recommended
            </div>

            <div>
              <h3 className="text-lg font-bold text-brand-navy">Professional ERP</h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">Full automation for active merchant trading houses</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-black text-slate-900">$99</span>
                <span className="text-xs font-medium text-slate-500">/ month</span>
              </div>
              <ul className="space-y-2.5 pt-5 border-t border-slate-100 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Unlimited Export & Import Orders</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Automated Customs PDF Generation</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Live Exchange Rate Sync</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Cloud Document Storage</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Sales Analytics by Country</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Low Stock & Payment Reminders</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Priority Support</li>
              </ul>
            </div>
            <button
              onClick={onOpenDemo}
              className="mt-7 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-all shadow-sm"
            >
              Start 14-Day Free Trial
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-slate-50/50 rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-brand-navy">Self-Hosted MERN</h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">Full source code & private VPS deployment</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-black text-slate-900">$499</span>
                <span className="text-xs font-medium text-slate-500">/ one-time</span>
              </div>
              <ul className="space-y-2.5 pt-5 border-t border-slate-200 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Complete React + Node + MongoDB Code</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Private Cloud / Server Deployment</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Custom White-Labeling with Logo</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Customs & EDI API Ready</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Lifetime Updates & Commercial License</li>
              </ul>
            </div>
            <button
              onClick={onOpenDemo}
              className="mt-7 w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-lg text-xs font-semibold transition-all"
            >
              Contact Enterprise Sales
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
