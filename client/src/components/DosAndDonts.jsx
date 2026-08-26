import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function DosAndDonts() {
  const dos = [
    {
      title: 'Standardize HS Codes & Incoterms',
      desc: 'Always verify Harmonized System 6-8 digit codes and exact Incoterms (FOB, CIF, DDP) on all commercial invoices before contract execution.'
    },
    {
      title: 'Automate Export PDF Generation',
      desc: 'Generate Commercial Invoices, Packing Lists, and Shipping Bills from single-entry order data to eliminate manual typing errors.'
    },
    {
      title: 'Track Real-Time Multi-Currency Forex',
      desc: 'Lock in live conversion rates across USD, EUR, INR, AED, and GBP to calculate exact net profit margins per shipment.'
    },
    {
      title: 'Centralize Cloud Compliance Vault',
      desc: 'Maintain digital archives for negotiable Bills of Lading, Certificates of Origin, and ICEGATE LEO declarations for instant audit readiness.'
    },
    {
      title: 'Enforce Enterprise Data Protection',
      desc: 'Utilize 256-bit encrypted single-admin data controls and automated backups to safeguard buyer & supplier trading intelligence.'
    }
  ];

  const donts = [
    {
      title: "Don't Rely on Disconnected Spreadsheets",
      desc: 'Avoid managing high-value export orders and customs declarations on fragmented manual spreadsheets prone to formula corruption.'
    },
    {
      title: "Don't Ship Cargo Without Verified L/C Terms",
      desc: 'Never dispatch container shipments before confirming Letter of Credit clauses, LC issuing bank authentications, or payment deposits.'
    },
    {
      title: "Don't Estimate Landed Logistics Costs Manually",
      desc: 'Avoid guessing freight, terminal handling (THC), marine insurance, and port customs duty fees—calculate precise landed expenses upfront.'
    },
    {
      title: "Don't Mix Export Sales with Import Procurement",
      desc: 'Never blur outbound sales receivables with inbound vendor purchasing—keep clear audit trails for both trading lifecycles.'
    },
    {
      title: "Don't Ignore Stock & Payment Reminders",
      desc: 'Avoid missing buyer payment due dates or warehouse re-order thresholds by implementing automated operational notifications.'
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-slate-50/70 scroll-mt-20 border-b border-slate-200/60" id="dos-and-donts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004EAB]">
            Trade Compliance & Strategy Guide
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Do's & Don'ts of Export-Import Operations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Essential operational guidelines to maximize net profit margins, ensure customs compliance, and avoid costly shipping errors.
          </p>
        </div>

        {/* Two-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: DO'S */}
          <div className="bg-[#EBF3FC]/40 border border-[#BCD8F8] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#BCD8F8]/60">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Recommended Best Practices (DO's)</h3>
                  <p className="text-xs text-slate-500">Proven standards for seamless international trade</p>
                </div>
              </div>

              <div className="space-y-4">
                {dos.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#BCD8F8]/50 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: DON'TS */}
          <div className="bg-rose-50/40 border border-rose-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-200/60">
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-600 flex items-center justify-center font-bold shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Critical Pitfalls to Avoid (DON'Ts)</h3>
                  <p className="text-xs text-slate-500">Common mistakes that cause demurrage, penalties & margin loss</p>
                </div>
              </div>

              <div className="space-y-4">
                {donts.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
