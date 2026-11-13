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
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Decorative background gradients */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Anchor className="w-3.5 h-3.5 text-amber-400" />
            The Ramji Boat Services Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-serif-kashi tracking-tight">
            Why Travelers & Pilgrims Trust Us
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Booking a boat in Varanasi should be serene, spiritual, and completely transparent — with no high street bargaining or unverified safety.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:bg-slate-800 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center font-bold mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif mb-2 group-hover:text-amber-400 transition">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Local Kashi Heritage Quote Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-amber-950/70 via-slate-800 to-amber-950/70 border border-amber-600/30 text-center">
          <p className="text-lg sm:text-xl font-serif italic text-amber-200">
            "काशी में गंगा की लहरों पर एक बार नौका विहार, जीवन भर की अनमोल स्मृति बन जाता है।"
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-wider">
            Ramji Boat Services • Madarwan, Samneghat, Lanka, BHU, Varanasi
          </p>
        </div>

      </div>
    </section>
  );
}
