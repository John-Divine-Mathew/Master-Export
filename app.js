// Master Export (TradeFlow ERP) - Interactive Features

document.addEventListener('DOMContentLoaded', () => {
  initProfitCalculator();
  initShipmentTracker();
  initTabs();
  initFAQ();
  initModals();
  initCounters();
  initMobileMenu();
});

// 1. Live Profit Calculation & Multi-Currency Engine
function initProfitCalculator() {
  const currencySelect = document.getElementById('calcCurrency');
  const sellingInput = document.getElementById('calcSelling');
  const productCostInput = document.getElementById('calcProductCost');
  const freightInput = document.getElementById('calcFreight');
  const insuranceInput = document.getElementById('calcInsurance');
  const customsInput = document.getElementById('calcCustoms');

  const profitResult = document.getElementById('calcProfitResult');
  const marginResult = document.getElementById('calcMarginResult');
  const conversionResult = document.getElementById('calcBaseConversion');
  const totalExpensesResult = document.getElementById('calcTotalExpenses');

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    AED: 'AED ',
    GBP: '£',
    CNY: '¥',
    INR: '₹'
  };

  const exchangeRatesToINR = {
    USD: 85.00,
    EUR: 92.50,
    AED: 23.14,
    GBP: 108.20,
    CNY: 11.75,
    INR: 1.00
  };

  function calculate() {
    const currency = currencySelect.value;
    const symbol = currencySymbols[currency] || '$';
    const rateToINR = exchangeRatesToINR[currency] || 85.00;

    const selling = parseFloat(sellingInput.value) || 0;
    const productCost = parseFloat(productCostInput.value) || 0;
    const freight = parseFloat(freightInput.value) || 0;
    const insurance = parseFloat(insuranceInput.value) || 0;
    const customs = parseFloat(customsInput.value) || 0;

    const totalExpenses = productCost + freight + insurance + customs;
    const netProfit = selling - totalExpenses;
    const margin = selling > 0 ? ((netProfit / selling) * 100).toFixed(1) : 0;

    // Multi-currency converted value in INR
    const inrValue = (netProfit * rateToINR).toLocaleString('en-IN', {
      maximumFractionDigits: 0
    });

    profitResult.textContent = `${symbol}${netProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    profitResult.style.color = netProfit >= 0 ? '#ffffff' : '#fca5a5';
    
    marginResult.textContent = `${margin}%`;
    marginResult.style.color = netProfit >= 0 ? '#a7f3d0' : '#fca5a5';

    totalExpensesResult.textContent = `Total Expenses: ${symbol}${totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    
    if (currency === 'INR') {
      conversionResult.textContent = `Net Profit in USD: $${(netProfit / 85).toFixed(2)}`;
    } else {
      conversionResult.textContent = `Converted Value in INR: ₹${inrValue}`;
    }
  }

  [currencySelect, sellingInput, productCostInput, freightInput, insuranceInput, customsInput].forEach(elem => {
    if (elem) {
      elem.addEventListener('input', calculate);
      elem.addEventListener('change', calculate);
    }
  });

  calculate();
}

// 2. Interactive Shipment Tracking Simulator
const shipmentDatabase = {
  'EXP-8891': {
    id: 'SHP-2026-8891',
    vessel: 'MSC Gülsün V.412',
    container: 'MEDU-749210-9 (40ft High Cube)',
    origin: 'Mundra (INMUN)',
    destination: 'Dubai Jebel Ali (AEJEA)',
    steps: [
      { title: 'Booking Confirmed & Goods Inspected', desc: 'Port of Loading: Mundra (INMUN) – Customs Cleared', status: 'completed' },
      { title: 'Vessel Departed Origin Port', desc: 'Departure: 21 Aug 2026, 08:30 IST', status: 'completed' },
      { title: 'In Transit – Arabian Sea', desc: 'Current Speed: 18.4 knots | ETA: 27 Aug 2026, 14:00 GST', status: 'current' },
      { title: 'Port of Discharge: Jebel Ali (AEJEA)', desc: 'Awaiting berth arrival & custom bill of entry clearance', status: 'pending' }
    ]
  },
  'IMP-4022': {
    id: 'SHP-2026-4022',
    vessel: 'Lufthansa Cargo LH8220 (Boeing 777F)',
    container: 'AWB #020-89104821',
    origin: 'Frankfurt (FRA)',
    destination: 'Chennai Intl (MAA)',
    steps: [
      { title: 'Air Cargo Picked up at Supplier Warehouse', desc: 'Hamburg Facility &bull; Customs Export Seal Affixed', status: 'completed' },
      { title: 'Flight Departed Frankfurt Cargo Hub', desc: 'Flight LH8220 &bull; Transiting over Gulf Airspace', status: 'completed' },
      { title: 'Arrived at Chennai Air Cargo Terminal', desc: 'Customs Examination & Bill of Entry Verification Underway', status: 'current' },
      { title: 'Final Dispatch to Domestic Warehouse', desc: 'Delivery Scheduled via Bonded Trucking', status: 'pending' }
    ]
  },
  'EXP-9905': {
    id: 'SHP-2026-9905',
    vessel: 'CMA CGM Jacques Saadé',
    container: 'CMAU-918234-1 (20ft Standard Dry)',
    origin: 'JNPT Mumbai (INBOM)',
    destination: 'Rotterdam (NLRTM)',
    steps: [
      { title: 'Factory Stuffing & Container Gate-In', desc: 'JNPT Nhava Sheva Terminal &bull; Verified Gross Mass (VGM) OK', status: 'completed' },
      { title: 'Vessel Loaded & Passed Red Sea Route', desc: 'Passed Suez Canal Transit with Escort', status: 'completed' },
      { title: 'Mediterranean Sea Transit', desc: 'Approaching English Channel &bull; Speed 19.8 knots', status: 'current' },
      { title: 'Port of Rotterdam Berth 4', desc: 'ETA: 30 Aug 2026 &bull; Final Delivery to Euro Warehouse', status: 'pending' }
    ]
  }
};

function initShipmentTracker() {
  const select = document.getElementById('shipmentSelect');
  const trackBtn = document.getElementById('simulateTrackBtn');
  const trackId = document.getElementById('trackId');
  const trackVessel = document.getElementById('trackVessel');
  const trackContainer = document.getElementById('trackContainer');
  const timelineContainer = document.getElementById('trackingTimeline');

  function renderShipment(key) {
    const data = shipmentDatabase[key];
    if (!data) return;

    trackId.textContent = data.id;
    trackVessel.textContent = data.vessel;
    trackContainer.textContent = data.container;

    timelineContainer.innerHTML = '';
    data.steps.forEach(step => {
      const stepDiv = document.createElement('div');
      stepDiv.className = `timeline-step ${step.status}`;
      stepDiv.innerHTML = `
        <h5>${step.title}</h5>
        <p>${step.desc}</p>
      `;
      timelineContainer.appendChild(stepDiv);
    });
  }

  if (trackBtn) {
    trackBtn.addEventListener('click', () => {
      renderShipment(select.value);
      showToast(`Refreshed live telemetry for ${select.value}`);
    });
  }

  if (select) {
    select.addEventListener('change', () => {
      renderShipment(select.value);
    });
  }
}

// 3. Module Tabs Switching
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-content-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetTab);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });
}

// 4. FAQ Accordion Toggle
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// 5. Modals Management (Login, Demo, Doc Preview)
function initModals() {
  const loginModal = document.getElementById('loginModal');
  const demoModal = document.getElementById('demoModal');
  const docModal = document.getElementById('docPreviewModal');

  const openLoginBtn = document.getElementById('openLoginBtn');
  const openDemoBtn = document.getElementById('openDemoBtn');
  const heroDemoBtn = document.getElementById('heroDemoBtn');
  const bottomDemoBtn = document.getElementById('bottomDemoBtn');

  const closeLoginBtn = document.getElementById('closeLoginModal');
  const closeDemoBtn = document.getElementById('closeDemoModal');
  const closeDocBtn = document.getElementById('closeDocModal');

  // Open Handlers
  if (openLoginBtn) openLoginBtn.addEventListener('click', () => loginModal.classList.add('active'));
  if (openDemoBtn) openDemoBtn.addEventListener('click', () => demoModal.classList.add('active'));
  if (heroDemoBtn) heroDemoBtn.addEventListener('click', () => demoModal.classList.add('active'));
  if (bottomDemoBtn) bottomDemoBtn.addEventListener('click', () => demoModal.classList.add('active'));

  // Close Handlers
  if (closeLoginBtn) closeLoginBtn.addEventListener('click', () => loginModal.classList.remove('active'));
  if (closeDemoBtn) closeDemoBtn.addEventListener('click', () => demoModal.classList.remove('active'));
  if (closeDocBtn) closeDocBtn.addEventListener('click', () => docModal.classList.remove('active'));

  // Click outside modal box to close
  [loginModal, demoModal, docModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  });

  // Handle Form Submissions
  const loginForm = document.getElementById('adminLoginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      loginModal.classList.remove('active');
      showToast('Login successful! Redirecting to TradeFlow ERP Command Center...');
    });
  }

  const demoForm = document.getElementById('demoRequestForm');
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      demoModal.classList.remove('active');
      showToast('Thank you! Your personalized ERP walkthrough is scheduled.');
      demoForm.reset();
    });
  }
}

// 6. Document Preview Generator
function openDocPreview(docType) {
  const modal = document.getElementById('docPreviewModal');
  const title = document.getElementById('docModalTitle');
  const subtitle = document.getElementById('docModalSubtitle');
  const content = document.getElementById('docModalContent');

  const docSamples = {
    'Commercial Invoice': {
      sub: 'Official Customs Valuation & Invoice Document',
      html: `
        <div style="border-bottom:1px solid #cbd5e1; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between;">
          <strong>MASTER EXPORT TRADING CORP</strong>
          <span>INVOICE #: EXP-INV-2026-108</span>
        </div>
        <div><strong>Consignee:</strong> EuroStar Global Traders B.V., Amsterdam, Netherlands</div>
        <div><strong>Incoterm:</strong> CIF Rotterdam &bull; <strong>Payment Terms:</strong> Letter of Credit (LC) at Sight</div>
        <div style="margin-top:10px; border-top:1px dashed #cbd5e1; padding-top:8px;">
          <strong>Item:</strong> 100% Cotton Combed Yarn (30s Ne)<br>
          <strong>HS Code:</strong> 5205.12.00 &bull; <strong>Quantity:</strong> 18,000 Kgs<br>
          <strong>Unit Price:</strong> $4.20 / Kg &bull; <strong>Total Value:</strong> $75,600.00 USD
        </div>
      `
    },
    'Packing List': {
      sub: 'Container Manifest, Tare, Gross & Net Weight Specification',
      html: `
        <div style="border-bottom:1px solid #cbd5e1; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between;">
          <strong>EXPORT PACKING LIST & WEIGHT CERTIFICATE</strong>
          <span>PL REF: ME-PL-9921</span>
        </div>
        <div><strong>Vessel Name:</strong> MSC Gülsün V.412 &bull; <strong>Container:</strong> MEDU-749210-9</div>
        <div><strong>Total Packages:</strong> 720 Corrugated Cartons on 18 Pallets</div>
        <div style="margin-top:10px; border-top:1px dashed #cbd5e1; padding-top:8px;">
          <strong>Net Weight:</strong> 18,000.00 KGS<br>
          <strong>Gross Weight:</strong> 18,920.00 KGS<br>
          <strong>Total Volume (CBM):</strong> 42.50 CBM
        </div>
      `
    },
    'Bill of Lading': {
      sub: 'Ocean Carrier Multimodal Transport Document (B/L)',
      html: `
        <div style="border-bottom:1px solid #cbd5e1; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between;">
          <strong>OCEAN BILL OF LADING (NEGOTIABLE)</strong>
          <span>B/L NO: MSCUIN982144</span>
        </div>
        <div><strong>Shipper:</strong> Master Export, Mumbai, India</div>
        <div><strong>Port of Loading:</strong> Mundra Port (INMUN) &bull; <strong>Port of Discharge:</strong> Jebel Ali (AEJEA)</div>
        <div style="margin-top:10px; border-top:1px dashed #cbd5e1; padding-top:8px;">
          <strong>Carrier:</strong> Mediterranean Shipping Company (MSC)<br>
          <strong>Freight Status:</strong> FREIGHT PREPAID<br>
          <strong>Status:</strong> Clean on Board
        </div>
      `
    },
    'Certificate of Origin': {
      sub: 'Chamber of Commerce Preferential Origin Certificate',
      html: `
        <div style="border-bottom:1px solid #cbd5e1; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between;">
          <strong>CERTIFICATE OF ORIGIN (NON-PREFERENTIAL)</strong>
          <span>CERT NO: COO-IND-2026-441</span>
        </div>
        <div><strong>Issuing Authority:</strong> Export Promotion Council & Chamber of Commerce</div>
        <div><strong>Country of Origin:</strong> Republic of India (IND)</div>
        <div style="margin-top:10px; border-top:1px dashed #cbd5e1; padding-top:8px;">
          <strong>Declaration:</strong> The undersigned hereby certifies that the goods mentioned above originated in India.
        </div>
      `
    },
    'Air Waybill': {
      sub: 'IATA Standard Non-Negotiable Air Cargo Waybill',
      html: `
        <div style="border-bottom:1px solid #cbd5e1; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between;">
          <strong>AIR WAYBILL (AWB)</strong>
          <span>AWB NO: 020-89104821</span>
        </div>
        <div><strong>Airline:</strong> Lufthansa Cargo (LH) &bull; <strong>Flight:</strong> LH8220</div>
        <div><strong>Airport of Departure:</strong> Frankfurt (FRA) &bull; <strong>Destination:</strong> Chennai (MAA)</div>
        <div style="margin-top:10px; border-top:1px dashed #cbd5e1; padding-top:8px;">
          <strong>Chargeable Weight:</strong> 1,250.00 KGS &bull; <strong>Rate Class:</strong> General Cargo<br>
          <strong>Handling Info:</strong> Temperature Controlled Pharmaceutical Goods
        </div>
      `
    },
    'Shipping Bill': {
      sub: 'Customs Authority Port Clear Export Declaration',
      html: `
        <div style="border-bottom:1px solid #cbd5e1; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between;">
          <strong>ICEGATE CUSTOMS SHIPPING BILL</strong>
          <span>SB NO: 7729104 / 2026</span>
        </div>
        <div><strong>IEC No:</strong> 0319284729 &bull; <strong>Port Code:</strong> INNSA1 (Nhava Sheva)</div>
        <div><strong>Scheme Code:</strong> Duty Drawback / RoDTEP Scheme Eligible</div>
        <div style="margin-top:10px; border-top:1px dashed #cbd5e1; padding-top:8px;">
          <strong>LEO Status:</strong> Let Export Order Granted &bull; <strong>Officer:</strong> Customs Superintendent
        </div>
      `
    },
    'Insurance Certificate': {
      sub: 'Institute Cargo Clauses (A) Marine Policy',
      html: `
        <div style="border-bottom:1px solid #cbd5e1; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between;">
          <strong>MARINE CARGO INSURANCE POLICY</strong>
          <span>POLICY: MAR-2026-9042</span>
        </div>
        <div><strong>Insured Value:</strong> 110% of CIF Invoice Amount ($83,160 USD)</div>
        <div><strong>Coverage:</strong> All Risks, War & Strikes, Port to Warehouse</div>
        <div style="margin-top:10px; border-top:1px dashed #cbd5e1; padding-top:8px;">
          <strong>Claims Settling Agent:</strong> Lloyd's Agency Network Worldwide
        </div>
      `
    },
    'Proforma Invoice': {
      sub: 'Preliminary Sales Contract for Buyer Import License',
      html: `
        <div style="border-bottom:1px solid #cbd5e1; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between;">
          <strong>PROFORMA INVOICE</strong>
          <span>PI NO: ME-PI-2026-883</span>
        </div>
        <div><strong>Buyer:</strong> Gulf Horizon Supermarkets LLC, Dubai, UAE</div>
        <div><strong>Validity:</strong> 30 Days from Issue Date &bull; <strong>Shipment Window:</strong> 15-20 Days</div>
        <div style="margin-top:10px; border-top:1px dashed #cbd5e1; padding-top:8px;">
          <strong>Terms:</strong> 30% Advance Wire Transfer, 70% against BL copy
        </div>
      `
    }
  };

  const sample = docSamples[docType] || {
    sub: 'TradeFlow ERP Automated Export Document Generator',
    html: `<div><strong>Document:</strong> ${docType}</div><div>Status: Generated & Verified</div>`
  };

  title.textContent = docType;
  subtitle.textContent = sample.sub;
  content.innerHTML = sample.html;
  modal.classList.add('active');
}

// 7. Toast Notification Handler
function showToast(message) {
  const toast = document.getElementById('toastMessage');
  const text = document.getElementById('toastText');
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// 8. Stats Counters Animation
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  function countUp() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const isPercent = counter.textContent.includes('%');
      const isPlus = counter.textContent.includes('+');
      let count = 0;
      const step = Math.max(1, Math.ceil(target / 40));

      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        counter.textContent = `${count}${isPercent ? '%' : isPlus ? '+' : ''}`;
      }, 30);
    });
  }

  window.addEventListener('scroll', () => {
    if (!animated && window.scrollY > 50) {
      countUp();
      animated = true;
    }
  });
}

// 9. Mobile Navigation
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = '#ffffff';
      navLinks.style.padding = '20px';
      navLinks.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      navLinks.style.borderBottom = '1px solid #e2e8f0';
    });
  }
}
