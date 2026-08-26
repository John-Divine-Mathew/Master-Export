import React from 'react';
import { X, FileText, Download } from 'lucide-react';

export default function DocPreviewModal({ isOpen, onClose, docTitle, onDownload }) {
  if (!isOpen) return null;

  const docSamples = {
    'Commercial Invoice': {
      sub: 'Official Customs Valuation & Invoice Document',
      invNo: 'EXP-INV-2026-108',
      shipper: 'MASTER EXPORT TRADING CORP (Mumbai, India)',
      consignee: 'EuroStar Global Traders B.V. (Amsterdam, Netherlands)',
      terms: 'CIF Rotterdam • Letter of Credit (LC) at Sight',
      item: '100% Cotton Combed Yarn (30s Ne)',
      hsCode: '5205.12.00',
      qty: '18,000 Kgs',
      price: '$4.20 / Kg',
      total: '$75,600.00 USD'
    },
    'Export Packing List': {
      sub: 'Container Manifest, Tare, Gross & Net Weight Specification',
      invNo: 'PL-REF-2026-9921',
      shipper: 'MASTER EXPORT TRADING CORP',
      consignee: 'EuroStar Global Traders B.V.',
      terms: 'Vessel: MSC Gülsün V.412 • Container: MEDU-749210-9',
      item: '720 Corrugated Cartons on 18 Standard Pallets',
      hsCode: 'Net Wt: 18,000.00 KGS',
      qty: 'Gross Wt: 18,920.00 KGS',
      price: 'CBM: 42.50 CBM',
      total: 'Stuffing Status: Complete'
    },
    'Bill of Lading (B/L)': {
      sub: 'Ocean Carrier Multimodal Transport Document (B/L)',
      invNo: 'MSCUIN982144',
      shipper: 'Master Export (Mumbai, India)',
      consignee: 'To Order of Bank / Consignee Designated',
      terms: 'Port of Loading: Mundra (INMUN) • Discharge: Jebel Ali (AEJEA)',
      item: 'Mediterranean Shipping Company (MSC Ocean Vessel)',
      hsCode: 'Freight Status: FREIGHT PREPAID',
      qty: 'Container MEDU-749210-9 (40ft High Cube)',
      price: 'Clean on Board',
      total: 'Negotiable Original'
    },
    'Certificate of Origin': {
      sub: 'Chamber of Commerce Preferential Origin Certificate',
      invNo: 'COO-IND-2026-441',
      shipper: 'Master Export (India)',
      consignee: 'Global Importer',
      terms: 'Authority: Federation of Indian Export Organisations (FIEO)',
      item: 'Origin Country: Republic of India (IND)',
      hsCode: 'Tariff Preference: Generalized System of Preferences (GSP)',
      qty: 'Certified Clean Origin',
      price: 'Verified',
      total: 'Seal Affixed'
    }
  };

  const sample = docSamples[docTitle] || docSamples['Commercial Invoice'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl relative border border-[#BCD8F8]/60 animate-scaleUp">
        
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
          <div className="w-12 h-12 rounded-2xl bg-[#EBF3FC] text-[#004EAB] mx-auto flex items-center justify-center mb-3">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-slate-900">{docTitle}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{sample.sub}</p>
        </div>

        {/* Document Template Container */}
        <div className="bg-[#EBF3FC]/30 border border-[#BCD8F8]/60 rounded-2xl p-5 text-xs text-slate-600 space-y-3 mb-6 font-mono">
          <div className="flex justify-between items-center pb-2 border-b border-[#BCD8F8]/50 text-slate-900 font-bold">
            <span>{sample.shipper}</span>
            <span className="text-[#004EAB]">REF: {sample.invNo}</span>
          </div>

          <div><strong>Buyer / Consignee:</strong> {sample.consignee}</div>
          <div><strong>Delivery & Terms:</strong> {sample.terms}</div>

          <div className="pt-2 border-t border-dashed border-[#BCD8F8] space-y-1">
            <div><strong>Item Description:</strong> {sample.item}</div>
            <div><strong>HS / Code:</strong> {sample.hsCode}</div>
            <div><strong>Quantity / Weight:</strong> {sample.qty}</div>
            <div className="text-slate-900 font-bold pt-1 text-sm">
              Total Valuation: {sample.total}
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            onDownload(`Generated PDF for ${docTitle}`);
            onClose();
          }}
          className="w-full py-3 px-4 bg-[#004EAB] hover:bg-[#003E8A] text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-[#004EAB]/25 flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Download Sample PDF Form</span>
        </button>

      </div>
    </div>
  );
}
