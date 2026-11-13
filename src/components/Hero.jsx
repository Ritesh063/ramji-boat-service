import React from 'react';
import { Phone, MessageCircle, Calendar, Users, Shield, Star, MapPin, Sparkles, Anchor, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/boatData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Ganges Ripple Patterns */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-amber-100/40 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand details, Capacity & Direct Booking CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Spiritual Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>श्री काशी विश्वनाथ की पावन नगरी • Ganga Boat Services</span>
            </div>

            {/* Main Header / Brand */}
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="text-2xl">🚤</span>
                <span className="text-sm font-bold tracking-widest text-amber-700 uppercase font-serif">
                  Authorized Boat Services in Kashi
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-serif-kashi leading-tight">
                RAMJI <span className="text-amber-600">BOAT SERVICES</span>
              </h1>
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-800 font-serif">
                Enjoy a Beautiful Boat Ride in Varanasi!
              </p>
              <p className="mt-1 text-base sm:text-lg text-amber-800 font-medium">
                {BUSINESS_INFO.hindiTagline}
              </p>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience the divine magic of Varanasi with our licensed, safe, and comfortable fleet. 
              Specializing in <strong>Subah-e-Banaras Sunrise tours</strong>, world-famous <strong>Dashashwamedh Ganga Aarti VIP viewing</strong>, 
              and complete 84 Ghats heritage journeys.
            </p>

            {/* Featured Boat Capacity Highlights (Direct from reference image) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/60 border-2 border-amber-300 shadow-sm text-left hover:border-amber-400 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-extrabold text-amber-800 tracking-wider">⛵ Big Boat</span>
                  <span className="text-xs bg-amber-200 text-amber-900 font-bold px-2 py-0.5 rounded-full">Group Favorite</span>
                </div>
                <div className="mt-2 text-2xl font-black text-slate-900">
                  50–60 Persons
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Ideal for large tours, family celebrations, weddings & corporate Ganga Aarti rides.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-sky-50 to-amber-50/50 border-2 border-sky-200 shadow-sm text-left hover:border-sky-300 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-extrabold text-sky-800 tracking-wider">🚤 Small Boat</span>
                  <span className="text-xs bg-sky-100 text-sky-900 font-bold px-2 py-0.5 rounded-full">Intimate & Family</span>
                </div>
                <div className="mt-2 text-2xl font-black text-slate-900">
                  20–25 Persons
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Cozy setup for families, small pilgrim groups & early morning sunrise meditation.
                </p>
              </div>
            </div>

            {/* Direct Contact Bar (Direct from reference image) */}
            <div className="p-4 rounded-xl bg-slate-900 text-white shadow-xl text-left border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> Direct Call & WhatsApp Booking
                  </div>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`} 
                    className="text-2xl sm:text-3xl font-black text-white hover:text-amber-400 transition tracking-wide block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center transition shadow-md"
                  >
                    <Phone className="w-4 h-4 mr-1.5" /> Call Now
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20book%20a%20boat%20in%20Varanasi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center transition shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 mr-1.5" /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="mt-2.5 pt-2.5 border-t border-slate-800 text-xs text-slate-300 flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong> {BUSINESS_INFO.address}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 shadow-spiritual hover:shadow-xl transition transform hover:-translate-y-0.5 flex items-center justify-center text-base"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Boat Today!
              </button>
              <a
                href="#fleet"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition flex items-center justify-center text-base"
              >
                <Anchor className="w-4 h-4 mr-2 text-amber-600" />
                Explore Fleet (50-60 & 20-25)
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-600 font-medium">
              <span className="flex items-center text-emerald-700"><Shield className="w-4 h-4 mr-1 text-emerald-600" /> 100% Life Jackets Certified</span>
              <span>•</span>
              <span className="flex items-center text-amber-800"><Star className="w-4 h-4 mr-1 text-amber-500 fill-amber-500" /> 4.9/5 Rating (385+ Reviews)</span>
              <span>•</span>
              <span className="flex items-center text-slate-700"><Anchor className="w-4 h-4 mr-1 text-amber-600" /> Experienced Kashi Naviks</span>
            </div>
          </div>

          {/* Right Column: Visual Reference Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glowing backdrops */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000"></div>

              {/* Card Container styled faithful to user's uploaded banner */}
              <div className="relative rounded-2xl bg-white shadow-2xl overflow-hidden border border-amber-200">
                
                {/* Reference Hero Banner Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 group">
                  <img
                    src={BUSINESS_INFO.bannerImage}
                    alt="Ramji Boat Services Varanasi Cruise on Ganga River with Ghats"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                  
                  {/* Floating badges on image */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-md flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                    Live Booking Available
                  </div>
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold">Holy River Ganga • Kashi</p>
                    <h3 className="text-lg font-bold font-serif">Grand Cruise & Traditional Boats</h3>
                  </div>
                </div>

                {/* Card Content replicating the flyer style */}
                <div className="p-5 space-y-4">
                  <div className="text-center pb-2 border-b border-slate-100">
                    <div className="inline-flex items-center gap-1.5 text-amber-700 font-extrabold text-sm uppercase tracking-wider font-brand">
                      <span>🚤</span> RAMJI BOAT SERVICES
                    </div>
                    <p className="text-base font-bold text-slate-900 font-serif">
                      Enjoy a Beautiful Boat Ride in Varanasi!
                    </p>
                  </div>

                  {/* Capacities */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                      <span>⛵ Boat Capacity</span>
                      <span>Verified Safety</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/70 border border-amber-200">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <span className="font-extrabold text-slate-800 text-sm">Big Boat</span>
                      </div>
                      <span className="font-black text-amber-800 text-sm">50–60 Persons</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-sky-50/70 border border-sky-200">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                        <span className="font-extrabold text-slate-800 text-sm">Small Boat</span>
                      </div>
                      <span className="font-black text-sky-900 text-sm">20–25 Persons</span>
                    </div>
                  </div>

                  {/* Direct Contact & Address */}
                  <div className="pt-2 text-center space-y-2">
                    <p className="text-xs font-bold uppercase text-slate-500 flex items-center justify-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" /> Contact Us
                    </p>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="block text-2xl font-black text-emerald-700 hover:text-emerald-800 tracking-wider"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <div className="text-xs text-slate-600 flex items-center justify-center gap-1 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>Madarwan, Samneghat, Lanka, BHU, Varanasi</span>
                    </div>
                  </div>

                  {/* Card Button */}
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition"
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
      </div>
    </section>
  );
}
