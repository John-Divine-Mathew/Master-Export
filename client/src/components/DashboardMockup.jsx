import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Building2,
  Package,
  Boxes,
  ArrowUpRight,
  ArrowDownLeft,
  Truck,
  FileText,
  Receipt,
  CreditCard,
  Wallet,
  BarChart3,
  TrendingUp,
  Settings,
  Search,
  Bell,
  MessageSquare,
  ChevronDown,
  Calendar,
  CheckCircle2,
  Ship,
  Anchor,
  Droplets,
  Layers,
  Box,
  Menu,
  ArrowRight
} from 'lucide-react';

const STATS_DATA = [
  {
    id: 'export-orders',
    title: 'Export Orders',
    value: '26',
    change: '+12% vs last month',
    isPositive: true,
    icon: ArrowUpRight,
    iconBg: 'bg-[#EBF3FC]',
    iconColor: 'text-[#004EAB]'
  },
  {
    id: 'import-orders',
    title: 'Import Orders',
    value: '18',
    change: '+8% vs last month',
    isPositive: true,
    icon: ArrowDownLeft,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'active-shipments',
    title: 'Active Shipments',
    value: '14',
    change: '+7% vs last month',
    isPositive: true,
    icon: Truck,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  },
  {
    id: 'completed-shipments',
    title: 'Completed Shipments',
    value: '32',
    change: '+15% vs last month',
    isPositive: true,
    icon: CheckCircle2,
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600'
  },
  {
    id: 'revenue',
    title: 'Revenue',
    value: '₹1,48,250',
    change: '+18% vs last month',
    isPositive: true,
    icon: Receipt,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600'
  },
  {
    id: 'expenses',
    title: 'Expenses',
    value: '₹63,480',
    change: '-6% vs last month',
    isPositive: false,
    icon: Wallet,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600'
  },
  {
    id: 'estimated-profit',
    title: 'Estimated Profit',
    value: '₹84,770',
    change: '+28% vs last month',
    isPositive: true,
    icon: TrendingUp,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  }
];

const INITIAL_ORDERS = [
  { id: 'EXP-10026', type: 'Export', customer: 'ABC Traders (USA)', amount: '₹45,000', status: 'Processing', statusColor: 'bg-amber-100 text-amber-800 border-amber-200' },
  { id: 'IMP-10018', type: 'Import', customer: 'Global Supplies (UAE)', amount: '₹78,500', status: 'In Transit', statusColor: 'bg-blue-100 text-[#004EAB] border-blue-200' },
  { id: 'EXP-10025', type: 'Export', customer: 'Sunrise Exports (UK)', amount: '₹62,750', status: 'Completed', statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { id: 'IMP-10017', type: 'Import', customer: 'Prime Goods (SG)', amount: '₹41,200', status: 'Pending', statusColor: 'bg-rose-100 text-rose-800 border-rose-200' },
  { id: 'EXP-10024', type: 'Export', customer: 'Oceanic Imports (CA)', amount: '₹90,400', status: 'Processing', statusColor: 'bg-amber-100 text-amber-800 border-amber-200' }
];

const ACTIVE_SHIPMENTS = [
  {
    title: 'Arrived – Singapore Port',
    tag: 'EXP-10024 • May 22, 2025',
    icon: Ship,
    iconBg: 'bg-emerald-500',
    status: 'Arrived'
  },
  {
    title: 'In Transit – Dubai',
    tag: 'IMP-10018 • May 21, 2025',
    icon: Truck,
    iconBg: 'bg-[#004EAB]',
    status: 'In Transit'
  },
  {
    title: 'Port Clearance – New York',
    tag: 'EXP-10026 • May 20, 2025',
    icon: Anchor,
    iconBg: 'bg-amber-500',
    status: 'Customs'
  },
  {
    title: 'Preparing Shipment – Rotterdam',
    tag: 'IMP-10017 • May 18, 2025',
    icon: Box,
    iconBg: 'bg-indigo-600',
    status: 'Origin'
  }
];

const LOW_STOCK_PRODUCTS = [
  { name: 'Copper Wire', sku: 'CPW-005', stock: 12, minStock: 25, status: 'Low', icon: Box, iconColor: 'text-[#004EAB] bg-[#EBF3FC]' },
  { name: 'Marine Engine Oil', sku: 'MEO-002', stock: 15, minStock: 30, status: 'Low', icon: Droplets, iconColor: 'text-sky-600 bg-sky-50' },
  { name: 'Aluminum Sheets', sku: 'ALS-003', stock: 18, minStock: 40, status: 'Low', icon: Layers, iconColor: 'text-indigo-600 bg-indigo-50' },
  { name: 'Shipping Boxes', sku: 'SBX-004', stock: 25, minStock: 60, status: 'Watch', icon: Box, iconColor: 'text-amber-600 bg-amber-50' }
];

const SIDEBAR_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, active: true },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'suppliers', label: 'Suppliers', icon: Building2 },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'inventory', label: 'Inventory', icon: Boxes },
  { id: 'export-orders', label: 'Export Orders', icon: ArrowUpRight },
  { id: 'import-orders', label: 'Import Orders', icon: ArrowDownLeft },
  { id: 'shipments', label: 'Shipments', icon: Truck },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'invoices', label: 'Invoices', icon: Receipt },
  { id: 'payments', label: 'Payments', icon: CreditCard },
  { id: 'expenses', label: 'Expenses', icon: Wallet },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'profit-analysis', label: 'Profit Analysis', icon: TrendingUp },
  { id: 'settings', label: 'Settings', icon: Settings }
];

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeOrderFilter, setActiveOrderFilter] = useState('All');

  // Filter orders by search query & filter pill
  const filteredOrders = INITIAL_ORDERS.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeOrderFilter === 'All') return matchesSearch;
    return matchesSearch && order.type.toLowerCase() === activeOrderFilter.toLowerCase();
  });

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 scroll-mt-20 border-b border-slate-200/60 relative overflow-hidden" id="dashboard">
      
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#004EAB]/10 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Clean, with Smooth Scroll Reveal) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2 reveal-init">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Centralized Business & Operations Dashboard
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            Live real-time operational telemetry—track active container vessels, monitor multi-currency export-import orders, manage inventory thresholds, and forecast net profit margins from a single screen.
          </p>
        </div>

        {/* Compact Mac OS Styled Dashboard Mockup Window Frame with Smooth Reveal */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden transition-all duration-300 reveal-init stagger-1 hover:shadow-2xl">
          
          {/* Window Top Title Bar (Mac OS Dots & Controls) */}
          <div className="bg-slate-900 text-white px-3.5 sm:px-5 py-2.5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-[11px] font-semibold text-slate-300 ml-2.5 hidden sm:inline-flex items-center gap-1.5">
                <Ship className="w-3.5 h-3.5 text-[#8FBDF3]" />
                <span>TradeFlow ERP — Operations Command Center</span>
              </span>
            </div>

            {/* Quick Interactive Switchers */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-[10px] bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live Feed</span>
              </div>
              <div className="text-[11px] font-medium text-slate-400 hidden md:block">
                v2.6 Enterprise
              </div>
            </div>
          </div>

          {/* MAIN ERP INTERFACE CONTAINER (Compact Layout) */}
          <div className="flex flex-col lg:flex-row bg-[#F8FAFC] min-h-[580px] relative text-xs">
            
            {/* 1. COMPACT LEFT SIDEBAR */}
            <aside className="w-full lg:w-52 bg-white border-r border-slate-200/80 flex flex-col justify-between shrink-0 p-3.5 sm:p-4">
              
              {/* Logo & Brand Header */}
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#004EAB] text-white flex items-center justify-center shadow-sm shadow-[#004EAB]/25 shrink-0">
                      <Ship className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xs text-slate-900 tracking-tight leading-tight flex items-center gap-1">
                        <span>TradeFlow</span>
                        <span className="text-[#004EAB]">ERP</span>
                      </div>
                      <div className="text-[9px] text-slate-500 font-medium">Export & Import System</div>
                    </div>
                  </div>

                  {/* Mobile Sidebar Toggle Button */}
                  <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden p-1 rounded-lg text-slate-500 hover:bg-slate-100"
                    aria-label="Toggle ERP menu"
                  >
                    <Menu className="w-4 h-4" />
                  </button>
                </div>

                {/* Sidebar Navigation Items */}
                <nav className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block space-y-0.5 max-h-[320px] lg:max-h-[440px] overflow-y-auto pr-1`}>
                  {SIDEBAR_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setIsSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all text-left ${
                          isActive
                            ? 'bg-[#004EAB] text-white shadow-xs'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Promo Card */}
              <div className="hidden lg:block mt-4 pt-3 border-t border-slate-100">
                <div className="bg-gradient-to-br from-[#000F2E] to-[#002266] text-white p-3 rounded-xl relative overflow-hidden shadow-xs">
                  <div className="relative z-10 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center text-[#8FBDF3] shrink-0 border border-white/20">
                      <Ship className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white">TradeFlow ERP</div>
                      <div className="text-[9px] text-[#8FBDF3] font-medium leading-tight">Smart Business. Global Reach.</div>
                    </div>
                  </div>
                </div>
              </div>

            </aside>

            {/* 2. MAIN DASHBOARD CONTENT AREA */}
            <main className="flex-1 flex flex-col overflow-hidden bg-[#F8FAFC]">
              
              {/* TOP COMPACT HEADER BAR */}
              <header className="bg-white border-b border-slate-200/80 px-3.5 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-3">
                
                {/* Search Bar */}
                <div className="relative flex-1 min-w-[180px] max-w-sm">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search customers, orders, shipments..."
                    className="w-full pl-8 pr-3 py-1.5 text-[11px] bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#004EAB] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-xs text-slate-400 hover:text-slate-600"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Header Right Actions */}
                <div className="flex items-center gap-2.5 sm:gap-3 ml-auto">
                  
                  {/* Notifications */}
                  <button className="relative p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                    <Bell className="w-3.5 h-3.5" />
                    <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-rose-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border border-white">
                      3
                    </span>
                  </button>

                  {/* Messages */}
                  <button className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors hidden sm:flex">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>

                  {/* Divider */}
                  <div className="h-5 w-px bg-slate-200 hidden sm:block" />

                  {/* Admin User Profile */}
                  <div className="flex items-center gap-2 pl-0.5 cursor-pointer group">
                    <div className="w-7 h-7 rounded-full bg-slate-800 border border-[#BCD8F8] flex items-center justify-center text-white text-[10px] font-black shadow-2xs">
                      AD
                    </div>
                    <div className="hidden sm:block text-left">
                      <div className="text-[11px] font-bold text-slate-900 group-hover:text-[#004EAB] transition-colors leading-tight">Admin</div>
                      <div className="text-[9px] text-slate-500 leading-tight">Administrator</div>
                    </div>
                    <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-600" />
                  </div>

                </div>
              </header>

              {/* DASHBOARD INNER BODY */}
              <div className="p-3.5 sm:p-5 space-y-4 sm:space-y-5 overflow-y-auto">
                
                {/* GREETING & DATE FILTER */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                      <span>Good morning, Admin!</span>
                      <span className="inline-block animate-bounce">👋</span>
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">Here's your business overview for today.</p>
                  </div>

                  {/* Date Pill Dropdown */}
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-[11px] font-semibold text-slate-700 shadow-2xs w-fit">
                    <Calendar className="w-3.5 h-3.5 text-[#004EAB]" />
                    <span>May 24, 2025</span>
                    <span className="text-slate-400 font-normal">Friday</span>
                    <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5" />
                  </div>
                </div>

                {/* 7 TOP KPI SUMMARY CARDS (Slightly more compact) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2.5 sm:gap-3">
                  {STATS_DATA.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.id}
                        className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-[#BCD8F8] transition-all group flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between gap-1.5 mb-2">
                          <div className={`w-7 h-7 rounded-lg ${stat.iconBg} ${stat.iconColor} flex items-center justify-center shrink-0`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[9px] font-bold text-slate-500 line-clamp-1 text-right">
                            {stat.title}
                          </span>
                        </div>

                        <div>
                          <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-[#004EAB] transition-colors">
                            {stat.value}
                          </div>
                          <div className={`text-[9px] font-semibold mt-0.5 flex items-center gap-1 ${
                            stat.isPositive ? 'text-emerald-600' : 'text-rose-600'
                          }`}>
                            <span>{stat.change}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 3 MAIN BOTTOM WIDGETS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
                  
                  {/* WIDGET 1: RECENT ORDERS (5 COLS) */}
                  <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/80 p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">Recent Orders</h4>
                          <span className="text-[9px] font-bold bg-[#EBF3FC] text-[#004EAB] px-1.5 py-0.2 rounded-full">
                            {filteredOrders.length}
                          </span>
                        </div>
                        <button 
                          onClick={() => setActiveOrderFilter(activeOrderFilter === 'All' ? 'Export' : activeOrderFilter === 'Export' ? 'Import' : 'All')}
                          className="text-[11px] font-bold text-[#004EAB] hover:underline"
                        >
                          View All
                        </button>
                      </div>

                      {/* Orders Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-[11px]">
                          <thead>
                            <tr className="text-[9px] text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
                              <th className="pb-1.5 font-bold">Order No.</th>
                              <th className="pb-1.5 font-bold">Type</th>
                              <th className="pb-1.5 font-bold">Customer / Supplier</th>
                              <th className="pb-1.5 font-bold text-right">Amount</th>
                              <th className="pb-1.5 font-bold text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {filteredOrders.map((order) => (
                              <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                                <td className="py-2 font-bold text-slate-800 text-[10px] whitespace-nowrap">{order.id}</td>
                                <td className="py-2 text-[10px] text-slate-600">{order.type}</td>
                                <td className="py-2 font-medium text-slate-700 text-[10px] truncate max-w-[100px]">{order.customer}</td>
                                <td className="py-2 font-bold text-slate-900 text-[10px] text-right whitespace-nowrap">{order.amount}</td>
                                <td className="py-2 text-right whitespace-nowrap">
                                  <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-bold border ${order.statusColor}`}>
                                    {order.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="pt-3 mt-1.5 border-t border-slate-100 flex items-center justify-between">
                      <a href="#contact" className="text-[11px] font-bold text-[#004EAB] hover:text-[#003E8A] inline-flex items-center gap-1 group">
                        <span>View All Orders</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                      <span className="text-[9px] text-slate-400 font-medium">Real-time sync active</span>
                    </div>
                  </div>

                  {/* WIDGET 2: ACTIVE SHIPMENTS (3.5 COLS) */}
                  <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200/80 p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">Active Shipments</h4>
                        <a href="#contact" className="text-[11px] font-bold text-[#004EAB] hover:underline">
                          View All
                        </a>
                      </div>

                      {/* Vertical Shipment Milestone Timeline */}
                      <div className="space-y-3.5 relative before:absolute before:left-3 before:top-2.5 before:bottom-2.5 before:w-0.5 before:bg-slate-200">
                        {ACTIVE_SHIPMENTS.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <div key={idx} className="relative flex items-start gap-2.5 pl-0 group cursor-pointer">
                              <div className={`w-6 h-6 rounded-full ${item.iconBg} text-white flex items-center justify-center shrink-0 z-10 shadow-2xs ring-3 ring-white`}>
                                <Icon className="w-3 h-3" />
                              </div>
                              <div className="pt-0.5">
                                <div className="text-[11px] font-bold text-slate-800 group-hover:text-[#004EAB] transition-colors leading-tight">
                                  {item.title}
                                </div>
                                <div className="text-[9px] text-slate-500 font-medium mt-0.5">
                                  {item.tag}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-2.5 mt-2.5 border-t border-slate-100 text-[9px] text-slate-400 flex items-center justify-between">
                      <span>AIS Vessel Tracking</span>
                      <span className="text-emerald-600 font-semibold">Live GPS</span>
                    </div>
                  </div>

                  {/* WIDGET 3: LOW STOCK PRODUCTS (3.5 COLS) */}
                  <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200/80 p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">Low Stock Products</h4>
                        <a href="#contact" className="text-[11px] font-bold text-[#004EAB] hover:underline">
                          View All
                        </a>
                      </div>

                      {/* Low Stock Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-[11px]">
                          <thead>
                            <tr className="text-[9px] text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
                              <th className="pb-1.5 font-bold">Product Name</th>
                              <th className="pb-1.5 font-bold">SKU</th>
                              <th className="pb-1.5 font-bold text-center">Stock</th>
                              <th className="pb-1.5 font-bold text-center">Min.</th>
                              <th className="pb-1.5 font-bold text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {LOW_STOCK_PRODUCTS.map((prod, idx) => {
                              const Icon = prod.icon;
                              return (
                                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                  <td className="py-2">
                                    <div className="flex items-center gap-1.5">
                                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${prod.iconColor}`}>
                                        <Icon className="w-2.5 h-2.5" />
                                      </div>
                                      <span className="font-bold text-slate-800 text-[10px] truncate max-w-[85px]">
                                        {prod.name}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-2 text-[9px] text-slate-500 font-mono">{prod.sku}</td>
                                  <td className="py-2 font-bold text-rose-600 text-[10px] text-center">{prod.stock}</td>
                                  <td className="py-2 text-[10px] text-slate-500 text-center">{prod.minStock}</td>
                                  <td className="py-2 text-right">
                                    <span className={`inline-block px-1.5 py-0.2 rounded text-[8px] font-bold ${
                                      prod.status === 'Low'
                                        ? 'bg-rose-100 text-rose-700 border border-rose-200'
                                        : 'bg-amber-100 text-amber-700 border border-amber-200'
                                    }`}>
                                      {prod.status}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400">
                      <span>Warehouse Threshold Alerts</span>
                      <span className="text-[#004EAB] font-bold">Auto-Reorder ON</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* BOTTOM STATUS FOOTER BAR */}
              <footer className="bg-white border-t border-slate-200 px-3.5 sm:px-5 py-2 text-[10px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-1.5 mt-auto">
                <div>&copy; 2025 TradeFlow ERP. All rights reserved.</div>
                <div className="text-slate-600 font-medium">Export & Import Business Management System</div>
                <div className="flex items-center gap-1 font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Online</span>
                </div>
              </footer>

            </main>

          </div>

        </div>

      </div>
    </section>
  );
}
