import React from 'react';
import { Users, CheckCircle, Shield, LifeBuoy, Music, Eye, Anchor, ArrowRight, Sparkles } from 'lucide-react';
import { BOAT_FLEET, BUSINESS_INFO } from '../data/boatData';

export default function FleetSection({ onSelectBoat }) {
  return (
    <section id="fleet" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Anchor className="w-3.5 h-3.5 text-amber-600" />
            Our Authorized Ganges Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif-kashi tracking-tight">
            Choose Your Ideal Boat in Varanasi
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Whether you are hosting a 60-person tour group or taking a tranquil family sunrise ride across the 84 ghats, Ramji Boat Services has the perfect boat for you.
          </p>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {BOAT_FLEET.map((boat) => (
            <div
              key={boat.id}
              className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl ${
                boat.featured 
                  ? 'border-amber-400 ring-2 ring-amber-400/20 bg-gradient-to-b from-amber-50/30 to-white' 
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div>
                {/* Image & Header */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={boat.image}
                    alt={`${boat.title} Varanasi Ramji Boat Services`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md ${
                      boat.featured
                        ? 'bg-amber-500 text-white'
                        : 'bg-white text-slate-900'
                    }`}>
                      {boat.badge}
                    </span>
                  </div>

                  {/* Capacity Pill on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif drop-shadow-md">
                        {boat.title}
                      </h3>
                      <p className="text-xs text-amber-200 font-medium">
                        {boat.idealFor}
                      </p>
                    </div>
                    <div className="bg-amber-600/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-300/40 text-right">
                      <span className="block text-[10px] uppercase font-bold text-amber-100">Capacity</span>
                      <span className="text-lg font-black text-white">{boat.capacity}</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8">
                  {/* Quick Specs Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3 mb-6 bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                    <div>
                      <span className="block text-[11px] text-slate-500 font-semibold uppercase">Capacity</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{boat.capacity}</span>
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-500 font-semibold uppercase">Decks</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{boat.specs.decks}</span>
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-500 font-semibold uppercase">Safety</span>
                      <span className="text-xs sm:text-sm font-bold text-emerald-700">100% Jackets</span>
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-500 font-semibold uppercase">Rates</span>
                      <span className="text-xs sm:text-sm font-bold text-amber-700">Best Price</span>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                    Boat Features & Inclusions
                  </h4>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {boat.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-8 pt-0">
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onSelectBoat(boat)}
                    className={`w-full sm:flex-1 py-3 px-5 rounded-xl font-bold text-sm tracking-wide transition flex items-center justify-center ${
                      boat.featured
                        ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Book {boat.capacity} Boat</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(boat.title)}%20(${encodeURIComponent(boat.capacity)}).%20Please%20share%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-3 rounded-xl border border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold text-sm text-center transition"
                  >
                    WhatsApp Quote
                  </a>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-xs text-slate-400">
                    Direct booking with owner • No commission • Call: {BUSINESS_INFO.phone}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Group & Corporate Notice Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-amber-900/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block">
                Custom Charters & Large Tour Operators
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif">
                Need Multiple Boats or 100+ Person Group Package?
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl">
                We organize multi-boat flotillas, Dev Deepawali VIP bookings, corporate retreats, and school/college tours with catering, sound systems, and flower offerings.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition shadow-lg text-center"
              >
                Call: {BUSINESS_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramji%20Boat%20Services,%20we%20have%20a%20large%20group/event%20requirement`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition text-center"
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
