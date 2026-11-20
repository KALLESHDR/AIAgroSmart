import React, { useState } from 'react';
import { 
  Search, 
  Mic, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Wheat, 
  Bot, 
  Navigation,
  Globe2,
  MapPin
} from 'lucide-react';
import { translations } from '../data/translations';

export default function Hero({ 
  currentLang, 
  onTriggerVoiceSearch, 
  activeVoice,
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
  onOpenMapScreen
}) {
  const t = translations[currentLang] || translations.en;
  const [selectedCategory, setSelectedCategory] = useState('All Commodities');

  const categories = [
    'All Commodities',
    'Grains (अनाज)',
    'Vegetables (सब्जियां)',
    'Pulses (दालें)',
    'Fruits (फल)',
    'Cash Crops (नकदी फसलें)'
  ];

  const quickKeywords = [
    { label: 'Wheat (गेहूं)', query: 'Wheat' },
    { label: 'Nashik Onion (कांदा)', query: 'Onion' },
    { label: 'Tomato (टमाटर)', query: 'Tomato' },
    { label: 'Soybean (सोयाबीन)', query: 'Soybean' },
    { label: 'Basmati Paddy (धान)', query: 'Basmati' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchQuery);
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24 bg-gradient-to-b from-emerald-50/50 via-[#fcfdfa] to-white">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-24 left-6 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-10 w-64 sm:w-80 h-64 sm:h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Unified Search & Objectives */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="truncate">{t.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]">
              {t.heroTitle1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 underline decoration-amber-400 decoration-wavy decoration-2">
                {t.heroTitleHighlight}
              </span>{' '}
              {t.heroTitle2}
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {t.heroSub}
            </p>

            {/* Responsive Voice & Text Search Bar */}
            <div className="bg-white p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 transition-all focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                
                {/* Category Dropdown */}
                <div className="relative sm:w-40 shrink-0">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full h-11 sm:h-12 pl-3 pr-7 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-hidden focus:bg-white cursor-pointer transition truncate"
                  >
                    {categories.map((cat, i) => (
                      <option key={i} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Input with Voice Search Button */}
                <div className="relative flex-1 flex items-center min-w-0">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3 pointer-events-none shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full h-11 sm:h-12 pl-9 sm:pl-10 pr-11 bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden font-medium"
                  />
                  
                  {/* Voice Button Inside Input */}
                  <button
                    type="button"
                    onClick={onTriggerVoiceSearch}
                    className={`absolute right-1.5 p-2 rounded-xl transition-all ${
                      activeVoice
                        ? 'bg-red-500 text-white animate-pulse shadow-xs shadow-red-300'
                        : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                    }`}
                    title="Speak your query in any regional language"
                    aria-label="Voice Search"
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="h-11 sm:h-12 px-5 sm:px-6 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-1.5 active:scale-95 shrink-0"
                >
                  <span>{t.searchBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Active Voice Listening Banner */}
              {activeVoice && (
                <div className="mt-2 p-2 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between text-xs text-red-800 animate-in fade-in">
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping shrink-0"></span>
                    <span className="font-bold truncate">{t.speakingActive}</span>
                  </div>
                  <button 
                    type="button"
                    onClick={onTriggerVoiceSearch}
                    className="text-red-700 font-bold hover:underline text-[11px] shrink-0"
                  >
                    Cancel
                  </button>
                </div>
              )}

              {/* Trending Quick Search Chips */}
              <div className="mt-2 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                <span className="font-semibold text-slate-700 text-[11px]">{t.quickSearch}</span>
                {quickKeywords.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setSearchQuery(item.query);
                      if (onSearchSubmit) onSearchSubmit(item.query);
                    }}
                    className="px-2 py-0.5 rounded-md bg-emerald-50/80 hover:bg-emerald-100 text-emerald-800 text-[11px] font-medium transition"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 5 Core Objectives Compact Navigation Badges */}
            <div className="pt-2">
              <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-slate-400 block mb-2">
                Direct Navigation to 5 Core Capabilities
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <a href="#marketplace" className="p-2 sm:p-2.5 rounded-xl bg-white border border-emerald-100 flex items-center gap-2 hover:border-emerald-300 transition shadow-2xs group">
                  <div className="p-1 rounded-md bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                    <Wheat className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-slate-700 truncate">1. Central Market</span>
                </a>

                <a href="#multi-language" className="p-2 sm:p-2.5 rounded-xl bg-white border border-emerald-100 flex items-center gap-2 hover:border-emerald-300 transition shadow-2xs group">
                  <div className="p-1 rounded-md bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition">
                    <Globe2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-slate-700 truncate">2. Multi-Language</span>
                </a>

                <a href="#ai-pricing" className="p-2 sm:p-2.5 rounded-xl bg-white border border-emerald-100 flex items-center gap-2 hover:border-emerald-300 transition shadow-2xs group">
                  <div className="p-1 rounded-md bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white transition">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-slate-700 truncate">3. AI Price & Sellers</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    if (onOpenMapScreen) onOpenMapScreen();
                  }}
                  className="p-2 sm:p-2.5 rounded-xl bg-white border border-emerald-100 flex items-center gap-2 hover:border-emerald-300 transition shadow-2xs group text-left"
                >
                  <div className="p-1 rounded-md bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-slate-700 truncate">4. 3D Map View</span>
                </button>

                <a href="#crop-recommendation" className="p-2 sm:p-2.5 rounded-xl bg-white border border-emerald-100 flex items-center gap-2 hover:border-emerald-300 transition shadow-2xs col-span-2 sm:col-span-1 group">
                  <div className="p-1 rounded-md bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-slate-700 truncate">5. AI Crop Advisor</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Agri Dashboard Preview Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-gradient-to-tr from-emerald-100/70 via-white to-amber-50/60 p-4 sm:p-5 rounded-3xl border border-emerald-200/80 shadow-xl shadow-emerald-900/5 space-y-3.5">
              
              {/* Real Farm Hero Showcase Banner */}
              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-emerald-200/90 shadow-sm group">
                <img 
                  src="/images/hero-farm.jpg" 
                  alt="AIAgriCentral Lush Sunlit Farm" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                
                {/* Live Banner Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/90 backdrop-blur-md text-emerald-900 border border-white/50 flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                    <span>Live Mandi Yard Feed</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 shadow-xs">
                    e-NAM Verified
                  </span>
                </div>

                {/* Overlaid Farmer Profile Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/90 backdrop-blur-md p-2 rounded-xl border border-white/60 shadow-md">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img 
                      src="/images/farmer-portrait.jpg" 
                      alt="Verified Modern Farmer" 
                      className="w-9 h-9 rounded-lg object-cover border border-emerald-300 shadow-2xs shrink-0"
                    />
                    <div className="min-w-0 truncate">
                      <div className="flex items-center gap-1">
                        <span className="font-extrabold text-xs text-slate-900 truncate">Rameshwar Patel</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium truncate block">Direct Farm Gate • Nashik Region</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-black text-emerald-700 bg-emerald-100/80 px-2 py-1 rounded-lg shrink-0">
                    4.9 ★ (88 Deals)
                  </span>
                </div>
              </div>

              {/* Card 1: Mandi Price & AI Price Advisor */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-emerald-100 shadow-2xs space-y-2.5">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Government Mandi Benchmark
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                      Sharbati Wheat (शरबती गेहूं)
                    </h4>
                    <p className="text-[11px] text-slate-500">Khanna APMC, Punjab • Grade-A</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-lg sm:text-xl font-black text-slate-900">₹2,480</div>
                    <div className="text-[11px] font-bold text-emerald-600 flex items-center justify-end">
                      <TrendingUp className="w-3 h-3 mr-0.5" />
                      +2.8% Today
                    </div>
                  </div>
                </div>

                {/* AI Advice Pill */}
                <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-200/70 text-xs text-slate-700 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] leading-relaxed">
                    <strong className="text-slate-900">AI Price Prediction: </strong>
                    <span>Surging mill demand in NCR. Recommended: <strong>Hold sale for 4 days</strong> for <strong>₹2,560/qtl</strong>.</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Interactive Nearby Seller Match with Real Produce Photo */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-emerald-100 shadow-2xs space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 font-semibold text-[11px]">
                    <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Nearby Verified Seller Match</span>
                  </div>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                    3.4 km away
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img 
                    src="/images/fresh-produce.jpg" 
                    alt="Fresh harvested produce in crates" 
                    className="w-12 h-12 rounded-xl object-cover border border-emerald-200 shadow-2xs shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <h5 className="font-bold text-xs sm:text-sm text-slate-900 truncate">Grade-A Fresh Tomatoes</h5>
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Fresh</span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">120 Crates Dew-Fresh • ₹21/kg (Gov Mandi is ₹22/kg)</p>
                  </div>
                  <a 
                    href="#interactive-map"
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition shrink-0"
                  >
                    Connect
                  </a>
                </div>
              </div>

              {/* Bottom Quick Trust Metrics */}
              <div className="pt-2.5 border-t border-emerald-100 grid grid-cols-3 text-center text-xs">
                <div>
                  <strong className="block text-slate-900 font-black text-sm">₹0</strong>
                  <span className="text-[11px] text-slate-500">Middleman Cut</span>
                </div>
                <div className="border-x border-slate-200">
                  <strong className="block text-slate-900 font-black text-sm">100%</strong>
                  <span className="text-[11px] text-slate-500">Bank Transfer</span>
                </div>
                <div>
                  <strong className="block text-slate-900 font-black text-sm">480+</strong>
                  <span className="text-[11px] text-slate-500">Gov Mandis</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
