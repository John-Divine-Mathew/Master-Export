import React from 'react';
import { ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer({ onOpenLogin, onOpenDemo }) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 bg-white p-2 rounded-xl w-fit">
              <img src={logoImg} alt="Master Export Logo" className="h-8 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-brand-navy leading-none">MASTER EXPORT</span>
                <span className="text-[8px] font-bold text-blue-600 uppercase tracking-wider mt-0.5">Connecting Global Markets</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              All-in-one centralized web ERP system designed for export and import business operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Modules</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#modules" className="hover:text-blue-400 transition-colors">Export Orders</a></li>
              <li><a href="#modules" className="hover:text-blue-400 transition-colors">Import Procurement</a></li>
              <li><a href="#modules" className="hover:text-blue-400 transition-colors">Shipment Tracking</a></li>
              <li><a href="#documents" className="hover:text-blue-400 transition-colors">Trade Documents</a></li>
              <li><a href="#modules" className="hover:text-blue-400 transition-colors">Inventory & HS Codes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Finance & Tools</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#simulator" className="hover:text-blue-400 transition-colors">Profit Engine Tool</a></li>
              <li><a href="#modules" className="hover:text-blue-400 transition-colors">Multi-Currency Invoicing</a></li>
              <li><a href="#modules" className="hover:text-blue-400 transition-colors">Freight & Duty Costs</a></li>
              <li><a href="#modules" className="hover:text-blue-400 transition-colors">Sales by Country</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Access</h4>
            <ul className="space-y-2.5 font-medium">
              <li><button onClick={onOpenLogin} className="hover:text-blue-400 transition-colors text-left">Admin Portal Login</button></li>
              <li><button onClick={onOpenDemo} className="hover:text-blue-400 transition-colors text-left">Request Demo</button></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ & Support</a></li>
              <li><a href="#workflow" className="hover:text-blue-400 transition-colors">Workflow Architecture</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>&copy; 2026 Master Export (TradeFlow ERP). All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>256-Bit Encrypted Data Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
