import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MandiTicker from './components/MandiTicker';
import Hero from './components/Hero';
import CoreObjectives from './components/CoreObjectives';
import MarketplaceCatalog from './components/MarketplaceCatalog';
import InteractiveDemos from './components/InteractiveDemos';
import RoleSelector from './components/RoleSelector';
import ImpactStats from './components/ImpactStats';
import Footer from './components/Footer';
import FullScreenMapScreen from './components/FullScreenMapScreen';

// Submenu Dedicated Pages
import BrowseProducePage from './pages/BrowseProducePage';
import LiveMandiRatesPage from './pages/LiveMandiRatesPage';
import BulkProcurementPage from './pages/BulkProcurementPage';
import CropAdvisorPage from './pages/CropAdvisorPage';
import PriceForecastPage from './pages/PriceForecastPage';
import VoiceSearchHubPage from './pages/VoiceSearchHubPage';
import FarmersPortalPage from './pages/FarmersPortalPage';
import SupermarketsPortalPage from './pages/SupermarketsPortalPage';
import TradersPortalPage from './pages/TradersPortalPage';
import AuthPortalPage from './pages/AuthPortalPage';

import { Mic, X, Search, Sparkles } from 'lucide-react';
import { liveMandiFeeds } from './data/marketData';

function App() {
  const [currentView, setCurrentView] = useState('landing'); 
  // 'landing' | 'map' | 'browse-produce' | 'mandi-rates' | 'bulk-procurement' | 
  // 'crop-advisor' | 'price-forecast' | 'voice-search' | 'farmers-portal' | 
  // 'supermarkets-portal' | 'traders-portal' | 'auth-login' | 'auth-register'

  const [currentLang, setCurrentLang] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVoice, setActiveVoice] = useState(false);
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [voiceStatusText, setVoiceStatusText] = useState('Listening in your mother tongue...');
  const [searchResults, setSearchResults] = useState(null);

  // Trigger Voice Search Modal
  const handleTriggerVoiceSearch = () => {
    setActiveVoice(true);
    setVoiceModalOpen(true);
    setVoiceStatusText('Listening... Speak now (e.g. "Wheat prices in Punjab" or "Tomato sellers near me")');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.lang = currentLang === 'hi' ? 'hi-IN' : currentLang === 'kn' ? 'kn-IN' : currentLang === 'te' ? 'te-IN' : currentLang === 'mr' ? 'mr-IN' : 'en-IN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
          const speechResult = event.results[0][0].transcript;
          setSearchQuery(speechResult);
          handlePerformSearch(speechResult);
          setVoiceStatusText(`Query recognized: "${speechResult}"`);
          setTimeout(() => {
            setVoiceModalOpen(false);
            setActiveVoice(false);
          }, 1500);
        };

        recognition.onerror = () => {
          setVoiceStatusText('Could not access microphone directly. You can pick sample queries below.');
        };

        recognition.start();
      } catch (e) {
        console.log("Speech recognition error fallback");
      }
    }
  };

  const handlePerformSearch = (query) => {
    if (!query || query.trim() === '') {
      setSearchResults(null);
      return;
    }
    const cleanQuery = query.toLowerCase();
    const matched = liveMandiFeeds.filter(feed => 
      feed.commodity.toLowerCase().includes(cleanQuery) ||
      feed.mandi.toLowerCase().includes(cleanQuery) ||
      feed.variety.toLowerCase().includes(cleanQuery)
    );
    setSearchResults({
      query,
      results: matched.length > 0 ? matched : liveMandiFeeds.slice(0, 2)
    });
  };

  const handleVoiceSamplePick = (sampleText) => {
    setSearchQuery(sampleText);
    setVoiceStatusText(`Query: "${sampleText}"`);
    handlePerformSearch(sampleText);
    setTimeout(() => {
      setVoiceModalOpen(false);
      setActiveVoice(false);
    }, 1000);
  };

  // 1. Full Screen Interactive 3D Map
  if (currentView === 'map') {
    return (
      <FullScreenMapScreen 
        onBackToLanding={() => setCurrentView('landing')} 
        currentLang={currentLang} 
      />
    );
  }

  // 2. Marketplace Submenu Pages
  if (currentView === 'browse-produce') {
    return (
      <BrowseProducePage 
        onBackToLanding={() => setCurrentView('landing')} 
        onOpenMapScreen={() => setCurrentView('map')} 
      />
    );
  }

  if (currentView === 'mandi-rates') {
    return (
      <LiveMandiRatesPage 
        onBackToLanding={() => setCurrentView('landing')} 
        onOpenMapScreen={() => setCurrentView('map')}
        onNavigateToPriceForecast={() => setCurrentView('price-forecast')}
      />
    );
  }

  if (currentView === 'bulk-procurement') {
    return (
      <BulkProcurementPage 
        onBackToLanding={() => setCurrentView('landing')} 
        onOpenMapScreen={() => setCurrentView('map')} 
      />
    );
  }

  // 3. AI Solutions Submenu Pages (Powered by Gemini Service)
  if (currentView === 'crop-advisor') {
    return (
      <CropAdvisorPage 
        onBackToLanding={() => setCurrentView('landing')} 
        onOpenMapScreen={() => setCurrentView('map')} 
      />
    );
  }

  if (currentView === 'price-forecast') {
    return (
      <PriceForecastPage 
        onBackToLanding={() => setCurrentView('landing')} 
        onOpenMapScreen={() => setCurrentView('map')} 
      />
    );
  }

  if (currentView === 'voice-search') {
    return (
      <VoiceSearchHubPage 
        onBackToLanding={() => setCurrentView('landing')} 
        onOpenMapScreen={() => setCurrentView('map')} 
        initialLang={currentLang}
      />
    );
  }

  // 4. For Stakeholders Submenu Pages
  if (currentView === 'farmers-portal') {
    return (
      <FarmersPortalPage 
        onBackToLanding={() => setCurrentView('landing')} 
        onOpenMapScreen={() => setCurrentView('map')} 
      />
    );
  }

  if (currentView === 'supermarkets-portal') {
    return (
      <SupermarketsPortalPage 
        onBackToLanding={() => setCurrentView('landing')} 
        onOpenMapScreen={() => setCurrentView('map')}
        onNavigateToBulkProcurement={() => setCurrentView('bulk-procurement')}
      />
    );
  }

  if (currentView === 'traders-portal') {
    return (
      <TradersPortalPage 
        onBackToLanding={() => setCurrentView('landing')} 
        onOpenMapScreen={() => setCurrentView('map')}
        onNavigateToMandiRates={() => setCurrentView('mandi-rates')}
      />
    );
  }

  // 5. Auth / Join Screens
  if (currentView === 'auth-login') {
    return (
      <AuthPortalPage 
        onBackToLanding={() => setCurrentView('landing')} 
        initialMode="login"
        initialRole="farmer"
      />
    );
  }

  if (currentView === 'auth-register') {
    return (
      <AuthPortalPage 
        onBackToLanding={() => setCurrentView('landing')} 
        initialMode="register"
        initialRole="farmer"
      />
    );
  }

  // Default: Full Comprehensive Landing Page
  return (
    <div className="min-h-screen bg-[#fcfdfa] text-slate-800 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* 1. Navbar with Language Switcher & Gov API status */}
      <Navbar 
        currentLang={currentLang} 
        setCurrentLang={setCurrentLang}
        onTriggerVoiceSearch={handleTriggerVoiceSearch}
        activeVoice={activeVoice}
        onOpenMapScreen={() => setCurrentView('map')}
        onNavigate={setCurrentView}
      />

      {/* 2. Live Mandi Ticker (e-NAM / Agmarknet real-time prices) */}
      <MandiTicker 
        onSelectCommodity={(commodity) => {
          setSearchQuery(commodity);
          handlePerformSearch(commodity);
        }}
      />

      {/* 3. Hero Section with Search & Live Preview Card */}
      <main className="flex-1">
        <Hero 
          currentLang={currentLang}
          onTriggerVoiceSearch={handleTriggerVoiceSearch}
          activeVoice={activeVoice}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearchSubmit={handlePerformSearch}
          onOpenMapScreen={() => setCurrentView('map')}
          onNavigate={setCurrentView}
        />

        {/* Search Results Drawer if user searched */}
        {searchResults && (
          <section className="bg-emerald-50/70 border-b border-emerald-200 py-6 px-4 animate-in fade-in">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Search className="w-4 h-4 text-emerald-600" />
                  <span>Market Search Results for: <em>"{searchResults.query}"</em></span>
                </h3>
                <p className="text-xs text-slate-500">
                  Found {searchResults.results.length} active Mandis / Sellers matching your criteria.
                </p>
              </div>
              <button 
                onClick={() => setSearchResults(null)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 px-3 py-1 bg-white rounded-lg border border-slate-200"
              >
                Clear Search
              </button>
            </div>

            <div className="max-w-7xl mx-auto mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {searchResults.results.map((item) => (
                <div key={item.id} className="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-xs flex justify-between items-center text-xs">
                  <div>
                    <strong className="block font-bold text-slate-900">{item.commodity}</strong>
                    <span className="text-[11px] text-slate-500">{item.mandi} • {item.govSource}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-emerald-700 text-sm">₹{item.modalPrice}/qtl</span>
                    <span className="block text-[10px] text-emerald-600 font-bold">{item.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Core Objectives Detailed Pillar Breakdown */}
        <CoreObjectives onNavigate={setCurrentView} />

        {/* 5. Live Marketplace Produce Catalog (Objective #1) */}
        <MarketplaceCatalog 
          currentLang={currentLang} 
          onNavigateToCatalog={() => setCurrentView('browse-produce')}
        />

        {/* 6. Interactive Playground (AI Crop Advisor, Map Locator, Voice Search) */}
        <InteractiveDemos 
          activeVoice={activeVoice}
          onTriggerVoiceSearch={handleTriggerVoiceSearch}
          onOpenMapScreen={() => setCurrentView('map')}
          onNavigate={setCurrentView}
        />

        {/* 7. Role Selector: For Farmers, Supermarkets, Wholesalers, Consumers */}
        <RoleSelector onNavigate={setCurrentView} />

        {/* 8. Impact Stats */}
        <ImpactStats />

        {/* 9. Call to Action / Join Banner */}
        <section id="join" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-tr from-emerald-700 via-emerald-600 to-green-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl text-left">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/20 text-emerald-100 uppercase tracking-wider">
                  Open Direct Farmer & Buyer Onboarding
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Ready to transform how you buy, sell, or grow agricultural produce?
                </h3>
                <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
                  Join 12,000+ farmers, 450+ mandis, and premier supermarket procurement chains on India's centralized, AI-powered agricultural network.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button 
                  onClick={() => setCurrentView('auth-register')}
                  className="px-6 py-3.5 bg-white text-emerald-800 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:bg-emerald-50 transition active:scale-95 cursor-pointer"
                >
                  Register as Farmer (किसान)
                </button>
                <button 
                  onClick={() => setCurrentView('auth-register')}
                  className="px-6 py-3.5 bg-emerald-900/60 hover:bg-emerald-900 text-white font-extrabold text-xs sm:text-sm rounded-xl border border-emerald-400/40 transition active:scale-95 cursor-pointer"
                >
                  Register as Supermarket / Buyer
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Light Agricultural Footer */}
      <Footer 
        currentLang={currentLang} 
        setCurrentLang={setCurrentLang}
        onNavigate={setCurrentView}
      />

      {/* Voice Search Modal Popup */}
      {voiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl border border-emerald-100">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Multilingual Voice Assistant
              </span>
              <button 
                onClick={() => {
                  setVoiceModalOpen(false);
                  setActiveVoice(false);
                }}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Glowing Mic Visual */}
            <div className="relative my-4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center animate-ping absolute inset-0 m-auto"></div>
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-500/30 relative z-10">
                <Mic className="w-8 h-8 animate-pulse" />
              </div>
            </div>

            <h4 className="text-base font-bold text-slate-900">
              {voiceStatusText}
            </h4>
            <p className="text-xs text-slate-500">
              Speak in Kannada, Hindi, Telugu, Marathi, or English. You can ask for prices, crop suggestions, or nearby sellers.
            </p>

            {/* Quick Sample Voice Buttons */}
            <div className="pt-2 border-t border-slate-100 text-left space-y-2">
              <span className="text-[11px] font-bold text-slate-400 block">
                Or tap a regional query:
              </span>
              <div className="space-y-1.5 text-xs">
                {[
                  "ಕೋಲಾರ ಮಂಡಿ ಟೊಮೇಟೊ ದರ (Kolar Tomato Price)",
                  "गेहूं का ताजा मंडी भाव (Wheat Mandi Price)",
                  "టమాటా ధరలు మరియు సమీప రైతులు (Tomato Rates)",
                  "नाशिक कांदा बाजार भाव (Nashik Onion Rate)",
                  "Find organic tomato farmers within 10 km"
                ].map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleVoiceSamplePick(sample)}
                    className="w-full text-left p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-800 transition font-medium border border-slate-100 text-slate-700 flex items-center justify-between"
                  >
                    <span>{sample}</span>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setVoiceModalOpen(false);
                  setActiveVoice(false);
                  setCurrentView('voice-search');
                }}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition"
              >
                Open Full Voice Studio
              </button>
              <button
                onClick={() => {
                  setVoiceModalOpen(false);
                  setActiveVoice(false);
                }}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
