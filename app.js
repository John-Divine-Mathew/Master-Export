// Master Export ERP - Interactive Features

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initFAQ();
  initModals();
  initMobileMenu();
});

// 1. Module Tabs Switching
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

// 2. FAQ Accordion Toggle
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Global modal helper
function openLoginModal() {
  const loginModal = document.getElementById('loginModal');
  if (loginModal) loginModal.classList.add('active');
}

// 3. Modals Management (Login & Doc Preview)
function initModals() {
  const loginModal = document.getElementById('loginModal');
  const docModal = document.getElementById('docPreviewModal');

  const openLoginBtn = document.getElementById('openLoginBtn');
  const openSignInBtn = document.getElementById('openSignInBtn');
  const heroLoginBtn = document.getElementById('heroLoginBtn');

  const closeLoginBtn = document.getElementById('closeLoginModal');
  const closeDocBtn = document.getElementById('closeDocModal');

  // Open Handlers
  if (openLoginBtn) openLoginBtn.addEventListener('click', openLoginModal);
  if (openSignInBtn) openSignInBtn.addEventListener('click', openLoginModal);
  if (heroLoginBtn) heroLoginBtn.addEventListener('click', openLoginModal);

  // Close Handlers
  if (closeLoginBtn) closeLoginBtn.addEventListener('click', () => loginModal.classList.remove('active'));
  if (closeDocBtn) closeDocBtn.addEventListener('click', () => docModal.classList.remove('active'));

  // Click outside modal box to close
  [loginModal, docModal].forEach(modal => {
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
      showToast('Welcome back, Administrator! Accessing Master Export ERP...');
    });
  }
}

// 4. Document Preview Generator
function openDocPreview(docType) {
  const modal = document.getElementById('docPreviewModal');
  const title = document.getElementById('docModalTitle');
  const subtitle = document.getElementById('docModalSubtitle');
  const content = document.getElementById('docModalContent');

  const docSamples = {
    'Commercial Invoice': {
      sub: 'Official Customs Valuation & Invoice Document',
      html: `
        <div style="border-bottom:1px solid #ede9fe; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between; color:#18132b; font-weight:700;">
          <strong>MASTER EXPORT TRADING CORP</strong>
          <span style="color:#7c3aed;">REF: EXP-INV-2026-108</span>
        </div>
        <div><strong>Consignee:</strong> EuroStar Global Traders B.V., Amsterdam, Netherlands</div>
        <div><strong>Incoterm:</strong> CIF Rotterdam &bull; <strong>Payment Terms:</strong> Letter of Credit (LC) at Sight</div>
        <div style="margin-top:10px; border-top:1px dashed #cbd5e1; padding-top:8px;">
          <strong>Item:</strong> 100% Cotton Combed Yarn (30s Ne)<br>
          <strong>HS Code:</strong> 5205.12.00 &bull; <strong>Quantity:</strong> 18,000 Kgs<br>
          <strong>Unit Price:</strong> $4.20 / Kg &bull; <strong style="color:#18132b;">Total Value: $75,600.00 USD</strong>
        </div>
      `
    },
    'Packing List': {
      sub: 'Container Manifest, Tare, Gross & Net Weight Specification',
      html: `
        <div style="border-bottom:1px solid #ede9fe; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between; color:#18132b; font-weight:700;">
          <strong>EXPORT PACKING LIST & WEIGHT CERTIFICATE</strong>
          <span style="color:#7c3aed;">REF: ME-PL-9921</span>
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
        <div style="border-bottom:1px solid #ede9fe; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between; color:#18132b; font-weight:700;">
          <strong>OCEAN BILL OF LADING (NEGOTIABLE)</strong>
          <span style="color:#7c3aed;">REF: MSCUIN982144</span>
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
        <div style="border-bottom:1px solid #ede9fe; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between; color:#18132b; font-weight:700;">
          <strong>CERTIFICATE OF ORIGIN (NON-PREFERENTIAL)</strong>
          <span style="color:#7c3aed;">REF: COO-IND-2026-441</span>
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
        <div style="border-bottom:1px solid #ede9fe; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between; color:#18132b; font-weight:700;">
          <strong>AIR WAYBILL (AWB)</strong>
          <span style="color:#7c3aed;">REF: 020-89104821</span>
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
        <div style="border-bottom:1px solid #ede9fe; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between; color:#18132b; font-weight:700;">
          <strong>ICEGATE CUSTOMS SHIPPING BILL</strong>
          <span style="color:#7c3aed;">REF: 7729104 / 2026</span>
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
        <div style="border-bottom:1px solid #ede9fe; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between; color:#18132b; font-weight:700;">
          <strong>MARINE CARGO INSURANCE POLICY</strong>
          <span style="color:#7c3aed;">REF: MAR-2026-9042</span>
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
        <div style="border-bottom:1px solid #ede9fe; padding-bottom:8px; margin-bottom:10px; display:flex; justify-content:space-between; color:#18132b; font-weight:700;">
          <strong>PROFORMA INVOICE</strong>
          <span style="color:#7c3aed;">REF: ME-PI-2026-883</span>
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
    sub: 'Master Export ERP Automated Trade Document Generator',
    html: `<div><strong>Document:</strong> ${docType}</div><div>Status: Generated & Verified</div>`
  };

  if (title) title.textContent = docType;
  if (subtitle) subtitle.textContent = sample.sub;
  if (content) content.innerHTML = sample.html;
  if (modal) modal.classList.add('active');
}

// 5. Toast Notification Handler
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

// 6. Mobile Navigation
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
      navLinks.style.boxShadow = '0 10px 25px rgba(124, 58, 237, 0.1)';
      navLinks.style.borderBottom = '1px solid #ede9fe';
    });
  }
}
