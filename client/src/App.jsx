import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyThisERP from './components/WhyThisERP';
import Workflow from './components/Workflow';
import DocumentVault from './components/DocumentVault';
import DosAndDonts from './components/DosAndDonts';
import ContactForm from './components/ContactForm';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import DocPreviewModal from './components/DocPreviewModal';
import Toast from './components/Toast';

export default function App() {
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
      <Navbar />

      {/* Clean Minimal Hero Section */}
      <Hero />

      {/* Why Trading Companies Choose Master Export */}
      <WhyThisERP />

      {/* Business Workflow */}
      <Workflow />

      {/* Trade Document Vault Showcase */}
      <DocumentVault onOpenDocPreview={handleOpenDocPreview} />

      {/* Do's & Don'ts Best Practices Guide */}
      <DosAndDonts />

      {/* Professional Contact / Demo Request Form */}
      <ContactForm />

      {/* Call to Action Banner */}
      <CTABanner />

      {/* Footer */}
      <Footer />

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
