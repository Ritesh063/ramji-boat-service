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
    <section id="tours" className="py-14 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            Varanasi River Experiences
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 font-serif-kashi tracking-tight leading-tight">
            Magical Boat Tours & Ganga Aarti
          </h2>
          <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-slate-600">
            Witness the timeless spiritual beauty of Kashi from the sacred river Ganga. Choose your tour or customize your itinerary with Ramji Boat Services.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TOUR_PACKAGES.map((tour) => {
            const IconComponent = iconMap[tour.icon] || Compass;
            return (
              <div
                key={tour.id}
                className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-amber-400"
              >
                <div className="p-5 sm:p-7">
                  
                  {/* Icon & Timing */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    {tour.popular && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] sm:text-xs font-extrabold tracking-wide">
                        ★ Top Choice
                      </span>
                    )}
                  </div>

                  {/* Title & Hindi Subtitle */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 font-serif group-hover:text-amber-600 transition leading-snug">
                    {tour.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-800 mt-0.5">
                    {tour.hindiTitle}
                  </p>

                  {/* Duration Badge */}
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{tour.timing} ({tour.duration})</span>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase text-slate-400 tracking-wider block">
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
                  <div className="mt-4 p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/60 text-xs">
                    <span className="font-bold text-slate-700">Recommended: </span>
                    <span className="font-extrabold text-amber-900">{tour.recommendedBoat}</span>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-5 sm:p-7 pt-0">
                  <button
                    onClick={() => onSelectTour(tour)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs tracking-wider uppercase transition flex items-center justify-center space-x-1.5"
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
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2 text-center lg:text-left">
              <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-amber-200">
                VIP Front-Row Ganges Experience
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-serif-kashi leading-tight">
                Experience Dashashwamedh Maha Aarti from the River
              </h3>
              <p className="text-amber-100 text-xs sm:text-sm max-w-2xl">
                Avoid the massive crowd standing on the stairs. Anchor right in front of the priests with our spacious 50-60 person Big Boat or family 20-25 person boat.
              </p>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20reserve%20a%20boat%20for%20the%20Dashashwamedh%20Evening%20Ganga%20Aarti`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-slate-950 hover:bg-amber-100 font-black text-xs sm:text-sm tracking-wide shadow-xl transition shrink-0 text-center"
            >
              Reserve Ganga Aarti Boat Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
