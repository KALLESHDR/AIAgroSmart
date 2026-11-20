import React, { useState } from 'react';
import { 
  Search, 
  ArrowLeft, 
  MapPin, 
  ShieldCheck, 
  RefreshCw, 
  ArrowUpRight, 
  ArrowDownRight, 
  Filter, 
  Bell, 
  CheckCircle2 
} from 'lucide-react';

const mandiRecords = [
  {
    id: "m-1",
    commodity: "Wheat (ಗೆहूं / ಗೋಧಿ)",
    variety: "Sharbati / Lokwan",
    state: "Punjab",
    mandi: "Khanna APMC Yard",
    minPrice: 2350,
    modalPrice: 2480,
    maxPrice: 2620,
    arrivals: "4,200 MT",
    trend: "+2.8%",
    isUp: true,
    govSync: "e-NAM Synced",
    updated: "10 mins ago"
  },
  {
    id: "m-2",
    commodity: "Onion (प्याज / ಈರುಳ್ಳಿ)",
    variety: "Nashik Red Special",
    state: "Maharashtra",
    mandi: "Lasalgaon Mandi Yard",
    minPrice: 1700,
    modalPrice: 1950,
    maxPrice: 2180,
    arrivals: "8,950 MT",
    trend: "-1.2%",
    isUp: false,
    govSync: "Agmarknet Live",
    updated: "4 mins ago"
  },
  {
    id: "m-3",
    commodity: "Tomato (टमाटर / ಟೊಮೇಟೊ)",
    variety: "Hybrid Desi Grade-A",
    state: "Karnataka",
    mandi: "Kolar APMC Market",
    minPrice: 1900,
    modalPrice: 2200,
    maxPrice: 2450,
    arrivals: "3,100 MT",
    trend: "+4.5%",
    isUp: true,
    govSync: "Agmarknet Live",
    updated: "7 mins ago"
  },
  {
    id: "m-4",
    commodity: "Cotton (कपास / ಹತ್ತಿ)",
    variety: "Medium Staple 29mm",
    state: "Telangana",
    mandi: "Warangal APMC",
    minPrice: 6850,
    modalPrice: 7120,
    maxPrice: 7380,
    arrivals: "1,450 MT",
    trend: "+1.9%",
    isUp: true,
    govSync: "e-NAM Synced",
    updated: "14 mins ago"
  },
  {
    id: "m-5",
    commodity: "Soybean (सोयाबीन / ಸೋಯಾಬೀನ್)",
    variety: "Yellow Grade-A",
    state: "Madhya Pradesh",
    mandi: "Indore Mandi Hub",
    minPrice: 4650,
    modalPrice: 4890,
    maxPrice: 5120,
    arrivals: "2,800 MT",
    trend: "+0.6%",
    isUp: true,
    govSync: "e-NAM Synced",
    updated: "19 mins ago"
  },
  {
    id: "m-6",
    commodity: "Basmati Paddy (धान / ಬಾಸುಮತಿ ಭತ್ತ)",
    variety: "1121 Pusa Super",
    state: "Haryana",
    mandi: "Karnal Mandi Yard",
    minPrice: 3650,
    modalPrice: 3850,
    maxPrice: 4100,
    arrivals: "5,300 MT",
    trend: "+3.1%",
    isUp: true,
    govSync: "Agmarknet Live",
    updated: "12 mins ago"
  },
  {
    id: "m-7",
    commodity: "Turmeric (हल्दी / ಅರಿಶಿನ)",
    variety: "Salem Finger Unpolished",
    state: "Tamil Nadu",
    mandi: "Erode APMC Market",
    minPrice: 13800,
    modalPrice: 14600,
    maxPrice: 15400,
    arrivals: "620 MT",
    trend: "+5.4%",
    isUp: true,
    govSync: "Agmarknet Live",
    updated: "25 mins ago"
  },
  {
    id: "m-8",
    commodity: "Red Chilli (लाल मिर्च / ಒಣ ಮೆಣಸಿನಕಾಯಿ)",
    variety: "Guntur S4 / 334",
    state: "Andhra Pradesh",
    mandi: "Guntur APMC Yard",
    minPrice: 18500,
    modalPrice: 19800,
    maxPrice: 21200,
    arrivals: "1,890 MT",
    trend: "+2.2%",
    isUp: true,
    govSync: "e-NAM Synced",
    updated: "15 mins ago"
  },
  {
    id: "m-9",
    commodity: "Potato (आलू / ಆಲೂಗಡ್ಡೆ)",
    variety: "Jyoti Large Oval",
    state: "Uttar Pradesh",
    mandi: "Agra Mandi Yard",
    minPrice: 1150,
    modalPrice: 1320,
    maxPrice: 1480,
    arrivals: "7,400 MT",
    trend: "-0.8%",
    isUp: false,
    govSync: "Agmarknet Live",
    updated: "9 mins ago"
  }
];

export default function LiveMandiRatesPage({ onBackToLanding, onOpenMapScreen, onNavigateToPriceForecast }) {
  const [selectedState, setSelectedState] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertPhone, setAlertPhone] = useState("");

  const states = ["All", "Punjab", "Maharashtra", "Karnataka", "Telangana", "Madhya Pradesh", "Haryana", "Andhra Pradesh", "Tamil Nadu", "Uttar Pradesh"];

  const filteredMandi = mandiRecords.filter(item => {
    const matchesState = selectedState === "All" || item.state === selectedState;
    const matchesSearch = item.commodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.mandi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.variety.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesSearch;
  });

  const handleSubscribeAlert = (e) => {
    e.preventDefault();
    if (alertPhone.trim().length >= 10) {
      setAlertSuccess(true);
      setTimeout(() => setAlertSuccess(false), 4000);
      setAlertPhone("");
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] text-slate-800 flex flex-col font-sans">
      
      {/* 1. Header Bar */}
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
              <span className="font-bold text-amber-800">Live APMC Mandi Rates</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              <span>Live Synced (Every 15 min)</span>
            </span>
            <button
              onClick={onOpenMapScreen}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 border border-emerald-200"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Open 3D Mandi Map</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Banner with Real Mandi Image */}
      <section className="relative bg-gradient-to-r from-amber-950 via-amber-900 to-emerald-950 text-white overflow-hidden py-10 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="/images/mandi-trade-yard.jpg" alt="Mandi trading yard" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-200 border border-amber-400/30 uppercase tracking-wider inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>Government Mandi Terminal (e-NAM & Agmarknet)</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Real-Time Mandi Rates & APMC Auction Prices
            </h1>
            <p className="text-amber-100/90 text-xs sm:text-sm leading-relaxed">
              Official modal, minimum, and maximum prices collected directly from 480+ regulated agricultural market committees across India.
            </p>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[11px] text-amber-200 uppercase font-bold block">Top Gainer Today</span>
              <strong className="text-sm font-black text-white block mt-0.5">Turmeric (+5.4%)</strong>
              <span className="text-[10px] text-emerald-300">₹14,600 / qtl (Erode APMC)</span>
            </div>
            <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[11px] text-amber-200 uppercase font-bold block">Highest Arrival</span>
              <strong className="text-sm font-black text-white block mt-0.5">Nashik Onion</strong>
              <span className="text-[10px] text-amber-300">8,950 MT (Lasalgaon)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filter Bar & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-6 space-y-4">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-xs">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by commodity, mandi name, or variety..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
            <span>Feeds active: <strong>{filteredMandi.length} mandis</strong></span>
          </div>
        </div>

        {/* State Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <Filter className="w-4 h-4 text-amber-700 shrink-0 mr-1" />
          {states.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedState(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedState === st
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* 4. Mandi Rates Table */}
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-extrabold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                  <th className="py-3.5 px-4">Commodity & Variety</th>
                  <th className="py-3.5 px-4">State & Mandi Yard</th>
                  <th className="py-3.5 px-4 text-right">Min / Max (₹/qtl)</th>
                  <th className="py-3.5 px-4 text-right">Modal Rate</th>
                  <th className="py-3.5 px-4 text-right">Arrivals</th>
                  <th className="py-3.5 px-4 text-center">Trend</th>
                  <th className="py-3.5 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredMandi.map((item) => (
                  <tr key={item.id} className="hover:bg-amber-50/40 transition">
                    
                    {/* Commodity */}
                    <td className="py-3.5 px-4">
                      <strong className="block font-black text-slate-900">{item.commodity}</strong>
                      <span className="text-[11px] text-slate-500">{item.variety}</span>
                    </td>

                    {/* Mandi & State */}
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-slate-800 block">{item.mandi}</span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <span>{item.state}</span>
                        <span>•</span>
                        <span className="text-emerald-700 font-semibold">{item.govSync}</span>
                      </span>
                    </td>

                    {/* Min / Max */}
                    <td className="py-3.5 px-4 text-right text-slate-600">
                      <span>₹{item.minPrice.toLocaleString()}</span>
                      <span className="text-slate-400 mx-1">-</span>
                      <span>₹{item.maxPrice.toLocaleString()}</span>
                    </td>

                    {/* Modal Rate */}
                    <td className="py-3.5 px-4 text-right">
                      <span className="text-sm font-black text-emerald-800">₹{item.modalPrice.toLocaleString()}</span>
                      <span className="block text-[10px] text-slate-400">/ Quintal</span>
                    </td>

                    {/* Arrivals */}
                    <td className="py-3.5 px-4 text-right font-medium text-slate-700">
                      {item.arrivals}
                    </td>

                    {/* Trend */}
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[11px] font-black ${
                        item.isUp ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'
                      }`}>
                        {item.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        <span>{item.trend}</span>
                      </span>
                    </td>

                    {/* Action */}
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={onNavigateToPriceForecast}
                        className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-[11px] border border-amber-200 transition"
                      >
                        Forecast
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. SMS & WhatsApp Free Price Alert Box */}
        <div className="bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white inline-flex items-center gap-1">
              <Bell className="w-3 h-3" />
              <span>Free Mandi Alerts</span>
            </span>
            <h3 className="text-lg font-black text-slate-900">
              Get Daily APMC Closing Prices on WhatsApp or SMS
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never sell your harvest below benchmark. Receive instant notifications at 05:00 PM every evening for your chosen crops in your district.
            </p>
          </div>

          <form onSubmit={handleSubscribeAlert} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0">
            <input 
              type="tel"
              placeholder="Enter 10-digit Mobile Number"
              value={alertPhone}
              onChange={(e) => setAlertPhone(e.target.value)}
              className="px-4 py-2.5 text-xs rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:border-emerald-600 w-full sm:w-64"
              required
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-700/20 transition whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        </div>

        {alertSuccess && (
          <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-900 text-xs font-bold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Success! You have been subscribed to daily Mandi closing rates via WhatsApp/SMS.</span>
          </div>
        )}

      </section>

    </div>
  );
}
