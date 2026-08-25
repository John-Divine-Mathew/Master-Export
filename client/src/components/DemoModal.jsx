import React, { useState } from 'react';
import { X, Rocket, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function DemoModal({ isOpen, onClose, onDemoScheduled }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tradeType, setTradeType] = useState('both');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onDemoScheduled(`Demo scheduled for ${name} (${company || 'Trade Partner'}). Our specialist will contact you.`);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl relative border border-slate-100 animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <img src={logoImg} alt="Logo" className="h-12 w-auto mx-auto mb-3 object-contain" />
          <h3 className="text-xl font-black text-brand-navy">Book a 1-on-1 Product Tour</h3>
          <p className="text-xs text-slate-500 mt-1">See how Master Export ERP automates your international business</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-brand-navy focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="e.g. Rajesh Sharma"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-brand-navy focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="e.g. Global Exports Ltd"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Business Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-brand-navy focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="rajesh@globalexports.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-brand-navy focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Primary Trade Operation
            </label>
            <select
              value={tradeType}
              onChange={(e) => setTradeType(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-brand-navy focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option value="both">Both Export & Import Business</option>
              <option value="export">Merchant / Direct Exporter</option>
              <option value="import">Direct Importer / Distributor</option>
              <option value="freight">Freight Forwarder / Agent</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-brand-navy hover:to-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
          >
            {loading ? 'Submitting...' : (
              <>
                <Rocket className="w-4 h-4" />
                <span>Schedule Live ERP Walkthrough</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
