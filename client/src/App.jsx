import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountryCoverage from './components/CountryCoverage';
import WhyThisERP from './components/WhyThisERP';
import Workflow from './components/Workflow';
import DashboardMockup from './components/DashboardMockup';
import DosAndDonts from './components/DosAndDonts';
import ContactForm from './components/ContactForm';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import Toast from './components/Toast';
import useScrollReveal from './hooks/useScrollReveal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize smooth viewport entrance animations
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#004EAB] selection:text-white relative">
      {/* Navigation Bar */}
      <Navbar />

      {/* Clean Minimal Hero Section */}
      <Hero />

      {/* 10-Country Continuous Moving Carousel (Global Trade. Multiple Markets. One ERP.) */}
      <CountryCoverage />

      {/* Why Trading Companies Choose Master Export */}
      <WhyThisERP />

      {/* Business Workflow */}
      <Workflow />

      {/* Live Interactive ERP Dashboard Mockup UI */}
      <DashboardMockup />

      {/* Do's & Don'ts Best Practices Guide */}
      <DosAndDonts />

      {/* Professional Contact / Demo Request Form */}
      <ContactForm />

      {/* Call to Action Banner */}
      <CTABanner />

      {/* Footer */}
      <Footer />

      {/* Global Toast Alerts */}
      <Toast message={toastMessage} />

      {/* Smooth Floating Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#004EAB] text-white shadow-xl shadow-[#004EAB]/40 hover:bg-[#003E8A] border border-[#BCD8F8]/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}

