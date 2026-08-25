import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import LiveProfitEngine from './components/LiveProfitEngine';
import LiveShipmentTracker from './components/LiveShipmentTracker';
import ModuleTabs from './components/ModuleTabs';
import DocumentVault from './components/DocumentVault';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import DemoModal from './components/DemoModal';
import DocPreviewModal from './components/DocPreviewModal';
import Toast from './components/Toast';

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [docModalOpen, setDocModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState('Commercial Invoice');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const handleOpenDocPreview = (title) => {
    setSelectedDoc(title);
    setDocModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar 
        onOpenLogin={() => setLoginOpen(true)} 
        onOpenDemo={() => setDemoOpen(true)} 
      />

      {/* Hero Section */}
      <Hero 
        onOpenDemo={() => setDemoOpen(true)} 
      />

      {/* Core Features Grid */}
      <Features />

      {/* 5-Step Trade Workflow */}
      <Workflow />

      {/* Interactive Live Tools (Profit Engine & Shipment Tracker) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-white scroll-mt-20" id="simulator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Interactive Trade Simulator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Test Drive The Live ERP Engine
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Try the real-time profit calculator and shipment tracking simulator built directly from the TradeFlow ERP software specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <LiveProfitEngine />
            <LiveShipmentTracker onTriggerToast={showToast} />
          </div>

        </div>
      </section>

      {/* In-Depth ERP Module Tabs */}
      <ModuleTabs onOpenDemo={() => setDemoOpen(true)} />

      {/* Trade Document Vault Showcase */}
      <DocumentVault onOpenDocPreview={handleOpenDocPreview} />

      {/* Client Success Stories & Social Proof */}
      <Testimonials />

      {/* Pricing & Deployment Plans */}
      <Pricing onOpenDemo={() => setDemoOpen(true)} />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Call to Action Banner */}
      <CTABanner onOpenDemo={() => setDemoOpen(true)} />

      {/* Footer */}
      <Footer 
        onOpenLogin={() => setLoginOpen(true)} 
        onOpenDemo={() => setDemoOpen(true)} 
      />

      {/* Interactive Modals */}
      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        onLoginSuccess={showToast}
      />

      <DemoModal 
        isOpen={demoOpen} 
        onClose={() => setDemoOpen(false)} 
        onDemoScheduled={showToast}
      />

      <DocPreviewModal 
        isOpen={docModalOpen} 
        onClose={() => setDocModalOpen(false)} 
        docTitle={selectedDoc}
        onDownload={showToast}
      />

      {/* Global Toast Alerts */}
      <Toast message={toastMessage} />
    </div>
  );
}
