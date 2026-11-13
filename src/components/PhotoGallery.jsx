import React, { useState } from 'react';
import { Camera, Sparkles, Eye, ArrowRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/boatData';

export default function PhotoGallery({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Ganga Aarti', 'Sunrise Tour', 'Our Fleet', '84 Ghats'];

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-500/30">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            Visual Memories of Kashi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-kashi tracking-tight text-white">
            Moments on Mother Ganga
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Glimpses of sacred Ganga Aarti, divine morning sunrises, and heritage voyages experienced aboard Ramji Boat Services.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-gold-glow'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-amber-500/20 shadow-xl hover:border-amber-400/60 transition-all duration-500 hover:shadow-gold-glow"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] sm:text-xs font-bold border border-amber-500/30">
                    {item.category}
                  </span>
                </div>

                {/* Content on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold font-serif leading-snug text-white group-hover:text-amber-300 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Quick Action Button on Hover */}
              <div className="p-3 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Ramji Boat Tour
                </span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-white hover:text-amber-300 flex items-center gap-1 transition"
                >
                  <span>Book This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-2xl transition transform hover:-translate-y-0.5"
          >
            Experience It Live • Book Your Boat Today!
          </button>
        </div>

      </div>
    </section>
  );
}
