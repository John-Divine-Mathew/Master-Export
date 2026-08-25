import React, { useState } from 'react';
import { Ship, Search, CheckCircle2, CircleDot, Clock, Anchor, MapPin } from 'lucide-react';

export default function LiveShipmentTracker({ onTriggerToast }) {
  const [selectedKey, setSelectedKey] = useState('EXP-8891');

  const shipments = {
    'EXP-8891': {
      id: 'SHP-2026-8891',
      orderNumber: 'ME-EXP-8891',
      vessel: 'MSC Gülsün V.412',
      container: 'MEDU-749210-9 (40ft HC)',
      origin: 'Mundra (INMUN)',
      destination: 'Jebel Ali (AEJEA)',
      eta: '27 Aug 2026',
      steps: [
        { title: 'Booking Confirmed & Factory Stuffing', desc: 'Mundra SEZ – Export LEO Granted', done: true },
        { title: 'Vessel Departed Origin Port', desc: 'Sailed: 21 Aug 2026, 08:30 IST', done: true },
        { title: 'In Transit – Arabian Sea Corridor', desc: 'Speed: 18.4 knots &bull; On schedule', current: true },
        { title: 'Discharge at Jebel Ali Port', desc: 'Awaiting berth arrival and clearance', done: false }
      ]
    },
    'IMP-4022': {
      id: 'SHP-2026-4022',
      orderNumber: 'ME-IMP-4022',
      vessel: 'Lufthansa Cargo LH8220',
      container: 'AWB #020-89104821',
      origin: 'Frankfurt Hub (FRA)',
      destination: 'Chennai Intl (MAA)',
      eta: '26 Aug 2026',
      steps: [
        { title: 'Cargo Picked up from Supplier', desc: 'Hamburg Facility &bull; Seal Affixed', done: true },
        { title: 'Flight Departed Frankfurt Hub', desc: 'Flight LH8220 transited Gulf airspace', done: true },
        { title: 'Arrived at Chennai Air Cargo', desc: 'Customs Examination & EDI Verification', current: true },
        { title: 'Final Dispatch to Domestic Warehouse', desc: 'Delivery via Bonded Trucking', done: false }
      ]
    },
    'EXP-9905': {
      id: 'SHP-2026-9905',
      orderNumber: 'ME-EXP-9905',
      vessel: 'CMA CGM Jacques Saadé',
      container: 'CMAU-918234-1 (20ft Dry)',
      origin: 'JNPT Mumbai (INBOM)',
      destination: 'Rotterdam (NLRTM)',
      eta: '30 Aug 2026',
      steps: [
        { title: 'Container Loaded & Gate-In', desc: 'JNPT Nhava Sheva Terminal', done: true },
        { title: 'Passed Suez Canal Transit', desc: 'Red Sea Convoys Clear', done: true },
        { title: 'North Sea Approach', desc: 'Current Speed: 19.8 knots', current: true },
        { title: 'Port of Rotterdam Final Berthing', desc: 'Awaiting berth 4 discharge', done: false }
      ]
    }
  };

  const currentShipment = shipments[selectedKey] || shipments['EXP-8891'];

  const handleTrack = () => {
    if (onTriggerToast) {
      onTriggerToast(`Live GPS Telemetry synced for ${currentShipment.orderNumber}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Ship className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-brand-navy">Shipment Tracker</h3>
            <p className="text-xs text-slate-500">Live multi-modal container & cargo status</p>
          </div>
        </div>

        {/* Search / Select Bar */}
        <div className="flex gap-2 mb-6">
          <select
            value={selectedKey}
            onChange={(e) => setSelectedKey(e.target.value)}
            className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="EXP-8891">Order #ME-EXP-8891 (Mundra to Dubai - Sea)</option>
            <option value="IMP-4022">Order #ME-IMP-4022 (Frankfurt to Chennai - Air)</option>
            <option value="EXP-9905">Order #ME-EXP-9905 (JNPT to Rotterdam - Sea)</option>
          </select>
          <button
            onClick={handleTrack}
            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Track</span>
          </button>
        </div>

        {/* Shipment Details Box */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 mb-5">
          <div className="grid grid-cols-3 gap-3 text-xs mb-3">
            <div>
              <span className="block text-[10px] font-semibold text-slate-400 uppercase">Shipment ID</span>
              <strong className="text-slate-900 font-bold">{currentShipment.id}</strong>
            </div>
            <div>
              <span className="block text-[10px] font-semibold text-slate-400 uppercase">Carrier / Vessel</span>
              <strong className="text-slate-900 font-bold truncate block">{currentShipment.vessel}</strong>
            </div>
            <div>
              <span className="block text-[10px] font-semibold text-slate-400 uppercase">Container / AWB</span>
              <strong className="text-slate-900 font-bold truncate block">{currentShipment.container}</strong>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-medium text-slate-600 pt-2.5 border-t border-slate-200">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-blue-600" /> {currentShipment.origin}</span>
            <span className="text-blue-600 font-bold">&rarr;</span>
            <span className="flex items-center gap-1"><Anchor className="w-3.5 h-3.5 text-sky-600" /> {currentShipment.destination}</span>
          </div>
        </div>

        {/* Stepper Timeline */}
        <div className="space-y-3.5 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
          {currentShipment.steps.map((step, idx) => (
            <div key={idx} className="relative text-xs">
              <div 
                className={`absolute -left-6 top-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
                  step.done 
                    ? 'bg-emerald-500 text-white' 
                    : step.current 
                    ? 'bg-blue-600 ring-2 ring-blue-100 text-white' 
                    : 'bg-slate-300'
                }`}
              >
                {step.done ? <CheckCircle2 className="w-3 h-3" /> : step.current ? <CircleDot className="w-2.5 h-2.5" /> : null}
              </div>
              <h5 className="font-semibold text-slate-900">{step.title}</h5>
              <p className="text-slate-500 text-[11px] mt-0.5" dangerouslySetInnerHTML={{ __html: step.desc }}></p>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-600" /> Estimated Arrival:</span>
        <strong className="text-slate-900 font-bold">{currentShipment.eta}</strong>
      </div>
    </div>
  );
}
