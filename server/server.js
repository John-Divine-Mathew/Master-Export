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

// Initialize Resend Transactional Email Client
const { Resend } = require('resend');
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.includes('your_api_key') || apiKey.includes('your_resend_api_key')) {
    return null;
  }
  return new Resend(apiKey);
};

// Helper: Escape HTML to prevent injection in email templates
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// POST /api/contact - Real Transactional Email Submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, country, message, _hp } = req.body;

    // Honeypot spam prevention check
    if (_hp) {
      return res.status(200).json({
        success: true,
        message: 'Request received.'
      });
    }

    // Input Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Name is required (at least 2 characters).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'A valid email address is required.'
      });
    }

    if (!country || typeof country !== 'string' || country.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Country is required.'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: 'Message is required (at least 5 characters).'
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanCountry = country.trim();
    const cleanMessage = message.trim();
    const submissionDate = new Date().toUTCString();

    const recipientEmail = process.env.CONTACT_EMAIL || 'info@masterexport.com';
    const fromAddress = process.env.FROM_EMAIL || 'Master Export ERP <onboarding@resend.dev>';

    // Build Professional HTML Email Template
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .header { background: #000F2E; padding: 28px 32px; border-bottom: 3px solid #004EAB; text-align: left; }
    .brand-title { color: #ffffff; font-size: 20px; font-weight: 800; margin: 0; letter-spacing: -0.5px; }
    .brand-subtitle { color: #8FBDF3; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
    .content { padding: 32px; }
    .badge { display: inline-block; background: #EBF3FC; color: #004EAB; font-size: 11px; font-weight: 700; padding: 4px 12px; rounded-full; border-radius: 20px; text-transform: uppercase; margin-bottom: 20px; border: 1px solid #BCD8F8; }
    .field-group { margin-bottom: 20px; }
    .field-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .field-value { font-size: 15px; font-weight: 600; color: #0f172a; word-break: break-word; }
    .message-box { background: #f8fafc; border-left: 4px solid #004EAB; padding: 16px 20px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; margin-top: 8px; }
    .meta-box { background: #f1f5f9; padding: 12px 16px; border-radius: 8px; font-size: 12px; color: #64748b; margin-top: 28px; }
    .footer { background: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="brand-title">Master Export ERP</h1>
      <div class="brand-subtitle">New Demo & Inquiry Notification</div>
    </div>
    <div class="content">
      <span class="badge">Inbound Portal Submission</span>
      
      <div class="field-group">
        <div class="field-label">Sender Name</div>
        <div class="field-value">${escapeHtml(cleanName)}</div>
      </div>

      <div class="field-group">
        <div class="field-label">Email Address</div>
        <div class="field-value"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #004EAB; text-decoration: none;">${escapeHtml(cleanEmail)}</a></div>
      </div>

      <div class="field-group">
        <div class="field-label">Country / Region</div>
        <div class="field-value">${escapeHtml(cleanCountry)}</div>
      </div>

      <div class="field-group">
        <div class="field-label">Inquiry Message</div>
        <div class="message-box">${escapeHtml(cleanMessage)}</div>
      </div>

      <div class="meta-box">
        <strong>Submission Timestamp:</strong> ${submissionDate}
      </div>
    </div>
    <div class="footer">
      This inquiry was delivered securely via the Master Export ERP Web Contact Portal.<br>
      Reply directly to this email to contact the prospective client.
    </div>
  </div>
</body>
</html>
    `.trim();

    const plainText = `
New Master Export ERP Demo Request

Name: ${cleanName}
Email: ${cleanEmail}
Country: ${cleanCountry}
Date: ${submissionDate}

Message:
${cleanMessage}

---
Delivered via Master Export ERP Contact Portal.
Reply to this email to respond directly to ${cleanName} (${cleanEmail}).
    `.trim();

    const resendClient = getResendClient();

    if (!resendClient) {
      console.warn('[Resend Email Warning] RESEND_API_KEY is not configured in server/.env.');
      console.log(`[Contact Form Received Locally]:
  - Name: ${cleanName}
  - Email: ${cleanEmail}
  - Country: ${cleanCountry}
  - Destination: ${recipientEmail}
  - Message: ${cleanMessage}`);

      return res.status(200).json({
        success: true,
        message: 'Request Submitted Successfully. Thank you. Our team will get back to you shortly.',
        devNotice: 'RESEND_API_KEY not configured on server. Add your Resend API key to server/.env for live delivery.'
      });
    }

    // Send real email via Resend API
    const response = await resendClient.emails.send({
      from: fromAddress,
      to: recipientEmail,
      reply_to: cleanEmail,
      subject: `New Master Export ERP Demo Request - ${cleanName}`,
      html: emailHtml,
      text: plainText
    });

    if (response.error) {
      console.error('[Resend Delivery Error]:', response.error);
      return res.status(500).json({
        success: false,
        message: response.error.message || 'We could not submit your request right now. Please try again.'
      });
    }

    console.log(`[Email Sent Successfully] Resend Email ID: ${response.data?.id} to ${recipientEmail}`);

    return res.status(200).json({
      success: true,
      message: 'Request Submitted Successfully',
      supportingText: 'Thank you. Our team will get back to you shortly.',
      id: response.data?.id
    });

  } catch (error) {
    console.error('[Contact Endpoint Exception]:', error);
    return res.status(500).json({
      success: false,
      message: 'We could not submit your request right now. Please try again.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Master Export ERP Backend running on http://localhost:${PORT}`);
});

