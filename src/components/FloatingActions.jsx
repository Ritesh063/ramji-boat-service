import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/boatData';

export default function FloatingActions({ onOpenBooking }) {
  return (
    <>
      {/* Desktop Floating Action Buttons (Screen >= 640px) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col space-y-3">
        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20book%20a%20boat%20in%20Varanasi`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-lg">
            Chat on WhatsApp
          </span>
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 animate-ping"></span>
        </a>

        {/* Call Floating Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label={`Call ${BUSINESS_INFO.phone}`}
        >
          <Phone className="w-7 h-7" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-lg">
            Call {BUSINESS_INFO.phone}
          </span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Bar (Screen < 640px) - Safe area padded */}
      <div 
        className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 pb-safe"
        style={{ paddingBottom: 'max(0.6rem, env(safe-area-inset-bottom))' }}
      >
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 min-h-[44px] py-2.5 px-2 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center shadow-sm active:scale-95 transition"
        >
          <Phone className="w-3.5 h-3.5 mr-1 text-amber-400 shrink-0" />
          <span>Call</span>
        </a>
        
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20book%20a%20boat%20in%20Varanasi`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center shadow-sm active:scale-95 transition"
        >
          <MessageCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
          <span>WhatsApp</span>
        </a>
        
        <button
          onClick={onOpenBooking}
          className="flex-1 min-h-[44px] py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition flex items-center justify-center"
        >
          <Calendar className="w-3.5 h-3.5 mr-1 shrink-0" />
          <span>Book</span>
        </button>
      </div>
    </>
  );
}
