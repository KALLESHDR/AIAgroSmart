import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Truck, 
  MapPin, 
  Check, 
  Building2 
} from 'lucide-react';

const arbitragePairs = [
  {
    commodity: "Garwa Onion (Nashik)",
    sourceMandi: "Lasalgaon Mandi (₹1,950/qtl)",
    targetMandi: "Azadpur Delhi (₹2,280/qtl)",
    transportCost: "₹180/qtl (Refrigerated Truck)",
    netMargin: "+₹150 / Quintal Net Profit",
    urgency: "High Demand (Stock Arriving Qty Low)"
  },
  {
    commodity: "Sharbati Wheat",
    sourceMandi: "Khanna Mandi, Punjab (₹2,480/qtl)",
    targetMandi: "Jaipur Terminal APMC (₹2,690/qtl)",
    transportCost: "₹120/qtl (Bulk Silo Fleet)",
    netMargin: "+₹90 / Quintal Net Profit",
    urgency: "Steady Flour Mill Orders"
  },
  {
    commodity: "Hybrid Desi Tomato",
    sourceMandi: "Kolar APMC, Karnataka (₹2,200/qtl)",
    targetMandi: "Koyambedu Chennai (₹2,490/qtl)",
    transportCost: "₹110/qtl (Morning Express)",
    netMargin: "+₹180 / Quintal Net Profit",
    urgency: "Same-Day Evening Arbitrage"
  }
];

export default function TradersPortalPage({ onBackToLanding, onOpenMapScreen, onNavigateToMandiRates }) {
  const [coldStorageBooking, setColdStorageBooking] = useState(false);
  const [storageTons, setStorageTons] = useState(25);
  const [bookingSuccess, setBookingSuccess] = useState(false);

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
              <span>For Stakeholders</span>
              <span>/</span>
              <span className="font-bold text-blue-800">For Mandi Traders & Wholesalers</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-100 text-blue-900 border border-blue-200">
              e-NAM License #DL-APMC-9921
            </span>
            <button
              onClick={onOpenMapScreen}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 border border-emerald-200"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>3D Mandi & Cold Storage Map</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Banner with Mandi Wholesale Yard Photo */}
      <section className="relative bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden py-10 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="/images/mandi-trade-yard.jpg" alt="Mandi trading yard" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-500/20 text-blue-200 border border-blue-400/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-blue-300" />
              <span>Wholesale Mandi Trading & Multi-APMC Arbitrage</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Spot Price Arbitrage, Digital e-NAM Bidding & Instant Freight
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Identify inter-state mandi price spreads in real time. Buy surplus produce directly at farm gate or APMC yards, book cold storage slots, and dispatch freight with automated GST e-bills.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[10px] text-blue-300 uppercase font-bold block">Connected Mandis</span>
              <strong className="text-lg font-black text-white block mt-0.5">480+ APMCs</strong>
              <span className="text-[10px] text-slate-300">Live electronic auction</span>
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[10px] text-blue-300 uppercase font-bold block">Arbitrage Spread</span>
              <strong className="text-lg font-black text-emerald-300 block mt-0.5">₹90 - ₹180</strong>
              <span className="text-[10px] text-slate-300">Net margin / quintal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Real-Time Inter-Mandi Arbitrage Radar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-lg font-black text-slate-900">
              Live Inter-Mandi Price Arbitrage Spreads
            </h2>
            <p className="text-xs text-slate-500">
              Calculates purchase rate, freight transport cost, and target terminal market price to show net profit margins.
            </p>
          </div>
          <button
            onClick={onNavigateToMandiRates}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 self-start sm:self-auto"
          >
            View All Mandi Rates →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {arbitragePairs.map((pair, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs font-black text-slate-900 block">{pair.commodity}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  {pair.netMargin}
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span className="text-slate-400">Buy Origin:</span>
                  <strong className="text-slate-800">{pair.sourceMandi}</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="text-slate-400">Sell Destination:</span>
                  <strong className="text-blue-800">{pair.targetMandi}</strong>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-200">
                  <span>Transit Cost:</span>
                  <span>{pair.transportCost}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-amber-700 font-semibold">{pair.urgency}</span>
                <button
                  onClick={() => setColdStorageBooking(true)}
                  className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
                >
                  Book Freight
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cold Storage Booking Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-500/30 text-blue-200 border border-blue-400/30 inline-flex items-center gap-1">
              <Building2 className="w-3 h-3" />
              <span>WDRA Registered Warehouses</span>
            </span>
            <h3 className="text-lg font-black">
              Book Subsidized Cold Storage (₹1.40/kg per month)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Store your procured lots securely with zero quality degradation. Electronic Negotiable Warehouse Receipts (e-NWR) available for instant credit.
            </p>
          </div>

          <button
            onClick={() => setColdStorageBooking(true)}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs rounded-xl shadow-lg transition active:scale-95 shrink-0"
          >
            Reserve Storage Slot
          </button>
        </div>

      </section>

      {/* Booking Modal */}
      {coldStorageBooking && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800">
                  WDRA Licensed Warehouse
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-1">
                  Reserve Cold Storage Slot
                </h3>
              </div>
              <button
                onClick={() => setColdStorageBooking(false)}
                className="text-slate-400 hover:text-slate-700 p-1 font-bold"
              >
                ✕
              </button>
            </div>

            {!bookingSuccess ? (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Select Facility:</label>
                  <select className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white font-medium">
                    <option>Kisan Sheetgrah Cold Storage (Nashik NH-14 Bypass) - 840 MT Free</option>
                    <option>Punjab State Warehousing Silos (Khanna Hub) - 1,200 MT Free</option>
                    <option>Kolar Agro Packhouse Facility (KA-08) - 350 MT Free</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-700">Storage Quantity:</span>
                    <strong className="text-blue-900 font-black">{storageTons} Metric Tons</strong>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={storageTons}
                    onChange={(e) => setStorageTons(Number(e.target.value))}
                    className="w-full accent-blue-600 mt-1"
                  />
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Monthly Subsidized Tariff:</span>
                    <strong>₹{(storageTons * 1400).toLocaleString()} / month</strong>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Gov Storage Subsidy:</span>
                    <span>25% applied under PMKSY</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setColdStorageBooking(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setBookingSuccess(true)}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold shadow-md shadow-blue-600/20"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-black text-slate-900">Cold Storage Slot Confirmed!</h4>
                <p className="text-xs text-slate-500">
                  Gate pass and e-NWR registration code sent to your registered mobile number.
                </p>
                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    setColdStorageBooking(false);
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold"
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
