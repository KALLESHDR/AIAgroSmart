import React from 'react';
import { 
  Building2, 
  Languages, 
  TrendingUp, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Bot 
} from 'lucide-react';

export default function CoreObjectives() {
  const objectives = [
    {
      id: "marketplace-card",
      anchorId: "marketplace-pillar",
      number: "01",
      title: "Centralized Agricultural Marketplace",
      subTitle: "Connecting Farmers, Buyers, Sellers, Supermarkets & Consumers",
      badge: "Gov API Integrated (e-NAM / Agmarknet)",
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      color: "emerald",
      bgLight: "bg-emerald-50/70",
      border: "border-emerald-200",
      description: "A single unified digital clearinghouse connecting every agricultural stakeholder. Supermarkets place verified bulk orders, local sellers trade directly, and everyday consumers buy farm-fresh harvests without commission-draining middlemen.",
      features: [
        "Direct integration with Government APMC & e-NAM market feeds",
        "Role-tailored dashboards for Farmers, Supermarket buyers, and Consumers",
        "Transparent quality grading, digital weighing slips & instant bank settlements",
        "Verified seller certification through PM-KISAN / State Agri ID verification"
      ],
      metric: "480+ Mandis Synced"
    },
    {
      id: "multi-language",
      anchorId: "multi-language",
      number: "02",
      title: "Multi-Language Support (Regional Localization)",
      subTitle: "Bridging the Digital Divide for India's Diverse Farming Communities",
      badge: "10+ Regional Languages",
      icon: <Languages className="w-6 h-6 text-amber-600" />,
      color: "amber",
      bgLight: "bg-amber-50/70",
      border: "border-amber-200",
      description: "Accessibility is our core philosophy. Farmers can navigate, negotiate, and access market intelligence in Hindi, Telugu, Tamil, Marathi, Bengali, Kannada, Punjabi, and English—complete with regional measurement units like quintal, bigha, and acre.",
      features: [
        "Instant toggle between regional languages with zero reloads",
        "Localized dialect phonetic matching for regional crop terminology",
        "Voice prompts and audio readouts for low-literacy users",
        "Currency & local measurement unit conversions (Quintals, Bighas, Acres)"
      ],
      metric: "10+ Languages Supported"
    },
    {
      id: "ai-pricing",
      anchorId: "ai-pricing",
      number: "03",
      title: "AI-Based Price & Seller Recommendations",
      subTitle: "Maximizing Farmer Profitability with Machine Learning Intelligence",
      badge: "Predictive AI Engine",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      color: "emerald",
      bgLight: "bg-emerald-50/70",
      border: "border-emerald-200",
      description: "AI continuously analyzes historical mandi rates, seasonality, arrival volumes, and weather disruptions to recommend the optimal selling price and alert farmers when nearby wholesale buyers or supermarkets are offering price premiums.",
      features: [
        "Real-time fair price benchmarks based on official government mandi averages",
        "7-day predictive rate forecasting to guide when to harvest or hold produce",
        "Smart proximity algorithm matching buyers with nearby verified producers",
        "Automated alerts when market demand spikes for your stored crops"
      ],
      metric: "98.4% Pricing Accuracy"
    },
    {
      id: "obj-4",
      anchorId: "map-voice-pillar",
      number: "04",
      title: "Interactive Map View & Voice Search",
      subTitle: "Geospatial Discovery Meets Voice-First Rural Usability",
      badge: "Interactive Map + Voice UI",
      icon: <MapPin className="w-6 h-6 text-teal-600" />,
      color: "teal",
      bgLight: "bg-teal-50/70",
      border: "border-teal-200",
      description: "Visual, map-centric logistics allows users to pin mandis, cold storage units, and farm gates with live stock levels. Farmers who cannot type can simply speak in their mother tongue to search prices, sellers, and transport.",
      features: [
        "Interactive geospatial pins showing mandis, warehouses, cold rooms & sellers",
        "Speech-to-text voice recognition tuned for agricultural terminology",
        "Route optimization for cold-chain pickups from multiple farm gates",
        "Visual radius filter (5km, 15km, 50km) for instant localized trade"
      ],
      metric: "Zero-Typing Voice Search"
    },
    {
      id: "obj-5",
      anchorId: "crop-ai-pillar",
      number: "05",
      title: "AI-Based Crop Recommendation Engine",
      subTitle: "Precision Agronomy Based on Soil, Weather & Market Demand",
      badge: "Agronomy + Economic AI",
      icon: <Bot className="w-6 h-6 text-green-700" />,
      color: "green",
      bgLight: "bg-green-50/70",
      border: "border-green-200",
      description: "Tells farmers not just what can grow, but what will sell profitably. By cross-referencing soil characteristics (pH, NPK), meteorological forecasts, and future market demand, the AI recommends the most lucrative crop choices before sowing.",
      features: [
        "Soil condition analysis (Black, Alluvial, Red Sandy Loam, Clay)",
        "Seasonal cycle matching (Kharif, Rabi, and Summer/Zaid planting seasons)",
        "Demand projection algorithm to prevent post-harvest supply gluts",
        "Projected per-acre revenue calculator and water management guidelines"
      ],
      metric: "ROI-Optimized Sowing"
    }
  ];

  return (
    <section id="marketplace" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Core Architecture & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            5 Core Pillars Powering <span className="text-emerald-600">AIAgriCentral</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Built from the ground up to solve rural fragmentation, linguistic barriers, price exploitation, and crop failure risks across the agricultural value chain.
          </p>
        </div>

        {/* 5 Objectives Grid */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <div 
              key={obj.id}
              id={obj.anchorId || obj.id}
              className={`rounded-3xl p-7 border ${obj.border} ${obj.bgLight} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between scroll-mt-24 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black tracking-widest text-slate-400">
                    OBJECTIVE {obj.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white text-slate-700 border border-slate-200/80 shadow-2xs">
                    {obj.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 border border-slate-100">
                  {obj.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {obj.title}
                </h3>
                <h4 className="text-xs font-semibold text-emerald-800 mt-1 mb-3">
                  {obj.subTitle}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {obj.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {obj.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-100">
                  {obj.metric}
                </span>
                <a 
                  href={`#demo-section`} 
                  className="text-slate-600 hover:text-emerald-600 inline-flex items-center gap-1 transition"
                >
                  <span>Explore Module</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
