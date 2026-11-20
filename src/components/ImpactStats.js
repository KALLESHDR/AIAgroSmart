import React from 'react';
import { TrendingUp, Users, Globe, Sparkles } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      label: "Verified Farmers Connected",
      value: "12,400+",
      sub: "Across 14 states with PM-Kisan ID verification",
      icon: <Users className="w-5 h-5 text-emerald-600" />
    },
    {
      label: "Synced Mandis & APMCs",
      value: "480+",
      sub: "Live API feeds from e-NAM & Agmarknet",
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />
    },
    {
      label: "Direct Fair Trade Volume",
      value: "₹18.5 Cr",
      sub: "Eliminating ₹3.2 Cr in middleman commissions",
      icon: <Sparkles className="w-5 h-5 text-amber-600" />
    },
    {
      label: "Regional Languages Supported",
      value: "10+",
      sub: "Full text & voice search in local mother tongues",
      icon: <Globe className="w-5 h-5 text-teal-600" />
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-800 text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-400/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-200">
            Measurable Agricultural Impact
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Transforming Farm Economics with Transparency & AI
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center mb-4 shadow-sm">
                {s.icon}
              </div>
              <div className="text-3xl font-black tracking-tight text-white mb-1">
                {s.value}
              </div>
              <div className="text-sm font-bold text-emerald-100 mb-1">
                {s.label}
              </div>
              <p className="text-xs text-emerald-200/80 font-medium leading-relaxed">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
