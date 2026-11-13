import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import { FAMOUS_GHATS, BUSINESS_INFO } from '../data/boatData';

export default function GhatsExperience() {
  return (
    <section id="ghats" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Sacred Geography of Kashi
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif-kashi tracking-tight">
            Explore Varanasi's Historic 84 Ghats
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From our quiet boarding station at Samneghat to the divine fires of Manikarnika, our boats glide peacefully along the eternal arc of Mother Ganga.
          </p>
        </div>

        {/* Ghats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FAMOUS_GHATS.map((ghat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group bg-slate-50 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <img
                    src={ghat.image}
                    alt={`${ghat.name} Varanasi Ganga Ghat`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-bold text-base font-serif">{ghat.name}</span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ghat.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-xs font-bold text-amber-700 flex items-center">
                  <span>Covered in 84 Ghats Tour</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Boarding Point Highlights */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Our Primary Boarding Point: Samneghat (Madarwan, Lanka, BHU)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Wide vehicle parking, no crowded narrow alleys, and easy access from Banaras Hindu University (BHU). Pickups from Assi & Dashashwamedh also arranged!
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition"
          >
            Get Location & Directions
          </a>
        </div>

      </div>
    </section>
  );
}
