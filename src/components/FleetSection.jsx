import React from 'react';
import { Users, CheckCircle, Shield, LifeBuoy, Music, Eye, Anchor, ArrowRight, Sparkles, Ship } from 'lucide-react';
import { BOAT_FLEET, BUSINESS_INFO } from '../data/boatData';

export default function FleetSection({ onSelectBoat }) {
  return (
    <section id="fleet" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Authentic Varanasi Ghats & Boat Riverfront Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 filter blur-[1px] pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=2000&q=80')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-500/30">
            <Anchor className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            Our Authorized Ganges Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif-kashi tracking-tight leading-tight">
            Choose Your Ideal Boat in Varanasi
          </h2>
          <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-slate-300">
            Whether you are hosting a 60-person tour group or taking a tranquil family sunrise ride across the 84 ghats, Ramji Boat Services has the perfect boat for you.
          </p>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {BOAT_FLEET.map((boat) => (
            <div
              key={boat.id}
              className={`rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-md ${
                boat.featured 
                  ? 'border-amber-400/80 bg-slate-900/90 shadow-gold-glow' 
                  : 'border-slate-800 bg-slate-900/80 hover:border-amber-500/40'
              }`}
            >
              <div>
                {/* Image & Header */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={boat.image}
                    alt={`${boat.title} Varanasi Ramji Boat Services`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/20" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-md ${
                      boat.featured
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-white text-slate-900'
                    }`}>
                      {boat.badge}
                    </span>
                  </div>

                  {/* Capacity Pill on Image */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between text-white gap-2">
                    <div className="min-w-0">
                      <h3 className="text-lg xs:text-xl sm:text-2xl font-bold font-serif drop-shadow-md truncate text-white">
                        {boat.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-amber-300 font-medium truncate">
                        {boat.idealFor}
                      </p>
                    </div>
                    <div className="bg-amber-500/90 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl border border-amber-300/40 text-right shrink-0">
                      <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-slate-950">Capacity</span>
                      <span className="text-sm sm:text-lg font-black text-slate-950">{boat.capacity}</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Quick Specs Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2 sm:py-3 mb-4 sm:mb-6 bg-slate-950/60 rounded-xl p-2.5 sm:p-3 border border-slate-800 text-center">
                    <div>
                      <span className="block text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase">Capacity</span>
                      <span className="text-xs sm:text-sm font-bold text-amber-300">{boat.capacity}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase">Decks</span>
                      <span className="text-xs sm:text-sm font-bold text-white">{boat.specs.decks}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase">Safety</span>
                      <span className="text-xs sm:text-sm font-bold text-emerald-400">100% Jackets</span>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase">Rates</span>
                      <span className="text-xs sm:text-sm font-bold text-amber-400">Direct Owner</span>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-2.5 sm:mb-3">
                    Boat Features & Inclusions
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {boat.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 sm:p-6 lg:p-8 pt-0">
                <div className="pt-3 sm:pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => onSelectBoat(boat)}
                    className={`w-full sm:flex-1 py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm tracking-wide transition flex items-center justify-center ${
                      boat.featured
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-gold-glow'
                        : 'bg-white text-slate-950 hover:bg-slate-200'
                    }`}
                  >
                    <span>Book {boat.capacity}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(boat.title)}%20(${encodeURIComponent(boat.capacity)}).%20Please%20share%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-3.5 rounded-xl border border-emerald-500 text-emerald-400 hover:bg-emerald-950/40 font-bold text-xs sm:text-sm text-center transition"
                  >
                    WhatsApp Quote
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-[11px] text-slate-400">
                    Direct booking with owner • No commission • Call: {BUSINESS_INFO.phone}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Group & Corporate Notice Banner */}
        <div className="mt-10 sm:mt-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/80 to-slate-900 text-white p-5 sm:p-8 shadow-2xl border border-amber-500/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2 text-center md:text-left">
              <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block border border-amber-500/30">
                Custom Charters & Large Tour Operators
              </span>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold font-serif text-white">
                Need Multiple Boats or 100+ Person Group Package?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                We organize multi-boat flotillas, Dev Deepawali VIP bookings, corporate retreats, and school/college tours with catering, sound systems, and flower offerings.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 shrink-0 w-full md:w-auto">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition shadow-gold-glow text-center"
              >
                Call: {BUSINESS_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramji%20Boat%20Services,%20we%20have%20a%20large%20group/event%20requirement`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition text-center"
              >
                Custom Inquiries
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
