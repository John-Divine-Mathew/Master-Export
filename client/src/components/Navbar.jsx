import React, { useState } from 'react';
import { Lock, Rocket, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenLogin, onOpenDemo }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Uses the authentic Master Export emblem & text cleanly without duplicate labels */}
        <a href="#" className="flex items-center group shrink-0">
          <img 
            src={logoImg} 
            alt="Master Export - Connecting Global Markets" 
            className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <a 
            href="#features" 
            className="text-[13.5px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            Features
          </a>
          <a 
            href="#workflow" 
            className="text-[13.5px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            Trade Flow
          </a>
          <a 
            href="#simulator" 
            className="text-[13.5px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            Live Simulator
          </a>
          <a 
            href="#modules" 
            className="text-[13.5px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            ERP Modules
          </a>
          <a 
            href="#documents" 
            className="text-[13.5px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            Documents
          </a>
          <a 
            href="#pricing" 
            className="text-[13.5px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            className="text-[13.5px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons on Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenLogin}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-sky-50 border border-slate-200 rounded-xl transition-all shadow-sm"
          >
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>Admin Portal</span>
          </button>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 rounded-xl transition-all shadow-md shadow-blue-500/25 transform hover:-translate-y-0.5"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Request Demo</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenDemo}
            className="sm:hidden px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <a 
            href="#features" 
            onClick={handleNavClick}
            className="block py-2.5 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            Features
          </a>
          <a 
            href="#workflow" 
            onClick={handleNavClick}
            className="block py-2.5 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            Trade Flow Pipeline
          </a>
          <a 
            href="#simulator" 
            onClick={handleNavClick}
            className="block py-2.5 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            Live Simulator (Profit & Tracking)
          </a>
          <a 
            href="#modules" 
            onClick={handleNavClick}
            className="block py-2.5 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            ERP Modules
          </a>
          <a 
            href="#documents" 
            onClick={handleNavClick}
            className="block py-2.5 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            Trade Documents Vault
          </a>
          <a 
            href="#pricing" 
            onClick={handleNavClick}
            className="block py-2.5 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            Pricing & Deployment
          </a>
          <a 
            href="#faq" 
            onClick={handleNavClick}
            className="block py-2.5 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            FAQ
          </a>
          
          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileOpen(false); onOpenLogin(); }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              <span>Admin Portal Login</span>
            </button>
            <button
              onClick={() => { setMobileOpen(false); onOpenDemo(); }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Request Live Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
