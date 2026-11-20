import React, { useState, useRef } from 'react';
import { TrendingUp, TrendingDown, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { liveMandiFeeds } from '../data/marketData';

export default function MandiTicker({ onSelectCommodity }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollContainerRef = useRef(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
    if (onSelectCommodity) {
      onSelectCommodity(item.commodity);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div id="mandi-rates" className="bg-emerald-50/70 border-b border-emerald-100/90 py-2.5 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Ticker Label Badge */}
          <div className="flex items-center gap-1.5 whitespace-nowrap shrink-0 text-[11px] font-extrabold text-emerald-950 bg-emerald-100/90 px-2.5 py-1.5 rounded-xl border border-emerald-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping shrink-0"></span>
            <span className="uppercase tracking-wider">Live APMC Mandi Rates</span>
            <span className="hidden md:inline text-[10px] text-emerald-700 font-semibold">(e-NAM Synced)</span>
          </div>

          {/* Left Scroll Button */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="hidden sm:flex p-1.5 rounded-lg bg-white border border-emerald-200 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition shrink-0 shadow-2xs"
            aria-label="Scroll ticker left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Scrolling Ticker Cards (Clean No-Scrollbar Container) */}
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-3 overflow-x-auto no-scrollbar py-0.5 w-full text-xs scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {liveMandiFeeds.map((feed) => (
              <button
                key={feed.id}
                type="button"
                onClick={() => handleSelect(feed)}
                className={`flex items-center gap-3 px-3 py-1.5 rounded-xl border bg-white shadow-2xs whitespace-nowrap transition-all text-left hover:border-emerald-400 hover:shadow-xs shrink-0 ${
                  selectedItem?.id === feed.id ? 'border-emerald-600 ring-2 ring-emerald-200 bg-emerald-50/50' : 'border-slate-200/80'
                }`}
              >
                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{feed.commodity}</span>
                    <span className="text-[10px] font-normal text-slate-500">({feed.variety})</span>
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1">
                    <span>{feed.mandi}</span>
                    <span className="text-emerald-700 font-semibold">• {feed.govSource}</span>
                  </div>
                </div>

                <div className="text-right pl-2.5 border-l border-slate-100">
                  <div className="font-black text-slate-900 text-xs">
                    ₹{feed.modalPrice.toLocaleString('en-IN')}
                    <span className="text-[10px] font-normal text-slate-500"> /qtl</span>
                  </div>
                  <div className={`flex items-center justify-end text-[11px] font-bold ${
                    feed.trendDirection === 'up' ? 'text-emerald-600' : 'text-amber-600'
                  }`}>
                    {feed.trendDirection === 'up' ? (
                      <TrendingUp className="w-3 h-3 mr-0.5" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-0.5" />
                    )}
                    <span>{feed.trend}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            type="button"
            onClick={() => scroll('right')}
            className="hidden sm:flex p-1.5 rounded-lg bg-white border border-emerald-200 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition shrink-0 shadow-2xs"
            aria-label="Scroll ticker right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

        {/* Selected Commodity Quick Detail Popup */}
        {selectedItem && (
          <div className="mt-2.5 p-3 bg-white rounded-2xl border border-emerald-200 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>{selectedItem.commodity}</strong> at <strong>{selectedItem.mandi}</strong> is trading at{' '}
                <strong className="text-emerald-700 font-bold">₹{selectedItem.modalPrice}/qtl</strong> ({selectedItem.trend} today).
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] text-slate-500 hidden sm:inline">Source: {selectedItem.govSource}</span>
              <a 
                href="#interactive-map"
                className="px-3 py-1 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition"
              >
                Locate Nearby Sellers
              </a>
              <button 
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                aria-label="Dismiss detail"
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
