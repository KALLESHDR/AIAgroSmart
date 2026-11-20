import React, { useState } from 'react';
import { 
  Building, 
  ArrowLeft, 
  Truck, 
  CheckCircle2, 
  Award, 
  MapPin, 
  Check 
} from 'lucide-react';

const fpoProcurementLots = [
  {
    id: "lot-101",
    crop: "Table Potatoes (आलू - चिप्स व रसोई)",
    variety: "Kufri Jyoti / Chipsona 1 (Grade-A)",
    fpoName: "Yamuna Ganga Agro Producer Co. Ltd",
    state: "Agra, Uttar Pradesh",
    capacity: "120 Metric Tons / Week",
    minOrder: "10 MT",
    quotedRate: "₹13.50 / kg",
    packaging: "50 kg breathable ventilated jute bags",
    qualityScore: "99.2% Uniform Caliber",
    image: "/images/fresh-produce.jpg",
    specs: ["Size: 45mm - 65mm", "Dirt < 1%", "No Green Spots"]
  },
  {
    id: "lot-102",
    crop: "Garwa Red Onion (लाल कांदा / ಈರುಳ್ಳಿ)",
    variety: "Medium Export Bulb (45-55mm)",
    fpoName: "Godavari Valley Farmers Producer Co.",
    state: "Nashik, Maharashtra",
    capacity: "80 Metric Tons / Week",
    minOrder: "5 MT",
    quotedRate: "₹18.80 / kg",
    packaging: "25 kg red mesh Leno bags",
    qualityScore: "98.8% Dry Skin Grade-A",
    image: "/images/fresh-produce.jpg",
    specs: ["Double skin dried", "Moisture < 12%", "Zero rots"]
  },
  {
    id: "lot-103",
    crop: "Table Tomatoes (ಹೈಬ್ರಿಡ್ ಟೊಮೇಟೊ / टमाटर)",
    variety: "Hybrid Firm Pulp (Semi-Ripe for Transit)",
    fpoName: "Kolar South Horticulture Farmers Union",
    state: "Kolar, Karnataka",
    capacity: "45 Metric Tons / Week",
    minOrder: "3 MT",
    quotedRate: "₹20.20 / kg",
    packaging: "20 kg heavy-duty reusable plastic crates",
    qualityScore: "99.5% Transport Hardiness",
    image: "/images/fresh-produce.jpg",
    specs: ["Brix 4.5+", "Color: Turning breaker stage", "Cold chain ready"]
  },
  {
    id: "lot-104",
    crop: "Milling Sharbati Wheat (शरबती गेहूं / ಗೋಧಿ)",
    variety: "Lokwan Superior Grade (12% Protein)",
    fpoName: "Malwa Precision Cereals FPO",
    state: "Sehore, Madhya Pradesh",
    capacity: "250 Metric Tons Buffer",
    minOrder: "20 MT",
    quotedRate: "₹24.40 / kg",
    packaging: "50 kg laminated tamper-evident bags",
    qualityScore: "99.8% Clean Grain Guarantee",
    image: "/images/hero-farm.jpg",
    specs: ["Moisture < 11%", "Gluten 11.8%", "Machine destoned"]
  }
];

export default function BulkProcurementPage({ onBackToLanding, onOpenMapScreen }) {
  const [rfqModalLot, setRfqModalLot] = useState(null);
  const [rfqVolume, setRfqVolume] = useState(15);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [retailChainName, setRetailChainName] = useState("More Retail / Reliance Fresh Hub");

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
              <span className="font-bold text-blue-800">Bulk Supermarket Procurement</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-100 text-blue-900 border border-blue-200">
              B2B Enterprise Portal
            </span>
            <button
              onClick={onOpenMapScreen}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 border border-emerald-200"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Locate Nearby FPO Warehouses</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Banner with Real Modern Supermarket Image */}
      <section className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 text-white overflow-hidden py-12 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none">
          <img src="/images/supermarket-procurement.jpg" alt="Supermarket procurement" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-500/20 text-blue-200 border border-blue-400/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5" />
              <span>Direct Farm-to-Shelf B2B Supply Chain</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Institutional Produce Sourcing for Supermarkets & Chains
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Procure directly from 120+ registered Farmer Producer Organizations (FPOs). Lock in volume supply contracts with strict quality grading, refrigerated transit, and 100% digital invoices.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-emerald-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Zero Middleman Spoilage
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-blue-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> FSSAI Quality Certified Lots
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-amber-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 12 to 24 Hr Farm-to-DC Transit
              </span>
            </div>
          </div>

          {/* Logistics Image Spotlight */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-3 border border-white/20 shadow-2xl max-w-sm shrink-0">
            <img 
              src="/images/agri-logistics-truck.jpg" 
              alt="Refrigerated logistics truck" 
              className="w-full h-44 object-cover rounded-2xl" 
            />
            <div className="p-3 text-xs space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-white">Refrigerated Fleet Active</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">Temp Controlled</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Maintains 4°C - 8°C from farm gate to supermarket distribution center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 Pillar Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
              1
            </div>
            <h4 className="text-sm font-extrabold text-slate-900">Custom Volume RFQ</h4>
            <p className="text-xs text-slate-500">
              Submit your weekly demand by caliber, brix, ripeness, and packaging specs.
            </p>
          </div>

          <div className="p-5 bg-white rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
              2
            </div>
            <h4 className="text-sm font-extrabold text-slate-900">Verified FPO Matching</h4>
            <p className="text-xs text-slate-500">
              Instantly matched with audited Farmer Collectives holding certified buffer stocks.
            </p>
          </div>

          <div className="p-5 bg-white rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
              3
            </div>
            <h4 className="text-sm font-extrabold text-slate-900">Cold Chain Dispatch</h4>
            <p className="text-xs text-slate-500">
              GPS-tracked refrigerated fleet delivers straight to your city distribution center.
            </p>
          </div>

          <div className="p-5 bg-white rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black">
              4
            </div>
            <h4 className="text-sm font-extrabold text-slate-900">Digital Invoicing & SLA</h4>
            <p className="text-xs text-slate-500">
              GST e-Way bills generated automatically with 100% batch traceability QR codes.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Active FPO Lots Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full pb-12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-lg font-black text-slate-900">
              Active Institutional Harvest Lots (Ready for Contract)
            </h2>
            <p className="text-xs text-slate-500">
              Direct FPO lots with guaranteed caliber specs and scheduled weekly logistics dispatch.
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full self-start sm:self-auto">
            4 Audited Institutional Clusters
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {fpoProcurementLots.map((lot) => (
            <div 
              key={lot.id} 
              className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 p-5 shadow-xs hover:shadow-md transition space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800">
                    {lot.state}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900">{lot.crop}</h3>
                  <span className="text-xs text-slate-500 block">{lot.variety}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-blue-900">{lot.quotedRate}</span>
                  <span className="block text-[10px] text-slate-400">Institutional Rate</span>
                </div>
              </div>

              {/* FPO Info */}
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">Cultivator FPO:</span>
                  <strong className="text-slate-800">{lot.fpoName}</strong>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Weekly Capacity:</span>
                  <strong className="text-emerald-700">{lot.capacity}</strong>
                </div>
              </div>

              {/* Specs & Packaging */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Quality Benchmark: <strong>{lot.qualityScore}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Truck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>Packaging: <strong>{lot.packaging}</strong></span>
                </div>
              </div>

              {/* Spec Pills */}
              <div className="flex flex-wrap gap-1.5">
                {lot.specs.map((sp, idx) => (
                  <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800">
                    ✓ {sp}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Min Order: <strong>{lot.minOrder}</strong>
                </span>
                <button
                  onClick={() => {
                    setRfqModalLot(lot);
                    setRfqSubmitted(false);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/20 transition active:scale-95"
                >
                  Initiate Contract RFQ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. RFQ Modal */}
      {rfqModalLot && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-blue-100">
            
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800">
                  Institutional Procurement Tender
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-1">
                  Contract Request: {rfqModalLot.crop}
                </h3>
              </div>
              <button
                onClick={() => setRfqModalLot(null)}
                className="text-slate-400 hover:text-slate-700 p-1 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {!rfqSubmitted ? (
              <div className="space-y-4 text-xs">
                
                <div className="p-3 bg-blue-50/70 rounded-2xl border border-blue-100 space-y-1">
                  <span className="text-slate-600 block">Cultivator FPO: <strong>{rfqModalLot.fpoName}</strong></span>
                  <span className="text-slate-600 block">Base Price: <strong>{rfqModalLot.quotedRate}</strong> (Ex-Packhouse)</span>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Retail Chain / Supermarket Name:</label>
                  <input
                    type="text"
                    value={retailChainName}
                    onChange={(e) => setRetailChainName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-500 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-700">Volume Required (Metric Tons):</span>
                    <strong className="text-blue-800 font-black">{rfqVolume} MT ({rfqVolume * 1000} kg)</strong>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={rfqVolume}
                    onChange={(e) => setRfqVolume(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Min: 5 MT</span>
                    <span>Max: 100 MT</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Contract Value:</span>
                    <strong className="text-slate-900">₹{(rfqVolume * 1000 * parseFloat(rfqModalLot.quotedRate.replace(/[^0-9.]/g, ''))).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Quality Assurance:</span>
                    <span>Third-party agmark grading included</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Delivery Frequency:</span>
                    <span>Bi-weekly refrigerated dispatch</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setRfqModalLot(null)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setRfqSubmitted(true)}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold shadow-md shadow-blue-600/20"
                  >
                    Submit Procurement Order
                  </button>
                </div>

              </div>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-black text-slate-900">Institutional RFQ Transmitted!</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Your procurement request for <strong>{rfqVolume} MT</strong> of {rfqModalLot.crop} has been forwarded to <strong>{rfqModalLot.fpoName}</strong>. Our logistics desk will contact your procurement lead.
                </p>
                <button
                  onClick={() => setRfqModalLot(null)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700"
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
