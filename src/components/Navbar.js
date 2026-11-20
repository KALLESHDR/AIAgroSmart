import React, { useState, useEffect, useRef } from 'react';
import { 
  Sprout, 
  Globe, 
  Mic, 
  MapPin, 
  TrendingUp, 
  ShoppingBag, 
  Bot, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronDown, 
  Building, 
  Store, 
  Truck, 
  Users, 
  Sparkles, 
  PhoneCall 
} from 'lucide-react';
import { translations } from '../data/translations';

export default function Navbar({ 
  currentLang, 
  setCurrentLang, 
  onTriggerVoiceSearch,
  activeVoice,
  onOpenMapScreen,
  onNavigate
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'marketplace' | 'ai' | 'stakeholders' | null

  const dropdownRef = useRef(null);

  const t = translations[currentLang] || translations.en;

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' }
  ];

  const currentLangObj = languages.find(l => l.code === currentLang) || languages[0];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleDropdownToggle = (menuName) => {
    setActiveDropdown(prev => prev === menuName ? null : menuName);
  };

  const handleLinkClick = (viewName) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(viewName);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs" ref={dropdownRef}>
      
      {/* 1. TOP UTILITY BAR (Gov API status, Toll-free line, Language Switcher) */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-800 text-white text-[11px] py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left Info Tag */}
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/30 text-emerald-100 border border-emerald-400/30 whitespace-nowrap">
              <ShieldCheck className="w-3 h-3 mr-1 text-emerald-300 shrink-0" />
              <span>e-NAM & Agmarknet Synced</span>
            </span>
            <span className="hidden md:inline text-emerald-100/90 truncate">
              Live Mandi Price Feeds from 480+ APMCs across India
            </span>
          </div>

          {/* Right Info: Kisan Helpline & Language */}
          <div className="flex items-center gap-3 shrink-0 text-emerald-100">
            <a 
              href="tel:18001801551" 
              className="hidden sm:inline-flex items-center gap-1 hover:text-white transition whitespace-nowrap"
            >
              <PhoneCall className="w-3 h-3 text-amber-300" />
              <span>Kisan Helpline: <strong className="text-white">1800-180-1551</strong></span>
            </a>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-900/70 hover:bg-emerald-900 border border-emerald-600/60 text-white font-medium text-xs transition"
              >
                <Globe className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span className="font-bold">{currentLangObj.native}</span>
                <ChevronDown className="w-3 h-3 opacity-75 shrink-0" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-36 bg-white text-slate-800 rounded-xl shadow-xl border border-emerald-100 py-1.5 z-50">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Select Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-emerald-50 transition ${
                        currentLang === lang.code ? 'font-bold text-emerald-700 bg-emerald-50/70' : 'text-slate-600'
                      }`}
                    >
                      <span>{lang.native}</span>
                      <span className="text-[10px] text-slate-400">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20">
          
          {/* Logo & Brand Lockup */}
          <div className="flex items-center gap-3">
            <button 
              type="button"
              onClick={() => handleLinkClick('landing')} 
              className="flex items-center gap-2.5 group shrink-0 text-left cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform shrink-0">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                    AI<span className="text-emerald-600">Agri</span>Central
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200/90 whitespace-nowrap">
                    Gov Synced
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium tracking-normal hidden md:block">
                  Unified Agricultural Marketplace & AI Ecosystem
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Menus */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Menu 1: Marketplace Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => handleDropdownToggle('marketplace')}
                className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg flex items-center gap-1.5 transition whitespace-nowrap ${
                  activeDropdown === 'marketplace'
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Marketplace</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'marketplace' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'marketplace' && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-emerald-100 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="p-2 border-b border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Centralized Agri Trade
                    </span>
                  </div>
                  <div className="space-y-1 pt-1">
                    <button
                      type="button"
                      onClick={() => handleLinkClick('browse-produce')}
                      className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">Browse Produce Catalog</div>
                        <div className="text-[11px] text-slate-500">Grains, pulses, vegetables, cash crops & spices</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('mandi-rates')}
                      className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition group"
                    >
                      <div className="p-2 rounded-lg bg-amber-100 text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-amber-800">Live APMC Mandi Rates</div>
                        <div className="text-[11px] text-slate-500">Government e-NAM & Agmarknet modal prices</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('bulk-procurement')}
                      className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition group"
                    >
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition">
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700">Bulk Supermarket Procurement</div>
                        <div className="text-[11px] text-slate-500">Traceable farm-to-shelf contracts with FPOs</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Menu 2: AI Solutions Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => handleDropdownToggle('ai')}
                className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg flex items-center gap-1.5 transition whitespace-nowrap ${
                  activeDropdown === 'ai'
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                <Bot className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>AI Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'ai' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'ai' && (
                <div className="absolute left-0 mt-2 w-84 bg-white rounded-2xl shadow-xl border border-emerald-100 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="p-2 border-b border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Machine Learning & Agronomy
                    </span>
                  </div>
                  <div className="space-y-1 pt-1">
                    <button
                      type="button"
                      onClick={() => handleLinkClick('crop-advisor')}
                      className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition group"
                    >
                      <div className="p-2 rounded-lg bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white transition">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">AI Crop Recommendation</div>
                        <div className="text-[11px] text-slate-500">Optimal crops by soil, weather & forward demand</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('price-forecast')}
                      className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition group"
                    >
                      <div className="p-2 rounded-lg bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700">Price & Seller Prediction</div>
                        <div className="text-[11px] text-slate-500">7-day mandi rate forecasts & best time to sell</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('voice-search')}
                      className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                        <Mic className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">Regional Voice Search</div>
                        <div className="text-[11px] text-slate-500">Hands-free search in Hindi, Telugu, Marathi & Kannada</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Menu 3: Interactive Map Direct Link */}
            <button
              type="button"
              onClick={() => {
                if (onOpenMapScreen) onOpenMapScreen();
              }}
              className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Interactive 3D Map</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800">Live</span>
            </button>

            {/* Menu 4: Stakeholders Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => handleDropdownToggle('stakeholders')}
                className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg flex items-center gap-1.5 transition whitespace-nowrap ${
                  activeDropdown === 'stakeholders'
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>For Stakeholders</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'stakeholders' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'stakeholders' && (
                <div className="absolute right-0 mt-2 w-76 bg-white rounded-2xl shadow-xl border border-emerald-100 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="p-2 border-b border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Who is AIAgriCentral For?
                    </span>
                  </div>
                  <div className="space-y-1 pt-1">
                    <button
                      type="button"
                      onClick={() => handleLinkClick('farmers-portal')}
                      className="w-full text-left flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-50 transition text-xs font-bold text-slate-800 hover:text-emerald-800"
                    >
                      <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700"><Sprout className="w-3.5 h-3.5" /></span>
                      <span>For Farmers & FPOs (किसान)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLinkClick('supermarkets-portal')}
                      className="w-full text-left flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-50 transition text-xs font-bold text-slate-800 hover:text-emerald-800"
                    >
                      <span className="p-1.5 rounded-lg bg-amber-100 text-amber-700"><Store className="w-3.5 h-3.5" /></span>
                      <span>For Supermarkets & Retailers</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLinkClick('traders-portal')}
                      className="w-full text-left flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-50 transition text-xs font-bold text-slate-800 hover:text-emerald-800"
                    >
                      <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700"><Truck className="w-3.5 h-3.5" /></span>
                      <span>For Mandi Traders & Wholesalers</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Desktop Right CTAs: Voice Search + Portal Login + Register */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleLinkClick('voice-search')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all whitespace-nowrap ${
                activeVoice
                  ? 'bg-red-50 text-red-600 border-red-300 animate-pulse shadow-xs shadow-red-200'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <Mic className={`w-3.5 h-3.5 ${activeVoice ? 'text-red-500 animate-bounce' : 'text-emerald-600'}`} />
              <span>{activeVoice ? 'Listening...' : 'Voice Search'}</span>
            </button>

            <button 
              type="button"
              onClick={() => handleLinkClick('auth-login')}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-xl transition whitespace-nowrap cursor-pointer"
            >
              {t.loginBtn}
            </button>

            <button 
              type="button"
              onClick={() => handleLinkClick('auth-register')}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-xl shadow-md shadow-emerald-600/20 transition hover:scale-[1.02] active:scale-95 whitespace-nowrap cursor-pointer"
            >
              {t.registerBtn}
            </button>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => handleLinkClick('voice-search')}
              className={`p-2 rounded-xl border transition-all ${
                activeVoice 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}
              title="Voice Search"
            >
              <Mic className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. RESPONSIVE MOBILE & TABLET DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[108px] sm:top-[116px] z-50 bg-black/40 backdrop-blur-xs flex flex-col justify-start animate-in fade-in">
          <div className="bg-white border-b border-emerald-100 max-h-[calc(100vh-116px)] overflow-y-auto p-4 sm:p-6 space-y-5 shadow-2xl">
            
            {/* Mobile Language Switcher */}
            <div className="p-3 bg-emerald-50/70 rounded-2xl border border-emerald-100 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Choose Your Regional Language</span>
                </span>
                <span className="text-[10px] text-emerald-700 uppercase">{currentLangObj.label}</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setCurrentLang(lang.code);
                    }}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold text-center transition ${
                      currentLang === lang.code
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    {lang.native}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Nav Links Section */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block mb-1">
                Marketplace
              </span>

              <button
                type="button"
                onClick={() => handleLinkClick('browse-produce')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-sm font-bold text-slate-800 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <span>Browse Produce Catalog</span>
                </div>
                <span className="text-xs text-emerald-600 font-semibold">e-NAM</span>
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('mandi-rates')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-sm font-bold text-slate-800 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span>Live APMC Mandi Rates</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-100/70 px-2 py-0.5 rounded">Live</span>
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('bulk-procurement')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-sm font-bold text-slate-800 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                    <Building className="w-4 h-4" />
                  </div>
                  <span>Bulk Supermarket Procurement</span>
                </div>
              </button>

              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block mt-3 mb-1">
                AI Solutions & Maps
              </span>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenMapScreen) onOpenMapScreen();
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-sm font-bold text-slate-800 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Interactive 3D Map</span>
                </div>
                <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded">GPS 3D</span>
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('crop-advisor')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-sm font-bold text-slate-800 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-100 text-green-700">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span>AI Crop Recommendation</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Smart</span>
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('price-forecast')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-sm font-bold text-slate-800 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>Price & Seller Prediction</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('voice-search')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-sm font-bold text-slate-800 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                    <Mic className="w-4 h-4" />
                  </div>
                  <span>Regional Voice Search</span>
                </div>
              </button>

              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block mt-3 mb-1">
                For Stakeholders
              </span>

              <button
                type="button"
                onClick={() => handleLinkClick('farmers-portal')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-sm font-bold text-slate-800 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <span>For Farmers & FPOs (किसान)</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('supermarkets-portal')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-sm font-bold text-slate-800 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                    <Store className="w-4 h-4" />
                  </div>
                  <span>For Supermarkets & Retailers</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('traders-portal')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-sm font-bold text-slate-800 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span>For Mandi Traders & Wholesalers</span>
                </div>
              </button>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-2 border-t border-slate-100 space-y-2.5">
              <button
                type="button"
                onClick={() => handleLinkClick('voice-search')}
                className="w-full py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-emerald-200 transition"
              >
                <Mic className="w-4 h-4 text-emerald-600" />
                <span>Speak in Your Mother Tongue (Voice Search)</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button 
                  type="button"
                  onClick={() => handleLinkClick('auth-login')}
                  className="py-3 px-4 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition text-center"
                >
                  {t.loginBtn}
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('auth-register')}
                  className="py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md text-center transition"
                >
                  {t.registerBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}