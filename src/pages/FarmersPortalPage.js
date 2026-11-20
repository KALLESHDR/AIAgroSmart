import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sprout, 
  MapPin, 
  ShieldCheck, 
  PlusCircle, 
  Check 
} from 'lucide-react';

const mockFarmerBids = [
  {
    id: "bid-1",
    buyer: "More Retail Procurement Hub (Bangalore)",
    crop: "Table Tomatoes (Grade-A)",
    requestedQty: "100 Crates (2,000 kg)",
    bidRate: "₹22.50 / kg",
    govBenchmark: "₹21.00 / kg",
    paymentTerms: "Instant Direct Bank Transfer (DBT)",
    status: "Pending Farmer Action"
  },
  {
    id: "bid-2",
    buyer: "Reliance Fresh Regional Distribution Center",
    crop: "Garwa Red Onion",
    requestedQty: "200 Bags (10 MT)",
    bidRate: "₹20.20 / kg",
    govBenchmark: "₹19.50 / kg",
    paymentTerms: "24-hr RTGS Settlement",
    status: "Pending Farmer Action"
  },
  {
    id: "bid-3",
    buyer: "Azadpur APMC Licensed Commission Trader #44",
    crop: "Sharbati Wheat",
    requestedQty: "150 Quintals",
    bidRate: "₹2,520 / qtl",
    govBenchmark: "₹2,480 / qtl",
    paymentTerms: "e-NAM Escrow Payment",
    status: "Accepted & Dispatched"
  }
];

export default function FarmersPortalPage({ onBackToLanding, onOpenMapScreen }) {
  const [bids, setBids] = useState(mockFarmerBids);
  const [listHarvestOpen, setListHarvestOpen] = useState(false);
  const [cropName, setCropName] = useState("Tomato (ಟೊಮೇಟೊ)");
  const [lotQuantity, setLotQuantity] = useState("100");
  const [expectedPrice, setExpectedPrice] = useState("22");
  const [listSuccess, setListSuccess] = useState(false);

  const handleAcceptBid = (bidId) => {
    setBids(prev => prev.map(b => b.id === bidId ? { ...b, status: "Accepted & Truck Dispatched" } : b));
  };

  const handleListHarvestSubmit = (e) => {
    e.preventDefault();
    setListSuccess(true);
    setTimeout(() => {
      setListSuccess(false);
      setListHarvestOpen(false);
    }, 2000);
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
              <span>For Stakeholders</span>
              <span>/</span>
              <span className="font-bold text-emerald-800">For Farmers & FPOs (किसान)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Kisan ID: MH-2024-8841</span>
            </span>
            <button
              onClick={onOpenMapScreen}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 border border-emerald-200"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>View Nearby Buyers</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Banner with Farmer Portrait */}
      <section className="relative bg-gradient-to-r from-emerald-950 via-green-900 to-slate-900 text-white overflow-hidden py-10 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="/images/hero-farm.jpg" alt="Farm landscape" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <Sprout className="w-3.5 h-3.5 text-emerald-300" />
              <span>Kisan Empowerment & Direct Sales Portal</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Sell Directly, Eliminate Middlemen & Get 24-hr Bank Payments
            </h1>
            <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
              Connect with 450+ APMC mandis, wholesale supermarkets, and food processors without paying any agent commission. Receive competitive bids directly on your smartphone.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-3xl border border-white/20 shrink-0">
            <img 
              src="/images/farmer-portrait.jpg" 
              alt="Farmer" 
              className="w-14 h-14 rounded-2xl object-cover border border-emerald-300" 
            />
            <div className="text-xs">
              <strong className="text-white block font-black">Rameshwar Kisan</strong>
              <span className="text-emerald-300 block text-[11px]">Nashik Horticulture FPO</span>
              <span className="text-[10px] text-amber-300 font-bold block mt-0.5">+24% Higher Net Revenue</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Farmer Dashboard Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 bg-white rounded-3xl border border-emerald-100 shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Active Produce Listed</span>
            <strong className="text-xl font-black text-slate-900 block mt-1">3 Harvest Lots</strong>
            <span className="text-[11px] text-emerald-600 font-bold">120 Crates Tomatoes Live</span>
          </div>

          <div className="p-4 bg-white rounded-3xl border border-emerald-100 shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Incoming Buyer Bids</span>
            <strong className="text-xl font-black text-amber-600 block mt-1">{bids.length} Active Bids</strong>
            <span className="text-[11px] text-slate-500">Highest: ₹22.50/kg</span>
          </div>

          <div className="p-4 bg-white rounded-3xl border border-emerald-100 shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Total Payout Received</span>
            <strong className="text-xl font-black text-emerald-700 block mt-1">₹3,48,200</strong>
            <span className="text-[11px] text-emerald-600 font-bold">100% Direct Bank Transfer</span>
          </div>

          <div className="p-4 bg-white rounded-3xl border border-emerald-100 shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Commission Saved</span>
            <strong className="text-xl font-black text-blue-700 block mt-1">₹29,600</strong>
            <span className="text-[11px] text-slate-500">0% Agent Cut</span>
          </div>
        </div>
      </section>

      {/* 4. Action Banner & Incoming Bids Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full pb-12 space-y-6">
        
        {/* Banner with Button */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-6 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold">Ready to sell this week's harvest?</h3>
            <p className="text-xs text-emerald-100">List your lot in 60 seconds with photos and let verified buyers bid directly.</p>
          </div>
          <button
            onClick={() => setListHarvestOpen(true)}
            className="px-5 py-3 rounded-xl bg-white text-emerald-800 font-extrabold text-xs shadow-md hover:bg-emerald-50 transition active:scale-95 flex items-center gap-2 whitespace-nowrap"
          >
            <PlusCircle className="w-4 h-4 text-emerald-600" />
            <span>List Harvest Lot (फसल जोड़ें)</span>
          </button>
        </div>

        {/* Incoming Bids Table */}
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900">Incoming Buyer Bids & Tenders</h3>
              <p className="text-xs text-slate-500">Review quotes from supermarkets and licensed traders</p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
              Live Escrow Protected
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-extrabold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                  <th className="py-3 px-4">Buyer Company</th>
                  <th className="py-3 px-4">Produce & Quantity</th>
                  <th className="py-3 px-4 text-right">Offered Bid Rate</th>
                  <th className="py-3 px-4">Settlement Terms</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bids.map((bid) => (
                  <tr key={bid.id} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-4">
                      <strong className="block text-slate-900 font-bold">{bid.buyer}</strong>
                      <span className="text-[10px] text-emerald-700 font-semibold">Verified Corporate Buyer</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-slate-800 block">{bid.crop}</span>
                      <span className="text-[11px] text-slate-500">{bid.requestedQty}</span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="text-sm font-black text-emerald-700">{bid.bidRate}</span>
                      <span className="block text-[10px] text-slate-400">Gov APMC: {bid.govBenchmark}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">
                      {bid.paymentTerms}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        bid.status.includes('Accepted')
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {bid.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {!bid.status.includes('Accepted') ? (
                        <button
                          onClick={() => handleAcceptBid(bid.id)}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold shadow-xs transition"
                        >
                          Accept Bid
                        </button>
                      ) : (
                        <span className="text-slate-400 text-xs font-semibold">Contract Locked</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* 5. List Harvest Modal */}
      {listHarvestOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-emerald-100">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
                  New Produce Listing
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-1">
                  List Your Harvest Lot (फसल जोड़ें)
                </h3>
              </div>
              <button
                onClick={() => setListHarvestOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 font-bold"
              >
                ✕
              </button>
            </div>

            {!listSuccess ? (
              <form onSubmit={handleListHarvestSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Crop & Variety:</label>
                  <input
                    type="text"
                    value={cropName}
                    onChange={(e) => setCropName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Available Quantity (Crates / Quintals):</label>
                  <input
                    type="text"
                    value={lotQuantity}
                    onChange={(e) => setLotQuantity(e.target.value)}
                    placeholder="e.g. 150 Crates (approx 3,000 kg)"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Expected Price (₹ / kg or ₹ / qtl):</label>
                  <input
                    type="text"
                    value={expectedPrice}
                    onChange={(e) => setExpectedPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 font-bold"
                    required
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Harvest / Pickup Location:</label>
                  <input
                    type="text"
                    defaultValue="Nashik Rural Sector 4 Farm Gate"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 font-medium"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setListHarvestOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold shadow-md shadow-emerald-600/20"
                  >
                    Publish to Marketplace
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-black text-slate-900">Harvest Lot Published!</h4>
                <p className="text-xs text-slate-500">
                  Your lot is now live on the Central Produce Catalog and visible to 1,200+ supermarkets and traders.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
