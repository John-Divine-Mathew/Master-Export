import React, { useState } from 'react';
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

export default function App() {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#004EAB] selection:text-white">
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
    </div>
  );
}
