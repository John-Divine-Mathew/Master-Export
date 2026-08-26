import React, { useState } from 'react';
import { Lock, LogIn, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenLogin }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Brand: Master Export Pro Logo (Prominent & Crisp) */}
        <a href="#" className="flex items-center group shrink-0 py-1">
          <img 
            src={logoImg} 
            alt="Master Export Pro" 
            className="h-11 sm:h-13 md:h-14 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[320px] object-contain transition-transform group-hover:scale-[1.02] drop-shadow-xs"
          />
        </a>

        {/* Streamlined Desktop Navigation (Clean & Balanced) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a 
            href="#modules" 
            className="text-[13.5px] font-semibold text-slate-700 hover:text-[#004EAB] transition-colors"
          >
            ERP Modules
          </a>
          <a 
            href="#workflow" 
            className="text-[13.5px] font-semibold text-slate-700 hover:text-[#004EAB] transition-colors"
          >
            Workflow
          </a>
          <a 
            href="#documents" 
            className="text-[13.5px] font-semibold text-slate-700 hover:text-[#004EAB] transition-colors"
          >
            Trade Documents
          </a>
          <a 
            href="#pricing" 
            className="text-[13.5px] font-semibold text-slate-700 hover:text-[#004EAB] transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            className="text-[13.5px] font-semibold text-slate-700 hover:text-[#004EAB] transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons: Login | Sign In */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenLogin}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 hover:text-[#004EAB] bg-slate-50 hover:bg-[#EBF3FC] border border-slate-200 hover:border-[#BCD8F8] rounded-xl transition-all shadow-2xs"
          >
            <Lock className="w-3.5 h-3.5 text-[#004EAB]" />
            <span>Login</span>
          </button>
          <button
            onClick={onOpenLogin}
            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-[#004EAB] hover:bg-[#003E8A] rounded-xl transition-all shadow-md shadow-[#004EAB]/25 transform hover:-translate-y-0.5"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>
        </div>

        {/* Mobile Menu Toggle & Direct Login */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenLogin}
            className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-[#004EAB] hover:bg-[#003E8A] rounded-lg shadow-2xs"
          >
            Login
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-[#EBF3FC] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Responsive & Clean) */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-2.5 shadow-xl max-h-[85vh] overflow-y-auto animate-fadeIn">
          <a 
            href="#modules" 
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-[#EBF3FC] hover:text-[#004EAB] transition-colors"
          >
            ERP Modules
          </a>
          <a 
            href="#workflow" 
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-[#EBF3FC] hover:text-[#004EAB] transition-colors"
          >
            Business Workflow
          </a>
          <a 
            href="#documents" 
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-[#EBF3FC] hover:text-[#004EAB] transition-colors"
          >
            Trade Documents
          </a>
          <a 
            href="#pricing" 
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-[#EBF3FC] hover:text-[#004EAB] transition-colors"
          >
            Pricing & Plans
          </a>
          <a 
            href="#faq" 
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-[#EBF3FC] hover:text-[#004EAB] transition-colors"
          >
            FAQ & Support
          </a>
          
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { setMobileOpen(false); onOpenLogin(); }}
              className="w-full py-2.5 px-4 text-center text-xs font-bold text-[#001848] bg-[#EBF3FC] hover:bg-[#D5E6F9] rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5 text-[#004EAB]" />
              <span>Admin Portal Login</span>
            </button>
            <button
              onClick={() => { setMobileOpen(false); onOpenLogin(); }}
              className="w-full py-2.5 px-4 text-center text-xs font-bold text-white bg-[#004EAB] hover:bg-[#003E8A] rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#004EAB]/25"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In to Dashboard</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
