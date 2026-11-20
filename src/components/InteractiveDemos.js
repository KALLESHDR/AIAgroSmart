import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  MapPin, 
  Mic, 
  Sparkles, 
  Layers, 
  Volume2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { cropRecommendationDatabase } from '../data/marketData';
import AgriLiveMap from './AgriLiveMap';

export default function InteractiveDemos({ activeVoice, onTriggerVoiceSearch, onOpenMapScreen }) {
  const [activeTab, setActiveTab] = useState('crop-ai'); // 'crop-ai' | 'map' | 'voice'

  // Sync tab with URL hash if user clicks navbar links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#crop-recommendation') {
        setActiveTab('crop-ai');
      } else if (hash === '#interactive-map') {
        setActiveTab('map');
      } else if (hash === '#voice-demo') {
        setActiveTab('voice');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Crop AI State
  const [soilType, setSoilType] = useState('Black Soil');
  const [season, setSeason] = useState('Kharif (Monsoon)');
  const [analyzingCrop, setAnalyzingCrop] = useState(false);
  const [cropResult, setCropResult] = useState(cropRecommendationDatabase['Black Soil']['Kharif (Monsoon)']);

  // Voice Simulation State
  const [voiceQuerySample, setVoiceQuerySample] = useState(null);
  const [voicePlaying, setVoicePlaying] = useState(false);

  const voiceDemos = [
    {
      lang: "ಕನ್ನಡ (Kannada)",
      text: "ಕೋಲಾರ ಎಪಿಎಂಸಿ ಮಂಡಿಯಲ್ಲಿ ಟೊಮೇಟೊ ಇಂದಿನ ದರ ಮತ್ತು ಹತ್ತಿರದ ರೈತರು",
      translation: "Today's tomato rate in Kolar APMC mandi and nearest farmers",
      result: "ಕೋಲಾರ ಮಂಡಿ ಟೊಮೇಟೊ ದರ: ₹2,200/ಕ್ವಿಂಟಾಲ್ (+4.5%). 3.4 ಕಿ.ಮೀ ದೂರದಲ್ಲಿ 'ರಾಮೇಶ್ವರ್ ಫಾರ್ಮ್ಸ್'ನಲ್ಲಿ 120 ಕ್ರೇಟ್‌ಗಳು ನೇರ ಖರೀದಿಗೆ ಲಭ್ಯವಿದೆ."
    },
    {
      lang: "हिन्दी (Hindi)",
      text: "नासिक मंडी में प्याज का ताजा भाव और पास के कोल्ड स्टोरेज दिखाओ",
      translation: "Show fresh onion price in Nashik Mandi & nearest cold storages",
      result: "लासलगांव मंडी प्याज भाव: ₹1,950/क्विंटल। 5.1 किमी दूर 'किसान शीतगृह' में 840 टन जगह उपलब्ध है।"
    },
    {
      lang: "తెలుగు (Telugu)",
      text: "వరంగల్ లో పత్తి ప్రస్తుత ధర ఎంత? మరియు సమీప కొనుగోలుదారులు ఎవరు?",
      translation: "What is current cotton price in Warangal and nearest bulk buyers?",
      result: "వరంగల్ మండి పత్తి ధర: ₹7,120/క్వింటల్ (+1.9%). 8.9 కి.మీ దూరంలో రిలయన్స్ ప్రొక్యూర్‌మెంట్ హబ్ కొనుగోలుకు సిద్ధంగా ఉంది."
    },
    {
      lang: "मराठी (Marathi)",
      text: "सोयाबीन चालू बाजार समिती दर आणि चांगल्या नफ्यासाठी एआय सल्ला द्या",
      translation: "Soybean live APMC rate and AI advice for maximum profit",
      result: "सोयाबीन भाव: ₹4,890/क्विंटल (+0.6%). एआय सल्ला: पुढील 5 दिवसांत मागणी वाढेल, थोडा माल राखून ठेवा."
    },
    {
      lang: "English",
      text: "Find verified tomato farmers within 10 km offering direct dispatch",
      translation: "Find verified tomato farmers within 10 km offering direct dispatch",
      result: "Found Rameshwar Organic Farms (3.4 km away): 120 crates fresh tomatoes @ ₹21/kg with Gov Kisan ID verification."
    }
  ];

  const handleAnalyzeCrop = () => {
    setAnalyzingCrop(true);
    setTimeout(() => {
      setCropResult(cropRecommendationDatabase[soilType][season]);
      setAnalyzingCrop(false);
    }, 450);
  };

  const handleSimulateVoice = (demo) => {
    setVoiceQuerySample(demo);
    setVoicePlaying(true);
    setTimeout(() => {
      setVoicePlaying(false);
    }, 2500);
  };

  return (
    <section id="demo-section" className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/40 to-white relative scroll-mt-20">
      {/* Invisible anchor targets for navbar navigation */}
      <div id="interactive-map" className="relative -top-24"></div>
      <div id="crop-recommendation" className="relative -top-24"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Interactive Live Playground
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience the Core Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Test drive our AI Crop Recommendation Engine, Interactive Geospatial Mandi Map, and Regional Multilingual Voice Search right here.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white p-1.5 rounded-2xl border border-emerald-200/80 shadow-md inline-flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('crop-ai')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'crop-ai'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>1. AI Crop Recommendation</span>
            </button>

            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'map'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>2. Interactive Map & Sellers</span>
            </button>

            <button
              onClick={() => setActiveTab('voice')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'voice'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60'
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>3. Regional Voice Search</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: AI CROP RECOMMENDATION ENGINE (Objective 5) */}
        {/* ============================================================== */}
        {activeTab === 'crop-ai' && (
          <div className="mt-10 bg-white rounded-3xl border border-emerald-100 shadow-xl p-6 sm:p-10 animate-in fade-in duration-300">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Form Input Parameters */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    <Layers className="w-4 h-4" />
                    <span>Input Your Farm Conditions</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    AI Soil, Weather & Market Demand Advisor
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select your soil type and upcoming planting season to simulate how our agronomy model evaluates yield potential, weather suitability, and market profit.
                  </p>
                </div>

                {/* Soil Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">
                    Soil Condition & Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Black Soil', 'Alluvial Soil', 'Red Sandy Loam'].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSoilType(s)}
                        className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
                          soilType === s
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Season Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">
                    Upcoming Planting Season
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Kharif (Monsoon)', 'Rabi (Winter)', 'Zaid (Summer)'].map((sea) => (
                      <button
                        key={sea}
                        type="button"
                        onClick={() => setSeason(sea)}
                        className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
                          season === sea
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        {sea}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Run Analysis Action */}
                <button
                  onClick={handleAnalyzeCrop}
                  disabled={analyzingCrop}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl font-bold text-sm shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-2 active:scale-98"
                >
                  <Bot className={`w-4 h-4 ${analyzingCrop ? 'animate-spin' : ''}`} />
                  <span>{analyzingCrop ? 'Analyzing Soil & Market Feeds...' : 'Run AI Crop Recommendation'}</span>
                </button>

                <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Calibrated with ICAR soil profiles & current APMC forward contracts</span>
                </div>
              </div>

              {/* AI Output Card */}
              <div className="lg:col-span-7 bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/40 rounded-2xl border border-emerald-200 p-6 sm:p-7 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></span>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      AI Agronomy Output
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {soilType} • {season}
                  </span>
                </div>

                {/* Recommended Crops Chips */}
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Top Recommended Crops
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cropResult.recommendedCrops.map((crop, idx) => (
                      <span 
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-white border border-emerald-200 shadow-2xs font-extrabold text-sm text-emerald-900 flex items-center gap-1.5"
                      >
                        <span className="text-emerald-600">✓</span>
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Real Precision AgTech Soil & Crop Photo */}
                <div className="relative h-32 rounded-xl overflow-hidden border border-emerald-200/80 shadow-2xs group">
                  <img 
                    src="/images/crop-soil-ai.jpg" 
                    alt="Precision Agriculture Soil and Healthy Crop" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-xs font-extrabold">
                    <span>Precision Soil Telemetry: Active (pH 6.8 • NPK Optimal)</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[10px]">ICAR Verified</span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Expected Yield</span>
                    <div className="text-sm font-black text-slate-900 mt-1">{cropResult.expectedYield}</div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Projected Revenue</span>
                    <div className="text-sm font-black text-emerald-700 mt-1">{cropResult.projectedRevenue}</div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Market Demand</span>
                    <div className="text-sm font-black text-amber-700 mt-1">{cropResult.demandLevel}</div>
                  </div>
                </div>

                {/* AI Explanation & Agronomy Insight */}
                <div className="p-4 rounded-xl bg-white border border-amber-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>AI Agronomic & Economic Rationale:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cropResult.aiInsight}
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>💧 Water requirement: <strong>{cropResult.waterRequirement}</strong></span>
                    <a href="#join" className="text-emerald-700 font-bold hover:underline flex items-center gap-1">
                      <span>Get Seed & Fertilizer Plan</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: INTERACTIVE MAP & NEARBY SELLER FINDER (Objective 3 & 4) */}
        {/* ============================================================== */}
        {activeTab === 'map' && (
          <div className="mt-8 space-y-4 animate-in fade-in duration-300">
            {/* Fullscreen 3D Map Banner Callout */}
            <div className="bg-gradient-to-r from-emerald-800 via-slate-900 to-emerald-950 rounded-2xl p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-emerald-500/30">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white flex items-center gap-2">
                    <span>Explore in Full-Screen 3D Mode</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                      3D Tilt + Satellite
                    </span>
                  </h4>
                  <p className="text-xs text-slate-300">
                    Full immersion map view with 6 dynamic pins around your coordinates, live sidebar, and real images.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenMapScreen}
                className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition active:scale-95 shrink-0"
              >
                Launch Full-Screen 3D Map
              </button>
            </div>

            <AgriLiveMap />
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: REGIONAL VOICE SEARCH SIMULATOR (Objective 2 & 4) */}
        {/* ============================================================== */}
        {activeTab === 'voice' && (
          <div className="mt-10 bg-white rounded-3xl border border-emerald-100 shadow-xl p-6 sm:p-10 animate-in fade-in duration-300">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-inner">
                <Mic className={`w-8 h-8 ${voicePlaying ? 'text-red-500 animate-bounce' : 'text-emerald-600'}`} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Voice Search for Farmers in Their Mother Tongue
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
                No typing required. A farmer in Nashik, Warangal, or Bhatinda can simply tap the microphone and speak naturally to discover prices, cold storages, and buyers.
              </p>

              {/* Sample Voice Prompts to Try */}
              <div className="mt-8 text-left space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center">
                  Click any sample to simulate voice query in that language:
                </span>

                <div className="grid sm:grid-cols-2 gap-3">
                  {voiceDemos.map((demo, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSimulateVoice(demo)}
                      className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 text-left transition bg-white shadow-2xs group"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-700 mb-1">
                        <span>{demo.lang}</span>
                        <Volume2 className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">
                        "{demo.text}"
                      </div>
                      <div className="text-[11px] text-slate-500 italic">
                        Meaning: {demo.translation}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulation Result Box */}
              {voiceQuerySample && (
                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 text-left space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Voice Query Understood & Matched ({voiceQuerySample.lang}):</span>
                  </div>
                  <div className="text-sm font-bold text-slate-800 bg-white p-3 rounded-xl border border-emerald-100">
                    {voiceQuerySample.result}
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
                    <span>⚡ Speech Recognition Latency: <strong>320 ms</strong></span>
                    <span className="text-emerald-700 font-bold">100% Regional Dialect Matched</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
