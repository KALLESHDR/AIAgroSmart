import React, { useState } from 'react';
import { 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Store, 
  Truck, 
  ShoppingBag, 
  Sprout,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { platformRoles } from '../data/marketData';

export default function RoleSelector() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);

  const roleIcons = [
    <Sprout className="w-5 h-5 text-emerald-600" />,
    <Store className="w-5 h-5 text-amber-600" />,
    <Truck className="w-5 h-5 text-blue-600" />,
    <ShoppingBag className="w-5 h-5 text-teal-600" />
  ];

  const currentRole = platformRoles[selectedRoleIndex];

  return (
    <section id="for-stakeholders" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            Centralized Platform Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Every Stakeholder in the Agri Ecosystem
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Whether you cultivate the fields, run supermarket procurement, trade at mandis, or cook at home, AIAgriCentral provides tailored digital tools.
          </p>
        </div>

        {/* Role Toggle Selector */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {platformRoles.map((role, idx) => (
            <button
              key={role.id}
              onClick={() => setSelectedRoleIndex(idx)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 ${
                selectedRoleIndex === idx
                  ? 'border-emerald-600 bg-emerald-50/70 shadow-md ring-2 ring-emerald-200'
                  : 'border-slate-200/90 hover:border-emerald-300 hover:bg-slate-50/80 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-white shadow-xs border border-slate-100">
                  {roleIcons[idx]}
                </div>
                {selectedRoleIndex === idx && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                )}
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">{role.title}</h4>
                <p className="text-[11px] text-slate-500 font-medium truncate">{role.badge}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Role Interactive Showcase */}
        <div className="mt-8 max-w-4xl mx-auto bg-gradient-to-br from-emerald-50/40 via-white to-amber-50/30 rounded-3xl border border-emerald-100 shadow-xl p-6 sm:p-10 animate-in fade-in">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                {currentRole.badge}
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                {currentRole.highlight}
              </h3>

              <ul className="space-y-3">
                {currentRole.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs text-xs font-bold text-emerald-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>{currentRole.stat}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#join"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition active:scale-95"
                >
                  <span>{currentRole.actionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="md:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-emerald-100 shadow-md space-y-3.5">
              
              {/* Real Role Photo Banner */}
              <div className="relative h-36 rounded-xl overflow-hidden border border-slate-100 shadow-2xs group">
                <img 
                  src={[
                    "/images/farmer-portrait.jpg",
                    "/images/fresh-produce.jpg",
                    "/images/hero-farm.jpg",
                    "/images/fresh-produce.jpg"
                  ][selectedRoleIndex]} 
                  alt={currentRole.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-extrabold">
                  <span className="truncate">{currentRole.title} Verified Portal</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] uppercase tracking-wider shrink-0">
                    Live
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-700">Digital Flow Snapshot</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Verified</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
                  <span className="text-slate-700 font-medium">Auto-verify KYC & PM-KISAN / GST Credentials</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
                  <span className="text-slate-700 font-medium">View Live Mandi Benchmarks & AI Fair Price</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
                  <span className="text-slate-700 font-medium">Contract matching, pickup route & instant escrow pay</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50/70 text-[11px] text-emerald-800 border border-emerald-200/80 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero hidden commission fees. Guaranteed payment protection.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

