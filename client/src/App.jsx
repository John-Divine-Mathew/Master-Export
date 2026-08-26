import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyThisERP from './components/WhyThisERP';
import Workflow from './components/Workflow';
import ModuleTabs from './components/ModuleTabs';
import DocumentVault from './components/DocumentVault';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import DocPreviewModal from './components/DocPreviewModal';
import Toast from './components/Toast';

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);
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
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#004EAB] selection:text-white">
      {/* Navigation Bar */}
      <Navbar 
        onOpenLogin={() => setLoginOpen(true)} 
      />

      {/* Clean Minimal Hero Section */}
      <Hero 
        onOpenLogin={() => setLoginOpen(true)} 
      />

      {/* Why Trading Companies Choose Master Export */}
      <WhyThisERP />

      {/* Business Workflow */}
      <Workflow />

      {/* In-Depth ERP Module Tabs */}
      <ModuleTabs onOpenLogin={() => setLoginOpen(true)} />

      {/* Trade Document Vault Showcase */}
      <DocumentVault onOpenDocPreview={handleOpenDocPreview} />

      {/* Client Success Stories & Social Proof */}
      <Testimonials />

      {/* Pricing & Deployment Plans */}
      <Pricing onOpenLogin={() => setLoginOpen(true)} />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Call to Action Banner */}
      <CTABanner onOpenLogin={() => setLoginOpen(true)} />

      {/* Footer */}
      <Footer 
        onOpenLogin={() => setLoginOpen(true)} 
      />

      {/* Interactive Login Modal */}
      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        onLoginSuccess={showToast}
      />

      {/* Document Preview Modal */}
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
