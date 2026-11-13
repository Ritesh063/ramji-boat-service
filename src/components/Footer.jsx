import React from 'react';
import { Ship, Phone, MessageCircle, MapPin, Heart, Shield, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/boatData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 sm:pt-16 pb-20 sm:pb-12 border-t border-slate-800 relative w-full">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                <Ship className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-lg xs:text-xl sm:text-2xl font-black text-white font-brand">
                RAMJI <span className="text-amber-500 font-serif">BOAT SERVICES</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Enjoy a Beautiful Boat Ride in Varanasi! Authorized and trusted provider of Big Boats (50–60 persons) and Small Boats (20–25 persons) for Ganga Aarti, Subah-e-Banaras, and 84 Ghats tours.
            </p>
            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-bold text-xs sm:text-sm">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-normal">{BUSINESS_INFO.address}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-amber-400 transition">Home</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition">Our Boat Fleet (50-60 & 20-25)</a></li>
              <li><a href="#tours" className="hover:text-amber-400 transition">Tours & Ganga Aarti</a></li>
              <li><a href="#booking" className="hover:text-amber-400 transition">Instant Online Booking</a></li>
              <li><a href="#ghats" className="hover:text-amber-400 transition">Varanasi 84 Ghats Guide</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition">Why Choose Ramji Boats</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition">Customer Reviews</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition">FAQs</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition">Contact & Location</a></li>
            </ul>
          </div>

          {/* Popular Ghats & Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-amber-400">
              Ganges Tour Specialties
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
              {[
                "Dashashwamedh Ganga Aarti",
                "Subah-e-Banaras Sunrise",
                "Big Boat (50-60 Pax)",
                "Small Boat (20-25 Pax)",
                "Assi Ghat Boarding",
                "Samneghat Lanka BHU",
                "Dev Deepawali VIP Boat",
                "Manikarnika Ghat View",
                "Family Private Charter",
                "Asthi Visarjan Boat"
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Direct Booking Badge */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-amber-500/20 mt-3 sm:mt-4">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Direct Owner Reservation
              </span>
              <p className="text-[11px] sm:text-xs text-slate-400 mb-2 leading-relaxed">
                Save money by booking directly without intermediaries or commission agents.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                <span>Call {BUSINESS_INFO.phone}</span> →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong>{BUSINESS_INFO.name}</strong> • Varanasi. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="text-slate-400 text-[11px] sm:text-xs">
              Hosted with <span className="text-amber-500">★</span> on Google Firebase / Cloud
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 transition"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
