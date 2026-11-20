import React from 'react';
import { Sprout, Phone, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ currentLang, setCurrentLang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f7faf7] border-t border-emerald-100 text-slate-600 text-xs">
      {/* Top Banner / Callout for Farmers */}
      <div className="bg-emerald-50 border-b border-emerald-100/80 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-slate-900">
                National Kisan Call Center (Toll Free Helpline)
              </div>
              <p className="text-xs text-slate-500">
                Speak to agriculture scientists and mandi advisors in 22 regional languages
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:18001801551"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition shadow-xs"
            >
              Dial 1800-180-1551
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-xs">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-xl font-black text-slate-900">
                AI<span className="text-emerald-600">Agri</span>Central
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Empowering farmers, supermarket chains, wholesale traders, and consumers with a unified, transparent agricultural marketplace driven by live Government Mandi APIs, geospatial discovery, and AI agronomy.
            </p>
            <div className="flex items-center gap-2 text-emerald-800 text-[11px] font-semibold bg-emerald-100/60 p-2.5 rounded-xl border border-emerald-200/60 max-w-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Compliant with e-NAM & Agmarknet Open Data Protocols</span>
            </div>
          </div>

          {/* Col 2: Marketplace Modules */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
              Core Modules
            </h4>
            <ul className="space-y-2">
              <li><a href="#marketplace" className="hover:text-emerald-600 transition">Centralized Marketplace</a></li>
              <li><a href="#mandi-rates" className="hover:text-emerald-600 transition">Live Mandi Rates (e-NAM)</a></li>
              <li><a href="#interactive-map" className="hover:text-emerald-600 transition">Interactive Mandi Map</a></li>
              <li><a href="#crop-recommendation" className="hover:text-emerald-600 transition">AI Crop Advisor</a></li>
              <li><a href="#demo-section" className="hover:text-emerald-600 transition">Regional Voice Search</a></li>
            </ul>
          </div>

          {/* Col 3: For Stakeholders */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
              For Stakeholders
            </h4>
            <ul className="space-y-2">
              <li><a href="#for-stakeholders" className="hover:text-emerald-600 transition">Farmers & FPOs</a></li>
              <li><a href="#for-stakeholders" className="hover:text-emerald-600 transition">Supermarket Procurement</a></li>
              <li><a href="#for-stakeholders" className="hover:text-emerald-600 transition">Wholesale Mandi Traders</a></li>
              <li><a href="#for-stakeholders" className="hover:text-emerald-600 transition">Cold Storage Operators</a></li>
              <li><a href="#for-stakeholders" className="hover:text-emerald-600 transition">Household Consumers</a></li>
            </ul>
          </div>

          {/* Col 4: Regional Languages & Quick Switch */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
              Regional Accessibility
            </h4>
            <p className="text-[11px] text-slate-500">
              Switch landing page to your local regional language:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { code: 'en', label: 'English' },
                { code: 'hi', label: 'हिन्दी' },
                { code: 'kn', label: 'ಕನ್ನಡ' },
                { code: 'te', label: 'తెలుగు' },
                { code: 'mr', label: 'मराठी' }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
                    currentLang === lang.code
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Attribution Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} AIAgriCentral Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> for Indian Agriculture
            </span>
            <span>•</span>
            <span className="text-slate-600 font-medium">Gov Data Attribution: data.gov.in / Agmarknet</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
