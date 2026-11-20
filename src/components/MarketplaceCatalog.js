import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  Check, 
  ArrowRight, 
  PhoneCall, 
  Scale 
} from 'lucide-react';

export const sampleCommodityListings = [
  {
    id: "prod-1",
    name: "Nashik Red Hybrid Tomatoes (ಟೊಮೇಟೊ)",
    variety: "Abhinav 1057 (Grade-A)",
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
    harvestDate: "Harvested Today (05:00 AM)",
    verifiedBadge: "PM-KISAN Verified",
    aiDealScore: "9.8/10 Superb Value",
    tags: ["Dew Fresh", "Pesticide Tracked", "Direct Gate"]
  },
  {
    id: "prod-2",
    name: "Sharbati Golden Wheat (ಗೋಧಿ / गेहूं)",
    variety: "Lokwan C-306 Sun-Dried",
    category: "Grains",
    farmer: "Harpreet Singh Agro",
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
    aiDealScore: "9.5/10 High Protein",
    tags: ["Grade-A Milling", "Moisture 11%", "Bulk Ready"]
  },
  {
    id: "prod-3",
    name: "Lasalgaon Red Special Onions (ಈರುಳ್ಳಿ / प्याज)",
    variety: "Garwa Medium Bulb 45-55mm",
    category: "Vegetables",
    farmer: "Bhaurao Patil Collectives (FPO)",
    location: "Lasalgaon, Maharashtra",
    distance: "6.8 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/fresh-produce.jpg",
    pricePerKg: 19.5,
    govMandiPrice: 20.8,
    unit: "kg",
    availableStock: "800 Bags (approx 40 MT)",
    harvestDate: "Cured & Graded 2 days ago",
    verifiedBadge: "Agmarknet Verified",
    aiDealScore: "9.6/10 Export Grade",
    tags: ["Low Moisture", "No Sprouting", "Cold Stored"]
  },
  {
    id: "prod-4",
    name: "Pusa 1121 Basmati Paddy (ಭತ್ತ / धान)",
    variety: "Extra Long Slender Grain",
    category: "Grains",
    farmer: "Guru Nanak Farmer Collective",
    location: "Karnal, Haryana",
    distance: "14.5 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/crop-soil-ai.jpg",
    pricePerKg: 38.5,
    govMandiPrice: 39.2,
    unit: "kg",
    availableStock: "500 Quintals",
    harvestDate: "New Kharif Harvest",
    verifiedBadge: "SFAC Certified FPO",
    aiDealScore: "9.9/10 Premium Aroma",
    tags: ["Long Grain", "100% Sorted", "Direct Mandi Contract"]
  },
  {
    id: "prod-5",
    name: "Yellow Seed Grade-A Soybean (ಸೋಯಾಬೀನ್)",
    variety: "JS-9560 Oil Content 19.8%",
    category: "Pulses",
    farmer: "Malwa Agri Collective",
    location: "Indore Corridor, MP",
    distance: "18.0 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/supermarket-procurement.jpg",
    pricePerKg: 48.9,
    govMandiPrice: 49.5,
    unit: "kg",
    availableStock: "180 Quintals",
    harvestDate: "Batch Tested #310",
    verifiedBadge: "WDRA Warehouse Deposited",
    aiDealScore: "9.4/10 Mill Preferred",
    tags: ["High Oil Content", "Cleaned & Screened", "Instant Dispatch"]
  },
  {
    id: "prod-6",
    name: "Hybrid G-4 Green Chillies (ಹಸಿ ಮೆಣಸಿನಕಾಯಿ)",
    variety: "Deep Pungent Dark Green",
    category: "Vegetables",
    farmer: "Balaji Natural Farms",
    location: "Kolar Belt, Karnataka",
    distance: "5.1 km",
    farmerPhoto: "/images/farmer-portrait.jpg",
    productImage: "/images/fresh-produce.jpg",
    pricePerKg: 34.0,
    govMandiPrice: 36.5,
    unit: "kg",
    availableStock: "85 Crates (approx 1,700 kg)",
    harvestDate: "Harvested Yesterday",
    verifiedBadge: "Karnataka State Agri ID",
    aiDealScore: "9.7/10 Hot Demand",
    tags: ["Export Quality", "Spicy 60k SHU", "Same-Day Dispatch"]
  }
];

export default function MarketplaceCatalog({ currentLang }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(10);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const categories = ["All", "Vegetables", "Grains", "Pulses"];

  const filteredProducts = sampleCommodityListings.filter(prod => {
    const matchesCategory = selectedCategory === "All" || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          prod.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          prod.farmer.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      setActiveModalProduct(null);
    }, 2000);
  };

  return (
    <section id="marketplace-catalog" className="py-16 sm:py-24 bg-[#fcfdfa] border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 inline-flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
              Objective #1: Centralized Agricultural Marketplace
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Live Farm Produce & Commodity Listings
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Direct procurement from verified farmers and FPOs. Every listing is benchmarked with real-time Government Mandi (e-NAM) prices with zero middleman markups.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-white p-2.5 rounded-2xl border border-emerald-100 shadow-2xs text-xs font-bold shrink-0">
            <div className="flex items-center gap-1.5 text-emerald-700">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Escrow Protected</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 text-amber-700">
              <Scale className="w-4 h-4" />
              <span>e-NAM Benchmark Synced</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-3 rounded-2xl border border-emerald-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat === 'All' ? 'All Commodities (ಎಲ್ಲಾ ಬೆಳೆಗಳು)' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter by crop, district, or farmer..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:bg-white focus:border-emerald-500 transition"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(prod => (
            <div 
              key={prod.id} 
              className="bg-white rounded-3xl border border-emerald-100/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={prod.productImage} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  
                  {/* Category & AI Deal Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-emerald-900 border border-white/60 shadow-2xs">
                      {prod.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 flex items-center gap-1 shadow-2xs">
                      <Sparkles className="w-3 h-3" />
                      <span>{prod.aiDealScore}</span>
                    </span>
                  </div>

                  {/* Price & Mandi Benchmark Tag */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] text-slate-300 block">Direct Farm Rate</span>
                      <div className="text-xl font-black leading-none">
                        ₹{prod.pricePerKg} <span className="text-xs font-normal text-slate-300">/{prod.unit}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-emerald-300 block">Gov Mandi Avg: ₹{prod.govMandiPrice}/{prod.unit}</span>
                      <span className="text-[10px] font-bold text-amber-300 bg-black/40 px-1.5 py-0.5 rounded">
                        Save ₹{(prod.govMandiPrice - prod.pricePerKg).toFixed(1)}/{prod.unit}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-emerald-700 transition">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{prod.variety}</p>
                  </div>

                  {/* Farmer Profile Pill */}
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <img 
                      src={prod.farmerPhoto} 
                      alt={prod.farmer} 
                      className="w-8 h-8 rounded-lg object-cover shrink-0 border border-emerald-300"
                    />
                    <div className="min-w-0 flex-1 truncate">
                      <span className="font-bold text-slate-800 block truncate">{prod.farmer}</span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{prod.location} ({prod.distance})</span>
                      </span>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>

                  {/* Stock & Timing Info */}
                  <div className="space-y-1 text-xs text-slate-600 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/70">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Available Stock:</span>
                      <strong className="text-slate-900 font-bold">{prod.availableStock}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Harvest Status:</span>
                      <span className="text-emerald-700 font-semibold">{prod.harvestDate}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {prod.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-5 pt-0 flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(prod)}
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>Direct Order / RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:18001801551`}
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition"
                  title="Contact Farmer Dispatch"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Direct Order / RFQ Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 space-y-5 shadow-2xl border border-emerald-100">
            <div className="flex justify-between items-start pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Direct Farmer Trade Agreement
                </span>
                <h4 className="text-lg font-black text-slate-900 mt-1">
                  {activeModalProduct.name}
                </h4>
                <p className="text-xs text-slate-500">
                  Farmer: {activeModalProduct.farmer} • {activeModalProduct.location}
                </p>
              </div>
              <button 
                type="button"
                onClick={() => setActiveModalProduct(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            {orderSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h5 className="font-extrabold text-base text-slate-900">Direct Order Request Dispatched!</h5>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Farmer {activeModalProduct.farmer} has received your direct trade quote. An official e-NAM digital weighing slip will be issued upon dispatch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3 p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs">
                  <div>
                    <span className="text-slate-500 block">Negotiated Direct Rate:</span>
                    <strong className="text-slate-900 text-sm font-black">₹{activeModalProduct.pricePerKg} / {activeModalProduct.unit}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Gov Mandi Benchmark:</span>
                    <strong className="text-emerald-700 text-sm font-black">₹{activeModalProduct.govMandiPrice} / {activeModalProduct.unit}</strong>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Order Quantity ({activeModalProduct.unit === 'kg' ? 'Quintals / Kg' : 'Crates'}):
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(e.target.value)}
                    className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-hidden focus:bg-white focus:border-emerald-500"
                  />
                  <span className="text-[11px] text-slate-500">
                    Estimated Total: <strong className="text-slate-900">₹{(orderQuantity * activeModalProduct.pricePerKg * 10).toLocaleString('en-IN')}</strong> (Escrow Protected)
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Your Full Name / Supermarket Chain Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Reliance Fresh Hub / Ramesh Traders"
                    className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden focus:bg-white focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Phone Number for Instant Farmer WhatsApp & SMS Sync:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden focus:bg-white focus:border-emerald-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Confirm Order & Lock Direct Mandi Price</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
