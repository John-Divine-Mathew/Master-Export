import React from 'react';
import { Anchor, Plane, Truck, FileCheck, Coins } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="border-y border-slate-100 bg-slate-50/50 py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-8 text-slate-600 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <Anchor className="w-4 h-4 text-blue-600" />
            <span>Maritime Sea Freight</span>
          </div>
          <div className="flex items-center gap-2">
            <Plane className="w-4 h-4 text-blue-600" />
            <span>Global Air Cargo</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-blue-600" />
            <span>Cross-Border Road Transit</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-blue-600" />
            <span>DGFT & Customs Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-blue-600" />
            <span>Multi-Currency Settlements</span>
          </div>
        </div>
      </div>
    </div>
  );
}
