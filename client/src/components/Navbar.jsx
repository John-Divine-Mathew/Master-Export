import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#000F2E]/95 backdrop-blur-md border-b border-[#001848] transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Brand: Master Export Pro Logo */}
        <a href="#" className="flex items-center group shrink-0 py-1">
          <div className="bg-white/95 px-2.5 py-1 rounded-xl shadow-sm border border-white/20">
            <img 
              src={logoImg} 
              alt="Master Export Pro" 
              className="h-10 sm:h-12 md:h-13 w-auto max-w-[210px] sm:max-w-[260px] md:max-w-[300px] object-contain transition-transform group-hover:scale-[1.02]"
            />
          </div>
        </a>

        {/* Desktop Navigation (Visible White Letters & Hover Accents) */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-8">
          <a 
            href="#modules" 
            className="text-sm font-semibold text-slate-100 hover:text-[#8FBDF3] transition-colors"
          >
            ERP Modules
          </a>
          <a 
            href="#workflow" 
            className="text-sm font-semibold text-slate-100 hover:text-[#8FBDF3] transition-colors"
          >
            Workflow
          </a>
          <a 
            href="#documents" 
            className="text-sm font-semibold text-slate-100 hover:text-[#8FBDF3] transition-colors"
          >
            Trade Documents
          </a>
          <a 
            href="#dos-and-donts" 
            className="text-sm font-semibold text-slate-100 hover:text-[#8FBDF3] transition-colors"
          >
            Do's & Don'ts
          </a>
          <a 
            href="#faq" 
            className="text-sm font-semibold text-slate-100 hover:text-[#8FBDF3] transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-white hover:bg-[#001848] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Responsive Dark Navy Theme) */}
      {mobileOpen && (
        <div className="md:hidden bg-[#000F2E] border-b border-[#001848] px-5 pt-3 pb-6 space-y-2.5 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn">
          <a 
            href="#modules" 
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-100 hover:bg-[#001848] hover:text-[#8FBDF3] transition-colors"
          >
            ERP Modules
          </a>
          <a 
            href="#workflow" 
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-100 hover:bg-[#001848] hover:text-[#8FBDF3] transition-colors"
          >
            Business Workflow
          </a>
          <a 
            href="#documents" 
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-100 hover:bg-[#001848] hover:text-[#8FBDF3] transition-colors"
          >
            Trade Documents
          </a>
          <a 
            href="#dos-and-donts" 
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-100 hover:bg-[#001848] hover:text-[#8FBDF3] transition-colors"
          >
            Do's & Don'ts Guide
          </a>
          <a 
            href="#faq" 
            onClick={handleNavClick}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-100 hover:bg-[#001848] hover:text-[#8FBDF3] transition-colors"
          >
            FAQ & Support
          </a>
        </div>
      )}
    </header>
  );
}
