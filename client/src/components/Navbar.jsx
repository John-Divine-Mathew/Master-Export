import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo_light_text.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#000F2E]/95 backdrop-blur-md border-b border-[#001848] transition-all duration-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Brand: Master Export Pro Original Logo */}
        <a 
          href="#" 
          className="flex items-center group shrink-0 py-1 transition-all duration-300 focus:outline-none"
          aria-label="Master Export Pro Homepage"
        >
          <img 
            src={logoImg} 
            alt="Master Export Pro" 
            className="h-10 sm:h-12 md:h-13 w-auto max-w-[210px] sm:max-w-[260px] md:max-w-[300px] object-contain transition-all duration-300 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_12px_rgba(143,189,243,0.45)]"
          />
        </a>

        {/* Desktop Navigation (Dark Theme Slate / Ice Blue Accents) */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-8">
          <a 
            href="#why-us" 
            className="nav-link-animated text-sm font-semibold text-slate-100 hover:text-[#8FBDF3] transition-colors py-1"
          >
            Why Master Export
          </a>
          <a 
            href="#workflow" 
            className="nav-link-animated text-sm font-semibold text-slate-100 hover:text-[#8FBDF3] transition-colors py-1"
          >
            Workflow
          </a>
          <a 
            href="#dashboard" 
            className="nav-link-animated text-sm font-semibold text-slate-100 hover:text-[#8FBDF3] transition-colors py-1"
          >
            ERP Dashboard
          </a>
          <a 
            href="#dos-and-donts" 
            className="nav-link-animated text-sm font-semibold text-slate-100 hover:text-[#8FBDF3] transition-colors py-1"
          >
            Do's & Don'ts
          </a>
          <a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="nav-link-animated text-sm font-semibold text-slate-100 hover:text-[#8FBDF3] transition-colors py-1"
          >
            Contact
          </a>

          {/* Request Demo Primary CTA Button */}
          <button
            onClick={handleScrollToContact}
            className="text-sm font-bold text-white bg-[#004EAB] hover:bg-[#003E8A] px-5 py-2.5 rounded-xl border border-[#BCD8F8]/40 transition-all duration-300 shadow-md shadow-[#004EAB]/25 hover:shadow-lg hover:shadow-[#004EAB]/40 hover:-translate-y-0.5 active:scale-[0.98] shimmer-btn flex items-center gap-2 group cursor-pointer"
          >
            <span>Request Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-xl text-white hover:bg-[#001848] focus:outline-none transition-colors border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#000F2E] border-b border-[#001848] px-5 pt-3 pb-6 space-y-2.5 shadow-2xl max-h-[85vh] overflow-y-auto transition-all duration-300 animate-fadeIn">
          <a 
            href="#why-us" 
            onClick={handleNavClick}
            className="block py-2.5 px-3.5 rounded-xl text-sm font-semibold text-slate-100 hover:bg-[#001848] hover:text-[#8FBDF3] transition-all duration-200"
          >
            Why Master Export
          </a>
          <a 
            href="#workflow" 
            onClick={handleNavClick}
            className="block py-2.5 px-3.5 rounded-xl text-sm font-semibold text-slate-100 hover:bg-[#001848] hover:text-[#8FBDF3] transition-all duration-200"
          >
            Business Workflow
          </a>
          <a 
            href="#dashboard" 
            onClick={handleNavClick}
            className="block py-2.5 px-3.5 rounded-xl text-sm font-semibold text-slate-100 hover:bg-[#001848] hover:text-[#8FBDF3] transition-all duration-200"
          >
            ERP Dashboard
          </a>
          <a 
            href="#dos-and-donts" 
            onClick={handleNavClick}
            className="block py-2.5 px-3.5 rounded-xl text-sm font-semibold text-slate-100 hover:bg-[#001848] hover:text-[#8FBDF3] transition-all duration-200"
          >
            Do's & Don'ts Guide
          </a>
          <a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="block py-2.5 px-3.5 rounded-xl text-sm font-semibold text-slate-100 hover:bg-[#001848] hover:text-[#8FBDF3] transition-all duration-200"
          >
            Contact
          </a>
          <button 
            onClick={handleScrollToContact}
            className="w-full py-3 px-3.5 rounded-xl text-sm font-bold text-white bg-[#004EAB] hover:bg-[#003E8A] transition-all duration-200 text-center shadow-md mt-2 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Request Demo / Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}




