import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing({ onOpenLogin }) {
  return (
    <section className="py-12 sm:py-16 bg-white scroll-mt-20 border-b border-slate-200/60" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004EAB]">
            Deployment & Licensing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Transparent Plans for Global Trade
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Choose the deployment tier that matches your shipping frequency and business model.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* Plan 1 */}
          <div className="bg-[#EBF3FC]/30 rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#BCD8F8] transition-all">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Starter Trader</h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">For emerging exporters managing initial operations</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-black text-slate-900">$49</span>
                <span className="text-xs font-medium text-slate-500">/ month</span>
              </div>
              <ul className="space-y-2.5 pt-5 border-t border-slate-200/80 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Single Admin Full Access</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Up to 50 Orders / Month</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Operational Order Tracking</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> 6 Currencies (USD, EUR, INR...)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Trade Document PDFs</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Net Profit Margin Engine</li>
              </ul>
            </div>
            <button
              onClick={onOpenLogin}
              className="mt-7 w-full py-2.5 px-4 bg-white hover:bg-[#EBF3FC] text-slate-800 hover:text-[#004EAB] border border-slate-200 hover:border-[#BCD8F8] rounded-xl text-xs font-semibold transition-all shadow-sm"
            >
              Select Starter
            </button>
          </div>

          {/* Plan 2 - Featured */}
          <div className="relative bg-white rounded-2xl p-7 border-2 border-[#004EAB] shadow-xl shadow-[#004EAB]/10 flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#004EAB] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
              Recommended
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">Professional ERP</h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">Full automation for active merchant trading houses</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-black text-slate-900">$99</span>
                <span className="text-xs font-medium text-slate-500">/ month</span>
              </div>
              <ul className="space-y-2.5 pt-5 border-t border-slate-100 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Unlimited Export & Import Orders</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Automated Customs PDF Generation</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Live Exchange Rate Sync</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Cloud Document Storage</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Sales Analytics by Country</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Low Stock & Payment Reminders</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Priority Support</li>
              </ul>
            </div>
            <button
              onClick={onOpenLogin}
              className="mt-7 w-full py-2.5 px-4 bg-[#004EAB] hover:bg-[#003E8A] text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-[#004EAB]/25"
            >
              Start 14-Day Free Trial
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-[#EBF3FC]/30 rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#BCD8F8] transition-all">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Self-Hosted MERN</h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">Full source code & private VPS deployment</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-black text-slate-900">$499</span>
                <span className="text-xs font-medium text-slate-500">/ one-time</span>
              </div>
              <ul className="space-y-2.5 pt-5 border-t border-slate-200/80 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Complete React + Node + MongoDB Code</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Private Cloud / Server Deployment</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Custom White-Labeling with Logo</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Customs & EDI API Ready</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#004EAB]" /> Lifetime Updates & Commercial License</li>
              </ul>
            </div>
            <button
              onClick={onOpenLogin}
              className="mt-7 w-full py-2.5 px-4 bg-white hover:bg-[#EBF3FC] text-slate-800 hover:text-[#004EAB] border border-slate-200 hover:border-[#BCD8F8] rounded-xl text-xs font-semibold transition-all shadow-sm"
            >
              Contact Enterprise Sales
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
