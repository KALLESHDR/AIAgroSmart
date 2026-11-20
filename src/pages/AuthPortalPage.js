import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sprout, 
  ShieldCheck, 
  Store, 
  Truck, 
  Users, 
  CheckCircle2, 
  Check 
} from 'lucide-react';

export default function AuthPortalPage({ onBackToLanding, initialMode = 'login', initialRole = 'farmer' }) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'register'
  const [role, setRole] = useState(initialRole); // 'farmer' | 'supermarket' | 'trader' | 'consumer'
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const otpCode = ['1', '2', '3', '4'];
  const [authSuccess, setAuthSuccess] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobileNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setAuthSuccess(true);
    setTimeout(() => {
      onBackToLanding();
    }, 1800);
  };

  const roleDetails = {
    farmer: {
      title: "Farmer / FPO (किसान)",
      icon: <Sprout className="w-5 h-5 text-emerald-600" />,
      image: "/images/farmer-portrait.jpg",
      govDoc: "Kisan Credit Card (KCC) or Aadhaar",
      badge: "Zero Commission Direct Selling"
    },
    supermarket: {
      title: "Supermarket & Retail Chains",
      icon: <Store className="w-5 h-5 text-amber-600" />,
      image: "/images/supermarket-procurement.jpg",
      govDoc: "FSSAI License or Corporate GSTIN",
      badge: "Direct Farm Procurement"
    },
    trader: {
      title: "APMC Mandi Trader & Logistics",
      icon: <Truck className="w-5 h-5 text-blue-600" />,
      image: "/images/mandi-trade-yard.jpg",
      govDoc: "APMC Commission Agent License",
      badge: "Multi-Mandi Arbitrage Terminal"
    },
    consumer: {
      title: "Consumer / Bulk Society",
      icon: <Users className="w-5 h-5 text-teal-600" />,
      image: "/images/fresh-produce.jpg",
      govDoc: "Mobile Phone Number",
      badge: "Farm-Fresh to Doorstep"
    }
  };

  const currentRoleInfo = roleDetails[role];

  return (
    <div className="min-h-screen bg-[#fcfdfa] text-slate-800 flex flex-col font-sans">
      
      {/* 1. Header Bar */}
      <section className="bg-white border-b border-emerald-100 py-4 px-4 sm:px-6 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLanding}
              className="p-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition flex items-center gap-1.5 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-xs text-slate-500 font-semibold">
              AIAgriCentral Unified Access
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>e-NAM & PM-KISAN Synced</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. Main Login / Onboarding Split Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl w-full bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Column: Real Imagery & Role Highlights (5 cols) */}
          <div className="lg:col-span-5 relative bg-gradient-to-tr from-emerald-900 to-green-950 p-6 sm:p-8 text-white flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none">
              <img src={currentRoleInfo.image} alt={currentRoleInfo.title} className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 space-y-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-white/20 text-emerald-200">
                {currentRoleInfo.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-black">
                {mode === 'login' ? 'Sign In to Your Agri Portal' : 'Create Free Account'}
              </h2>
              <p className="text-emerald-100 text-xs leading-relaxed">
                Connect with 12,000+ farmers, 450+ mandis, and premier supermarket procurement chains across India.
              </p>
            </div>

            {/* Bottom Info Lockup */}
            <div className="relative z-10 pt-6 border-t border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Government e-NAM Benchmark Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant 24-hr Bank Settlement</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mother Tongue Voice Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Role Selector & Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            
            {/* Login vs Register Switcher */}
            <div className="flex bg-slate-100 p-1 rounded-2xl">
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`flex-1 py-2 rounded-xl text-xs font-black transition ${
                  mode === 'login'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Portal Login
              </button>
              <button
                type="button"
                onClick={() => setMode('register')}
                className={`flex-1 py-2 rounded-xl text-xs font-black transition ${
                  mode === 'register'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Join as Farmer / Buyer
              </button>
            </div>

            {/* Stakeholder Role Switcher Pills */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Select Your Role:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {[
                  { id: 'farmer', label: 'Farmer (किसान)' },
                  { id: 'supermarket', label: 'Supermarket' },
                  { id: 'trader', label: 'Mandi Trader' },
                  { id: 'consumer', label: 'Consumer' }
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id)}
                    className={`py-2 px-2.5 rounded-xl text-[11px] font-bold transition text-center ${
                      role === r.id
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/70'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            {!authSuccess ? (
              !otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      10-Digit Mobile Number (OTP Verification):
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">+91</span>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="98765 43210"
                        maxLength="10"
                        className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 font-bold text-slate-900 text-sm"
                        required
                      />
                    </div>
                  </div>

                  {mode === 'register' && (
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">
                        Required Verification ({currentRoleInfo.govDoc}):
                      </label>
                      <input
                        type="text"
                        placeholder={`Enter your ${currentRoleInfo.govDoc}`}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 font-medium"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-md shadow-emerald-600/20 transition active:scale-95"
                  >
                    Send OTP to Mobile
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4 text-xs animate-in fade-in">
                  <div className="space-y-1">
                    <span className="text-emerald-700 font-bold block">
                      OTP Sent to +91 {mobileNumber || '98765 43210'}
                    </span>
                    <p className="text-slate-500 text-[11px]">
                      Enter the 4-digit code received on your phone (Sample: 1 2 3 4).
                    </p>
                  </div>

                  <div className="flex gap-2 justify-center py-2">
                    {[0, 1, 2, 3].map((idx) => (
                      <input
                        key={idx}
                        type="text"
                        maxLength="1"
                        defaultValue={otpCode[idx]}
                        className="w-12 h-12 text-center text-lg font-black rounded-xl border-2 border-emerald-400 focus:outline-hidden text-emerald-900 bg-emerald-50/50"
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-md shadow-emerald-600/20 transition active:scale-95"
                  >
                    Verify & Access Dashboard
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setOtpSent(false)}
                      className="text-[11px] text-slate-400 hover:text-slate-700 font-semibold"
                    >
                      Change Mobile Number
                    </button>
                  </div>
                </form>
              )
            ) : (
              <div className="text-center py-6 space-y-3 animate-in zoom-in-95">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-base font-black text-slate-900">
                  Authentication Successful!
                </h3>
                <p className="text-xs text-slate-500">
                  Welcome back to AIAgriCentral {currentRoleInfo.title} portal. Redirecting to your workspace...
                </p>
              </div>
            )}

          </div>

        </div>
      </main>

    </div>
  );
}
