import React from 'react';
import { Phone, MessageCircle, Calendar, Users, Shield, Star, MapPin, Sparkles, Anchor, Compass, Ship, Flame } from 'lucide-react';
import { BUSINESS_INFO, STATS_HIGHLIGHTS } from '../data/boatData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative overflow-hidden bg-kashi-dark text-white pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28">
      
      {/* Background Spiritual Glows & Ganges Radiance */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-amber-500/15 via-orange-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />

      {/* Decorative Golden Arch Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Live Booking Ticker Pill */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide shadow-gold-glow backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>श्री काशी विश्वनाथ धाम • Ganga Aarti & Sunrise Slots Open Today</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand details, Capacity & Direct Booking CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Main Header / Brand */}
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="text-xl">🕉️</span>
                <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-400 uppercase font-serif">
                  Authorized Sacred River Services • Kashi
                </span>
              </div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight font-serif-kashi leading-[1.08]">
                RAMJI <span className="text-gold-gradient">BOAT SERVICES</span>
              </h1>
              <p className="mt-3 text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-100 font-serif leading-tight">
                Enjoy a Beautiful Boat Ride in Varanasi!
              </p>
              <p className="mt-2 text-base xs:text-lg sm:text-xl text-amber-300 font-medium">
                {BUSINESS_INFO.hindiTagline}
              </p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Experience the divine magic of Kashi from the sacred lap of Mother Ganga. 
              Specializing in <strong>Subah-e-Banaras Sunrise tours</strong>, world-famous <strong>Dashashwamedh Ganga Aarti VIP front-row viewing</strong>, 
              and complete 84 Ghats heritage journeys with experienced local Naviks.
            </p>

            {/* Featured Boat Capacity Highlights (Direct from reference image) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              
              {/* Big Boat Card */}
              <div className="relative p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-amber-950/40 border-2 border-amber-500/50 shadow-gold-glow text-left hover:border-amber-400 transition group backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider flex items-center gap-1">
                    <Ship className="w-3.5 h-3.5" /> Big Boat
                  </span>
                  <span className="text-[10px] sm:text-xs bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Group Choice
                  </span>
                </div>
                <div className="mt-2 text-2xl sm:text-3xl font-black text-white">
                  50–60 <span className="text-base sm:text-lg font-bold text-amber-300">Persons</span>
                </div>
                <p className="mt-1 text-xs text-slate-300 leading-normal">
                  Double-deck open view boat. Ideal for large tours, family celebrations, weddings & Ganga Aarti VIP viewing.
                </p>
              </div>

              {/* Small Boat Card */}
              <div className="relative p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-sky-950/40 border-2 border-sky-400/40 shadow-lg text-left hover:border-sky-300 transition group backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-extrabold text-sky-300 tracking-wider flex items-center gap-1">
                    <Anchor className="w-3.5 h-3.5" /> Small Boat
                  </span>
                  <span className="text-[10px] sm:text-xs bg-sky-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Family Choice
                  </span>
                </div>
                <div className="mt-2 text-2xl sm:text-3xl font-black text-white">
                  20–25 <span className="text-base sm:text-lg font-bold text-sky-200">Persons</span>
                </div>
                <p className="mt-1 text-xs text-slate-300 leading-normal">
                  Intimate cushioned boat. Perfect for families, small pilgrim groups, bird feeding & sunrise meditation.
                </p>
              </div>

            </div>

            {/* Direct Contact Bar (Direct from reference image with luxury finish) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/70 to-slate-900 text-white shadow-2xl text-left border border-amber-500/40 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-[11px] sm:text-xs text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" /> Direct Booking Hotline & WhatsApp
                  </div>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`} 
                    className="text-2xl sm:text-4xl font-black text-white hover:text-amber-300 transition tracking-wide block mt-1"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex-1 sm:flex-none px-4 sm:px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center transition shadow-gold-glow"
                  >
                    <Phone className="w-4 h-4 mr-1.5 shrink-0" /> Call Now
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20book%20a%20boat%20in%20Varanasi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 sm:px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm flex items-center justify-center transition shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-1.5 shrink-0" /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] sm:text-xs text-slate-300 flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong> {BUSINESS_INFO.address}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-gold-glow hover:shadow-2xl transition transform hover:-translate-y-0.5 flex items-center justify-center text-sm sm:text-base tracking-wide"
              >
                <Calendar className="w-5 h-5 mr-2 shrink-0" />
                <span>Book Your Boat Today!</span>
              </button>
              <a
                href="#fleet"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-white bg-slate-900/80 hover:bg-slate-800 border border-amber-500/40 transition flex items-center justify-center text-sm sm:text-base"
              >
                <Anchor className="w-4 h-4 mr-2 text-amber-400 shrink-0" />
                <span>Explore Fleet (50-60 & 20-25)</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-slate-300 font-medium">
              <span className="flex items-center text-emerald-400"><Shield className="w-4 h-4 mr-1 text-emerald-400 shrink-0" /> 100% Life Jackets Safety</span>
              <span className="hidden xs:inline text-slate-600">•</span>
              <span className="flex items-center text-amber-300"><Star className="w-4 h-4 mr-1 text-amber-400 fill-amber-400 shrink-0" /> 4.9/5 Rating (385+ Reviews)</span>
              <span className="hidden xs:inline text-slate-600">•</span>
              <span className="flex items-center text-slate-300"><Compass className="w-4 h-4 mr-1 text-amber-400 shrink-0" /> 84 Ghats Navigated</span>
            </div>
          </div>

          {/* Right Column: Visual Reference Showcase Card (Replicating User's Flyer in Luxury Gold Theme) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer Golden Halo Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000"></div>

              {/* Card Container styled faithful to user's uploaded banner */}
              <div className="relative rounded-3xl bg-slate-950 shadow-2xl overflow-hidden border-2 border-amber-500/50">
                
                {/* Reference Hero Banner Image */}
                <div className="relative aspect-[4/3] max-h-[360px] overflow-hidden bg-slate-900 group">
                  <img
                    src={BUSINESS_INFO.bannerImage}
                    alt="Ramji Boat Services Varanasi Cruise on Ganga River with Ghats"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
                  
                  {/* Floating badges on image */}
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-amber-300 shadow-md flex items-center border border-amber-500/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                    Live Booking Active
                  </div>
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-300 font-bold">Holy River Ganga • Kashi</p>
                    <h3 className="text-lg sm:text-xl font-bold font-serif leading-snug">Grand Cruise & Traditional Boats</h3>
                  </div>
                </div>

                {/* Card Content replicating the flyer style */}
                <div className="p-5 sm:p-6 space-y-4 bg-gradient-to-b from-slate-950 to-slate-900">
                  
                  <div className="text-center pb-2 border-b border-amber-500/20">
                    <div className="inline-flex items-center gap-1.5 text-gold-gradient font-black text-sm uppercase tracking-widest font-brand">
                      <span>🚤</span> RAMJI BOAT SERVICES
                    </div>
                    <p className="text-base sm:text-lg font-bold text-white font-serif mt-0.5">
                      Enjoy a Beautiful Boat Ride in Varanasi!
                    </p>
                  </div>

                  {/* Capacities */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <span>⛵ Boat Capacity</span>
                      <span className="text-emerald-400">Verified Safety</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-amber-950/40 border border-amber-500/40">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></span>
                        <span className="font-extrabold text-white text-sm">Big Boat</span>
                      </div>
                      <span className="font-black text-amber-300 text-sm sm:text-base">50–60 Persons</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-sky-950/40 border border-sky-400/30">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shrink-0"></span>
                        <span className="font-extrabold text-white text-sm">Small Boat</span>
                      </div>
                      <span className="font-black text-sky-200 text-sm sm:text-base">20–25 Persons</span>
                    </div>
                  </div>

                  {/* Direct Contact & Address */}
                  <div className="pt-2 text-center space-y-1.5">
                    <p className="text-xs font-bold uppercase text-slate-400 flex items-center justify-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" /> Contact Us
                    </p>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="block text-2xl sm:text-3xl font-black text-emerald-400 hover:text-emerald-300 tracking-wider"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <div className="text-xs text-slate-300 flex items-center justify-center gap-1 pt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span className="truncate">Madarwan, Samneghat, Lanka, BHU, Varanasi</span>
                    </div>
                  </div>

                  {/* Card Button */}
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-xl transition"
                  >
                    Book Your Boat Today!
                  </button>
                  <p className="text-[11px] text-center text-slate-400 uppercase tracking-widest font-semibold">
                    RAMJI BOAT SERVICES • VARANASI
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Highlights Banner Bar */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {STATS_HIGHLIGHTS.map((stat, i) => (
            <div 
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-amber-500/20 backdrop-blur-md text-center hover:border-amber-400/50 transition shadow-lg"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gold-gradient font-serif">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
