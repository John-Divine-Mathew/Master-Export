import React, { useState } from 'react';
import { 
  Activity, 
  Ship, 
  Plane, 
  DollarSign, 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ArrowUpRight,
  TrendingUp,
  CreditCard,
  Building2
} from 'lucide-react';

export default function RealTimeVisibility() {
  const [activeView, setActiveView] = useState('shipments');

  const liveShipments = [
    { id: "SHP-8891", order: "ME-EXP-8891", mode: "Ocean (40ft HC)", route: "Mundra → Jebel Ali", vessel: "MSC Gülsün", status: "In Transit", eta: "27 Aug 2026", color: "blue" },
    { id: "SHP-4022", order: "ME-IMP-4022", mode: "Air Express", route: "Frankfurt → Chennai", vessel: "Lufthansa LH8220", status: "Customs EDI", eta: "26 Aug 2026", color: "sky" },
    { id: "SHP-9905", order: "ME-EXP-9905", mode: "Ocean (20ft Dry)", route: "JNPT → Rotterdam", vessel: "CMA CGM Jacques", status: "Suez Passed", eta: "30 Aug 2026", color: "emerald" },
  ];

  const pendingPayments = [
    { invoice: "INV-2026-104", buyer: "Al-Barakah Trading LLC (Dubai)", amount: "$42,500", inr: "₹36.1 L", due: "Net 30 Days", status: "LC Verified" },
    { invoice: "INV-2026-098", buyer: "Hanseatic Imports GmbH (Hamburg)", amount: "€28,400", inr: "₹26.2 L", due: "2 Days Remaining", status: "SWIFT Pending" },
    { invoice: "INV-2026-092", buyer: "London Spice Merchants (UK)", amount: "£18,200", inr: "₹19.6 L", due: "Settled Today", status: "Cleared" },
  ];

  const recentTransactions = [
    { date: "Today, 11:20 AM", desc: "Advance Wire Transfer (30% Deposit)", ref: "TT-981240-DXB", amount: "+$18,750 USD", status: "Credited" },
    { date: "Yesterday, 04:45 PM", desc: "Ocean Freight Disbursement (MSC)", ref: "FRT-7719-MUM", amount: "-$2,200 USD", status: "Paid" },
    { date: "24 Aug, 02:15 PM", desc: "Customs Duty & ICEGATE Assessment", ref: "DUTY-6421-SEZ", amount: "-₹85,400 INR", status: "Debited" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-80 bg-blue-600/10 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2.5 border border-blue-500/20">
            <Activity className="w-3.5 h-3.5" />
            <span>360° Real-Time Operational Visibility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Live Monitoring & Financial Control
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 font-normal max-w-2xl mx-auto">
            Stay in complete control with instant status updates across ocean vessels, pending buyer payments, customs bills, and SWIFT transactions.
          </p>
        </div>

        {/* Visibility View Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveView('shipments')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              activeView === 'shipments'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Ship className="w-3.5 h-3.5" />
            <span>Active Shipments ({liveShipments.length})</span>
          </button>
          <button
            onClick={() => setActiveView('payments')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              activeView === 'payments'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Pending Invoices & LCs ({pendingPayments.length})</span>
          </button>
          <button
            onClick={() => setActiveView('transactions')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              activeView === 'transactions'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Recent Forex Wire Feeds</span>
          </button>
        </div>

        {/* Interactive Data Card Display */}
        <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/80 p-4 sm:p-6 shadow-2xl overflow-hidden">
          
          {activeView === 'shipments' && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {liveShipments.map((shp, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-bold text-sky-400">{shp.id}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          {shp.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white truncate">{shp.vessel}</h4>
                      <p className="text-xs text-slate-400 mt-1">{shp.route}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{shp.mode}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                      <span className="text-slate-500">ETA:</span>
                      <strong className="text-white">{shp.eta}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'payments' && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pendingPayments.map((pay, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-bold text-sky-400">{pay.invoice}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-950/80 text-sky-300 border border-sky-500/30">
                          {pay.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white truncate">{pay.buyer}</h4>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-lg font-black text-white">{pay.amount}</span>
                        <span className="text-xs text-slate-400">({pay.inr})</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                      <span className="text-slate-500">Terms:</span>
                      <strong className="text-emerald-400">{pay.due}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'transactions' && (
            <div className="divide-y divide-slate-700/60">
              {recentTransactions.map((tx, idx) => (
                <div key={idx} className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-sky-400 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{tx.desc}</div>
                      <div className="text-[11px] text-slate-400">{tx.ref} &bull; {tx.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <span className={`font-black text-sm ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-slate-200'}`}>
                      {tx.amount}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-slate-200">
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
