# 🌍 Master Export (TradeFlow ERP)

> **Export & Import Business Management System** — *Connecting Global Markets*

Master Export is a modern, high-performance web ERP designed for single business owners and trading houses to manage their entire international trade lifecycle from a centralized platform.

---

## 🎨 Theme & Design Aesthetics
- **Palette**: Clean Crisp White background (`#ffffff`, `#f8fafc`) paired with Brand Royal Blue (`#0066cc`), Ocean Blue (`#0284c7`), Deep Navy (`#0b1f44`), and Ice Blue accents (`#e0f2fe`).
- **Typography**: Google Fonts (*Plus Jakarta Sans*).
- **Logo**: Integrated authentic Master Export brand emblem with globe, cargo container ship, aircraft, and ME monogram.

---

## 🛠️ Technology Stack
- **Frontend**: React.js (JavaScript), Vite, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express.js REST API, CORS, Dotenv

---

## 📦 Key Features Built (From Requirements Report)

1. **Unified Command Center & KPI Analytics**: Real-time revenue, estimated profit margins, active sea/air shipments, and pending invoices.
2. **Export & Import Dual Order Engine**: Multi-product item lines, auto-calculated CIF/FOB totals, and stage progression.
3. **Interactive Profit & Multi-Currency Engine**: Live interactive calculation tool supporting USD ($), EUR (€), AED (د.إ), GBP (£), CNY (¥), and INR (₹).
   - Formula: `Profit = Selling Revenue - (Product Cost + Ocean/Air Freight + Marine Insurance + Customs Duty)`
4. **Live Shipment & Container Telemetry**: Interactive tracker supporting container and Air Waybill (AWB) milestone routes (e.g. Mundra / JNPT to Dubai / Rotterdam).
5. **Trade Document Vault**: Preview and PDF generator for Commercial Invoices, Export Packing Lists, Bill of Lading (B/L), Certificate of Origin (COO), Air Waybills (AWB), and Shipping Bills.
6. **5-Stage Trade Workflow Pipeline**: Visualizing flow from Partners & Catalog &rarr; Orders &rarr; Multimodal Transit &rarr; Customs Docs &rarr; Bank Remittance.
7. **Interactive Modals**: Admin Portal Login simulation and Request Demo lead capture dialogs with toast feedback.
8. **Deployment & Pricing Models**: Starter Trader, Professional ERP, and Self-Hosted MERN Enterprise tiers.

---

## 🚀 How to Run the Application

### 1. Start the Backend API (Express.js)
```bash
cd server
npm install
npm run dev
# Running on http://localhost:5000
```

### 2. Start the Frontend (React.js + Tailwind CSS)
```bash
cd client
npm install
npm run dev
# Running on http://localhost:5173
```

---

## 📡 Backend REST API Endpoints
- `GET  /api/health` — API health check
- `GET  /api/stats` — Dashboard KPI stats
- `POST /api/profit/calculate` — Real-time multi-currency profit calculation
- `GET  /api/tracking/:id` — Live shipment route lookup (`EXP-8891`, `IMP-4022`, `EXP-9905`)
- `GET  /api/documents/:type` — Trade document preview generation
- `POST /api/auth/login` — Admin portal login
- `POST /api/demo/schedule` — Product walkthrough lead scheduling
