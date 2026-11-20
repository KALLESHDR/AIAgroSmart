import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  MapPin, 
  ShieldCheck, 
  ArrowLeft, 
  Filter, 
  Check, 
  SlidersHorizontal 
} from 'lucide-react';

const fullCatalogItems = [
  {
    id: "prod-1",
    name: "Nashik Red Hybrid Tomatoes (ಟೊಮೇಟೊ / टमाटर)",
    variety: "Abhinav 1057 (Grade-A Firm)",
    category: "Vegetables",
    farmer: "Rameshwar Kisan Farm",
    location: "Nashik, Maharashtra",
    distance: "3.4 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/fresh-produce.jpg",
    pricePerKg: 21,
    govMandiPrice: 22.5,
    unit: "kg",
    availableStock: "120 Crates (2,400 kg)",
    harvestDate: "Harvested Today (05:30 AM)",
    verifiedBadge: "PM-KISAN Verified",
    dealTag: "Farm Gate Direct",
    tags: ["Dew Fresh", "Firm Pulp", "Traceable"]
  },
  {
    id: "prod-2",
    name: "Sharbati Golden Wheat (ಗೋಧಿ / गेहूं)",
    variety: "Lokwan C-306 Sun-Dried High Glucan",
    category: "Grains",
    farmer: "Harpreet Singh Agro Collectives",
    location: "Khanna APMC Belt, Punjab",
    distance: "8.2 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/hero-farm.jpg",
    pricePerKg: 24.8,
    govMandiPrice: 25.2,
    unit: "kg",
    availableStock: "350 Quintals (35,000 kg)",
    harvestDate: "Season Buffer Stock",
    verifiedBadge: "e-NAM Reg #8491",
    dealTag: "Grade-A Milling",
    tags: ["Moisture 11%", "Double Cleaned", "Bulk Silo"]
  },
  {
    id: "prod-3",
    name: "Lasalgaon Red Special Onions (ಈರುಳ್ಳಿ / प्याज)",
    variety: "Garwa Medium Bulb 45-55mm",
    category: "Vegetables",
    farmer: "Bhaurao Patil FPO Collectives",
    location: "Lasalgaon, Maharashtra",
    distance: "6.8 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/fresh-produce.jpg",
    pricePerKg: 19.5,
    govMandiPrice: 20.8,
    unit: "kg",
    availableStock: "800 Bags (40 Metric Tons)",
    harvestDate: "Cured & Graded 2 days ago",
    verifiedBadge: "Agmarknet Verified",
    dealTag: "Export Grade",
    tags: ["Low Moisture", "Zero Sprouting", "Cold Stored"]
  },
  {
    id: "prod-4",
    name: "Basmati Paddy 1121 Extra Long (ಬಾಸುಮತಿ / बासमती धान)",
    variety: "Pusa 1121 Aromatic Grain (8.4mm)",
    category: "Grains",
    farmer: "Karnal Precision Rice FPO",
    location: "Karnal, Haryana",
    distance: "12.5 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/hero-farm.jpg",
    pricePerKg: 38.5,
    govMandiPrice: 39.8,
    unit: "kg",
    availableStock: "500 Bags (25,000 kg)",
    harvestDate: "Aged for 6 Months",
    verifiedBadge: "e-NAM Synced",
    dealTag: "Premium Long Grain",
    tags: ["Aged Harvest", "Aromatic", "Moisture 10.5%"]
  },
  {
    id: "prod-5",
    name: "Malwa Yellow Gold Soybean (ಸೋಯಾಬೀನ್ / सोयाबीन)",
    variety: "JS-9560 Non-GMO Oilseed",
    category: "Pulses",
    farmer: "Shivraj Patidar Krishi Kendra",
    location: "Indore Mandi Hub, Madhya Pradesh",
    distance: "14.2 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/crop-soil-ai.jpg",
    pricePerKg: 48.9,
    govMandiPrice: 50.2,
    unit: "kg",
    availableStock: "280 Quintals (28,000 kg)",
    harvestDate: "Machine Cleaned Lot",
    verifiedBadge: "APMC Certified",
    dealTag: "High Oil Content",
    tags: ["Non-GMO", "Oil Yield 19.5%", "Zero Admixture"]
  },
  {
    id: "prod-6",
    name: "Warangal Medium-Staple Cotton (ಹತ್ತಿ / कपास)",
    variety: "BT Cotton Rasi-659 (29mm staple)",
    category: "Cash Crops",
    farmer: "Telangana Rythu Sangham FPO",
    location: "Warangal, Telangana",
    distance: "9.6 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/hero-farm.jpg",
    pricePerKg: 71.2,
    govMandiPrice: 72.5,
    unit: "kg",
    availableStock: "150 Bales (25,500 kg)",
    harvestDate: "First Flush Picking",
    verifiedBadge: "CCI Benchmark Passed",
    dealTag: "Ginned & Baled",
    tags: ["Micronaire 3.8", "Strength 29.5 GPT", "Trash <2%"]
  },
  {
    id: "prod-7",
    name: "Salem Lakadong High-Curcumin Turmeric (ಅರಿಶಿನ / हल्दी)",
    variety: "Salem Organically Grown (Curcumin > 5.2%)",
    category: "Spices",
    farmer: "Cauvery Organic Farmers Society",
    location: "Salem, Tamil Nadu",
    distance: "18.3 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/fresh-produce.jpg",
    pricePerKg: 145.0,
    govMandiPrice: 152.0,
    unit: "kg",
    availableStock: "65 Quintals (6,500 kg)",
    harvestDate: "Sun-Cured Fingers",
    verifiedBadge: "Organic India Certified",
    dealTag: "Export Grade Spice",
    tags: ["Curcumin 5.4%", "Lab Tested", "No Artificial Color"]
  },
  {
    id: "prod-8",
    name: "Guntur Sannam Hot Red Chillies (ಒಣ ಮೆಣಸಿನಕಾಯಿ / लाल मिर्च)",
    variety: "Guntur S4 / 334 Sun-Dried Bright Red",
    category: "Spices",
    farmer: "Andhra Rythu Samakya",
    location: "Guntur APMC Yard, Andhra Pradesh",
    distance: "16.1 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/fresh-produce.jpg",
    pricePerKg: 198.0,
    govMandiPrice: 208.0,
    unit: "kg",
    availableStock: "90 Bags (4,500 kg)",
    harvestDate: "Cold Storage Stored",
    verifiedBadge: "Spices Board Reg",
    dealTag: "High SHU Pungency",
    tags: ["Deep Red Color", "Capsaicin Rich", "Stemless Option"]
  }
];

export default function BrowseProducePage({ onBackToLanding, onOpenMapScreen }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [orderModalItem, setOrderModalItem] = useState(null);
  const [orderQty, setOrderQty] = useState(500);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const categories = ["All", "Vegetables", "Grains", "Pulses", "Cash Crops", "Spices"];

  const filteredItems = fullCatalogItems.filter(item => {
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.pricePerKg - b.pricePerKg;
    if (sortBy === "price-high") return b.pricePerKg - a.pricePerKg;
    if (sortBy === "savings") {
      const saveA = (a.govMandiPrice - a.pricePerKg) / a.govMandiPrice;
      const saveB = (b.govMandiPrice - b.pricePerKg) / b.govMandiPrice;
      return saveB - saveA;
    }
    return 0;
  });

  const handleOpenOrderModal = (item) => {
    setOrderModalItem(item);
    setOrderQty(item.category === "Vegetables" ? 200 : 500);
    setOrderSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] text-slate-800 flex flex-col font-sans">
      
      {/* 1. Header Breadcrumb & Top Bar */}
      <section className="bg-white border-b border-emerald-100 py-4 px-4 sm:px-6 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLanding}
              className="p-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition flex items-center gap-1.5 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <div className="h-4 w-px bg-slate-200" />

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="hover:text-slate-800 cursor-pointer" onClick={onBackToLanding}>AIAgriCentral</span>
              <span>/</span>
              <span>Marketplace</span>
              <span>/</span>
              <span className="font-bold text-emerald-800">Browse Produce Catalog</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenMapScreen}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 border border-emerald-200"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>View On 3D Map</span>
            </button>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
              e-NAM Synced Direct Gate
            </span>
          </div>

        </div>
      </section>

      {/* 2. Visual Banner Header with Real Produce Imagery */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-900 text-white overflow-hidden py-10 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img src="/images/fresh-produce.jpg" alt="Produce background" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-700/80 text-emerald-100 border border-emerald-500/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Direct Farm-to-Buyer Marketplace</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Browse Fresh Farm Harvests & Direct Lots
            </h1>
            <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
              Cut out commission agents. Purchase directly from verified Indian cultivators and FPOs at transparent Government benchmark prices with instant digital contracting.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 shrink-0">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-center">
              <span className="block text-xl font-black text-white">480+</span>
              <span className="text-[11px] text-emerald-200">Synced Mandis</span>
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-center">
              <span className="block text-xl font-black text-amber-300">0%</span>
              <span className="text-[11px] text-emerald-200">Middleman Fee</span>
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-center col-span-2 sm:col-span-1">
              <span className="block text-xl font-black text-emerald-300">24h</span>
              <span className="text-[11px] text-emerald-200">Bank Transfer</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-6 space-y-4">
        
        {/* Search Input & Sort Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-xs">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search produce (e.g. Tomato, Wheat, Nashik, Sharbati)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-1.5 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-hidden focus:border-emerald-500"
            >
              <option value="recommended">Recommended (Best Value)</option>
              <option value="savings">Highest Savings vs Mandi</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <Filter className="w-4 h-4 text-emerald-700 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto whitespace-nowrap">
            Showing <strong>{filteredItems.length}</strong> verified lots
          </span>
        </div>

        {/* 4. Produce Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
          {filteredItems.map((item) => {
            const savingsAmt = (item.govMandiPrice - item.pricePerKg).toFixed(1);
            const savingsPct = Math.round(((item.govMandiPrice - item.pricePerKg) / item.govMandiPrice) * 100);

            return (
              <div 
                key={item.id}
                className="bg-white rounded-3xl border border-emerald-100 hover:border-emerald-300 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden group"
              >
                {/* Image Banner */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img 
                    src={item.productImage} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/95 text-emerald-800 shadow-xs backdrop-blur-xs flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>{item.verifiedBadge}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-amber-400 text-amber-950 shadow-xs">
                      Save {savingsPct}%
                    </span>
                  </div>

                  {/* Bottom Image Overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between">
                    <span className="text-[11px] font-bold truncate">{item.variety}</span>
                    <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-amber-300" />
                      <span>{item.distance}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition line-clamp-1">
                      {item.name}
                    </h3>
                    
                    {/* Farmer Lockup */}
                    <div className="flex items-center gap-2 mt-2">
                      <img 
                        src={item.farmerPhoto} 
                        alt={item.farmer} 
                        className="w-7 h-7 rounded-full object-cover border border-emerald-200" 
                      />
                      <div className="truncate">
                        <span className="text-xs font-semibold text-slate-700 block truncate">{item.farmer}</span>
                        <span className="text-[10px] text-slate-400 block truncate">{item.location}</span>
                      </div>
                    </div>

                    {/* Stock & Harvest */}
                    <div className="mt-3 p-2 bg-slate-50 rounded-xl space-y-1 text-[11px]">
                      <div className="flex justify-between text-slate-600">
                        <span>Available Lot:</span>
                        <strong className="text-slate-800">{item.availableStock}</strong>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Harvest/Pack:</span>
                        <span>{item.harvestDate}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {item.tags.map((t, i) => (
                        <span key={i} className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-black text-emerald-700">₹{item.pricePerKg}</span>
                        <span className="text-[10px] text-slate-500">/{item.unit}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 line-through">
                        Gov Mandi: ₹{item.govMandiPrice}
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold">
                        Save ₹{savingsAmt}/kg
                      </span>
                    </div>

                    <button
                      onClick={() => handleOpenOrderModal(item)}
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-600/20 active:scale-95 transition"
                    >
                      Direct Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Direct Order Modal */}
      {orderModalItem && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-emerald-100 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
                  Direct Farm Settlement
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-1">
                  Place Direct Order / RFQ
                </h3>
              </div>
              <button
                onClick={() => setOrderModalItem(null)}
                className="text-slate-400 hover:text-slate-700 p-1 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Item Card Preview */}
            <div className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <img 
                src={orderModalItem.productImage} 
                alt={orderModalItem.name} 
                className="w-14 h-14 rounded-xl object-cover shrink-0" 
              />
              <div className="truncate">
                <strong className="text-xs text-slate-900 block truncate">{orderModalItem.name}</strong>
                <span className="text-[11px] text-slate-600 block">Sold by: {orderModalItem.farmer}</span>
                <span className="text-[10px] text-emerald-700 font-bold block">{orderModalItem.dealTag} • {orderModalItem.location}</span>
              </div>
            </div>

            {!orderSubmitted ? (
              <div className="space-y-4">
                {/* Quantity Selector */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">Quantity Needed (kg):</span>
                    <span className="font-black text-emerald-800">{orderQty} kg ({Math.round(orderQty / 100)} Quintals)</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={orderQty}
                    onChange={(e) => setOrderQty(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Min: 50 kg</span>
                    <span>Max Lot: {orderModalItem.availableStock}</span>
                  </div>
                </div>

                {/* Calculation Breakdown */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Farm Gate Price ({orderQty} kg @ ₹{orderModalItem.pricePerKg}/kg):</span>
                    <strong>₹{(orderQty * orderModalItem.pricePerKg).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Gov Mandi APMC Benchmark:</span>
                    <span className="line-through">₹{(orderQty * orderModalItem.govMandiPrice).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-bold pt-1 border-t border-slate-200">
                    <span>Total Direct Buyer Savings:</span>
                    <span>₹{((orderModalItem.govMandiPrice - orderModalItem.pricePerKg) * orderQty).toLocaleString()}</span>
                  </div>
                </div>

                {/* Buyer Contact Details Form */}
                <div className="space-y-2 text-xs">
                  <label className="block font-bold text-slate-700">Delivery Address / Destination Mandi:</label>
                  <input 
                    type="text" 
                    placeholder="Enter city, district or warehouse delivery location" 
                    defaultValue="Warehouse Hub B, Bangalore Rural"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500" 
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setOrderModalItem(null)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setOrderSubmitted(true)}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-md shadow-emerald-600/20 transition"
                  >
                    Confirm & Send RFQ
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-black text-slate-900">Direct Purchase Order Dispatched!</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Farmer <strong>{orderModalItem.farmer}</strong> has received your contract request for {orderQty} kg. You will receive an SMS and WhatsApp invoice shortly.
                </p>
                <button
                  onClick={() => setOrderModalItem(null)}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
