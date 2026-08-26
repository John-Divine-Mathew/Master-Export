import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

export default function LiveProfitEngine() {
  const [currency, setCurrency] = useState('USD');
  const [sellingPrice, setSellingPrice] = useState(25000);
  const [productCost, setProductCost] = useState(16000);
  const [freight, setFreight] = useState(2200);
  const [insurance, setInsurance] = useState(450);
  const [customs, setCustoms] = useState(650);

  const [netProfit, setNetProfit] = useState(0);
  const [profitMargin, setProfitMargin] = useState(0);
  const [inrEquivalent, setInrEquivalent] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const ratesToINR = {
    USD: 85.00,
    EUR: 92.50,
    AED: 23.14,
    GBP: 108.20,
    CNY: 11.75,
    INR: 1.00
  };

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    AED: 'AED ',
    GBP: '£',
    CNY: '¥',
    INR: '₹'
  };

  useEffect(() => {
    const s = parseFloat(sellingPrice) || 0;
    const c = parseFloat(productCost) || 0;
    const f = parseFloat(freight) || 0;
    const i = parseFloat(insurance) || 0;
    const cu = parseFloat(customs) || 0;

    const exp = c + f + i + cu;
    const profit = s - exp;
    const margin = s > 0 ? ((profit / s) * 100).toFixed(1) : 0;
    const inr = profit * (ratesToINR[currency] || 85.00);

    setTotalExpenses(exp);
    setNetProfit(profit);
    setProfitMargin(margin);
    setInrEquivalent(inr);
  }, [currency, sellingPrice, productCost, freight, insurance, customs]);

  const symbol = currencySymbols[currency] || '$';

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between w-full overflow-hidden">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100 mb-5 sm:mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] text-[#004EAB] flex items-center justify-center font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Export Profit Engine</h3>
            <p className="text-xs text-slate-500">Calculate net margins with instant currency conversion</p>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:border-[#004EAB] focus:outline-none"
              >
                <option value="USD">USD ($) - US Dollar</option>
                <option value="EUR">EUR (€) - Euro</option>
                <option value="AED">AED (د.إ) - UAE Dirham</option>
                <option value="GBP">GBP (£) - British Pound</option>
                <option value="CNY">CNY (¥) - Chinese Yuan</option>
                <option value="INR">INR (₹) - Indian Rupee</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Selling Invoice Amount ({symbol})
              </label>
              <input
                type="number"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:border-[#004EAB] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Product Cost
              </label>
              <input
                type="number"
                value={productCost}
                onChange={(e) => setProductCost(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:border-[#004EAB] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Freight & Shipping
              </label>
              <input
                type="number"
                value={freight}
                onChange={(e) => setFreight(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:border-[#004EAB] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Insurance & Docs
              </label>
              <input
                type="number"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:border-[#004EAB] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Customs & Handling
              </label>
              <input
                type="number"
                value={customs}
                onChange={(e) => setCustoms(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:border-[#004EAB] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Result Display Box */}
      <div className="mt-6 bg-slate-900 rounded-xl p-5 text-white shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-semibold text-slate-400">
              Estimated Net Profit
            </div>
            <div className="text-2xl font-bold text-white mt-0.5">
              {symbol}{netProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase font-semibold text-slate-400">
              Net Margin
            </div>
            <div className={`text-xl font-bold mt-0.5 ${netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {profitMargin}%
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
          <span>
            INR Equiv: <strong className="text-slate-200">₹{inrEquivalent.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong>
          </span>
          <span>
            Expenses: {symbol}{totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </div>
  );
}
