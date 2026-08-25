import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What makes Master Export ERP different from general ERP software?",
      a: "Generic ERPs are bloated and lack international trade workflows. Master Export is tailor-built for export-import trading houses. It natively handles Incoterms, Port of Loading/Discharge, Bill of Lading, multi-currency conversions (USD, EUR, INR, AED, GBP, CNY), customs document generation, and net profit margin formulas."
    },
    {
      q: "How does the profit calculation formula work?",
      a: "The system automatically calculates Net Profit per order as: Estimated Profit = Selling Invoice Revenue - (Product Sourcing Cost + Logistics Freight + Marine Insurance + Customs Duty + Port/Warehousing Expenses). It handles multi-currency conversions automatically using real-time exchange rates."
    },
    {
      q: "Can I manage both Export sales and Import procurement?",
      a: "Yes! Master Export ERP features a unified order management hub where you simply toggle between 'Export' (goods shipped to overseas clients) and 'Import' (goods procured from global suppliers), linking inventory stock movements automatically."
    },
    {
      q: "What technology stack powers this ERP?",
      a: "The platform is built on modern MERN stack architecture: React.js with Vite and Tailwind CSS on the frontend, Node.js + Express.js REST API on the backend, and MongoDB Mongoose database collections with JWT authentication."
    },
    {
      q: "Is the application responsive for mobile and tablet use?",
      a: "Yes, the entire application is 100% mobile, tablet, and desktop responsive so you can inspect orders, approve invoices, and generate documents while on the go or visiting ports."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-purple-50/20 scroll-mt-20" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-2 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Everything you need to know about Master Export ERP and how it simplifies international trade.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-purple-300 bg-purple-50/40 shadow-sm' : 'border-slate-200 bg-white hover:border-purple-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-purple-600 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-purple-100/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
