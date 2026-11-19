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
    <section id="tours" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Authentic Varanasi Dashashwamedh Ganga Aarti & Riverfront Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 filter blur-[1px] pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=2000&q=80')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 border border-orange-500/30">
            <Sparkles className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            Varanasi River Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif-kashi tracking-tight leading-tight">
            Magical Boat Tours & Ganga Aarti
          </h2>
          <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-slate-300">
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
                className="rounded-2xl sm:rounded-3xl bg-slate-900/85 border border-amber-500/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-amber-400/70 backdrop-blur-md hover:shadow-gold-glow"
              >
                {/* Tour Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/20" />
                  
                  {/* Icon & Popular Pill */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center shadow-md font-bold">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {tour.popular && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black tracking-wide uppercase shadow">
                        ★ Top Choice
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg sm:text-xl font-bold font-serif leading-tight text-white group-hover:text-amber-300 transition">
                      {tour.title}
                    </h3>
                    <p className="text-xs font-bold text-amber-300 mt-0.5">
                      {tour.hindiTitle}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 text-[11px] sm:text-xs font-semibold border border-slate-700">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{tour.timing} ({tour.duration})</span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {tour.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 pt-3.5 border-t border-slate-800 space-y-1.5">
                      <span className="text-[10px] sm:text-[11px] font-extrabold uppercase text-amber-400/80 tracking-wider block">
                        Tour Highlights
                      </span>
                      {tour.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Vessel */}
                  <div className="mt-4 p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-xs">
                    <span className="font-bold text-slate-300">Recommended: </span>
                    <span className="font-extrabold text-amber-300">{tour.recommendedBoat}</span>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => onSelectTour(tour)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs tracking-wider uppercase transition flex items-center justify-center space-x-1.5 shadow-gold-glow"
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
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 text-white shadow-2xl relative overflow-hidden border border-amber-400/40">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-amber-200">
                VIP Front-Row Ganges Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-serif-kashi leading-tight">
                Experience Dashashwamedh Maha Aarti from the River
              </h3>
              <p className="text-amber-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Avoid the massive crowd standing on the stairs. Anchor right in front of the priests with our spacious 50-60 person Big Boat or family 20-25 person boat.
              </p>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20reserve%20a%20boat%20for%20the%20Dashashwamedh%20Evening%20Ganga%20Aarti`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 text-amber-300 hover:bg-black font-black text-xs sm:text-sm tracking-wide shadow-2xl transition shrink-0 text-center border border-amber-400"
            >
              Reserve Ganga Aarti Boat Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
