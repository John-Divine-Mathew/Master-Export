import React from 'react';
import { 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  Code, 
  MessageSquare, 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  Globe2, 
  Navigation,
  ShieldCheck
} from 'lucide-react';
import logoImg from '../assets/logo_dark_footer.png';

/**
 * CompanyContactModal Component
 * Comprehensive, modern contact modal and quick-action drawer
 * showcasing structured company information, key personnel direct lines,
 * operating hours, and 1-click CTA buttons (Call, WhatsApp, Directions).
 */
export default function CompanyContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDirectionsClick = () => {
    window.open('https://maps.google.com/?q=World+Trade+Centre+Kochi+Port+Corridor', '_blank');
  };

  const scrollToInquiryForm = () => {
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={handleBackdropClick}
      aria-labelledby="contact-modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#000F2E] text-white rounded-3xl border border-[#001848] shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[92vh] transition-all duration-300 transform scale-100 animate-scaleUp">
        
        {/* Ambient Brand Blue & Orange Lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#004EAB]/25 blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EA580C]/15 blur-3xl pointer-events-none -z-0" />

        {/* Modal Header */}
        <div className="relative z-10 px-5 sm:px-7 pt-5 sm:pt-6 pb-4 border-b border-[#001848] flex items-center justify-between bg-[#000F2E]/90 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Master Export Pro" 
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#001848] border border-white/10 transition-colors focus:outline-none"
            aria-label="Close Contact Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="relative z-10 p-5 sm:p-7 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* Company & Operating Status Banner */}
          <div className="bg-[#001848]/80 border border-[#BCD8F8]/20 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#8FBDF3] font-bold flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Media Wave Technologies</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Centralized Global Trade ERP & Enterprise Software Solutions
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-status"></span>
              <span>Lines Open (Mon–Sat)</span>
            </div>
          </div>

          {/* Key Personnel & Direct Lines */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Direct Support & Developer Lines</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Company Official Line Card */}
              <div className="bg-white/5 border border-white/10 hover:border-[#EA580C]/60 rounded-2xl p-4 transition-all duration-300 hover:bg-white/8 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#EA580C] flex items-center justify-center font-bold">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Media Wave Technologies</div>
                      <div className="text-[11px] text-[#8FBDF3] font-medium">Company Official Line</div>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-300 font-mono flex items-center gap-1.5 pt-1">
                  <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>+91 63691 53235</span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a 
                    href="tel:+916369153235"
                    className="flex-1 text-center py-2 px-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    Call Office
                  </a>
                  <a 
                    href="https://wa.me/916369153235?text=Hello%20Media%20Wave%20Technologies,%20I%20would%20like%20to%20inquire%20about%20Master%20Export%20ERP."
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Lead Developer & Technical Support Card */}
              <div className="bg-white/5 border border-white/10 hover:border-[#004EAB]/60 rounded-2xl p-4 transition-all duration-300 hover:bg-white/8 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#004EAB]/20 border border-[#004EAB]/40 text-[#8FBDF3] flex items-center justify-center font-bold">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Technical Support</div>
                      <div className="text-[11px] text-[#8FBDF3] font-medium">Lead Developer Contact</div>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-300 font-mono flex items-center gap-1.5 pt-1">
                  <Phone className="w-3.5 h-3.5 text-[#004EAB]" />
                  <span>+91 99404 40767</span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a 
                    href="tel:+919940440767"
                    className="flex-1 text-center py-2 px-3 rounded-xl bg-[#004EAB] hover:bg-[#003E8A] text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    Call Dev
                  </a>
                  <a 
                    href="https://wa.me/919940440767?text=Hello%20Developer,%20I%20need%20technical%20assistance%20regarding%20Master%20Export%20ERP."
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Company Details & Operating Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            {/* Address Card */}
            <div className="bg-[#001848]/60 border border-white/10 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Head Office</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                WD-54, Anandha bhavan complex, Second floor, 17/52, Puthur High Rd, Tiruchirappalli, Tamil Nadu - 620017
              </p>
              <div className="pl-6 pt-1">
                <button
                  onClick={handleDirectionsClick}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#EA580C] hover:text-[#F97316] transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Driving Directions</span>
                </button>
              </div>
            </div>

            {/* Operating Hours & Emails */}
            <div className="bg-[#001848]/60 border border-white/10 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <Clock className="w-4 h-4 text-[#8FBDF3] shrink-0" />
                <span>Operating Hours & Email</span>
              </div>
              <p className="text-xs text-slate-300 pl-6">
                Mon – Sat: <strong>9:00 AM – 6:00 PM (IST)</strong>
              </p>
              <div className="pt-1.5 border-t border-white/10 pl-6 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <Mail className="w-3 h-3 text-[#8FBDF3]" />
                  <a href="mailto:info@mediawavetech.com" className="hover:text-white transition-colors underline decoration-slate-600">
                    info@mediawavetech.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer: Quick Action Buttons */}
        <div className="relative z-10 px-5 sm:px-7 py-4 bg-[#000F2E] border-t border-[#001848] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>256-Bit Encrypted Communications</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleDirectionsClick}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-all"
            >
              <Navigation className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Get Directions</span>
            </button>
            <button
              onClick={scrollToInquiryForm}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-[#004EAB] hover:bg-[#003E8A] text-white font-bold text-xs border border-[#BCD8F8]/40 transition-all shadow-md shadow-[#004EAB]/40 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Send Online Inquiry</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
