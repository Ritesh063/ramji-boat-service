import React from 'react';
import { Sun, Flame, Compass, Sparkles, Users, HeartHandshake, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { TOUR_PACKAGES, BUSINESS_INFO } from '../data/boatData';

const iconMap = {
  Sun: Sun,
  Flame: Flame,
  Compass: Compass,
  Sparkles: Sparkles,
  Users: Users,
  HeartHandshake: HeartHandshake,
};

export default function ToursSection({ onSelectTour }) {
  return (
    <section id="tours" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            Varanasi River Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif-kashi tracking-tight">
            Magical Boat Tours & Ganga Aarti
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Witness the timeless spiritual beauty of Kashi from the sacred river Ganga. Choose your tour or customize your itinerary with Ramji Boat Services.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((tour) => {
            const IconComponent = iconMap[tour.icon] || Compass;
            return (
              <div
                key={tour.id}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-amber-400"
              >
                <div className="p-6 sm:p-7">
                  
                  {/* Icon & Timing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {tour.popular && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold tracking-wide">
                        ★ Top Choice
                      </span>
                    )}
                  </div>

                  {/* Title & Hindi Subtitle */}
                  <h3 className="text-xl font-black text-slate-900 font-serif group-hover:text-amber-600 transition">
                    {tour.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-800 mt-0.5">
                    {tour.hindiTitle}
                  </p>

                  {/* Duration Badge */}
                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{tour.timing} ({tour.duration})</span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider block">
                      Tour Highlights
                    </span>
                    {tour.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mr-2 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommended Vessel */}
                  <div className="mt-5 p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/60 text-xs">
                    <span className="font-bold text-slate-700">Recommended: </span>
                    <span className="font-extrabold text-amber-900">{tour.recommendedBoat}</span>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-6 sm:p-7 pt-0">
                  <button
                    onClick={() => onSelectTour(tour)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs tracking-wider uppercase transition flex items-center justify-center space-x-1.5"
                  >
                    <span>Inquire for this Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Aarti Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-200">
                VIP Front-Row Ganges Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-serif-kashi">
                Experience Dashashwamedh Maha Aarti from the River
              </h3>
              <p className="text-amber-100 text-sm max-w-2xl">
                Avoid the massive crowd standing on the stairs. Anchor right in front of the priests with our spacious 50-60 person Big Boat or family 20-25 person boat.
              </p>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20reserve%20a%20boat%20for%20the%20Dashashwamedh%20Evening%20Ganga%20Aarti`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white text-slate-950 hover:bg-amber-100 font-black text-sm tracking-wide shadow-xl transition shrink-0"
            >
              Reserve Ganga Aarti Boat Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
