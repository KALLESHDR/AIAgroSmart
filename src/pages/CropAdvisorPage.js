import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Sparkles, 
  Sprout, 
  Droplet, 
  Sun, 
  Layers, 
  RefreshCw, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { getSmartCropRecommendation } from '../services/geminiService';

export default function CropAdvisorPage({ onBackToLanding, onOpenMapScreen }) {
  const [soilType, setSoilType] = useState('Black Cotton Soil');
  const [season, setSeason] = useState('Kharif (Monsoon)');
  const [region, setRegion] = useState('Central & Peninsular India');
  const [irrigation, setIrrigation] = useState('Drip Irrigation & Borewell');
  const [acreage, setAcreage] = useState(5);

  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const handleGenerateRecommendation = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const resultText = await getSmartCropRecommendation({
        soil: soilType,
        season,
        region,
        irrigation
      });

      setRecommendation({
        rawText: resultText,
        soil: soilType,
        season,
        region,
        irrigation,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
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
              <span>AI Solutions</span>
              <span>/</span>
              <span className="font-bold text-emerald-800">AI Crop Recommendation</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Precision Agronomy Engine</span>
            </span>
            <button
              onClick={onOpenMapScreen}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 border border-emerald-200"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>View Soil Map</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Banner with Soil & Seedling Real Photo */}
      <section className="relative bg-gradient-to-r from-emerald-950 via-green-950 to-slate-900 text-white overflow-hidden py-10 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img src="/images/crop-soil-ai.jpg" alt="Soil and precision agriculture" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <Sprout className="w-3.5 h-3.5 text-emerald-300" />
              <span>Intelligent Agronomy & Yield Optimization</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Optimal Crop Selection by Soil, Season & Market Demand
            </h1>
            <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
              Don't guess what to sow. Our algorithmic agronomy engine analyzes your specific soil texture, irrigation capacity, and forward mandi demand curves to maximize net farm revenue.
            </p>
          </div>

          {/* Precision Metrics Box */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[10px] text-emerald-300 uppercase font-bold block">Avg Profit Increase</span>
              <strong className="text-lg font-black text-white block mt-0.5">+24.5%</strong>
              <span className="text-[10px] text-slate-300">vs random sowing</span>
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[10px] text-emerald-300 uppercase font-bold block">Forward Demand</span>
              <strong className="text-lg font-black text-amber-300 block mt-0.5">e-NAM Synced</strong>
              <span className="text-[10px] text-slate-300">Harvest price benchmark</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Interactive Agronomy Form & Output */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: 5 Columns */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-base font-extrabold text-slate-900">Farm Parameters</h2>
                <p className="text-xs text-slate-500">Configure your field conditions</p>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">Step 1 of 2</span>
            </div>

            <form onSubmit={handleGenerateRecommendation} className="space-y-4 text-xs">
              
              {/* Soil Type */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Soil Classification (ಮಣ್ಣಿನ ಪ್ರಕಾರ):</span>
                </label>
                <select
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-emerald-500 font-medium"
                >
                  <option value="Black Cotton Soil">Black Cotton Soil (ಕಪ್ಪು ಹತ್ತಿ ಮಣ್ಣು / काली मिट्टी)</option>
                  <option value="Alluvial Soil">Alluvial Silt / Loam (ಮೆಕ್ಕಲು ಮಣ್ಣು / जलोढ़ मिट्टी)</option>
                  <option value="Red Sandy Loam">Red Sandy Loam (ಕೆಂಪು ಮರಳು ಮಣ್ಣು / लाल दोमट)</option>
                  <option value="Laterite Soil">Laterite Soil (ಲ್ಯಾಟರೈಟ್ ಮಣ್ಣು / लेटराइट)</option>
                  <option value="Clayey Loam">Heavy Clayey Loam (ಜೇಡಿಮಣ್ಣು / चिकनी मिट्टी)</option>
                </select>
              </div>

              {/* Season */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Cultivation Season (ಹಂಗಾಮು / मौसम):</span>
                </label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-emerald-500 font-medium"
                >
                  <option value="Kharif (Monsoon - Jun to Oct)">Kharif Season (Monsoon / ಮುಂಗಾರು / खरीफ)</option>
                  <option value="Rabi (Winter - Nov to Mar)">Rabi Season (Winter / ಹಿಂಗಾರು / रबी)</option>
                  <option value="Zaid (Summer - Mar to Jun)">Zaid Season (Summer / ಬೇಸಿಗೆ / जायद)</option>
                </select>
              </div>

              {/* Region */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>State / Agro-Climatic Zone:</span>
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-emerald-500 font-medium"
                >
                  <option value="Karnataka (Kolar, Belagavi, Shimoga)">Karnataka (Southern Plateau & Hills)</option>
                  <option value="Maharashtra (Nashik, Vidarbha, Marathwada)">Maharashtra (Deccan Plateau & Tapi)</option>
                  <option value="Punjab & Haryana (Khanna, Karnal)">Punjab & Haryana (Trans-Gangetic Plains)</option>
                  <option value="Telangana & Andhra (Warangal, Guntur)">Telangana & Andhra (Krishna-Godavari Basin)</option>
                  <option value="Madhya Pradesh (Malwa, Indore)">Madhya Pradesh (Central Plateau)</option>
                </select>
              </div>

              {/* Irrigation */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Droplet className="w-3.5 h-3.5 text-blue-500" />
                  <span>Water & Irrigation Availability:</span>
                </label>
                <select
                  value={irrigation}
                  onChange={(e) => setIrrigation(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-emerald-500 font-medium"
                >
                  <option value="Drip Irrigation & Borewell">Drip Irrigation & High-Yield Borewell</option>
                  <option value="Canal Irrigation / Flood">Canal Network / River Lift Irrigation</option>
                  <option value="Sprinkler & Farm Pond">Sprinkler System & Farm Pond Reservoir</option>
                  <option value="Rainfed (Monsoon Dependent)">Strictly Rainfed (Monsoon Dependent)</option>
                </select>
              </div>

              {/* Farm Size */}
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-bold text-slate-700">Total Cultivable Land:</span>
                  <strong className="text-emerald-800 font-black">{acreage} Acres</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={acreage}
                  onChange={(e) => setAcreage(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>1 Acre</span>
                  <span>50 Acres</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl font-extrabold text-xs shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-2 active:scale-95 disabled:opacity-75"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Evaluating Soil & Mandi Trajectories...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Generate Agronomy Recommendation</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right Output: 7 Columns */}
          <div className="lg:col-span-7 space-y-4">
            
            {loading ? (
              <div className="bg-white rounded-3xl p-12 border border-emerald-100 shadow-xs text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto animate-pulse">
                  <RefreshCw className="w-8 h-8 animate-spin" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Consulting Soil & Demand Models...
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                    Matching your {soilType} texture with {season} temperature cycles and wholesale mandi forward contracts.
                  </p>
                </div>
              </div>
            ) : recommendation ? (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-lg space-y-6 animate-in fade-in">
                
                {/* Result Top Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Agronomy Report Generated</span>
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mt-1">
                      Optimal Crop Plan for {recommendation.soil}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 self-start sm:self-auto">
                    Synced at {recommendation.timestamp}
                  </span>
                </div>

                {/* Highlight Cards Grid */}
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-100">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase block">Selected Season</span>
                    <strong className="text-xs font-black text-slate-900 block mt-0.5">{recommendation.season}</strong>
                  </div>
                  <div className="p-3.5 bg-blue-50/70 rounded-2xl border border-blue-100">
                    <span className="text-[10px] font-bold text-blue-800 uppercase block">Water Setup</span>
                    <strong className="text-xs font-black text-slate-900 block mt-0.5">{recommendation.irrigation}</strong>
                  </div>
                  <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-100">
                    <span className="text-[10px] font-bold text-amber-800 uppercase block">Total Acreage</span>
                    <strong className="text-xs font-black text-slate-900 block mt-0.5">{acreage} Acres</strong>
                  </div>
                </div>

                {/* Structured Text Result */}
                <div className="p-4 sm:p-5 bg-slate-50/90 rounded-2xl border border-slate-200/80 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Field-Level Agronomy & Economic Assessment:</span>
                  </h4>
                  <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line space-y-2 font-medium">
                    {recommendation.rawText}
                  </div>
                </div>

                {/* Direct Action Footer */}
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs">
                    <strong className="text-emerald-900 block">Ready to order seeds or inspect local buyers?</strong>
                    <span className="text-emerald-700 text-[11px]">Find certified seed suppliers and nearest mandi buyers on the map.</span>
                  </div>
                  <button
                    onClick={onOpenMapScreen}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 whitespace-nowrap"
                  >
                    Locate Seed Stores & Buyers
                  </button>
                </div>

              </div>
            ) : (
              /* Default Initial Showcase Card */
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <img 
                    src="/images/farmer-portrait.jpg" 
                    alt="Farmer" 
                    className="w-12 h-12 rounded-2xl object-cover border border-emerald-200" 
                  />
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      Sample Analysis: Black Cotton Soil (Kharif)
                    </h3>
                    <span className="text-xs text-emerald-600 font-semibold">Standard Model Benchmark</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-emerald-50/50 rounded-2xl border border-emerald-100/70">
                    <strong className="text-emerald-900 block font-bold mb-1">
                      1. Top Recommended Crops & Yield:
                    </strong>
                    <p className="text-slate-600 leading-relaxed">
                      • Hybrid Cotton (Rasi-659): 22-25 Quintals/Acre<br />
                      • Yellow Soybean (JS-9560): 18-22 Quintals/Acre<br />
                      • Pigeon Pea (Arhar/Tur): 8-10 Quintals intercropped
                    </p>
                  </div>

                  <div className="p-3.5 bg-amber-50/50 rounded-2xl border border-amber-100/70">
                    <strong className="text-amber-950 block font-bold mb-1">
                      2. Projected Net Revenue:
                    </strong>
                    <p className="text-slate-700 leading-relaxed">
                      ₹78,000 - ₹96,000 per acre with current export and domestic mill procurement tenders.
                    </p>
                  </div>

                  <div className="p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100/70">
                    <strong className="text-blue-950 block font-bold mb-1">
                      3. Forward Market Assessment:
                    </strong>
                    <p className="text-slate-700 leading-relaxed">
                      Soybean oilseed crushing plants in Indore & Latur are projecting early delivery premiums of ₹140/qtl for low-moisture lots.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleGenerateRecommendation}
                  className="w-full py-2.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 rounded-xl font-bold text-xs transition border border-slate-200"
                >
                  Click "Generate Agronomy Recommendation" on left to customize
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
