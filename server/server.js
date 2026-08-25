const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Multi-Currency Exchange Rates relative to INR
const exchangeRatesToINR = {
  USD: 85.00,
  EUR: 92.50,
  AED: 23.14,
  GBP: 108.20,
  CNY: 11.75,
  INR: 1.00
};

// Shipment Tracking Database
const shipmentDb = {
  'EXP-8891': {
    id: 'SHP-2026-8891',
    orderNumber: 'ME-EXP-8891',
    type: 'Export',
    mode: 'Sea Freight',
    vessel: 'MSC Gülsün V.412',
    container: 'MEDU-749210-9 (40ft HC)',
    pol: 'Mundra Port (INMUN)',
    pod: 'Port of Jebel Ali, Dubai (AEJEA)',
    etd: '2026-08-21',
    eta: '2026-08-27',
    status: 'In Transit',
    progress: 70,
    steps: [
      { title: 'Booking Confirmed & Factory Stuffing', location: 'Mundra SEZ', date: '2026-08-19', done: true },
      { title: 'Port Gate-In & Customs LEO Granted', location: 'Mundra Terminal 2', date: '2026-08-20', done: true },
      { title: 'Vessel Departed Origin Port', location: 'Arabian Sea - En Route', date: '2026-08-21', done: true },
      { title: 'Customs Clearance & Discharge', location: 'Jebel Ali Berth 7', date: '2026-08-27', done: false }
    ]
  },
  'IMP-4022': {
    id: 'SHP-2026-4022',
    orderNumber: 'ME-IMP-4022',
    type: 'Import',
    mode: 'Air Freight',
    vessel: 'Lufthansa Cargo LH8220 (Boeing 777F)',
    container: 'AWB #020-89104821',
    pol: 'Frankfurt Cargo City (FRA)',
    pod: 'Chennai International Cargo (MAA)',
    etd: '2026-08-23',
    eta: '2026-08-26',
    status: 'Arrived at Destination Port',
    progress: 90,
    steps: [
      { title: 'Cargo Picked up from Supplier', location: 'Hamburg Warehouse', date: '2026-08-22', done: true },
      { title: 'Flight Departed Frankfurt Hub', location: 'Frankfurt (FRA)', date: '2026-08-23', done: true },
      { title: 'Arrived at Chennai Air Cargo', location: 'Chennai (MAA)', date: '2026-08-25', done: true },
      { title: 'Bill of Entry Customs Assessment', location: 'Air Cargo Complex', date: '2026-08-26', done: false }
    ]
  },
  'EXP-9905': {
    id: 'SHP-2026-9905',
    orderNumber: 'ME-EXP-9905',
    type: 'Export',
    mode: 'Sea Freight',
    vessel: 'CMA CGM Jacques Saadé',
    container: 'CMAU-918234-1 (20ft Dry)',
    pol: 'JNPT Mumbai (INBOM)',
    pod: 'Port of Rotterdam (NLRTM)',
    etd: '2026-08-15',
    eta: '2026-08-30',
    status: 'In Transit',
    progress: 75,
    steps: [
      { title: 'Container Loaded & Gate-In', location: 'JNPT Nhava Sheva', date: '2026-08-14', done: true },
      { title: 'Vessel Sailed & Suez Transit', location: 'Red Sea & Mediterranean', date: '2026-08-18', done: true },
      { title: 'English Channel Approaches', location: 'North Sea Corridor', date: '2026-08-25', done: true },
      { title: 'Port of Rotterdam Final Berthing', location: 'Rotterdam Gateway', date: '2026-08-30', done: false }
    ]
  }
};

// Trade Documents Database
const tradeDocuments = {
  commercial_invoice: {
    title: 'Commercial Invoice',
    docNumber: 'EXP-INV-2026-108',
    shipper: 'Master Export (Mumbai, India)',
    consignee: 'EuroStar Global Traders B.V. (Amsterdam, Netherlands)',
    incoterm: 'CIF Rotterdam',
    items: [
      { name: '100% Combed Cotton Yarn (30s Ne)', hsCode: '5205.12.00', qty: '18,000 Kgs', unitPrice: '$4.20', total: '$75,600.00' }
    ],
    currency: 'USD',
    grandTotal: '$75,600.00'
  },
  packing_list: {
    title: 'Export Packing List',
    docNumber: 'ME-PL-9921',
    vessel: 'MSC Gülsün V.412',
    containerNo: 'MEDU-749210-9',
    packages: '720 Corrugated Boxes on 18 Standard Pallets',
    netWeight: '18,000.00 KGS',
    grossWeight: '18,920.00 KGS',
    volumeCbm: '42.50 CBM'
  },
  bill_of_lading: {
    title: 'Ocean Bill of Lading (Negotiable)',
    docNumber: 'MSCUIN982144',
    carrier: 'Mediterranean Shipping Company (MSC)',
    pol: 'Mundra Port (INMUN)',
    pod: 'Jebel Ali (AEJEA)',
    freightTerm: 'Freight Prepaid',
    status: 'Clean on Board'
  },
  certificate_of_origin: {
    title: 'Certificate of Origin',
    docNumber: 'COO-IND-2026-441',
    issuingAuthority: 'Federation of Indian Export Organisations (FIEO)',
    countryOfOrigin: 'Republic of India',
    declaration: 'Goods certified of authentic Indian origin for preferential tariff.'
  }
};

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', app: 'Master Export ERP API', timestamp: new Date().toISOString() });
});

// KPI Dashboard Stats API
app.get('/api/stats', (req, res) => {
  res.json({
    totalExportOrders: 148500,
    exportOrdersCount: 24,
    totalImportOrders: 89200,
    importOrdersCount: 16,
    activeShipmentsCount: 12,
    pendingPayments: 18400,
    estimatedProfit: 36240,
    profitMarginPercent: 24.4,
    currencies: exchangeRatesToINR
  });
});

// Profit Calculation API
app.post('/api/profit/calculate', (req, res) => {
  try {
    const { currency = 'USD', sellingPrice = 0, productCost = 0, freight = 0, insurance = 0, customs = 0 } = req.body;
    const selling = parseFloat(sellingPrice) || 0;
    const cost = parseFloat(productCost) || 0;
    const frt = parseFloat(freight) || 0;
    const ins = parseFloat(insurance) || 0;
    const cust = parseFloat(customs) || 0;

    const totalExpenses = cost + frt + ins + cust;
    const netProfit = selling - totalExpenses;
    const margin = selling > 0 ? ((netProfit / selling) * 100).toFixed(1) : 0;
    
    const rateToINR = exchangeRatesToINR[currency] || 85.00;
    const profitINR = netProfit * rateToINR;

    res.json({
      currency,
      selling,
      totalExpenses,
      netProfit,
      marginPercent: parseFloat(margin),
      profitINR,
      rateToINR
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Tracking API
app.get('/api/tracking/:id', (req, res) => {
  const { id } = req.params;
  const shipment = shipmentDb[id] || Object.values(shipmentDb).find(s => s.id === id || s.orderNumber === id);

  if (shipment) {
    res.json({ success: true, shipment });
  } else {
    res.status(404).json({ success: false, message: `Shipment or Order #${id} not found.` });
  }
});

// Documents API
app.get('/api/documents/:type', (req, res) => {
  const { type } = req.params;
  const doc = tradeDocuments[type];

  if (doc) {
    res.json({ success: true, document: doc });
  } else {
    res.status(404).json({ success: false, message: `Document type '${type}' not found.` });
  }
});

// Admin Auth Simulation
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    res.json({
      success: true,
      token: 'jwt-token-tradeflow-erp-demo-2026',
      user: {
        name: 'Trade Administrator',
        email,
        role: 'Master Admin'
      },
      message: 'Authentication successful. Redirecting to ERP Command Center.'
    });
  } else {
    res.status(400).json({ success: false, message: 'Email and password required.' });
  }
});

// Demo Request API
app.post('/api/demo/schedule', (req, res) => {
  const { name, company, email, phone, tradeType } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and email are required.' });
  }

  res.json({
    success: true,
    message: `Demo scheduled for ${name} (${company}). Our export solutions consultant will connect shortly.`
  });
});

app.listen(PORT, () => {
  console.log(`Master Export ERP Backend running on http://localhost:${PORT}`);
});
