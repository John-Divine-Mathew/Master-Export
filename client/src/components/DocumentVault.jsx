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
      icon: <FileText className="w-5 h-5 text-[#004EAB]" />
    },
    {
      type: 'packing_list',
      title: 'Export Packing List',
      desc: 'Gross weight, net weight & package manifests',
      icon: <Boxes className="w-5 h-5 text-[#004EAB]" />
    },
    {
      type: 'bill_of_lading',
      title: 'Bill of Lading (B/L)',
      desc: 'Ocean carrier negotiable title & cargo receipt',
      icon: <Ship className="w-5 h-5 text-[#004EAB]" />
    },
    {
      type: 'certificate_of_origin',
      title: 'Certificate of Origin',
      desc: 'Chamber proof for customs duty tariffs',
      icon: <Award className="w-5 h-5 text-[#004EAB]" />
    },
    {
      type: 'air_waybill',
      title: 'Air Waybill (AWB)',
      desc: 'IATA standard consignment receipt for air cargo',
      icon: <Plane className="w-5 h-5 text-[#004EAB]" />
    },
    {
      type: 'shipping_bill',
      title: 'Shipping Bill / BOE',
      desc: 'Customs port clearance & LEO declaration',
      icon: <Stamp className="w-5 h-5 text-[#004EAB]" />
    },
    {
      type: 'insurance_cert',
      title: 'Marine Cargo Insurance',
      desc: 'Institute Cargo Clauses (A) policy coverage',
      icon: <ShieldAlert className="w-5 h-5 text-[#004EAB]" />
    },
    {
      type: 'proforma_invoice',
      title: 'Proforma Invoice (PI)',
      desc: 'Preliminary sales agreement for Letter of Credit',
      icon: <FileSpreadsheet className="w-5 h-5 text-[#004EAB]" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#EBF3FC]/30 scroll-mt-20 border-b border-[#BCD8F8]/40" id="documents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004EAB]">
            Compliance & Documentation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            One-Click International Trade Documents
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Export documents formatted to standard customs, banking, and carrier guidelines.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              onClick={() => onOpenDocPreview(doc.title)}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 text-center hover:border-[#BCD8F8] hover:shadow-xl hover:shadow-[#004EAB]/5 transition-all duration-200 flex flex-col justify-between items-center cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] flex items-center justify-center mb-3 group-hover:bg-[#D5E6F9] transition-colors">
                {doc.icon}
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-[#004EAB] transition-colors">
                  {doc.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {doc.desc}
                </p>
              </div>

              <button
                className="w-full py-1.5 px-3 bg-[#EBF3FC] group-hover:bg-[#004EAB] group-hover:text-white border border-[#BCD8F8] rounded-xl text-xs font-semibold text-[#001848] flex items-center justify-center gap-1.5 transition-all shadow-2xs"
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
