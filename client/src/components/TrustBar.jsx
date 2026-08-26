import React from 'react';
import { Ship, Plane, Truck, ShieldCheck, Coins, FileCheck2, Globe2, Building2 } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Ship, label: 'Ocean Freight', sub: 'FCL & LCL 40ft/20ft' },
    { icon: Plane, label: 'Air Cargo', sub: 'IATA Compliant Lanes' },
    { icon: Truck, label: 'Inland Logistics', sub: 'Port to ICD Transit' },
    { icon: ShieldCheck, label: 'DGFT & ICEGATE', sub: 'Customs & HS Codes' },
    { icon: Coins, label: 'Multi-Currency', sub: 'Forex Hedging & AED/USD' },
    { icon: FileCheck2, label: 'Verified Trade Docs', sub: 'Commercial Inv & B/L' },
  ];

  return (
    <div className="bg-[#000F2E] border-y border-[#001848] text-slate-300 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Trusted by Global Exporters, Importers, Clearing Agents & Freight Forwarders
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-2">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#001848]/60 border border-[#004EAB]/25 hover:border-[#004EAB]/60 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#004EAB]/20 text-[#8FBDF3] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold text-white truncate">{item.label}</div>
                  <div className="text-[10px] text-slate-400 truncate">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
