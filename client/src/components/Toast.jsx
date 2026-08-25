import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-navy text-white px-5 py-3.5 rounded-2xl shadow-2xl border-l-4 border-blue-500 animate-slideUp">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
      <span className="text-xs sm:text-sm font-semibold">{message}</span>
    </div>
  );
}
