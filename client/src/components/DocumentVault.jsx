import React from 'react';
import { 
  FileText, 
  Boxes, 
  Ship, 
  Award, 
  Plane, 
  Stamp, 
  ShieldAlert, 
  FileSpreadsheet,
  Eye
} from 'lucide-react';

export default function DocumentVault({ onOpenDocPreview }) {
  const documents = [
    {
      type: 'commercial_invoice',
      title: 'Commercial Invoice',
      desc: 'Valuation, buyer terms & HS code breakdown',
      icon: <FileText className="w-5 h-5 text-blue-600" />
    },
    {
      type: 'packing_list',
      title: 'Export Packing List',
      desc: 'Gross weight, net weight & package manifests',
      icon: <Boxes className="w-5 h-5 text-blue-600" />
    },
    {
      type: 'bill_of_lading',
      title: 'Bill of Lading (B/L)',
      desc: 'Ocean carrier negotiable title & cargo receipt',
      icon: <Ship className="w-5 h-5 text-blue-600" />
    },
    {
      type: 'certificate_of_origin',
      title: 'Certificate of Origin',
      desc: 'Chamber proof for customs duty tariffs',
      icon: <Award className="w-5 h-5 text-blue-600" />
    },
    {
      type: 'air_waybill',
      title: 'Air Waybill (AWB)',
      desc: 'IATA standard consignment receipt for air cargo',
      icon: <Plane className="w-5 h-5 text-blue-600" />
    },
    {
      type: 'shipping_bill',
      title: 'Shipping Bill / BOE',
      desc: 'Customs port clearance & LEO declaration',
      icon: <Stamp className="w-5 h-5 text-blue-600" />
    },
    {
      type: 'insurance_cert',
      title: 'Marine Cargo Insurance',
      desc: 'Institute Cargo Clauses (A) policy coverage',
      icon: <ShieldAlert className="w-5 h-5 text-blue-600" />
    },
    {
      type: 'proforma_invoice',
      title: 'Proforma Invoice (PI)',
      desc: 'Preliminary sales agreement for Letter of Credit',
      icon: <FileSpreadsheet className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/60 scroll-mt-20" id="documents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Compliance & Documentation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            One-Click International Trade Documents
          </h2>
          <p className="text-base text-slate-600">
            Export documents formatted to standard customs, banking, and carrier guidelines.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              onClick={() => onOpenDocPreview(doc.title)}
              className="bg-white border border-slate-200/80 rounded-xl p-5 text-center hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between items-center cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                {doc.icon}
              </div>

              <div>
                <h4 className="text-sm font-bold text-brand-navy mb-1 group-hover:text-blue-600 transition-colors">
                  {doc.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {doc.desc}
                </p>
              </div>

              <button
                className="w-full py-1.5 px-3 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview Template</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
