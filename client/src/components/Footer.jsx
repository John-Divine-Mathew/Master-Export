import React from 'react';
import { ShieldCheck, ArrowUp, Globe2, Lock, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/logo_light_text.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000F2E] text-slate-400 pt-12 pb-8 border-t border-[#001848] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 border-b border-[#001848]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3.5">
            <a href="#" className="inline-block transition-transform hover:scale-[1.02] focus:outline-none">
              <img 
                src={logoImg} 
                alt="Master Export Pro" 
                className="h-10 sm:h-11 w-auto max-w-[240px] object-contain" 
              />
            </a>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              Centralized enterprise ERP information platform designed exclusively for international export & import business operations.
            </p>
          </div>

          {/* Quick Platform Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3.5">
              Core Platform
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#why-us" className="hover:text-[#8FBDF3] transition-colors inline-block">
                  Unified Trade Hub
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-[#8FBDF3] transition-colors inline-block">
                  Export-Import Workflow
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-[#8FBDF3] transition-colors inline-block">
                  ERP Operations Dashboard
                </a>
              </li>
              <li>
                <a href="#dos-and-donts" className="hover:text-[#8FBDF3] transition-colors inline-block">
                  Trade Compliance Guide
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#8FBDF3] transition-colors inline-block">
                  Request Live Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Direct Lines */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3.5">
              Media Wave Technologies
            </h4>
            <ul className="space-y-2.5 font-medium text-[11px] text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  WD-54, Anandha bhavan complex, 2nd floor, 17/52, Puthur High Rd, Tiruchirappalli, Tamil Nadu - 620017
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                <a href="tel:+916369153235" className="hover:text-white transition-colors">
                  Office: +91 63691 53235
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8FBDF3] shrink-0" />
                <a href="tel:+919940440767" className="hover:text-white transition-colors">
                  Developer: +91 99404 40767
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8FBDF3] shrink-0" />
                <a href="mailto:info@mediawavetech.com" className="hover:text-white transition-colors">
                  info@mediawavetech.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Security & Smooth Back To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>&copy; {new Date().getFullYear()} Media Wave Technologies. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-500 hidden sm:inline">256-Bit Encrypted Security</span>
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors bg-[#001848] px-2.5 py-1 rounded-lg border border-white/10 hover:border-[#BCD8F8]/40"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}


