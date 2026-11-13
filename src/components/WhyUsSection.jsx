import React from 'react';
import { ShieldCheck, Anchor, Users, PhoneCall, Clock, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/boatData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Anchor: Anchor,
  Users: Users,
  PhoneCall: PhoneCall,
  Clock: Clock,
  Sparkles: Sparkles,
};

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-kashi-dark text-white relative overflow-hidden border-t border-b border-amber-500/20">
      
      {/* Decorative background radial lights */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-500/30">
            <Anchor className="w-3.5 h-3.5 text-amber-400" />
            The Ramji Boat Services Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-kashi tracking-tight">
            Why Travelers & Pilgrims Trust Us
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-300">
            Booking a boat in Varanasi should be serene, spiritual, and completely transparent — with verified safety, certified life jackets, and zero middleman commissions.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 hover:bg-slate-900 group backdrop-blur-md hover:shadow-gold-glow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 text-slate-950 flex items-center justify-center font-bold mb-5 group-hover:scale-110 transition-transform shadow-lg border border-amber-300/40">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-serif mb-2 group-hover:text-amber-300 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>Authorized Quality</span>
                  <span className="text-slate-500">★ ★ ★ ★ ★</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Kashi Heritage Quote Banner */}
        <div className="mt-14 sm:mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-950/80 via-slate-900 to-amber-950/80 border-2 border-amber-500/40 text-center shadow-gold-glow">
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-amber-200 leading-relaxed">
            "काशी में गंगा की लहरों पर एक बार नौका विहार, जीवन भर की अनमोल स्मृति बन जाता है।"
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-widest">
            <span className="text-amber-400">Ramji Boat Services</span>
            <span className="hidden sm:inline">•</span>
            <span>Madarwan, Samneghat, Lanka, BHU, Varanasi</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emerald-400">Direct Call: 8299027010</span>
          </div>
        </div>

      </div>
    </section>
  );
}
