import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer({ onOpenLogin }) {
  return (
    <footer className="bg-[#000F2E] text-slate-400 pt-14 pb-10 border-t border-[#001848] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 border-b border-[#001848]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center bg-white px-3 py-1.5 rounded-xl w-fit shadow-md">
              <img src={logoImg} alt="Master Export Pro" className="h-9 sm:h-10 w-auto object-contain" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              All-in-one centralized enterprise ERP platform designed for export and import business operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">ERP Modules</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#modules" className="hover:text-[#8FBDF3] transition-colors">Export Sales Orders</a></li>
              <li><a href="#modules" className="hover:text-[#8FBDF3] transition-colors">Import Procurement</a></li>
              <li><a href="#documents" className="hover:text-[#8FBDF3] transition-colors">Customs Documents</a></li>
              <li><a href="#modules" className="hover:text-[#8FBDF3] transition-colors">Inventory & HS Codes</a></li>
              <li><a href="#modules" className="hover:text-[#8FBDF3] transition-colors">Buyers & Suppliers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Enterprise</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#why-us" className="hover:text-[#8FBDF3] transition-colors">Why Master Export</a></li>
              <li><a href="#workflow" className="hover:text-[#8FBDF3] transition-colors">Business Workflow</a></li>
              <li><a href="#pricing" className="hover:text-[#8FBDF3] transition-colors">Pricing & Plans</a></li>
              <li><a href="#faq" className="hover:text-[#8FBDF3] transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Portal Access</h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <button onClick={onOpenLogin} className="hover:text-white text-[#8FBDF3] transition-colors text-left flex items-center gap-1.5 font-bold">
                  <Lock className="w-3 h-3 text-[#004EAB]" />
                  <span>ERP Login</span>
                </button>
              </li>
              <li><a href="#pricing" className="hover:text-[#8FBDF3] transition-colors">Deployment Licensing</a></li>
              <li><a href="#faq" className="hover:text-[#8FBDF3] transition-colors">Security & Compliance</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>&copy; 2026 Master Export Pro ERP. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#004EAB]" />
            <span>256-Bit Encrypted Enterprise Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
