import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Store, 
  MapPin, 
  Truck 
} from 'lucide-react';

const supermarketContracts = [
  {
    id: "sc-1",
    crop: "Table Potatoes (Jyoti Grade-A)",
    fpo: "Yamuna Ganga Agro Producer Co. Ltd",
    volume: "25 Metric Tons / Week",
    nextDelivery: "Tomorrow 04:30 AM",
    deliveryHub: "Bangalore Whitefield DC",
    tempTarget: "6°C - 8°C",
    qualityRating: "99.4% Caliber Pass",
    status: "In Transit (Truck #KA-04-E-8821)"
  },
  {
    id: "sc-2",
    crop: "Garwa Red Onion (45-55mm)",
    fpo: "Godavari Valley Farmers Producer Co.",
    volume: "15 Metric Tons / Week",
    nextDelivery: "Friday 06:00 AM",
    deliveryHub: "Hyderabad Central Distribution Hub",
    tempTarget: "Dry Ambient",
    qualityRating: "98.9% Double Skin",
    status: "Scheduled Packhouse Dispatch"
  },
  {
    id: "sc-3",
    crop: "Hybrid Firm Pulp Tomatoes",
    fpo: "Kolar South Horticulture Farmers Union",
    volume: "10 Metric Tons (Twice Weekly)",
    nextDelivery: "Today Delivered (05:15 AM)",
    deliveryHub: "Chennai Agro Hub",
    tempTarget: "10°C - 12°C",
    qualityRating: "99.8% Transport Pass",
    status: "Completed & Verified"
  }
];

export default function SupermarketsPortalPage({ onBackToLanding, onOpenMapScreen, onNavigateToBulkProcurement }) {
  const [contracts] = useState(supermarketContracts);

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
              <span className="font-bold text-amber-800">For Supermarkets & Retailers</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
              Enterprise Procurement Account
            </span>
            <button
              onClick={onOpenMapScreen}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 border border-emerald-200"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Track Active Supply Fleet</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Banner with Modern Supermarket Image */}
      <section className="relative bg-gradient-to-r from-amber-950 via-slate-900 to-emerald-950 text-white overflow-hidden py-10 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none">
          <img src="/images/supermarket-procurement.jpg" alt="Supermarket produce aisle" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-200 border border-amber-400/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-amber-300" />
              <span>Direct Farm-to-Shelf Retail Operations</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Predictable Quality, Lower Spoilage & Farm Traceability
            </h1>
            <p className="text-amber-100/90 text-xs sm:text-sm leading-relaxed">
              Supermarket chains save an average of 18-22% on procurement costs while delivering fruits and vegetables 12 to 24 hours fresher than conventional APMC mandi chains.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[10px] text-amber-200 uppercase font-bold block">Spoilage Reduction</span>
              <strong className="text-lg font-black text-white block mt-0.5">35% Less Waste</strong>
              <span className="text-[10px] text-emerald-300">Direct packhouse sorting</span>
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[10px] text-amber-200 uppercase font-bold block">Farm-to-Shelf</span>
              <strong className="text-lg font-black text-amber-300 block mt-0.5">&lt; 18 Hours</strong>
              <span className="text-[10px] text-slate-300">Refrigerated transit</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Retail Dashboard Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Active FPO Contracts</span>
            <strong className="text-xl font-black text-slate-900 block mt-1">14 Recurring Lots</strong>
            <span className="text-[11px] text-emerald-600 font-bold">50 MT / Week Inflow</span>
          </div>

          <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Incoming Shipments Today</span>
            <strong className="text-xl font-black text-blue-600 block mt-1">3 Fleet Trucks</strong>
            <span className="text-[11px] text-slate-500">2 In Transit, 1 Received</span>
          </div>

          <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Quarterly Cost Savings</span>
            <strong className="text-xl font-black text-emerald-700 block mt-1">₹4,82,000</strong>
            <span className="text-[11px] text-emerald-600 font-bold">vs Mandi Middlemen</span>
          </div>

          <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Caliber Inspection Score</span>
            <strong className="text-xl font-black text-purple-700 block mt-1">99.2%</strong>
            <span className="text-[11px] text-slate-500">Rejection rate &lt; 0.5%</span>
          </div>
        </div>
      </section>

      {/* 4. Active Contracts & Supply Pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full pb-12 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-lg font-black text-slate-900">Active Direct Farm Supply Contracts</h2>
            <p className="text-xs text-slate-500">Live monitoring of recurring FPO harvests, transport temperatures, and delivery schedules</p>
          </div>
          <button
            onClick={onNavigateToBulkProcurement}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow-md shadow-amber-600/20 transition self-start sm:self-auto"
          >
            + Create New Farm Contract
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {contracts.map((c) => (
            <div key={c.id} className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-3">
              <div className="flex justify-between items-start">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                  {c.crop}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">{c.deliveryHub}</span>
              </div>

              <div>
                <strong className="text-sm font-extrabold text-slate-900 block">{c.volume}</strong>
                <span className="text-xs text-slate-500 block">Cultivator: {c.fpo}</span>
              </div>

              <div className="p-2.5 bg-slate-50 rounded-xl space-y-1 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Next Delivery:</span>
                  <strong className="text-slate-800">{c.nextDelivery}</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Temp Window:</span>
                  <strong className="text-blue-700">{c.tempTarget}</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Quality Pass:</span>
                  <strong className="text-emerald-700">{c.qualityRating}</strong>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>{c.status}</span>
                </span>
                <button
                  onClick={onOpenMapScreen}
                  className="text-slate-500 hover:text-slate-900 font-bold text-[11px]"
                >
                  Live GPS
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
