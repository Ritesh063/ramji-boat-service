import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { FAMOUS_GHATS, BUSINESS_INFO } from '../data/boatData';

export default function GhatsExperience() {
  return (
    <section id="ghats" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <Compass className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            Sacred Geography of Kashi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-serif-kashi tracking-tight leading-tight">
            Explore Varanasi's Historic 84 Ghats
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600">
            From our serene boarding station at Samneghat (near BHU) to the celestial fires of Manikarnika, our boats glide peacefully along the sacred crescent curve of Mother Ganga.
          </p>
        </div>

        {/* Ghats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FAMOUS_GHATS.map((ghat, index) => (
            <div
              key={index}
              className="rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group bg-slate-50 flex flex-col justify-between hover:border-amber-400"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={ghat.image}
                    alt={`${ghat.name} Varanasi Ganga Ghat`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Significance Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] sm:text-xs font-bold border border-amber-400/30">
                      {ghat.significance}
                    </span>
                  </div>

                  {/* Title & Hindi Script on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <h3 className="font-bold text-lg sm:text-xl font-serif text-white">{ghat.name}</h3>
                    </div>
                    <p className="text-xs text-amber-200/90 font-medium ml-5">{ghat.hindi}</p>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ghat.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>{ghat.timeFromBase}</span>
                </span>
                <span className="font-bold text-amber-700 hover:text-amber-800">
                  84 Ghats Tour →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Boarding Point Highlights Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-2 border-amber-300/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start sm:items-center space-x-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-extrabold text-amber-800 tracking-wider">Convenient & Crowdfree</span>
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                Primary Boarding Point: Samneghat (Madarwan, Lanka, BHU)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Spacious vehicle parking, no narrow suffocating alleys, and easy cab accessibility. Pickups also available from Assi Ghat & Dashashwamedh upon request!
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs uppercase tracking-wider shrink-0 transition text-center shadow-md"
          >
            Get Location & Directions
          </a>
        </div>

      </div>
    </section>
  );
}
